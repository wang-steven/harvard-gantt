gantt.directive('ganttTask', ['$window', '$document', '$timeout', 'smartEvent', 'debounce', 'dateFunctions', 'mouseOffset', 'mouseButton', 'binarySearch', '_', 'taskWorker', 'coloured', function ($window, $document, $timeout, smartEvent, debounce, df, mouseOffset, mouseButton, bs, _, worker, coloured) {
    var taskTemplateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            taskTemplateLocation = $scope.gantt.ajaxUrl.serverLocation + $scope.gantt.ajaxUrl.jsLocationPrefix +'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return taskTemplateLocation + "default.task.tmpl.html";
            } else {
                return taskTemplateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        controller: ['$scope', '$element', function ($scope, $element) {
            var resizeAreaWidthBig = 5;
            var resizeAreaWidthSmall = 3;
            var scrollSpeed = 15;
            var scrollTriggerDistance = 5;

            var windowElement = angular.element($window);
            var ganttBodyElement = $element.parent().parent();
            var ganttScrollElement = ganttBodyElement.parent().parent();
            var taskHasBeenChanged = false;
            var taskRowHasBeenChanged = false;
            var mouseOffsetInEm;
            var moveStartX;
            var scrollInterval;
            var rejectTaskMoving = false;

            $scope.css = function(backgroundColor) {
                return {
                    color: coloured.isDarkColoured(backgroundColor.replace('#', '')) ? '#ffffff' : '#000000'
                };
            };

            $element.bind('mousedown', function (e) {
                $scope.gantt.contextMenu = undefined;
                if ($scope.task.isFinished === true || $scope.task.inProcessing === true || $scope.gantt.disable === true) {
                    e.stopPropagation();
                    e.preventDefault();
                } else {
                    $scope.$apply(function() {
                        var mode = getMoveMode(e);
                        if (mode !== "" && mouseButton.getButton(e) === 1 && $scope.task.width > 0) {
                            var offsetX = mouseOffset.getOffsetForElement(ganttBodyElement[0], e).x;
                            enableMoveMode(mode, offsetX);

                            e.stopPropagation();
                            e.preventDefault();
                        }
                    });
                }
            });

            $element.bind('click', function (e) {
                $scope.$apply(function() {
                    $scope.gantt.contextMenu = undefined;
                    // Only raise click event if there was no task update event
                    if (!taskHasBeenChanged) {
                        toggleTaskHighlight();
                        $scope.raiseTaskClickedEvent(e, $scope.task);
                    }

                    e.stopPropagation();
                    e.preventDefault();
                });
            });

            $element.bind('dblclick', function (e) {
                $scope.$apply(function() {
                    // Only raise dbl click event if there was no task update event
                    if (!taskHasBeenChanged) {
                        $scope.raiseTaskDblClickedEvent(e, $scope.task);
                    }
                    e.stopPropagation();
                    e.preventDefault();
                });
            });

            $element.bind('contextmenu', function (e) {
                $scope.$apply(function() {
                    // Only raise click event if there was no task update event
                    $scope.gantt.jobFlowChart = undefined;
                    var items = [];
                    if ($scope.gantt.disable === true) {
                        items = [
                            { key: 'flowchart', name: 'Show Job Flow' },
                            { key: 'info', name: 'Show Information' },
                            { key: 'divider', name: '' }
                        ];
                        if ($scope.viewScale !== 'minute') {
                            items.push({ key: 'zoomin', name: 'Zoom In' });
                        }
                        if ($scope.viewScale !== 'month') {
                            items.push({ key: 'zoomout', name: 'Zoom Out' });
                        }
                    } else {
                        items = [
                            { key: 'pin', name: ($scope.task.isPin === true ? 'Unpin' : 'Pin') },
                            { key: 'finished', name: ($scope.task.isFinished === true ? 'Finished' : 'Finish') },
                            { key: 'add', name: 'Create Task' },
                            { key: 'edit', name: 'Edit Task' },
                            { key: 'flowchart', name: 'Show Job Flow' },
                            { key: 'info', name: 'Show Information' },
                            { key: 'divider', name: '' },
                        ];
                        if ($scope.viewScale !== 'minute') {
                            items.push({ key: 'zoomin', name: 'Zoom In' });
                        }
                        if ($scope.viewScale !== 'month') {
                            items.push({ key: 'zoomout', name: 'Zoom Out' });
                        }
                        items.push({ key: 'divider', name: '' });
                        items.push({ key: 'delete', name: 'Delete' });
                    }
                    $scope.gantt.contextMenu = {
                        event: e,
                        type: 'task',
                        target: $scope.task,
                        element: $element,
                        items: items
                    };
                    $scope.raiseTaskContextMenuEvent(e, $scope.task);
                    e.stopPropagation();
                    e.preventDefault();
                });
            });

            $element.bind("mousemove", debounce(function (e) {
                var mode = getMoveMode(e);
                if (mode !== "" && mode !== "M") {
                    $element.css("cursor", getCursor(mode));
                } else {
                    $element.css("cursor", '');
                }

                $scope.task.mouseX = e.clientX;
            }, 5));

            $element.bind('mouseenter', function (e) {
                $scope.$apply(function() {
                    $scope.task.mouseX = e.clientX;
                    $scope.task.isMouseOver = true;
                });
            });

            $element.bind('mouseleave', function () {
                $scope.$apply(function() {
                    $scope.task.isMouseOver = false;
                });
            });

            var handleMove = function(mode, mousePos) {
                if ($scope.task.isMoving === false) {
                    return;
                }

                moveTask(mode, mousePos);
                scrollScreen(mode, mousePos);
            };

            var moveTask = function(mode, mousePos) {
                $scope.task.mouseOffsetX = mousePos.x;
                var xInEm = mousePos.x / $scope.getPxToEmFactor();
                if (mode === "M") {
                    if ($scope.allowTaskRowSwitching) {
                        var targetRow = getRowByY(mousePos.y);
                        if (targetRow !== undefined &&
                            targetRow.showup === true &&
                            targetRow.id !== $scope.task.row.id &&
                            $scope.task.row.data.factoryOperation.id === targetRow.data.factoryOperation.id) {
                            targetRow.moveTaskToRow($scope.task);
                        }
                    }

                    if ($scope.allowTaskMoving) {
                        $scope.task.moveTo(xInEm - mouseOffsetInEm);
                    }
                } else if (mode === "E") {
                    $scope.task.setTo(xInEm);
                } else {
                    $scope.task.setFrom(xInEm);
                }

                taskHasBeenChanged = true;
            };

            var scrollScreen = function(mode, mousePos) {
                var leftScreenBorder = ganttScrollElement[0].scrollLeft;
                var keepOnScrolling = false;

                if (mousePos.x < moveStartX) {
                    // Scroll to the left
                    if (mousePos.x <= leftScreenBorder + scrollTriggerDistance) {
                        mousePos.x -= scrollSpeed;
                        keepOnScrolling = true;
                        $scope.scrollLeft(scrollSpeed);
                    }
                } else {
                    // Scroll to the right
                    var screenWidth = ganttScrollElement[0].offsetWidth;
                    var rightScreenBorder = leftScreenBorder + screenWidth;

                    if (mousePos.x >= rightScreenBorder - scrollTriggerDistance) {
                        mousePos.x += scrollSpeed;
                        keepOnScrolling = true;
                        $scope.scrollRight(scrollSpeed);
                    }
                }

                if (keepOnScrolling) {
                    scrollInterval = $timeout(function() { handleMove(mode, mousePos); }, 100, true);
                }
            };

            var clearScrollInterval = function() {
                if (scrollInterval !== undefined) {
                    $timeout.cancel(scrollInterval);
                    scrollInterval = undefined;
                }
            };

            var getRowByY = function(y) {
                //var rowHeight = ganttBodyElement[0].offsetHeight / $scope.task.row.gantt.rows.length;
                var rowHeight = ganttBodyElement[0].offsetHeight / $scope.gantt.rowsCounter;
                var pos = Math.floor(y / rowHeight);
                if ($scope.gantt.rows.length === $scope.gantt.rowsCounter) {
                    if ($scope.gantt.columnPage === 0) {
                        return $scope.gantt.rows[pos];
                    } else {
                        return $scope.gantt.rowsMap[$scope.gantt.columnPagination[($scope.gantt.columnPage - 1)][pos]];
                    }
                } else {
                    if ($scope.gantt.columnPage === 0) {
                        return $scope.gantt.rows[$scope.gantt.visibleRows[pos] * 1];
                    } else {
                        return $scope.gantt.rowsMap[$scope.gantt.columnPagination[($scope.gantt.columnPage - 1)][pos]];
                    }
                }
            };

            var getMoveMode = function (e) {
                var x = mouseOffset.getOffset(e).x;

                var distance = 0;

                // Define resize&move area. Make sure the move area does not get too small.
                if ($scope.allowTaskResizing) {
                    distance = $element[0].offsetWidth < 10 ? resizeAreaWidthSmall: resizeAreaWidthBig;
                }

                if ($scope.allowTaskResizing && x > $element[0].offsetWidth - distance) {
                    return "E";
                } else if ($scope.allowTaskResizing && x < distance) {
                    return "W";
                } else if (($scope.allowTaskMoving || $scope.allowTaskRowSwitching) && x >= distance && x <= $element[0].offsetWidth - distance) {
                    return "M";
                } else {
                    return "";
                }
            };

            var getCursor = function(mode) {
                switch(mode) {
                    case "E": return 'e-resize';
                    case "W": return 'w-resize';
                    case "M": return 'move';
                }
            };

            var enableMoveMode = function (mode, x) {
                taskHasBeenChanged = false;
                $scope.task.isMoving = true;

                moveStartX = x;
                var xInEm = moveStartX / $scope.getPxToEmFactor();
                mouseOffsetInEm = xInEm - $scope.task.left;

                var taskMoveHandler = debounce(function(e) {
                    var mousePos = mouseOffset.getOffsetForElement(ganttBodyElement[0], e);
                    clearScrollInterval();
                    handleMove(mode, mousePos);
                }, 5);
                smartEvent($scope, windowElement, 'mousemove', taskMoveHandler).bind();

                smartEvent($scope, windowElement, 'mouseup', function() {
                    $scope.$apply(function() {
                        windowElement.unbind('mousemove', taskMoveHandler);
                        disableMoveMode();
                    });
                }).bindOnce();

                angular.element($document[0].body).css({
                    '-moz-user-select': '-moz-none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    'user-select': 'none',
                    'cursor': getCursor(mode)
                });
            };

            var disableMoveMode = function () {
                $scope.task.isMoving = false;
                clearScrollInterval();

                $element.css("cursor", '');
                angular.element($document[0].body).css({
                    '-moz-user-select': '',
                    '-webkit-user-select': '',
                    '-ms-user-select': '',
                    'user-select': '',
                    'cursor': ''
                });

                if (taskHasBeenChanged === true) {
                    $scope.task.row.sortTasks(); // Sort tasks so they have the right z-order
                    $scope.gantt.showOnProcessing = true; // Lightbox
                    checkTaskOverlap();
                    $scope.raiseTaskUpdatedEvent($scope.task, true);
                }
            };

            var toggleTaskHighlight = function() {
                var i, j, k, l, m, n, jMap = $scope.gantt.jobsMap;
                for (i = 0, k = _.keys(jMap), l = k.length; i < l; ++i) {
                    for (j = 0, m = _.keys(jMap[k[i]].tasks), n = m.length; j < n; ++j) {
                        if (parseInt(k[i], 10) === parseInt($scope.task.job.id, 10)) {
                            jMap[k[i]].tasks[m[j]].priority = 999;
                            jMap[k[i]].tasks[m[j]].isHighlight = !jMap[k[i]].tasks[m[j]].isHighlight;
                        } else {
                            jMap[k[i]].tasks[m[j]].priority = 100;
                            jMap[k[i]].tasks[m[j]].isHighlight = false;
                        }
                    }
                }
            };

            var checkTaskOverlap = function() {
                var i, j, k, l, m, n, o,
                    task = $scope.task,
                    job = $scope.gantt.jobsMap[task.job.id],
                    process = $scope.gantt.processesMap[task.process.id];

                for (i in $scope.gantt.jobsMap) {
                    for (j in $scope.gantt.jobsMap[i].tasks) {
                        $scope.gantt.jobsMap[i].tasks[j].isHighlight = false;
                    }
                }

                var shift = {
                    process: task.process.id,
                    left: task.from - df.clone(task.data.expectedStartTime),
                    right: task.to - df.clone(task.data.expectedFinishTime),
                    today: moment(Date.now()).toDate()
                };

                if (task.isParallel === true) {
                    task.parallelFrom = df.addMilliseconds(task.from, df.clone(task.data.expectedSetupFinishTime) - df.clone(task.data.expectedStartTime), true);
                    task.parallelFrom = df.addMinutes(task.parallelFrom, task.data.s2sMins);
                } else {
                    task.parallelFrom = task.to;
                }

                if (task.from < shift.today ||
                    df.clone(process.tasks[0].from.getTime() + shift.left) < shift.today) {
                    //$scope.task.rejectMoving();
                    //reject = true;
                }

                worker.run($scope.task, $scope.gantt, function(reject, type, data) {
                    if (reject === false) {

                    }
                    angular.element('#hiddenProcessing').trigger('click');
                    job.tasks.sort(function(t1, t2) { return t1.left - t2.left; });
                });
            };

            // In case the task has been moved to another row a new controller is is created by angular.
            // Enable the move mode again if this was the case.
            if ($scope.task.isMoving) {
                enableMoveMode("M", $scope.task.mouseOffsetX);
            }
        }]
    };
}]);
