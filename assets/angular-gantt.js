/*
 Project: Gantt chart for Angular.js
 Author: Marco Schweighauser (2013)
 License: MIT License. See README.md
 */
var gantt = angular.module('gantt', ['underscore', 'ui.tree']);

gantt.directive('gantt', ['Gantt', 'dateFunctions', 'mouseOffset', 'debounce', 'keepScrollPos', function (Gantt, df, mouseOffset, debounce, keepScrollPos) {
    var templateLocation = '';
    return {
        restrict: "EA",
        replace: true,
        link: function($scope, $element, $attrs) {
            templateLocation = $attrs.serverLocation + $attrs.jsLocationPrefix + '/template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "gantt.tmpl.html";
            } else {
                return tAttrs.templateUrl;
            }
        },
        scope: {
            sortMode: "=?", // Possible modes: 'name', 'date', 'custom'
            viewScale: "=?", // Possible scales: 'hour', 'day', 'week', 'month'
            columnWidth: "=?", // Defines the size of a column, 1 being 1em per unit (hour or day, .. depending on scale),
            columnSubScale: "=?", // Defines how precise tasks should be positioned inside columns. 4 = in quarter steps, 2 = in half steps, ... Use values higher than 24 or 60 (hour view) to display them very accurate. Default (4)
            allowTaskMoving: "=?", // Set to true if tasks should be moveable by the user.
            allowTaskResizing: "=?", // Set to true if tasks should be resizable by the user.
            allowTaskRowSwitching: "=?", // If false then tasks can be moved inside their current row only. The user can not move it to another row.
            allowRowSorting: "=?", // Set to true if the user should be able to re-order rows.
            fromDate: "=?", // If not specified will use the earliest task date (note: as of now this can only expand not shrink)
            toDate: "=?", // If not specified will use the latest task date (note: as of now this can only expand not shrink)
            firstDayOfWeek: "=?", // 0=Sunday, 1=Monday, ... Default (1)
            weekendDays: "=?", // Array of days: 0=Sunday, 1=Monday, ... Default ([0,6])
            showWeekends: "=?", // True if the weekends shall be displayed Default (true)
            workHours: "=?", // Array of valid work hours. Default ([8,9,..,16] equals a 8am - 17pm workday)
            showNonWorkHours: "=?", // True if the non work hours shall be displayed Default (true)
            autoExpand: "=?", // Set this true if the date range shall expand if the user scroll to the left or right end.
            maxHeight: "=?", // Define the maximum height of the Gantt in PX. > 0 to activate max height behaviour.
            labelsWidth: "=?", // Define the width of the labels section. Changes when the user resizes the labels width
            showTooltips: "=?", // True when tooltips shall be enabled. Default (true)
            data: "=?",
            filterData: "=?",
            disable: "=?",
            // Move to demo.js
            serverConfig: "&",
            loadData: "&",
            removeData: "&",
            clearData: "&",
            centerDate: "&",
            onLabelsResized: "&",
            onLabelClicked: "&",
            onLabelDblClicked: "&",
            onLabelContextClicked: "&",
            onLabelHeaderClicked: "&",
            onLabelHeaderDblClicked: "&",
            onLabelHeaderContextClicked: "&",
            onGanttReady: "&",
            onRowAdded: "&",
            onRowClicked: "&",
            onRowDblClicked: "&",
            onRowContextClicked: "&",
            onRowUpdated: "&",
            onScroll: "&",
            onTaskClicked: "&",
            onTaskDblClicked: "&",
            onTaskContextClicked: "&",
            onTaskUpdated: "&",
            onTaskMoveBegin: "&",
            onTaskMoveEnd: "&",
            onTaskResizeBegin: "&",
            onTaskResizeEnd: "&"
        },
        controller: ['$scope', '$http', '$element', '$timeout', function ($scope, $http, $element, $timeout) {
            // Initialize defaults
            if ($scope.sortMode === undefined) $scope.sortMode = "name";
            if ($scope.viewScale === undefined) $scope.viewScale = "day";
            if ($scope.columnWidth === undefined) $scope.columnWidth = 24;
            if ($scope.columnSubScale === undefined) $scope.columnSubScale = 24;
            if ($scope.allowTaskMoving === undefined) $scope.allowTaskMoving = true;
            if ($scope.allowTaskResizing === undefined) $scope.allowTaskResizing = true;
            if ($scope.allowTaskRowSwitching === undefined) $scope.allowTaskRowSwitching = true;
            if ($scope.allowRowSorting === undefined) $scope.allowRowSorting = true;
            if ($scope.firstDayOfWeek === undefined) $scope.firstDayOfWeek = 1;
            if ($scope.weekendDays === undefined) $scope.weekendDays = [0,6];
            if ($scope.showWeekends === undefined) $scope.showWeekends = true;
            if ($scope.workHours === undefined) $scope.workHours = [8,9,10,11,12,13,14,15,16];
            if ($scope.showNonWorkHours === undefined) $scope.showNonWorkHours = true;
            if ($scope.maxHeight === undefined) $scope.maxHeight = 0;
            if ($scope.autoExpand === undefined) $scope.autoExpand = false;
            if ($scope.labelsWidth === undefined) $scope.labelsWidth = 0;
            if ($scope.showTooltips === undefined) $scope.showTooltips = true;
            if ($scope.disable === undefined) $scope.disable = false;

            // if ($scope.fromDate !== undefined && $scope.toDate !== undefined) {
            //     $scope.gantt.expandDefaultDateRange($scope.fromDate, $scope.toDate);
            //     $scope.gantt.defaultDateRange = {
            //         from: df.clone($scope.fromDate),
            //         to: df.clone($scope.toDate)
            //     };
            // }

            if ($scope.serverConfig === undefined) {
                return false;
            }
            $scope.ajaxUrl = $scope.serverConfig();

            // Gantt logic
            $scope.gantt = new Gantt($scope.viewScale, $scope.columnWidth, $scope.columnSubScale, $scope.firstDayOfWeek, $scope.weekendDays, $scope.showWeekends, $scope.workHours, $scope.showNonWorkHours);
            $scope.ganttHeader = $element.children()[1];
            $scope.ganttScroll = angular.element($element.children()[2]);
            $scope.gantt.ajaxUrl = $scope.ajaxUrl;
            $scope.gantt.disable = $scope.disable;

            $scope.$watch("sortMode", function (newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    $scope.sortRows();
                }
            });

            $scope.$watch("data", function (newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    $scope.removeAllData();
                    $scope.setData(newValue);
                }
                // Check the processes previous and next.
                for (var i in $scope.gantt.processesMap) {
                    if ($scope.gantt.processesMap[i].previous.length > 0) {
                        for (var j = 0, l = $scope.gantt.processesMap[i].previous.length; j < l; j++) {
                            var process_id = $scope.gantt.processesMap[i].previous[j];
                            if (process_id in $scope.gantt.processesMap) {
                                $scope.gantt.processesMap[process_id].addNext([$scope.gantt.processesMap[i].id]);
                            }
                        }
                    }
                }
            });

            // Add a watcher if a view related setting changed from outside of the Gantt. Update the gantt accordingly if so.
            // All those changes need a recalculation of the header columns
            $scope.$watch('viewScale+columnWidth+columnSubScale+fromDate+toDate+firstDayOfWeek+weekendDays+showWeekends+workHours+showNonWorkHours', function(newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    $scope.gantt.setViewScale($scope.viewScale, $scope.columnWidth, $scope.columnSubScale, $scope.firstDayOfWeek, $scope.weekendDays, $scope.showWeekends, $scope.workHours, $scope.showNonWorkHours);
                    if (!$scope.gantt.reGenerateColumns()) {
                        // Re-generate failed, e.g. because there was no previous date-range. Try to apply the default range.
                        $scope.gantt.expandDefaultDateRange($scope.fromDate, $scope.toDate);
                    }

                    $timeout(function() {
                        $scope.$apply(function() {
                            var taskRange = $scope.gantt.getTasksDateRange();
                            var columnOffset = $scope.gantt.getPositionByDate(taskRange.to) * $scope.getPxToEmFactor();
                            if (columnOffset < $scope.ganttScroll[0].offsetWidth) {
                                var addColumns = Math.ceil(($scope.ganttScroll[0].offsetWidth - columnOffset) / ($scope.gantt.getPositionByDate(taskRange.to) * $scope.getPxToEmFactor()));
                                $scope.autoExpandColumns($scope.ganttScroll[0], taskRange.to, 'right', addColumns);
                            }
                        });
                    }, 10);
                }
            });

            $scope.$watch('fromDate+toDate', function(newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    $scope.gantt.defaultDateRange = {
                        from: df.clone($scope.fromDate),
                        to: df.clone($scope.toDate)
                    };
                    $scope.gantt.expandDefaultDateRange($scope.fromDate, $scope.toDate);
                }
            });

            $scope.getPxToEmFactor = function() {
                return $scope.ganttScroll.children()[0].offsetWidth / $scope.gantt.width;
            };

            // Swaps two rows and changes the sort order to custom to display the swapped rows
            $scope.swapRows = function (a, b) {
                $scope.gantt.swapRows(a, b);

                // Raise change events
                $scope.raiseRowUpdatedEvent(a, true);
                $scope.raiseRowUpdatedEvent(b, true);

                // Switch to custom sort mode and trigger sort
                if ($scope.sortMode !== "custom") {
                    $scope.sortMode = "custom"; // Sort will be triggered by the watcher
                } else {
                    $scope.sortRows();
                }
            };

            // Sort rows by the current sort mode
            $scope.sortRows = function () {
                $scope.gantt.sortRows($scope.sortMode);
            };

            // Scroll to the specified x
            $scope.scrollTo = function(x) {
                $scope.ganttScroll[0].scrollLeft = x;
                $scope.ganttScroll.triggerHandler('scroll');
            };

            // Scroll to the left side by specified x
            $scope.scrollLeft = function(x) {
                $scope.ganttScroll[0].scrollLeft -= x;
                $scope.ganttScroll.triggerHandler('scroll');
            };

            // Scroll to the right side by specified x
            $scope.scrollRight = function(x) {
                $scope.ganttScroll[0].scrollLeft += x;
                $scope.ganttScroll.triggerHandler('scroll');
            };

            // Tries to center the specified date
            $scope.scrollToDate = function(date, timezero) {
                if (timezero === undefined || timezero !== true) {
                    date = df.setTimeZero(date, true);
                }

                if (date - $scope.gantt.defaultDateRange.to < 0) {
                    $scope.gantt.defaultDateRange.to = df.addDays(date, 5, true);
                    $scope.gantt.expandDefaultDateRange($scope.gantt.getFirstColumn().date, $scope.gantt.defaultDateRange.to);
                }
                var column = $scope.gantt.getColumnByDate(date);
                if (column !== undefined) {
                    $timeout(function() {
                        var x = (column.left + column.width / 2) * $scope.getPxToEmFactor();
                        $scope.ganttScroll[0].scrollLeft = x - $scope.ganttScroll[0].offsetWidth/2;
                    }, 10);
                }
            };

            $scope.autoExpandColumns = keepScrollPos($scope, function(el, date, direction, expand) {
                if ($scope.autoExpand !== true) {
                    return false;
                }

                var from, to;
                expand = expand === undefined ? 1 : parseInt(expand, 10);

                console.log(expand, date);

                // Disable left expand
                if (direction === "left") {
                    // switch($scope.viewScale) {
                    //     case 'minutes':
                    //         from = df.addHours(date, -expand, true);
                    //     break;
                    //     case 'twevelhours':
                    //     case 'eighthours':
                    //     case 'sixhours':
                    //     case 'threehours':
                    //     case 'hour':
                    //         from = df.addDays(date, -expand, true);
                    //     break;
                    //     case 'day':
                    //         from = df.addWeeks(date, -expand, true);
                    //     break;
                    //     default:
                    //         from = df.addMonths(date, -expand, true);
                    // }
                    // $scope.gantt.expandDefaultDateRange(from, to);
                } else {
                    from = date;
                    switch($scope.viewScale) {
                        case 'minutes':
                            to = df.addHours(date, expand, true);
                        break;
                        case 'twevelhours':
                        case 'eighthours':
                        case 'sixhours':
                        case 'threehours':
                        case 'hour':
                            to = df.addDays(date, expand, true);
                        break;
                        case 'day':
                            to = df.addWeeks(date, expand, true);
                        break;
                        default:
                            to = df.addMonths(date, expand, true);
                    }
                    $scope.gantt.expandDefaultDateRange(from, to);
                }
            });

            $scope.raiseLabelsResized = function(width) {
                $scope.onLabelsResized({ event: { width: width } });
            };

            $scope.raiseLabelClickedEvent = function(evt, row) {
                $scope.onLabelClicked({ event: { evt: evt, row: row, userTriggered: true } });
            };

            $scope.raiseLabelDblClickedEvent = function(evt, row) {
                if (row.tasks.length > 0) {
                    $scope.gantt.tasksOnMachine = row;
                }
                $scope.onLabelDblClicked({ event: { evt: evt, row: row, userTriggered: true } });
            };

            $scope.raiseLabelContextMenuEvent = function(evt, row) {
                $scope.onLabelContextClicked({ event: { evt: evt, row: row, userTriggered: true } });
            };

            $scope.raiseLabelHeaderClickedEvent = function(evt) {
                $scope.onLabelHeaderClicked({ event: { evt: evt, userTriggered: true } });
            };

            $scope.raiseLabelHeaderDblClickedEvent = function(evt) {
                $scope.onLabelHeaderDblClicked({ event: { evt: evt, userTriggered: true } });
            };

            $scope.raiseLabelHeaderContextMenuEvent = function(evt) {
                $scope.onLabelHeaderContextClicked({ event: { evt: evt, userTriggered: true } });
            };

            $scope.raiseRowAddedEvent = function(row, userTriggered) {
                $scope.onRowAdded({ event: { row: row, userTriggered: userTriggered } });
            };

            $scope.raiseDOMRowClickedEvent = function(e, row) {
                var x = mouseOffset.getOffset(e).x;
                var xInEm = x / $scope.getPxToEmFactor();
                var clickedColumn = $scope.gantt.getColumnByPosition(xInEm);
                var date = $scope.gantt.getDateByPosition(xInEm);

                $scope.gantt.contextMenu = undefined;
                $scope.raiseRowClickedEvent(row, clickedColumn, date);

                e.stopPropagation();
                e.preventDefault();
            };

            $scope.raiseRowClickedEvent = function(row, column, date) {
                $scope.gantt.contextMenu = undefined;
                $scope.onRowClicked({ event: { row: row, column: column.clone(), date: date, userTriggered: true } });
            };

            $scope.raiseDOMRowDblClickedEvent = function(e, row) {
                var x = mouseOffset.getOffset(e).x;
                var xInEm = x / $scope.getPxToEmFactor();
                var clickedColumn = $scope.gantt.getColumnByPosition(xInEm);
                var date = $scope.gantt.getDateByPosition(xInEm);

                $scope.raiseRowDblClickedEvent(e, row, clickedColumn, date);
            };

            $scope.raiseRowDblClickedEvent = function(evt, row, column, date) {
                $scope.onRowDblClicked({ event: { evt: evt, row: row, column: column.clone(), date: date, userTriggered: true } });
            };

            $scope.raiseDOMRowContextMenuEvent = function(e, row) {
                var x = mouseOffset.getOffset(e).x;
                var xInEm = x / $scope.getPxToEmFactor();
                var clickedColumn = $scope.gantt.getColumnByPosition(xInEm);
                var date = $scope.gantt.getDateByPosition(xInEm);

                $scope.raiseRowContextMenuEvent(e, row, clickedColumn, date);
            };

            $scope.raiseRowContextMenuEvent = function(evt, row, column, date) {
                if ($scope.gantt.disable === false) {
                    var items = [
                        { key: 'add', name: 'Create Task' },
                    ];
                    if ($scope.viewScale !== 'minute') {
                        items.push({ key: 'zoomin', name: 'Zoom In' });
                    }
                    if ($scope.viewScale !== 'month') {
                        items.push({ key: 'zoomout', name: 'Zoom Out' });
                    }
                    $scope.gantt.contextMenu = {
                        event: evt,
                        type: 'row',
                        target: row,
                        element: undefined,
                        items: items
                    };
                }
                $scope.onRowContextClicked({ event: { evt: evt, row: row, column: column.clone(), date: date, userTriggered: true } });
                evt.stopPropagation();
                evt.preventDefault();
            };

            $scope.raiseRowUpdatedEvent = function(row, userTriggered) {
                $scope.onRowUpdated({ event: { row: row, userTriggered: userTriggered } });
            };

            $scope.raiseScrollEvent = debounce(function() {
                // Disable left auto expand and right scroll less than toDate datetime.
                if ($scope.ganttScroll[0].scrollLeft >= 0 /*&&
                    $scope.gantt.getDateRange().to <= $scope.gantt.defaultDateRange.to*/) {
                    var el = $scope.ganttScroll[0];
                    var direction;
                    var date;

                    if (el.scrollLeft === 0) {
                        direction = 'left';
                        date = $scope.gantt.getDateRange().from;
                    } else if (el.getBoundingClientRect().width + el.scrollLeft >= el.scrollWidth - 20) {
                        direction = 'right';
                        date = $scope.gantt.getDateRange().to;
                    }

                    if (date !== undefined) {
                        $scope.autoExpandColumns(el, date, direction);
                        $scope.onScroll({ event: { date: date, direction: direction, userTriggered: true }});
                    }
                }
            }, 5);

            $scope.raiseTaskUpdatedEvent = function(task, userTriggered) {
                $scope.onTaskUpdated({ event: { task: task, userTriggered: userTriggered } });
            };

            $scope.raiseTaskMoveStartEvent = function(task) {
                $scope.onTaskMoveBegin({ event: { task: task, userTriggered: true } });
            };

            $scope.raiseTaskMoveEndEvent = function(task) {
                $scope.onTaskMoveEnd({ event: { task: task, userTriggered: true } });
            };

            $scope.raiseTaskResizeStartEvent = function(task) {
                $scope.onTaskResizeBegin({ event: { task: task, userTriggered: true } });
            };

            $scope.raiseTaskResizeEndEvent = function(task) {
                $scope.onTaskResizeEnd({ event: { task: task, userTriggered: true } });
            };

            $scope.raiseTaskClickedEvent = function(evt, task) {
                $scope.onTaskClicked({ event: { evt: evt, task: task, userTriggered: true } });
            };

            $scope.raiseTaskDblClickedEvent = function(evt, task) {
                $scope.onTaskDblClicked({ event: { evt: evt, task: task, userTriggered: true } });
            };

            $scope.raiseTaskContextMenuEvent = function(evt, task) {
                $scope.onTaskContextClicked({ event: { evt: evt, task: task, userTriggered: true } });
            };

            $scope.setData = keepScrollPos($scope, function (data) {
                if (data === undefined || typeof data !== 'object' || data.length === 0) {
                    throw 'error';
                }

                $scope.gantt.addData(data,
                function(row) {
                    $scope.raiseRowAddedEvent(row, false);
                }, function(row) {
                    $scope.raiseRowUpdatedEvent(row, false);
                });

                $scope.sortRows();

                $timeout(function() {
                    $scope.$apply(function() {
                        var taskRange = $scope.gantt.getTasksDateRange();
                        var columnOffset = $scope.gantt.getPositionByDate(taskRange.to) * $scope.getPxToEmFactor();
                        if (columnOffset < $scope.ganttScroll[0].offsetWidth) {
                            var addColumns = Math.ceil(($scope.ganttScroll[0].offsetWidth - columnOffset) / ($scope.gantt.getPositionByDate(taskRange.to) * $scope.getPxToEmFactor()));
                            $scope.autoExpandColumns($scope.ganttScroll[0], taskRange.to, 'right', addColumns);
                        }

                        $scope.gantt.departmentMap = {};
                        var departmentMap = {};
                        for (var i = 0, r = $scope.gantt.rowsMap, k = _.keys(r), l = k.length; i < l; ++i) {
                            var department = r[k[i]].data.settingsMachine.dept;

                            if (department.name in departmentMap) {
                                var dept = departmentMap[department.name];
                                if (department.subDept !== undefined && department.subDept !== '') {
                                    if (department.subDept in dept.sub) {
                                        departmentMap[department.name].sub[department.subDept].rows.push(r[k[i]]);
                                    } else {
                                        departmentMap[department.name].sub[department.subDept] = {
                                            sortBy: department.sortBy || 0,
                                            rows: [r[k[i]]]
                                        };
                                    }
                                }
                                departmentMap[department.name].rows.push(r[k[i]]);
                            } else {
                                departmentMap[department.name] = {
                                    sub: {},
                                    rows: [],
                                    sortBy: department.sortBy || 0
                                };
                                if (department.subDept !== undefined && department.subDept !== '') {
                                    departmentMap[department.name].sub[department.subDept] = {
                                        sortBy: department.sortBy || 0,
                                        rows: [r[k[i]]]
                                    };
                                }
                                departmentMap[department.name].rows = [r[k[i]]];
                            }
                        }
                        $scope.gantt.departmentMap = departmentMap;
                    });
                }, 10);
            });

            // Remove data handler.
            // If a row has no tasks inside the complete row will be deleted.
            $scope.removeData({ fn: function(data) {
                $scope.gantt.removeData(data, function(row) {
                    $scope.raiseRowUpdatedEvent(row, false);
                });

                $scope.sortRows();
            }});

            // Clear all existing rows and tasks
            $scope.removeAllData = function() {
                // Clears rows, task and columns
                $scope.gantt.removeAllRows();
                // Restore default columns
                $scope.gantt.expandDefaultDateRange($scope.fromDate, $scope.toDate);
            };

            $scope.exportGanttData = function() {
                var dateFormat = 'YYYY-MM-DDTHH:mm:ss';
                // Export data
                var rawData = [];
                for (var i = 0, k = $scope.gantt.rows, l = k.length; i < l; i++) {
                    var machine = {
                        machine: {
                            id: k[i].id,
                            settingsMachine: k[i].data.settingsMachine,
                            factoryOperation: k[i].data.factoryOperation,
                            title: k[i].data.title,
                            currentTimeWorks: k[i].data.currentTimeWorks,
                            online: k[i].data.online
                        },
                        operationQueue: []
                    };

                    for (var j = 0, m = k[i].tasks, n = m.length; j < n; j++) {
                        machine.operationQueue.push({
                            id: m[j].id,
                            oid: m[j].data.oid,
                            part: m[j].data.part,
                            operationCode: m[j].data.operationCode,
                            priority: m[j].data.priority,
                            job: m[j].data.job,
                            process: m[j].data.process,
                            previousOperation: m[j].data.previousOperation,
                            nextOperations: m[j].data.nextOperations,
                            runOnMachineId: k[i].id,
                            actualRunOnMachineId: k[i].id,
                            quantity: m[j].data.quantity,
                            actualQuantity: m[j].data.actualQuantity,
                            processingType: m[j].data.processingType,
                            factoryOperation: m[j].data.factoryOperation,
                            jobFile: m[j].data.jobFile,
                            pin: m[j].isPin,
                            setupTime: m[j].data.setupTime,
                            productionTime: m[j].data.productionTime,
                            productionCapacity: m[j].data.productionCapacity,
                            s2sMins: m[j].data.s2sMins,
                            up: m[j].data.up,
                            sheetUp: m[j].data.sheetUp,
                            expectedStartTime: (m[j].from ? moment(m[j].from).format(dateFormat) : null),
                            expectedSetupFinishTime: (m[j].parallelFrom ? moment(m[j].parallelFrom).format(dateFormat) : null),
                            expectedFinishTime: (m[j].to ? moment(m[j].to).format(dateFormat) : null),
                            actualStartTime: (m[j].data.actualStartTime ? moment(m[j].data.actualStartTime).format(dateFormat) : null),
                            actualSetupFinishTime: (m[j].data.actualSetupFinishTime ? moment(m[j].data.actualSetupFinishTime).format(dateFormat) : null),
                            actualFinishTime: (m[j].data.actualFinishTime ? moment(m[j].data.actualFinishTime).format(dateFormat) : null),
                            finished: m[j].isFinished,
                            inProcessing: m[j].inProcessing,
                            parallel: m[j].isParallel,
                            parallelCode: m[j].data.parallelCode,
                            expectedMoldId: m[j].data.expectedMoldId,
                            tooltip1: m[j].data.tooltip1,
                            tooltip2: m[j].data.tooltip2,
                            tooltip3: m[j].data.tooltip3,
                            color1: m[j].data.color1,
                            color2: m[j].data.color2,
                            timeclockEmployeeId: m[j].data.timeclockEmployeeId,
                            new: m[j].isNew,
                            delete: m[j].isDeleted,
                            manual: m[j].isManual
                        });
                    }

                    rawData.push(machine);
                }

                var cache = JSON.stringify(rawData);

                var ajaxTimer = setTimeout(function() {
                    var result = ($http({
                        method: 'post',
                        responseType: 'json',
                        url: $scope.gantt.ajaxUrl.serverLocation + $scope.gantt.ajaxUrl.confirmGanttUrl,
                        data: rawData,
                        params: {
                            calculate: true,
                            calculateFrom: moment($scope.gantt.getFirstColumn().date).format(dateFormat),  // Gantt start time
                            calculateWeeks: 52
                        }
                    })).then(function(response) {
                        // Success
                        if (response.data.messagesEmpty) {
                            // reload data
                            // and do other things
                            // console.log(response.data.data);
                            $scope.loadData(response.data.data.machines);
                            // response.data.data.message 成功的訊息
                            // Disable the gantt all operations, change to readonly.
                            $scope.gantt.disable = true;
                        } else {
                            // TODO: bootstrap model
                            // Add button on the top to show the model dialog
                            console.log("===============here are some errors============");
                            if (response.data.messages) {
                                while (response.data.messages.length > 0) {
                                    console.log(response.data.messages.pop().value);
                                }
                            }
                        }
                        return false;
                    }, function(response) {
                        // Error
                        return false;
                    });
                }, 300);
            };

            // Bind scroll event
            $scope.ganttScroll.bind('scroll', $scope.raiseScrollEvent);

            // Load data handler.
            // The Gantt chart will keep the current view position if this function is called during scrolling.
            $scope.loadData({ fn: $scope.setData });

            // Clear data handler.
            $scope.clearData({ fn: $scope.removeAllData });

            // Scroll to specified date handler.
            $scope.centerDate({ fn: $scope.scrollToDate });

            // Gantt is initialized. Signal that the Gantt is ready.
            $scope.onGanttReady();
        }
    ]};
}]);
;gantt.factory('Column', [ 'dateFunctions', function (df) {
    // Used to display the Gantt grid and header.
    // The columns are generated by the column generator.

    var calcDbyP = function(column, maxDateValue, currentPosition) {
        return Math.round(maxDateValue/column.width * currentPosition / (maxDateValue / column.subScale))  * (maxDateValue / column.subScale);
    };

    var calcPbyD = function(column, date, maxDateValue, currentDateValue, a, b) {
        var factor;

        if (date - column.date > 0 && a !== b) {
            factor = 1;
        } else {
            factor = Math.round(currentDateValue/maxDateValue * column.subScale) / column.subScale;
        }

        return Math.round((column.left + column.width * factor) * 10) / 10;
    };

    var Column = function(date, left, width, subScale) {
        var self = this;
        self.date = date;
        self.left = left;
        self.width = width;
        self.subScale = subScale;

        self.clone = function() {
            return new Column(self.date, self.left, self.width, self.subScale);
        };

        self.equals = function(other) {
            return self.date === other.date;
        };
    };

    var MonthColumn = function(date, left, width, subScale) {
        var column = new Column(date, left, width, subScale);
        column.daysInMonth = df.getDaysInMonth(column.date);

        column.clone = function() {
            return new Column(column.date, column.left, column.width, column.subScale);
        };

        column.getDateByPosition = function(position) {
            if (position < 0) position = 0;
            if (position > column.width) position = column.width;

            var res = df.clone(column.date);
            res.setDate(1 + calcDbyP(column, column.daysInMonth, position));
            return res;
        };

        column.getPositionByDate = function(date) {
            return calcPbyD(column, date, column.daysInMonth, date.getDate(), date.getMonth(), column.date.getMonth());
        };

        return column;
    };

    var WeekColumn = function(date, left, width, subScale, firstDayOfWeek) {
        var column = new Column(date, left, width, subScale);
        column.week = df.getWeek(date);
        column.firstDayOfWeek = firstDayOfWeek;
        column.daysInWeek = 7;

        column.clone = function() {
            var copy = new Column(column.date, column.left, column.width, column.subScale);
            copy.week = column.week;
            return copy;
        };

        // Adjusts the day so that the specified first day of week is index = 0
        var firstDayIs0 = function(day) {
            return ((column.daysInWeek - column.firstDayOfWeek) + day) % column.daysInWeek;
        };

        // Adjusts the day so that Sunday= 0, Monday = 1, ...
        var firstDayIsSunday = function(day) {
            return (column.firstDayOfWeek + day) % column.daysInWeek;
        };

        var getWeek = function(date) {
            if (column.firstDayOfWeek !== 1) {
                // Adjust date so that firstDayOfWeek is always Monday because df.getWeek returns a ISO week number which starts on Monday.
                // Otherwise if for e.g. firstDayOfWeek is 0 the Sunday would be in week number X while Monday would be in week number Y.
                df.getWeek(df.addDays(date, 1 - column.firstDayOfWeek, true));
            } else {
                return df.getWeek(date);
            }
        };

        column.getDateByPosition = function(position) {
            if (position < 0) position = 0;
            if (position > column.width) position = column.width;

            var res = df.clone(column.date);
            var day = Math.round(calcDbyP(column, column.daysInWeek, position));

            // If day === 7, then jump forward to next week
            var direction = day !== 7 && day < 0 ? -1: 1; // -1: <<<<< | 1: >>>>>

            df.setToDayOfWeek(res, day !== 7 ? firstDayIsSunday(day): firstDayIsSunday(day) + 7, false, direction);
            return res;
        };

        column.getPositionByDate = function(date) {
            return calcPbyD(column, date, column.daysInWeek, firstDayIs0(date.getDay()), getWeek(date), getWeek(column.date));
        };

        return column;
    };

    var DayColumn = function(date, left, width, subScale, isWeekend, daysToNextWorkingDay, daysToPrevWorkingDay, workHours, showNonWorkHours) {
        var column = new Column(date, left, width, subScale);
        column.isWeekend = isWeekend;
        column.showNonWorkHours = showNonWorkHours;

        var startHour = 0;
        var endHour = 24;

        if(arguments.length == 9 && !showNonWorkHours && workHours.length > 1){
            startHour = workHours[0];
            endHour = workHours[workHours.length-1] + 1;
        }

        column.clone = function() {
            var copy = new Column(column.date, column.left, column.width, column.subScale);
            copy.isWeekend = column.isWeekend;
            return copy;
        };

        column.getDateByPosition = function(position, snapForward) {
            if (position < 0) position = 0;
            if (position > column.width) position = column.width;

            var res = df.clone(column.date);
            var hours = startHour + calcDbyP(column, (endHour-startHour), position);

            // Snap is done because a DAY can hide the non-work hours. If this is the case the start or end date of a task shall be the last work hour of the current day and not the next day.
            if(arguments.length == 2){
                if (hours === endHour && snapForward){
                    //We have snapped to the end of one day but this is a start of a task so it should snap to the start of the next displayed day
                    res = df.addDays(res, daysToNextWorkingDay);
                    hours = startHour;
                } else if (hours === startHour && !snapForward){
                    //We have snapped to the start of one day but this is the end of a task so it should snap to the end of the previous displayed day
                    res = df.addDays(res, -daysToPrevWorkingDay);
                    hours = endHour;
                }
            }

            res.setHours(hours);
            return res;
        };

        column.getPositionByDate = function(date) {
            //first check that the date actually corresponds to this column
            //(it is possible that it might not if weekends are hidden, in which case this will be the nearest previous column)
            if (df.setTimeZero(date,true) > df.setTimeZero(column.date, true)) return column.left + column.width;

            var maxDateValue = endHour-startHour;
            var currentDateValue = date.getHours()-startHour;
            if (currentDateValue < 0) return column.left;
            else if (currentDateValue > maxDateValue) return column.left + column.width;
            else return calcPbyD(column, date, maxDateValue, currentDateValue, date.getDate(), column.date.getDate());
        };

        return column;
    };

    var CustomHoursColumn = function(date, left, width, subScale, isWeekend, isWorkHour, hoursToNextWorkingDay, hoursToPrevWorkingDay, hoursDivide) {
        var column = new Column(date, left, width, subScale);
        column.isWeekend = isWeekend;
        column.isWorkHour = isWorkHour;

        column.clone = function() {
            var copy = new Column(column.date, column.left, column.width, column.subScale);
            copy.isWeekend = column.isWeekend;
            copy.isWorkHour = column.isWorkHour;
            return copy;
        };

        column.getDateByPosition = function(position, snapForward) {
            if (position < 0) position = 0;
            if (position > column.width) position = column.width;

            var res = df.clone(column.date);
            var minutes = calcDbyP(column, hoursDivide*60, position);

            // Snap is done because a HOUR can hide the non-work hours. If this is the case the start or end date of a task shall be the last work hour of the current day and not the next day.
            if(arguments.length == 2) {
                if (minutes === 60 && snapForward) {
                    //We have snapped to the end of one day but this is a start of a task so it should snap to the start of the next displayed day
                    res = df.addHours(res, hoursToNextWorkingDay);
                    minutes = 0;
                } else if (minutes === 0 && !snapForward) {
                    //We have snapped to the start of one day but this is the end of a task so it should snap to the end of the previous displayed day
                    res = df.addHours(res, -hoursToPrevWorkingDay);
                    minutes = 60;
                }
            }

            res.setMinutes(minutes);
            return res;
        };

        column.getPositionByDate = function(date) {
            return calcPbyD(column, date, hoursDivide*60, date.getMinutes() + (date.getHours() - column.date.getHours())*60, date.getDay(), column.date.getDay());
        };

        return column;
    };

    var HourColumn = function(date, left, width, subScale, isWeekend, isWorkHour, hoursToNextWorkingDay, hoursToPrevWorkingDay) {
        var column = new Column(date, left, width, subScale);
        column.isWeekend = isWeekend;
        column.isWorkHour = isWorkHour;

        column.clone = function() {
            var copy = new Column(column.date, column.left, column.width, column.subScale);
            copy.isWeekend = column.isWeekend;
            copy.isWorkHour = column.isWorkHour;
            return copy;
        };

        column.getDateByPosition = function(position, snapForward) {
            if (position < 0) position = 0;
            if (position > column.width) position = column.width;

            var res = df.clone(column.date);
            var minutes = calcDbyP(column, 60, position);

            // Snap is done because a HOUR can hide the non-work hours. If this is the case the start or end date of a task shall be the last work hour of the current day and not the next day.
            if(arguments.length == 2) {
                if (minutes === 60 && snapForward) {
                    //We have snapped to the end of one day but this is a start of a task so it should snap to the start of the next displayed day
                    res = df.addHours(res, hoursToNextWorkingDay);
                    minutes = 0;
                } else if (minutes === 0 && !snapForward) {
                    //We have snapped to the start of one day but this is the end of a task so it should snap to the end of the previous displayed day
                    res = df.addHours(res, -hoursToPrevWorkingDay);
                    minutes = 60;
                }
            }

            res.setMinutes(minutes);
            return res;
        };

        column.getPositionByDate = function(date) {
            if (df.setTimeZero(date,true) > df.setTimeZero(column.date, true)) return column.left + column.width;

            return calcPbyD(column, date, 60, date.getMinutes(), date.getHours(), column.date.getHours());
        };

        return column;
    };

    var MinuteColumn = function(date, left, width, subScale, isWeekend, isWorkHour, hoursToNextWorkingDay, hoursToPrevWorkingDay, viewScale, viewScaleUnit) {
        var column = new Column(date, left, width, subScale);
        column.isWeekend = isWeekend;
        column.isWorkHour = isWorkHour;

        column.clone = function() {
            var copy = new Column(column.date, column.left, column.width, column.subScale);
            copy.isWeekend = column.isWeekend;
            copy.isWorkHour = column.isWorkHour;
            return copy;
        };

        column.getDateByPosition = function(position) {
            if (position < 0) position = 0;
            if (position > column.width) position = column.width;

            var res = df.clone(column.date);
            var seconds = calcDbyP(column, 60, position);

            res.setSeconds(seconds);
            return res;
        };

        column.getPositionByDate = function(date) {
            if (df.setSecondsZero(date, true) > df.setSecondsZero(column.date, true)) return column.left + column.width;
            return calcPbyD(column, date, 60, date.getSeconds(), date.getMinutes(), column.date.getMinutes());
        };

        return column;
    };

    return {
        Minute: MinuteColumn,
        Hour: HourColumn,
        CustomHours: CustomHoursColumn,
        Day: DayColumn,
        Week: WeekColumn,
        Month: MonthColumn
    };
}]);;gantt.factory('ColumnGenerator', [ 'Column', 'dateFunctions', function (Column, df) {

    // Returns a map to lookup if the current day is a weekend day
    var getWeekendDaysMap = function(weekendDays) {
        var weekendDaysMap = {};

        for (var i = 0, l = weekendDays.length; i < l; i++) {
            weekendDaysMap[weekendDays[i]] = true;
        }

        return weekendDaysMap;
    };

    // Returns true if the given day is a weekend day
    var checkIsWeekend = function(weekendDaysMap, day) {
        return weekendDaysMap[day] === true;
    };

    // Returns a map to lookup if the current hour is a work hour
    var getWorkHoursMap = function(workHours) {
        var workHoursMap = {};

        for (var i = 0, l = workHours.length; i < l; i++) {
            workHoursMap[workHours[i]] = true;
        }

        return workHoursMap;
    };

    // Returns true if the given hour is a work hour
    var checkIsWorkHour = function(workHoursMap, hour) {
        return workHoursMap[hour] === true;
    };

    var MinuteColumnGenerator = function(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours) {
        // Generates the columns between from and to date. The task will later be places between the matching columns.
        this.generate = function(from, to) {
            var excludeTo = df.isSecondsZero(to);
            from = df.setSecondsZero(from, true);
            to = df.setSecondsZero(to, true);

            var date = df.clone(from);
            var generatedCols = [];
            var left = 0;
            var workHoursMap = getWorkHoursMap(workHours);
            var weekendDaysMap = getWeekendDaysMap(weekendDays);

            while(excludeTo && to - date > 0 || !excludeTo && to - date >= 0) {
                var isWeekend = checkIsWeekend(weekendDaysMap, date.getDay());

                for (var i = 0; i < 60; i++) {
                    var cDate = moment(date.getFullYear()+'-'+((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1))+
                        '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate())+'T'+(date.getHours() < 10 ? '0'+date.getHours() : date.getHours())+':'+(i < 10 ? '0'+i : i)+':00').toDate();
                    var isWorkHour = checkIsWorkHour(workHoursMap, cDate.getHours());

                    if ((isWeekend && showWeekends || !isWeekend) && (!isWorkHour && showNonWorkHours || isWorkHour)) {
                        var hoursToNextWorkingDay = 1;
                        var hoursToPrevWorkingDay = 1;
                        if(!showNonWorkHours) { //hours to next/prev working day is only relevant if non-work hours are hidden
                            hoursToNextWorkingDay = getHoursToNextWorkingDay(workHoursMap, cDate.getHours());
                            hoursToPrevWorkingDay = getHoursToPreviousWorkingDay(workHoursMap, cDate.getHours());
                        }

                        generatedCols.push(new Column.Minute(cDate, left, columnWidth, columnSubScale, isWeekend, isWorkHour, hoursToNextWorkingDay, hoursToPrevWorkingDay));
                        left += columnWidth;
                    }
                }

                date = df.addHours(date, 1);
            }

            return generatedCols;
        };


        // Returns the count of hours until the next working day
        // For example with working hours from 8-16, Wed 9am would return 1, Thu 16pm would return 16
        // Should also be able to handle gaps like 8-12, 13-17
        var getHoursToNextWorkingDay = function(workHoursMap, hour){
            for(var i = 1; i < 25; i++) {
                var nextHour = (hour+i)%24;
                if(checkIsWorkHour(workHoursMap, nextHour)){
                    return i;
                }
            }
            return 0; //default to 1, should only get here if the whole day is a work day
        };

        var getHoursToPreviousWorkingDay = function(workHours, hour){
            for(var i = 1; i < 25; i++) {
                var prevHour = (((hour-i)%24)+24)%24;
                if(checkIsWorkHour(workHours, prevHour)){
                    return i;
                }
            }
            return 0; //default to 1, should only get here if the whole day is a work day
        };
    };

    var HourColumnGenerator = function(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours) {
        // Generates the columns between from and to date. The task will later be places between the matching columns.
        this.generate = function(from, to) {
            var excludeTo = df.isMinutesZero(to);
            from = df.setMinutesZero(from, true);
            to = df.setMinutesZero(to, true);

            var date = df.clone(from);
            var generatedCols = [];
            var left = 0;
            var workHoursMap = getWorkHoursMap(workHours);
            var weekendDaysMap = getWeekendDaysMap(weekendDays);

            while(excludeTo && to - date > 0 || !excludeTo && to - date >= 0) {
                var isWeekend = checkIsWeekend(weekendDaysMap, date.getDay());

                for (var i = 0; i<24; i++) {
                    var cDate = moment(date.getFullYear()+'-'+((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1))+
                        '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate())+'T'+(i < 10 ? '0'+i : i)+':00:00').toDate();
                    var isWorkHour = checkIsWorkHour(workHoursMap, i);

                    if ((isWeekend && showWeekends || !isWeekend) && (!isWorkHour && showNonWorkHours || isWorkHour)) {
                        var hoursToNextWorkingDay = 1;
                        var hoursToPrevWorkingDay = 1;
                        if(!showNonWorkHours) { //hours to next/prev working day is only relevant if non-work hours are hidden
                            hoursToNextWorkingDay = getHoursToNextWorkingDay(workHoursMap, cDate.getHours());
                            hoursToPrevWorkingDay = getHoursToPreviousWorkingDay(workHoursMap, cDate.getHours());
                        }

                        generatedCols.push(new Column.Hour(cDate, left, columnWidth, columnSubScale, isWeekend, isWorkHour, hoursToNextWorkingDay, hoursToPrevWorkingDay));
                        left += columnWidth;
                    }
                }

                date = df.addDays(date, 1);
            }

            return generatedCols;
        };


        // Returns the count of hours until the next working day
        // For example with working hours from 8-16, Wed 9am would return 1, Thu 16pm would return 16
        // Should also be able to handle gaps like 8-12, 13-17
        var getHoursToNextWorkingDay = function(workHoursMap, hour){
            for(var i = 1; i < 25; i++) {
                var nextHour = (hour+i)%24;
                if(checkIsWorkHour(workHoursMap, nextHour)){
                    return i;
                }
            }
            return 1; //default to 1, should only get here if the whole day is a work day
        };

        var getHoursToPreviousWorkingDay = function(workHours, hour){
            for(var i = 1; i < 25; i++) {
                var prevHour = (((hour-i)%24)+24)%24;
                if(checkIsWorkHour(workHours, prevHour)){
                    return i;
                }
            }
            return 1; //default to 1, should only get here if the whole day is a work day
        };
    };

    var CustomHoursColumnGenerator = function(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, hoursDivide) {
        // Generates the columns between from and to date. The task will later be places between the matching columns.
        this.generate = function(from, to) {
            var excludeTo = df.isMinutesZero(to);
            from = df.setMinutesZero(from, true);
            to = df.setMinutesZero(to, true);

            var date = df.clone(from);
            var generatedCols = [];
            var left = 0;
            var workHoursMap = getWorkHoursMap(workHours);
            var weekendDaysMap = getWeekendDaysMap(weekendDays);

            while(excludeTo && to - date > 0 || !excludeTo && to - date >= 0) {
                var isWeekend = checkIsWeekend(weekendDaysMap, date.getDay());

                for (var i = 0; i<(24 / hoursDivide); i++) {
                    var cDate = moment(date.getFullYear()+'-'+((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1))+
                        '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate())+'T'+((i*hoursDivide) < 10 ? '0'+(i*hoursDivide) : i*hoursDivide)+':00:00').toDate();
                    var isWorkHour = checkIsWorkHour(workHoursMap, i*hoursDivide);

                    if ((isWeekend && showWeekends || !isWeekend) && (!isWorkHour && showNonWorkHours || isWorkHour)) {
                        var hoursToNextWorkingDay = 1;
                        var hoursToPrevWorkingDay = 1;
                        if(!showNonWorkHours) { //hours to next/prev working day is only relevant if non-work hours are hidden
                            hoursToNextWorkingDay = getHoursToNextWorkingDay(workHoursMap, cDate.getHours());
                            hoursToPrevWorkingDay = getHoursToPreviousWorkingDay(workHoursMap, cDate.getHours());
                        }

                        generatedCols.push(new Column.CustomHours(cDate, left, columnWidth, columnSubScale, isWeekend, isWorkHour, hoursToNextWorkingDay, hoursToPrevWorkingDay, hoursDivide));
                        left += columnWidth;
                    }
                }

                date = df.addDays(date, 1);
            }

            return generatedCols;
        };


        // Returns the count of hours until the next working day
        // For example with working hours from 8-16, Wed 9am would return 1, Thu 16pm would return 16
        // Should also be able to handle gaps like 8-12, 13-17
        var getHoursToNextWorkingDay = function(workHoursMap, hour){
            for(var i = 1; i < 25; i++) {
                var nextHour = (hour+i)%24;
                if(checkIsWorkHour(workHoursMap, nextHour)){
                    return i;
                }
            }
            return 1; //default to 1, should only get here if the whole day is a work day
        };

        var getHoursToPreviousWorkingDay = function(workHours, hour){
            for(var i = 1; i < 25; i++) {
                var prevHour = (((hour-i)%24)+24)%24;
                if(checkIsWorkHour(workHours, prevHour)){
                    return i;
                }
            }
            return 1; //default to 1, should only get here if the whole day is a work day
        };
    };

    var DayColumnGenerator = function(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours) {
        this.generate = function(from, to) {
            var excludeTo = df.isTimeZero(to);
            from = df.setTimeZero(from, true);
            to = df.setTimeZero(to, true);

            var date = df.clone(from);
            var generatedCols = [];
            var left = 0;
            var weekendDaysMap = getWeekendDaysMap(weekendDays);

            while(excludeTo && to - date > 0 || !excludeTo && to - date >= 0) {
                var isWeekend = checkIsWeekend(weekendDaysMap, date.getDay());
                if (isWeekend && showWeekends || !isWeekend) {
                    var daysToNextWorkingDay = 1;
                    var daysToPreviousWorkingDay = 1;
                    if(!showWeekends){ //days to next/prev working day is only relevant if weekends are hidden
                        daysToNextWorkingDay = getDaysToNextWorkingDay(weekendDaysMap, date.getDay());
                        daysToPreviousWorkingDay = getDaysToPrevWorkingDay(weekendDaysMap, date.getDay());
                    }

                    generatedCols.push(new Column.Day(df.clone(date), left, columnWidth, columnSubScale, isWeekend, daysToNextWorkingDay, daysToPreviousWorkingDay, workHours, showNonWorkHours));
                    left += columnWidth;
                }

                date = df.addDays(date, 1);
            }

            return generatedCols;
        };


        // Returns the count of days until the next working day
        // For example with a Mon-Fri working week, Wed would return 1, Fri would return 3, Sat would return 2
        var getDaysToNextWorkingDay = function(weekendDays, day){
            for(var i = 1; i < 8; i++) {
                var nextDay = (day+i)%7;
                if(!checkIsWeekend(weekendDays, nextDay)){
                    return i;
                }
            }
            return 1; //default to 1, should only get here if the whole week is the weekend
        };

        // Returns the count of days from the previous working day
        // For example with a Mon-Fri working week, Wed would return 1, Mon would return 3.
        var getDaysToPrevWorkingDay = function(weekendDays, day){
            for(var i = 1; i < 8; i++) {
                var prevDay = (((day-i)%7)+7)%7;
                if(!checkIsWeekend(weekendDays, prevDay)){
                    return i;
                }
            }
            return 1; //default to 1, should only get here if the whole week is the weekend
        };
    };

    var WeekColumnGenerator = function(columnWidth, columnSubScale, firstDayOfWeek) {
        this.generate = function(from, to) {
            var excludeTo = to.getDay() === firstDayOfWeek && df.isTimeZero(to);
            from = df.setToDayOfWeek(df.setTimeZero(from, true), firstDayOfWeek, false);
            to = df.setToDayOfWeek(df.setTimeZero(to, true), firstDayOfWeek, false);

            var date = df.clone(from);
            var generatedCols = [];
            var left = 0;

            while(excludeTo && to - date > 0 || !excludeTo && to - date >= 0) {
                generatedCols.push(new Column.Week(df.clone(date), left, columnWidth, columnSubScale, firstDayOfWeek));
                left += columnWidth;

                date = df.addWeeks(date, 1);
            }

            return generatedCols;
        };
    };

    var MonthColumnGenerator = function(columnWidth, columnSubScale) {
        this.generate = function(from, to) {
            var excludeTo = to.getDate() === 1 && df.isTimeZero(to);
            from = df.setToFirstDayOfMonth(df.setTimeZero(from, true), false);
            to = df.setToFirstDayOfMonth(df.setTimeZero(to, true), false);

            var date = df.clone(from);
            var generatedCols = [];
            var left = 0;

            while(excludeTo && to - date > 0 || !excludeTo && to - date >= 0) {
                generatedCols.push(new Column.Month(df.clone(date), left, columnWidth, columnSubScale));
                left += columnWidth;

                date = df.addMonths(date, 1);
            }

            return generatedCols;
        };
    };

    return {
        MinuteGenerator: MinuteColumnGenerator,
        HourGenerator: HourColumnGenerator,
        CustomHoursGenerator: CustomHoursColumnGenerator,
        DayGenerator: DayColumnGenerator,
        WeekGenerator: WeekColumnGenerator,
        MonthGenerator: MonthColumnGenerator
    };
}]);;gantt.factory('Gantt', ['Row', 'Jobs', 'Processes', 'ColumnGenerator', 'HeaderGenerator', 'dateFunctions', 'binarySearch', '_', 'IndexedDB', function (Row, Jobs, Processes, ColumnGenerator, HeaderGenerator, df, bs, _, db) {

    // Gantt logic. Manages the columns, rows and sorting functionality.
    var Gantt = function(viewScale, columnWidth, columnSubScale, firstDayOfWeek, weekendDays, showWeekends, workHours, showNonWorkHours) {
        var self = this;
        var machineDB = new db('ganttMachineDB', 'machines');
        var jobDB = new db('ganttJobDB', 'jobs');
        var taskDB = new db('ganttTaskDB', 'tasks');

        self.name = 'Gantt';
        self.rowsMap = {};
        self.rows = [];
        self.rowsCounter = 0;
        self.visibleRows = [];
        self.rowKey = 0;
        self.jobsMap = {};
        self.tasksMap = {};
        self.processesMap = {};
        self.departmentMap = {};
        self.paginationMap = {};
        self.columnPagination = [];
        self.columnPage = 1;
        self.columnLimit = 12;
        self.columns = [];
        self.headers = {};
        self.width = 0;
        self.defaultDateRange = undefined;
        self.contextMenu = undefined;
        self.jobFlowChart = undefined;
        self.tasksOnMachine = undefined;

        // Sets the Gantt view scale. Call reGenerateColumns to make changes visible after changing the view scale.
        // The headers are shown depending on the defined view scale.
        self.setViewScale = function(viewScale, columnWidth, columnSubScale, firstDayOfWeek, weekendDays, showWeekends, workHours, showNonWorkHours) {
            switch(viewScale) {
                case 'minute': self.columnGenerator = new ColumnGenerator.MinuteGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours); break;
                case 'hour': self.columnGenerator = new ColumnGenerator.HourGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours); break;
                case 'threehours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 3); break;
                case 'sixhours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 6); break;
                case 'eighthours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 8); break;
                case 'twevelhours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 12); break;
                case 'day': self.columnGenerator = new ColumnGenerator.DayGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours); break;
                case 'week': self.columnGenerator = new ColumnGenerator.WeekGenerator(columnWidth, columnSubScale, firstDayOfWeek); break;
                case 'month': self.columnGenerator = new ColumnGenerator.MonthGenerator(columnWidth, columnSubScale); break;
                default:
                    throw "Unsupported view scale: " + viewScale;
            }

            self.headerGenerator = new HeaderGenerator.instance(viewScale);
        };

        self.setViewScale(viewScale, columnWidth, columnSubScale, firstDayOfWeek, weekendDays, showWeekends, workHours, showNonWorkHours);

        // Expands the default date range. Even if there tasks are smaller the specified date range is shown.
        self.expandDefaultDateRange = function(from, to) {
            if (from !== undefined && to !== undefined) {
                if (self.defaultDateRange === undefined) {
                    self.defaultDateRange = {
                        from: from,
                        to: to
                    };
                }
                expandDateRange(from, to);
                expandColumns();
            }
        };

        var expandDateRange = function(from, to) {
            from = df.clone(from);
            to = df.clone(to);

            if (self.defaultDateRange === undefined) {
                self.defaultDateRange = {};
                self.defaultDateRange.from = from;
                self.defaultDateRange.to = to;
            } else {
                if (from < self.defaultDateRange.from) {
                    self.defaultDateRange.from = from;
                }
                if (to > self.defaultDateRange.to) {
                    self.defaultDateRange.to = to;
                }
            }
        };

        // Generates the Gantt columns according to the current self.defaultDateRange. The columns are generated if necessary only.
        var expandColumns = function() {
            if (self.defaultDateRange === undefined) {
                throw "From and to date range cannot be undefined";
            }

            // Only expand if expand is necessary
            if (self.columns.length === 0) {
                expandColumnsNoCheck(self.defaultDateRange.from, self.defaultDateRange.to);
            } else if (self.getFirstColumn().date > self.defaultDateRange.from || self.getLastColumn().date < self.defaultDateRange.to) {
                var minFrom = self.getFirstColumn().date > self.defaultDateRange.from ? self.defaultDateRange.from : self.getFirstColumn().date;
                var maxTo = self.getLastColumn().date < self.defaultDateRange.to ? self.defaultDateRange.to : self.getLastColumn().date;

                expandColumnsNoCheck(minFrom, maxTo);
            }
        };

        // Generates the Gantt columns according to the specified from - to date range. Uses the currently assigned column generator.
        var expandColumnsNoCheck = function(from ,to) {
            self.columns = self.columnGenerator.generate(from, to);
            self.headers = self.headerGenerator.generate(self.columns);
            self.updateTasksPosAndSize();

            var lastColumn = self.getLastColumn();
            self.width = lastColumn !== undefined ? lastColumn.left + lastColumn.width: 0;
        };

        // Removes all existing columns and re-generates them. E.g. after e.g. the view scale changed.
        self.reGenerateColumns = function() {
            self.columns = [];
            if (self.defaultDateRange !== undefined) {
                expandColumns();
                return true;
            } else {
                return false;
            }
        };

        // Update the position/size of all tasks in the Gantt
        self.updateTasksPosAndSize = function() {
            for (var i = 0, l = self.rows.length; i < l; i++) {
                for (var j = 0, k = self.rows[i].tasks.length; j < k; j++) {
                    self.rows[i].tasks[j].updatePosAndSize();
                }
            }
        };

        // Returns the last Gantt column or undefined
        self.getLastColumn = function() {
            if (self.columns.length > 0) {
                return self.columns[self.columns.length-1];
            } else {
                return undefined;
            }
        };

        // Returns the first Gantt column or undefined
        self.getFirstColumn = function() {
            if (self.columns.length > 0) {
                return self.columns[0];
            } else {
                return undefined;
            }
        };

        // Returns the column at the given or next possible date
        self.getColumnByDate = function(date) {
            var columns = bs.get(self.columns, date, function(c) { return c.date; });
            return columns[0] !== undefined ? columns[0]: columns[1];
        };

        // Returns the column at the given position x (in em)
        self.getColumnByPosition = function(x) {
            return bs.get(self.columns, x, function(c) { return c.left; })[0];
        };

        // Returns the exact column date at the given position x (in em)
        self.getDateByPosition = function(x, snapForward) {
            var column = self.getColumnByPosition(x);
            if (column !== undefined) {
                if(arguments.length == 2) return column.getDateByPosition(x - column.left, snapForward);
                else return column.getDateByPosition(x - column.left);
            } else {
                return undefined;
            }
        };

        // Returns the position inside the Gantt calculated by the given date
        self.getPositionByDate = function(date) {
            var column = self.getColumnByDate(date);
            if (column !== undefined) {
                return column.getPositionByDate(date);
            } else {
                return undefined;
            }
        };

        // Returns the current Gantt date range or undefined if it has not been defined
        self.getDateRange = function() {
            if (self.defaultDateRange === undefined) {
                return undefined;
            } else {
                return {
                    from: df.clone(self.defaultDateRange.from),
                    to: df.clone(self.defaultDateRange.to)
                };
            }
        };

        // Returns the min and max date of all loaded tasks or undefined if there are no tasks loaded
        self.getTasksDateRange = function() {
            if (self.rows.length === 0) {
                return undefined;
            } else {
                var minDate, maxDate;

                for (var i = 0, l = self.rows.length; i < l; i++) {
                    var row = self.rows[i];

                    if (minDate === undefined || row.minFromDate < minDate) {
                        minDate = row.minFromDate;
                    }

                    if (maxDate === undefined || row.maxToDate > maxDate) {
                        maxDate = row.maxToDate;
                    }
                }

                return {
                    from: minDate,
                    to: maxDate
                };
            }
        };

        // Returns the number of active headers
        self.getActiveHeadersCount = function() {
            var size = 0, key;
            for (key in self.headers) {
                if (self.headers.hasOwnProperty(key)) size++;
            }
            return size;
        };

        // Adds or update rows and tasks.
        self.addData = function(data, addEventFn, updateEventFN) {
            for (var i = 0, l = data.length; i < l; i++) {
                var rowData = data[i];
                var isUpdate = addRow(rowData);
                var row = self.rowsMap[rowData.id];

                if (isUpdate === true && updateEventFN !== undefined) {
                    updateEventFN(row);
                } else if (addEventFn !== undefined) {
                    addEventFn(row);
                }
            }
            // self.rowsCounter = self.rows.length;

            if (self.defaultDateRange !== undefined) {
                expandColumns();
            }

            // Do the pagination
            self.columnPagination = [];
            var page = 0;
            for (var j = 0, k = _.keys(self.paginationMap), m = k.length; j < m; j++) {
                if (self.columnPagination[page] !== undefined &&
                    (self.columnPagination[page].length >= self.columnLimit ||
                    (j + 1 < m && (self.columnPagination[page].length + self.paginationMap[k[j]].length) > Math.ceil(self.columnLimit * 1.5)))) {
                    page++;
                }
                if (self.columnPagination[page] === undefined) self.columnPagination[page] = [];

                self.columnPagination[page] = self.columnPagination[page].concat(self.paginationMap[k[j]]);
            }
            self.rowsCounter = self.columnPagination[0].length;
        };

        // Adds a row to the list of rows. Merges the row and it tasks if there is already one with the same id
        var addRow = function(rowData) {
            // Copy to new row (add) or merge with existing (update)
            var row, rowId, type, isUpdate = false;

            if (rowData.machine !== undefined) {
                row = rowData.machine;
                type = 'machine';
            } else if (rowData.mold !== undefined) {
                row = rowData.mold;
                type = 'mold';
            } else {
                // row = rowData;
                throw 'error';
            }

            if (row.id in self.rowsMap) {
                row = self.rowsMap[row.id];
                row.copy(rowData);
                isUpdate = true;
            } else {
                var order = row.order || row.id || undefined;
                var description = row.description || undefined;
                var data = {}, x;

                // Check if the row has a order predefined. If not assign one
                if (order === undefined) {
                    order = self.highestRowOrder || 0;
                }

                if (order >= self.highestRowOrder) {
                    self.highestRowOrder = order + 1;
                }

                for (x in row) {
                    if (data[x] === undefined) {
                        data[x] = row[x];
                    }
                }

                if (description === undefined) {
                    switch(type) {
                        case 'machine':
                            description = row.settingsMachine.name;
                            break;
                        case 'job':
                            description = 'JOB '+row.id;
                            break;
                        case 'mold':
                            description = row.settingsMold.descript === '' || row.settingsMold.descript === null ? row.settingsMold.name : row.settingsMold.descript;
                            break;
                        default:
                            description = '';
                    }
                }

                row = new Row(row.id/*rowData.id*/, self, type, description, order, data);
                self.rowsMap[row.id] = row;
                self.rows.push(row);

                self.rowKey++;
            }

            var tasks = rowData.operationQueue !== undefined ? rowData.operationQueue : rowData.tasks !== undefined ? rowData.tasks : [];
            if (tasks.length > 0) {
                var i, j, k, l;
                for (i = 0, l = tasks.length; i < l; i++) {
                    var task = row.addTask(tasks[i]);
                    if (task === undefined) continue;
                    expandDateRange(task.from, task.to);
                    task.updatePosAndSize();

                    var process;
                    if (tasks[i].process.id in self.processesMap) {
                        process = self.processesMap[tasks[i].process.id];
                        process.addTask(task);
                        process.addPrevious(task.process.previousProcesses);
                    } else {
                        process = new Processes(tasks[i].process, self);
                        process.addTask(task);
                        process.addPrevious(task.process.previousProcesses);
                        self.processesMap[tasks[i].process.id] = process;
                    }

                    var job;
                    if (tasks[i].job.id in self.jobsMap) {
                        job = self.jobsMap[tasks[i].job.id];
                        job.addTask(self.rowKey, task);
                    } else {
                        job = new Jobs(tasks[i].job, self);
                        job.addTask(self.rowKey, task);

                        self.jobsMap[tasks[i].job.id] = job;
                    }
                }
                for (i = 0, l = _.keys(self.processesMap); i < l.length; ++i) {
                    for (j = 0, k = self.processesMap[l[i]].previous; j < k.length; ++j) {
                        if (self.processesMap[k[j]] !== undefined) {
                            self.processesMap[k[j]].addNext([self.processesMap[l[i]].id]);
                        }
                    }
                }

                expandColumns();
            }
            return isUpdate;
        };

        // Removes specified rows or tasks.
        // If a row has no tasks inside the complete row will be deleted.
        self.removeData = function(data, updateEventFn) {
            for (var i = 0, l = data.length; i < l; i++) {
                var rowData = data[i];

                if (rowData.tasks !== undefined && rowData.tasks.length > 0) {
                    // Only delete the specified tasks but not the row and the other tasks

                    if (rowData.id in self.rowsMap) {
                        var row = self.rowsMap[rowData.id];

                        for (var j = 0, k = rowData.tasks.length; j < k; j++) {
                            row.removeTask(rowData.tasks[j].id);
                        }

                        if (updateEventFn !== undefined) {
                            updateEventFn(row);
                        }
                    }
                } else {
                    // Delete the complete row
                    removeRow(rowData.id);
                }
            }
        };

        // Removes the complete row including all tasks
        var removeRow = function(rowId) {
            if (rowId in self.rowsMap) {
                // delete self.rowsMap[rowId]; // Remove from map
                self.rowsMap[rowId].showup = false;

                // for (var i = 0, l = self.rows.length; i < l; i++) {
                //     var row = self.rows[i];
                //     if (row.id === rowId) {
                //         self.rows.splice(i, 1); // Remove from array
                //         return row;
                //     }
                // }
            }

            return undefined;
        };

        // Removes all rows and tasks
        self.removeAllRows = function() {
            self.rowsMap = {};
            self.rows = [];
            self.highestRowOrder = 0;
            self.columns = [];
            self.defaultDateRange = undefined;
        };

        // Swaps two rows and changes the sort order to custom to display the swapped rows
        self.swapRows = function (a, b) {
            // Swap the two rows
            var order = a.order;
            a.order = b.order;
            b.order = order;
        };

        // Sort helper to sort by the date of the task with the earliest from date.
        // Rows with no min date will be sorted by name
        var sortByDate = function (a, b) {
            if (a.minFromDate === undefined && b.minFromDate === undefined) {
                return sortByName(a, b);
            } else if (a.minFromDate === undefined) {
                return 1;
            } else if (b.minFromDate === undefined) {
                return -1;
            } else {
                return a.minFromDate - b.minFromDate;
            }
        };

        // Sort helper to sort by description name (switch to localeCompare() in the future?)
        var sortByName = function (a, b) {
            if (a.description.toLowerCase() === b.description.toLowerCase()) {
                return 0;
            } else {
                return (a.description.toLowerCase() < b.description.toLowerCase()) ? -1 : 1;
            }
        };

        // Sort helper to sort by order.
        // If a row has no order move it at the end. If both rows have no order they will be sorted by name.
        var sortByCustom = function (a, b) {
            if (a.order === undefined && b.order === undefined) {
                return sortByName(a, b);
            } else if (a.order === undefined) {
                return 1;
            } else if (b.order === undefined) {
                return -1;
            } else {
                return a.order - b.order;
            }
        };
        var sortByDept = function(a, b) {
            if ((a.department === undefined && b.department === undefined) &&
                (a.department.id === undefined && b.department.id === undefined)) {
                return sortByName(a, b);
            } else if (a.department.id === undefined) {
                return 1;
            } else if (b.department.id === undefined) {
                return -1;
            } else {
                if (a.department.id === b.department.id) {
                    return 0;
                } else {
                    return (a.department.id < b.department.id) ? -1 : 1;
                }
            }
        };

        // Sort rows by the specified sort mode (name, order, custom, dept)
        self.sortRows = function (mode) {
            switch (mode) {
                case "name":
                    self.rows.sort(sortByName);
                    break;
                case "-name":
                    self.rows.reverse(sortByName);
                    break;
                case "date":
                    self.rows.reverse(sortByDate);
                    break;
                case "-date":
                    self.rows.reverse(sortByDate);
                    break;
                case 'dept':
                    self.rows.sort(sortByDept);
                    break;
                case '-dept':
                    self.rows.sort(sortByDept);
                    break;
                case "custom":
                    self.rows.sort(sortByCustom);
                    break;
                case "-custom":
                    self.rows.sort(sortByCustom);
                    break;
                default:
                    self.rows.sort(sortByDate);
                    break;
            }
        };
    };

    return Gantt;
}]);;gantt.factory('HeaderGenerator', [ 'Column', 'dateFunctions', function (Column, df) {

    var generateMinuteHeader = function(columns) {
        var generatedHeaders = [];

        var header;
        for (var i = 0, l = columns.length; i < l; i++) {
            var col = columns[i];
            if (i === 0 || columns[i-1].date.getMinutes() !== col.date.getMinutes()) {
                header = new Column.Minute(df.clone(col.date), col.left, col.width, col.isWeekend, col.isWorkHour);
                generatedHeaders.push(header);
            } else {
                header.width += col.width;
            }
        }

        return generatedHeaders;
    };

    var generateHourHeader = function(columns, nexthours) {
        var generatedHeaders = [];

        var header;
        for (var i = 0, l = columns.length; i < l; i++) {
            var col = columns[i];
            if (i === 0 || columns[i-1].date.getHours() !== col.date.getHours()) {
                header = new Column.Hour(df.clone(col.date), col.left, col.width, col.isWeekend, col.isWorkHour);
                header.nexthour = df.addHours(df.clone(header.date), nexthours);
                generatedHeaders.push(header);
            } else {
                header.width += col.width;
            }
        }

        return generatedHeaders;
    };

    var generateDayHeader = function(columns) {
        var generatedHeaders = [];

        var header;
        for (var i = 0, l = columns.length; i < l; i++) {
            var col = columns[i];
            if (i === 0 || columns[i-1].date.getDay() !== col.date.getDay()) {
                header = new Column.Day(df.clone(col.date), col.left, col.width, col.isWeekend, col.daysToNextWorkingDay, col.daysToPrevWorkingDay);
                generatedHeaders.push(header);
            } else {
                header.width += col.width;
            }
        }

        return generatedHeaders;
    };

    var generateWeekHeader = function(columns) {
        var generatedHeaders = [];

        var header;
        for (var i = 0, l = columns.length; i < l; i++) {
            var col = columns[i];
            if (i === 0 || df.getWeek(columns[i-1].date) !== df.getWeek(col.date)) {
                header = new Column.Week(df.clone(col.date), col.left, col.width, df.getWeek(col.date));
                generatedHeaders.push(header);
            } else {
                header.width += col.width;
            }
        }

        return generatedHeaders;
    };

    var generateMonthHeader = function(columns) {
        var generatedHeaders = [];

        var header;
        for (var i = 0, l = columns.length; i < l; i++) {
            var col = columns[i];
            if (i === 0 || columns[i-1].date.getMonth() !== col.date.getMonth()) {
                header = new Column.Month(df.clone(col.date), col.left, col.width);
                generatedHeaders.push(header);
            } else {
                header.width += col.width;
            }
        }

        return generatedHeaders;
    };

    return {
        instance: function(viewScale) {
            this.generate = function(columns) {
                var headers = {};

                switch(viewScale) {
                    case 'minute':
                        headers.minute = generateMinuteHeader(columns);
                        headers.hour = generateHourHeader(columns);

                        break;
                    case 'threehours':
                        headers.hour = generateHourHeader(columns, 3);
                        headers.day = generateDayHeader(columns);

                        break;
                    case 'sixhours':
                        headers.hour = generateHourHeader(columns, 6);
                        headers.day = generateDayHeader(columns);

                        break;
                    case 'eighthours':
                        headers.hour = generateHourHeader(columns, 8);
                        headers.day = generateDayHeader(columns);

                        break;
                    case 'twevelhours':
                        headers.hour = generateHourHeader(columns, 12);
                        headers.day = generateDayHeader(columns);

                        break;
                    case 'hour':
                        headers.hour = generateHourHeader(columns);
                        headers.day = generateDayHeader(columns);

                        break;
                    case 'day':
                        headers.day = generateDayHeader(columns);
                        headers.month = generateMonthHeader(columns);

                        break;
                    case 'week':
                        headers.week = generateWeekHeader(columns);
                        headers.month = generateMonthHeader(columns);

                        break;
                    case 'month':
                        headers.month = generateMonthHeader(columns);

                        break;
                    default:
                        throw "Unsupported view scale: " + viewScale;
                }

                return headers;
            };
        }
    };
}]);;gantt.factory('Jobs', ['dateFunctions', 'binarySearch', '_', function (df, bs, _) {
    var Jobs = function(job, gantt) {
        var self = this;

        self.id = job.id;
        self.name = 'Job';
        self.gantt = gantt;
        self.comboType = job.comboType;
        self.comboId = job.comboId;
        self.poNo = job.poNo;
        self.comboQuantity = job.comboQuantity;
        self.processes = [];
        self.tasks = [];

        self.addTask = function(rowKey, taskData) {
            if (taskData.rowKey === undefined) {
                taskData.rowKey = rowKey;
            }
            self.tasks.push(taskData);

            if (self.processes.indexOf(taskData.process.id) < 0) {
                self.processes.push(taskData.process.id);
            }

            // Sort the task by date position.
            self.tasks.sort(function(t1, t2) { return t1.left - t2.left; });

            return self.tasks;
        };
    };

    return Jobs;
}]);;gantt.factory('Processes', ['dateFunctions', 'binarySearch', '_', function (df, bs, _) {
    var Processes = function(process, gantt) {
        var self = this;

        self.id = process.id;
        self.name = 'Process';
        self.gantt = gantt;
        self.productId = process.productId;
        self.waitPrevious = process.needWaitPrevProcess === true ? true : false;
        self.operations = process.operations;
        self.previous = [];
        self.tasks = [];
        self.next = [];

        self.addTask = function(task) {
            self.tasks.push(task);
            // Sort the task by date position.
            self.tasks.sort(function(t1, t2) { return t1.from - t2.from; });
        };

        self.addPrevious = function(processes) {
            self.previous = _.union(self.previous, processes);
        };

        self.addNext = function(processes) {
            self.next = _.union(self.next, processes);
        };
    };

    return Processes;
}]);;gantt.factory('Row', ['Task', 'dateFunctions', '_', function (Task, df, _) {
    var Row = function(id, gantt, type, description, order, data) {
        var self = this, x;

        self.id = id;
        self.name = 'Row';
        self.type = type;
        self.gantt = gantt;
        self.description = description;
        self.order= order;
        self.tasksMap = {};
        self.tasks = [];
        self.data = data;
        self.showup = true;

        if (type === 'machine') {
            self.department = data.settingsMachine.dept;

            // if (self.department.name in gantt.departmentMap) {
            //     var dept = gantt.departmentMap[self.department.name];
            //     if (self.department.subDept !== undefined && self.department.subDept !== '') {
            //         if (self.department.subDept in dept.sub) {
            //             gantt.departmentMap[self.department.name].sub[self.department.subDept].rows.push(self);
            //         } else {
            //             gantt.departmentMap[self.department.name].sub[self.department.subDept] = {
            //                 sort: self.department.sort || 0,
            //                 rows: [self]
            //             };
            //         }
            //     }
            //     gantt.departmentMap[self.department.name].rows.push(self);
            // } else {
            //     gantt.departmentMap[self.department.name] = {
            //         sub: {},
            //         rows: [],
            //         sort: self.department.sort || 0
            //     };
            //     if (self.department.subDept !== undefined && self.department.subDept !== '') {
            //         gantt.departmentMap[self.department.name].sub[self.department.subDept] = {
            //             sort: self.department.sort || 0,
            //             rows: [self]
            //         };
            //     }
            //     gantt.departmentMap[self.department.name].rows = [self];
            // }

            if (self.department.code in gantt.paginationMap) {
                if (gantt.paginationMap[self.department.code].indexOf(self.id) < 0) {
                    gantt.paginationMap[self.department.code].push(self.id);
                }
            } else {
                gantt.paginationMap[self.department.code] = [self.id];
            }
        }

        self.RGBtoHex = function(index) {
            if (index === undefined || index === '') return '#efefef';

            var R = index * 11 % 123,
                G = index * 17 % 123,
                B = index * 23 % 123;
                R = R < 100 ? (R + 100).toString(16) : R.toString(16);
                G = G < 100 ? (G + 100).toString(16) : G.toString(16);
                B = B < 100 ? (B + 100).toString(16) : B.toString(16);
            return '#'+(R.length === 1 ? '0'+R : R)+(G.length === 1 ? '0'+G : G)+(B.length === 1 ? '0'+B : B);
        };

        // Adds a task to a specific row. Merges the task if there is already one with the same id
        self.addTask = function(taskData) {
            // Copy to new task (add) or merge with existing (update)
            var task, dateRange, from, to;

            if (taskData.id in self.tasksMap) {
                task = self.tasksMap[taskData.id];
                task.copy(taskData);
            } else {
                var color = taskData.color1.replace('0x', '#');
                var data = {}, x;

                for (x in taskData) {
                    if (data[x] === undefined) {
                        data[x] = taskData[x];
                    }
                }

                from = (taskData.actualStartTime === null || taskData.actualStartTime === undefined) ? taskData.expectedStartTime : taskData.actualStartTime;
                to = (taskData.actualFinishTime === null || taskData.actualFinishTime === undefined) ? taskData.expectedFinishTime : taskData.actualFinishTime;
                // if (df.clone(taskData.expectedStartTime) >= gantt.defaultDateRange.from &&
                //     df.clone(taskData.expectedFinishTime) <= gantt.defaultDateRange.to) {
                    task = new Task(taskData.id, self, taskData.operationCode, color, [], taskData.priority, from, to, data, undefined, undefined);
                    self.tasksMap[taskData.id] = task;
                    self.tasks.push(task);

                    gantt.tasksMap[taskData.id] = task;
                //}
            }

            if (task !== undefined) {
                self.sortTasks();
                self.setMinMaxDateByTask(task);
            }
            return task;
        };

        // Removes the task from the existing row and adds it to he current one
        self.moveTaskToRow = function(task) {
            task.rowHasBeenChanged = true;
            task.preventRowId = task.row.id;
            task.row.removeTask(task.id);
            self.tasksMap[task.id] = task;
            self.tasks.push(task);
            self.setTasksMinMaxDate();
            task.row = self;
            task.updatePosAndSize();
        };

        // Remove the specified task from the row
        self.removeTask = function(taskId) {
            if (taskId in self.tasksMap) {
                delete self.tasksMap[taskId]; // Remove from map

                for (var i = 0, l = self.tasks.length; i < l; i++) {
                    var task = self.tasks[i];
                    if (task.id === taskId) {
                        self.tasks.splice(i, 1); // Remove from array

                        // Update earliest or latest date info as this may change
                        if (self.minFromDate - task.from === 0 || self.maxToDate - task.to === 0) {
                            self.setTasksMinMaxDate();
                        }

                        return task;
                    }
                }
            }
        };

        // Calculate the earliest from and latest to date of all tasks in a row
        self.setTasksMinMaxDate = function() {
            self.minFromDate = undefined;
            self.maxToDate = undefined;
            for (var j = 0, k = self.tasks.length; j < k; j++) {
                self.setMinMaxDateByTask(self.tasks[j]);
            }
        };

        self.setMinMaxDateByTask = function (task) {
            if (self.minFromDate === undefined) {
                self.minFromDate = df.clone(task.from);
            } else if (task.from < self.minFromDate) {
                self.minFromDate = df.clone(task.from);
            }

            if (self.maxToDate === undefined) {
                self.maxToDate = df.clone(task.to);
            } else if (task.to > self.maxToDate) {
                self.maxToDate = df.clone(task.to);
            }
        };

        self.sortTasks = function() {
            self.tasks.sort(function(t1, t2) { return t1.left - t2.left; });
        };

        self.copy = function(row) {
            self.description = row.description || undefined;

            if (row.order !== undefined) {
                self.order = row.order;
            }
        };

        self.clone = function() {
            var clone = new Row(self.id, self.gantt, self.description, self.order);
            for (var i = 0, l = self.tasks.length; i < l; i++) {
                clone.addTask(self.tasks[i].clone());
            }

            return clone;
        };
    };

    return Row;
}]);
;gantt.factory('IndexedDB', ['$window', '$q', 'binarySearch', function ($window, $q, bs) {
    var IndexedDB = function(dbName, storeName, dbVersion) {
        var self = this;
        var IDBKeyRange = $window.IDBKeyRange || $window.webkitIDBKeyRange || $window.msIDBKeyRange;

        self.name = 'Store';
        self.indexedDB = $window.indexedDB || $window.mozIndexedDB || $window.webkitIndexedDB || $window.msIndexedDB;
        self.db = dbName || 'GanttStoreDB';
        self.storeName = storeName || 'machines';
        self.version = dbVersion || 1;
        self.lastIndex = 0;

        self.open = function(storeName, dbVersion) {
            var deferred = $q.defer();
            var request = self.indexedDB.open(self.db, (dbVersion || self.version));

            self.storeName = storeName || self.storeName;

            request.onupgradeneeded = function(event) {
                self.db = event.target.result;

                event.target.transaction.onerror = self.indexedDB.onerror;

                if (self.db.objectStoreNames.contains(self.storeName)) {
                    self.db.deleteObjectStore(self.storeName);
                }

                var store = self.db.createObjectStore(self.storeName, { keyPath: 'id' });
            };
            request.onsuccess = function(event) {
                self.db = event.target.result;
                deferred.resolve();
            };

            request.onerror = function() {
                deferred.reject();
            };

            return deferred.promise;
        };

        self.clear = function() {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);
                var request = store.clear();

                request.onsuccess = function(event) {
                    deferred.resolve([]);
                };
                request.onerror = function(event) {
                    deferred.reject("Cannot clear the store object!");
                };
            }

            return deferred.promise;
        };

        self.getItems = function() {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);
                var items = [];

                // Get everything in the store;
                var keyRange = IDBKeyRange.lowerBound(0);
                var cursorRequest = store.openCursor(keyRange);

                cursorRequest.onsuccess = function(event) {
                    var result = event.target.result;
                    if(result === null || result === undefined) {
                        deferred.resolve(items);
                    } else {
                        items.push(result.value);
                        if (result.value.id > self.lastIndex) {
                            self.lastIndex = result.value.id;
                        }
                        result.continue();
                    }
                };

                cursorRequest.onerror = function(event) {
                    deferred.reject("Something went wrong!!!");
                };
            }

            return deferred.promise;
        };

        self.removeItem = function(id) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                var request = store.delete(id);

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be removed.");
                };
            }

            return deferred.promise;
        };

        self.addTask = function(data) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                self.lastIndex++;
                var request = store.put({
                    id: data.id,
                    operationCode: data.operationCode,
                    priority: data.priority,
                    job: data.job,
                    process: data.process,
                    previousOperation: data.previousOperation,
                    nextOperations: data.nextOperations,
                    runOnMachineId: data.runOnMachineId,
                    actualRunOnMachineId: data.actualRunOnMachineId,
                    quantity: data.quantity,
                    processingType: data.processingType,
                    factoryOperation: data.factoryOperation,
                    jobFile: data.jobFile,
                    pin: data.pin,
                    setupTime: data.setupTime,
                    productionTime: data.productionTime,
                    productionCapacity: data.productionCapacity,
                    s2sMins: data.s2sMins,
                    expectedStartTime: data.expectedStartTime,
                    expectedSetupFinishTime: data.expectedSetupFinishTime,
                    expectedFinishTime: data.expectedFinishTime,
                    actualStartTime: data.actualStartTime,
                    actualSetupFinishTime: data.actualSetupFinishTime,
                    actualFinishTime: data.actualFinishTime,
                    finished: data.finished,
                    inProcessing: data.inProcessing,
                    parallel: data.parallel,
                    parallelCode: data.parallelCode,
                    expectedMoldId: data.expectedMoldId,
                    tooltip1: data.tooltip1,
                    tooltip2: data.tooltip2,
                    tooltip3: data.tooltip3,
                    color1: data.color1,
                    color2: data.color2,
                    new: data.new
                });

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be added!");
                };
            }
            return deferred.promise;
        };

        self.addJob = function(data) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                self.lastIndex++;
                var request = store.put({
                    id: data.id,
                    operationQueue: data.operationQueue
                });

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be added!");
                };
            }
            return deferred.promise;
        };

        self.addMachine = function(data) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                self.lastIndex++;
                var request = store.put({
                    id: data.id,
                    code: data.settingsMachine.code,
                    settingsMachine: data.settingsMachine,
                    factoryOperation: data.factoryOperation,
                    currentTimeWorks: data.currentTimeWorks,
                    online: data.online,
                    operationQueue: data.operationQueue
                });

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be added!");
                };
            }
            return deferred.promise;
        };
    };

    return IndexedDB;
}]);;gantt.factory('Task', ['dateFunctions', '_', function (df, _) {
    var Task = function(id, row, subject, color, classes, priority, from, to, data, est, lct) {
        var self = this;

        self.id = id;
        self.name = 'Task';
        self.gantt = row.gantt;
        self.row = row;
        self.subject = subject+'('+id+')';
        self.color = color;
        self.classes = classes;
        self.priority = priority;
        self.from = df.clone(from);
        self.to = df.clone(to);
        self.process = data.process;
        self.job = data.job;
        self.previousOperation = data.previousOperation;
        self.nextOperations = data.nextOperations;
        self.data = data;
        self.tooltips = {};
        self.dirty = false;
        self.rowHasBeenChanged = false;
        self.preventRowId = row.id;
        self.openLightbox = false;
        self.openContextMenu = false;
        self.est = df.clone(from);
        self.lct = df.clone(to);
        self.showup = true;

        if (est !== undefined && lct !== undefined) {
            self.est = df.clone(est);  //Earliest Start Time
            self.lct = df.clone(lct);  //Latest Completion Time
        }

        self.checkIfMilestone = function() {
            self.isMilestone = self.from - self.to === 0;
        };
        self.checkIfFinished = function() {
            self.isFinished = !!self.data.finished;
            //self.isMoving = !self.isFinished;
        };
        self.checkIfInProcessing = function() {
            self.inProcessing = !!self.data.inProcessing;
            //self.isMoving = !self.isFinished;
        };
        self.checkIfPin = function() {
            self.isPin = !!self.data.pin;
        };
        self.checkIfDelete = function() {
            self.isDeleted = !!self.data.delete;
        };
        self.checkIfManual = function() {
            self.isManual = !!self.data.manual;
        };
        self.checkParallelFrom = function() {
            var parallelFrom = self.data.actualSetupFinishTime === null || self.data.actualSetupFinishTime === undefined ? self.data.expectedSetupFinishTime : self.data.actualSetupFinishTime;
            if (self.isParallel === true && self.data.s2sMins >= 0) {
                self.parallelFrom = df.clone(parallelFrom);
                self.parallelFrom = df.addMinutes(self.parallelFrom, self.data.s2sMins, true);
            } else {
                self.parallelFrom = df.clone(self.to);
                self.isParallel = false;
            }
        };
        self.checkIfParallel = function() {
            self.isParallel = !!self.data.parallel;
            self.checkParallelFrom();
        };
        self.rejectMoving = function() {
            var from = (self.data.actualStartTime === null || self.data.actualStartTime === undefined) ? self.data.expectedStartTime : self.data.actualStartTime,
                to = (self.data.actualFinishTime === null || self.data.actualFinishTime === undefined) ? self.data.expectedFinishTime : self.data.actualFinishTime,
                parallelFrom = self.data.actualSetupFinishTime === null || self.data.actualSetupFinishTime === undefined ? self.data.expectedSetupFinishTime : self.data.actualSetupFinishTime;
            self.dirty = false;
            self.from = df.clone(from);
            self.to = df.clone(to);
            if (self.isParallel === true) {
                self.parallelFrom = df.clone(parallelFrom);
                self.parallelFrom = df.addMinutes(self.parallelFrom, self.data.s2sMins, true);
            } else {
                self.parallelFrom = self.to;
            }
            self.row.setMinMaxDateByTask(self);
            self.updatePosAndSize();
            self.checkIfMilestone();
        };
        self.updateMoving = function() {
            self.dirty = false;
            var from = (self.data.actualStartTime === null || self.data.actualStartTime === undefined) ? self.data.expectedStartTime : self.data.actualStartTime,
                to = (self.data.actualFinishTime === null || self.data.actualFinishTime === undefined) ? self.data.expectedFinishTime : self.data.actualFinishTime,
                parallelFrom = self.data.actualSetupFinishTime === null || self.data.actualSetupFinishTime === undefined ? self.data.expectedSetupFinishTime : self.data.actualSetupFinishTime;
            var originSetupFinishTime = df.clone(parallelFrom) - df.clone(from);
            originSetupFinishTime = df.addMilliseconds(self.from, originSetupFinishTime, true);

            self.expectedFinishTime = self.to.toISOString();
            self.expectedStartTime = self.from.toISOString();
            self.expectedSetupFinishTime = originSetupFinishTime.toISOString();
            if (self.isParallel === true) {
                self.parallelFrom = df.addMinutes(originSetupFinishTime, self.data.s2sMins, true);
            } else {
                self.parallelFrom = self.to;
            }
        };

        self.prepareTooltips = function() {
            var tooltips = {'tip': self.data.tooltip1, 'ui': self.data.tooltip2, 'chart': self.data.tooltip3};
            for (var i = 0, j = _.keys(tooltips), l = j.length; i < l; ++i) {
                self.tooltips[j[i]] = tooltips[j[i]].split('|');
            }
        };

        self.checkIfDelete();
        self.checkIfManual();
        self.checkIfMilestone();
        self.checkIfInProcessing();
        self.checkIfFinished();
        self.checkIfPin();
        self.checkIfParallel();
        self.prepareTooltips();

        self.hasBounds = function() {
            return self.bounds !== undefined;
        };

        // Updates the pos and size of the task according to the from - to date
        self.updatePosAndSize = function() {
            self.left = self.gantt.getPositionByDate(self.from);
            self.width = Math.round((self.gantt.getPositionByDate(self.to) - self.left) * 10) / 10;

            self.row.tasks.sort(function(t1, t2) { return t1.from - t2.from; });
            for (var i = 0, k = self.row.tasks, l = k.length; i < l; i++) {
                if (k[i].id === self.id) {
                    if (k[(i-1)] !== undefined) {
                        self.est = df.addMinutes(k[(i-1)].to, 1, true);
                    } else {
                        self.est = df.clone(self.from);
                    }
                    if (k[(i+1)] !== undefined) {
                        self.lct = df.addMinutes(k[(i+1)].from, -1, true);
                    } else {
                        self.lct = df.clone(self.to);
                    }
                    break;
                }
            }

            if (self.est !== undefined && self.lct !== undefined) {
                self.bounds = {};
                self.bounds.left = self.gantt.getPositionByDate(self.est);
                self.bounds.width = Math.round((self.gantt.getPositionByDate(self.lct) - self.bounds.left) * 10) / 10;
            }
        };

        // Expands the start of the task to the specified position (in em)
        self.setFrom = function(x) {
            if (x > self.left + self.width) {
                x = self.left + self.width;
            } else if (x < 0) {
                x = 0;
            }

            self.from = self.gantt.getDateByPosition(x, true);
            self.est = df.clone(self.from);
            self.row.setMinMaxDateByTask(self);
            self.updatePosAndSize();
            self.checkIfMilestone();
        };

        // Expands the end of the task to the specified position (in em)
        self.setTo = function(x) {
            if (x < self.left) {
                x = self.left;
            } else if (x > self.gantt.width) {
                x = self.gantt.width;
            }

            self.to = self.gantt.getDateByPosition(x, false);
            self.lct = df.clone(self.to);
            self.row.setMinMaxDateByTask(self);
            self.updatePosAndSize();
            self.checkIfMilestone();
        };

        // Moves the task to the specified position (in em)
        self.moveTo = function(x) {
            if (x < 0) {
                x = 0;
            } else if (x + self.width >= self.gantt.width) {
                x = self.gantt.width - self.width;
            }
            var w = df.clone(self.data.expectedFinishTime) - df.clone(self.data.expectedStartTime);

            self.from = self.gantt.getDateByPosition(x, true);
            self.left = self.gantt.getPositionByDate(self.from);

            self.to = df.addMilliseconds(self.from, w, true);
            self.width = Math.round((self.gantt.getPositionByDate(self.to) - self.left) * 10) / 10;

            self.row.setMinMaxDateByTask(self);
        };

        self.copy = function(task) {
            self.subject = task.subject;
            self.color = task.color;
            self.classes = task.classes;
            self.priority = task.priority;
            self.from = df.clone(task.from);
            self.to = df.clone(task.to);
            self.est = task.est !== undefined ? df.clone(task.est): undefined;
            self.lct = task.lct !== undefined ? df.clone(task.lct): undefined;
            data = task.data;
            self.isMilestone = task.isMilestone;
        };

        self.clone = function() {
            return new Task(self.id, self.row, self.subject, self.color, self.classes, self.priority, self.from, self.to, data, self.est, self.lct);
        };
    };

    return Task;
}]);
;gantt.service('binarySearch', [ function () {
    // Returns the object on the left and right in an array using the given cmp function.
    // The compare function defined which property of the value to compare (e.g.: c => c.left)

    return {
        getIndicesOnly: function(input, value, comparer) {
            var lo = -1, hi = input.length;
            while (hi - lo > 1) {
                var mid = ((lo + hi) / 2) | 0;
                if (comparer(input[mid]) <= value) {
                    lo = mid;
                } else {
                    hi = mid;
                }
            }
            if (input[lo] !== undefined && comparer(input[lo]) === value) hi = lo;
            return [lo, hi];
        },
        get: function(input, value, comparer) {
            var res = this.getIndicesOnly(input, value, comparer);
            return [input[res[0]], input[res[1]]];
        },
        containsKeyValue: function( obj, key, value ) {
            if (obj[key] === value) return true;

            var x, found = false;
            for (x in obj) {
                if (obj[x] !== null && obj[x][key] === value) {
                    return true;
                } else {
                    if (typeof obj[x] === 'object' && obj[x] !== null) {
                        found = containsKeyValue( obj[x], key, value);
                        if (found === true) return true;
                    }
                }
                return false;
            }
        },
        quickSort: function( arr ) {
            if (arr.length <= 1) return arr;

            var pivotIndex = (arr.length / 2) | 0;
            var pivot = arr.splice(pivotIndex, 1), left = [], right = [];

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].from < pivot[0].from) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }

            return this.quickSort(left).concat(pivot, this.quickSort(right));
        },
        inArray: function(needle, haystack, argStrict) {
            var key = '', strict = !! argStrict;
            if (strict) {
                for (key in haystack) {
                    if (haystack[key] === needle) return true;
                }
            } else {
                for (key in haystack) {
                  if (haystack[key] == needle) return true;
                }
            }

            return false;
        }
    };
}]);;gantt.service('coloured', [function() {
	return {

		/**
		 * use YUV color space to determines color is dark or light
		 * @param  {[type]}  colorHexCode
		 * @return {Boolean} true: dark coloured, false: light coloured
		 */
		isDarkColoured: function(colorHexCode) {
			// convert hex color to RGB Colorspace
			var R = parseInt(colorHexCode.substr(1, 2), 16);
			var G = parseInt(colorHexCode.substr(3, 2), 16);
			var B = parseInt(colorHexCode.substr(5, 2), 16);
			// console.log(R, G, B);

			// http://softpixel.com/~cwright/programming/colorspace/yuv/
			// convert RGB Colorspace to YUV Colorspace
			var Y = R *  0.299000 + G *  0.587000 + B *  0.114000;  // determines the brightness of the color
			var U = R * -0.168736 + G * -0.331264 + B *  0.500000 + 128;  // determines the chrominance of the color
			var V = R *  0.500000 + G * -0.418688 + B * -0.081312 + 128;  // determines the chroma of the color
			// console.log(Y, U, V);

			return Y <= 192;
		}
	};
}]);
;gantt.service('dateFunctions', [ function () {
    // Date calculations from: http://www.datejs.com/ | MIT License
    return {
        isNumber: function(n) { return !isNaN(parseFloat(n)) && isFinite(n); },
        isString: function(o) { return typeof o == "string" || (typeof o == "object" && o.constructor === String); },
        isDate: function(d) { return typeof d == "object" && d.constructor === Date; },
        clone: function(date) {
            if (this.isString(date)) {
                return moment(date, 'YYYY-MM-DDTHH:mm:ss').clone().toDate();
            } else if (this.isDate(date) || this.isNumber(date)) {
                return moment(date).clone().toDate();
            } else {
                return moment(Date.now()).clone().toDate();
            }
        },
        setSecondsZero: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setSeconds(0);
            res.setMilliseconds(0);
            return res;
        },
        setMinutesZero: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setMinutes(0);
            res.setSeconds(0);
            res.setMilliseconds(0);
            return res;
        },
        setTimeZero: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setHours(0);
            res.setMinutes(0);
            res.setMilliseconds(0);
            return res;
        },
        setTimeComponent: function(date, milliseconds) {
            return moment(date.getFullYear()+'-'+((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1))+
                '-'+(date.getDate() < 10 ? '0'+date.getDate() : date.getDate())+'T00:00:00.'+milliseconds).toDate();
        },
        setToFirstDayOfMonth: function(date, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(1);
            return res;
        },
        setToDayOfWeek: function(date, dayOfWeek, clone, orient) {
            var res = clone === true ? this.clone(date) : date;
            if (res.getDay() === dayOfWeek) {
                return res;
            } else {
                orient = orient || -1;
                var diff = (dayOfWeek - res.getDay() + 7 * (orient || +1)) % 7;
                return this.addDays(res, (diff === 0) ? diff += 7 * (orient || +1) : diff);
            }
        },
        addMonths: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(1);
            res.setMonth(res.getMonth() + val);
            return res;
        },
        addWeeks: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(res.getDate() + val * 7);
            return res;
        },
        addDays: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setDate(res.getDate() + val);
            return res;
        },
        addHours: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setHours(res.getHours() + val);
            return res;
        },
        addMinutes: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setMinutes(res.getMinutes() + val);
            return res;
        },
        addSeconds: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setSeconds(res.getSeconds() + val);
            return res;
        },
        addMilliseconds: function(date, val, clone) {
            var res = clone === true ? this.clone(date) : date;
            res.setMilliseconds(res.getMilliseconds() + val);
            return res;
        },
        isSecondsZero: function(date) {
            return date.getSeconds() === 0 && date.getMilliseconds() === 0;
        },
        isMinutesZero: function(date) {
            return date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0;
        },
        isTimeZero: function(date) {
            return date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0 && date.getMilliseconds() === 0;
        },
        getDaysInMonth: function(date) {
            return moment(date.getFullYear()+'-'+((date.getMonth() + 1) < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1))+'-01T00:00:00').daysInMonth();
        },
        getWeek: function(date) {
            /* Returns the number of the week. The number is calculated according to ISO 8106 */
            var $y, $m, $d;
            var a, b, c, d, e, f, g, n, s, w;

            $y = date.getFullYear();
            $m = date.getMonth() + 1;
            $d = date.getDate();

            if ($m <= 2) {
                a = $y - 1;
                b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                s = b - c;
                e = 0;
                f = $d - 1 + (31 * ($m - 1));
            } else {
                a = $y;
                b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                s = b - c;
                e = s + 1;
                f = $d + ((153 * ($m - 3) + 2) / 5) + 58 + s;
            }

            g = (a + b) % 7;
            d = (f + g - e) % 7;
            n = (f + 3 - d) | 0;

            if (n < 0) {
                w = 53 - ((g - s) / 5 | 0);
            } else if (n > 364 + s) {
                w = 1;
            } else {
                w = (n / 7 | 0) + 1;
            }

            $y = $m = $d = null;

            return w;
        }
    };
}]);
;gantt.service('taskWorker', [ 'dateFunctions', function (df) {
    return {
        workerSource: function() {
            return 'assets/taskmoveworker.js';
        },
        prepareWorker: function(task, gantt) {
            var i, j, k, l,
                processesMap = {},
                tasksMap = {},
                timestamp = df.clone(task.data.expectedFinishTime);

            if (this.detectTaskDirection(task) === 'left') {
                timestamp = df.clone(task.from);
            } else {
                timestamp = df.clone(task.data.expectedStartTime);
            }
            for (i = 0, k = _.keys(gantt.processesMap), l = k.length; i < l; ++i) {
                processesMap[k[i]] = {
                    previous: gantt.processesMap[k[i]].previous,
                    next: gantt.processesMap[k[i]].next
                };
            }
            for (i = 0, k = _.keys(gantt.tasksMap), l = k.length; i < l; ++i) {
                tasksMap[k[i]] = {
                    id: gantt.tasksMap[k[i]].id,
                    from: df.clone(gantt.tasksMap[k[i]].from),
                    to: df.clone(gantt.tasksMap[k[i]].to),
                    data: gantt.tasksMap[k[i]].data,
                    isPin: gantt.tasksMap[k[i]].isPin,
                    isFinished: gantt.tasksMap[k[i]].isFinished,
                    inProcessing: gantt.tasksMap[k[i]].inProcessing,
                    isParallel: gantt.tasksMap[k[i]].isParallel,
                    parallelFrom: gantt.tasksMap[k[i]].parallelFrom,
                    nextOperations: gantt.tasksMap[k[i]].nextOperations,
                    process: gantt.tasksMap[k[i]].process,
                    row: {
                        id: gantt.tasksMap[k[i]].row.id
                    }
                };
            }
            return {
                task: {
                    id: task.id,
                    from: df.clone(task.from),
                    to: df.clone(task.to),
                    data: task.data,
                    isPin: task.isPin,
                    isFinished: task.isFinished,
                    inProcessing: task.inProcessing,
                    isParallel: task.isParallel,
                    parallelFrom: task.parallelFrom,
                    nextOperations: task.nextOperations,
                    process: {
                        id: task.process.id,
                    },
                    row: {
                        id: task.row.id
                    }
                },
                processesMap: processesMap,
                tasksMap: tasksMap,
                timestamp: timestamp
            };
        },
        detectTaskDirection: function(task) {
            var shift = {
                left: task.from - df.clone(task.data.expectedStartTime),
                right: task.to - df.clone(task.data.expectedFinishTime)
            };
            // Task move to left.
            // Task from extend to original from.
            // Task to shorten to original to.
            if ((shift.left < 0 && shift.right < 0) ||
                (shift.left < 0 && shift.right === 0) ||
                (shift.left === 0 && shift.right < 0)) {
                return 'left';
            // Task move to right.
            // Task from shorten to original from.
            // Task to extend to original to.
            } else if ((shift.left > 0 && shift.right > 0) ||
                (shift.left > 0 && shift.right === 0) ||
                (shift.left === 0 && shift.right > 0)) {
                return 'right';
            }
        },
        run: function(task, gantt, callback) {
            var data = this.prepareWorker(task, gantt);
            var rejectTaskMoving = false;
            var worker = new Worker(gantt.ajaxUrl.serverLocation + gantt.ajaxUrl.jsLocationPrefix + this.workerSource());

            worker.onmessage = function(event) {
                rejectTaskMoving = event.data.rejectTaskMoving;
                var originSetupFinishTime, dateFormat = 'YYYY-MM-DDTHH:mm:ss';

                if (event.data.debug !== false) {
                    console.log(event.data);
                } else {
                    if (rejectTaskMoving === true) {
                        for (i = 0, j = event.data.tasksOnMark, l = j.length; i < l; ++i) {
                            if (gantt.tasksMap[j[i].id].rowHasBeenChanged === true &&
                                gantt.tasksMap[j[i].id].preventRowId !== gantt.tasksMap[j[i].id].row.id) {
                                gantt.tasksMap[j[i].id].row.removeTask(j[i].id);
                                gantt.rowsMap[j[i].preventRowId].tasks[j[i].id] = gantt.tasksMap[j[i].id];
                                gantt.rowsMap[j[i].preventRowId].tasks.push(gantt.tasksMap[j[i].id]);
                                gantt.rowsMap[j[i].preventRowId].setTasksMinMaxDate();
                                gantt.tasksMap[j[i].id].row = gantt.rowsMap[j[i].preventRowId];
                                gantt.tasksMap[j[i].id].rowHasBeenChanged = false;
                            }
                            gantt.tasksMap[j[i].id].from = df.clone(gantt.tasksMap[j[i].id].data.expectedStartTime);
                            gantt.tasksMap[j[i].id].to = df.clone(gantt.tasksMap[j[i].id].data.expectedFinishTime);
                            gantt.tasksMap[j[i].id].parallelFrom = df.clone(gantt.tasksMap[j[i].id].data.expectedSetupFinishTime);
                            gantt.tasksMap[j[i].id].parallelFrom = df.addMinutes(gantt.tasksMap[j[i].id].parallelFrom, gantt.tasksMap[j[i].id].data.s2sMins, true);

                            gantt.tasksMap[j[i].id].row.setMinMaxDateByTask(gantt.tasksMap[j[i].id]);
                            gantt.tasksMap[j[i].id].updatePosAndSize();
                            gantt.tasksMap[j[i].id].checkIfMilestone();
                        }
                        if (task.rowHasBeenChanged === true &&
                            task.preventRowId !== task.row.id) {
                            task.row.removeTask(task.id);
                            gantt.rowsMap[task.preventRowId].tasks[task.id] = task;
                            gantt.rowsMap[task.preventRowId].tasks.push(task);
                            gantt.rowsMap[task.preventRowId].setTasksMinMaxDate();
                            task.row = gantt.rowsMap[task.preventRowId];
                            task.rowHasBeenChanged = false;
                        }
                        task.from = df.clone(task.data.expectedStartTime);
                        task.to = df.clone(task.data.expectedFinishTime);
                        task.parallelFrom = df.clone(task.data.expectedSetupFinishTime);
                        task.parallelFrom = df.addMinutes(task.parallelFrom, task.data.s2sMins, true);
                    } else {
                        for (i = 0, j = event.data.tasksOnMark, l = j.length; i < l; ++i) {
                            gantt.tasksMap[j[i].id].from = j[i].from;
                            gantt.tasksMap[j[i].id].to = j[i].to;
                            gantt.tasksMap[j[i].id].parallelFrom = j[i].parallelFrom;

                            originSetupFinishTime = df.clone(gantt.tasksMap[j[i].id].data.expectedSetupFinishTime) - df.clone(gantt.tasksMap[j[i].id].data.expectedStartTime);
                            originSetupFinishTime = df.addMilliseconds(j[i].from, originSetupFinishTime, true);

                            gantt.tasksMap[j[i].id].data.expectedStartTime = moment(j[i].from).format(dateFormat);
                            gantt.tasksMap[j[i].id].data.expectedFinishTime = moment(j[i].to).format(dateFormat);
                            gantt.tasksMap[j[i].id].data.expectedSetupFinishTime = moment(originSetupFinishTime).format(dateFormat);
                            if (gantt.tasksMap[j[i].id].isParallel === true) {
                                gantt.tasksMap[j[i].id].parallelFrom = df.addMinutes(originSetupFinishTime, gantt.tasksMap[j[i].id].data.s2sMins, true);
                            } else {
                                gantt.tasksMap[j[i].id].parallelFrom = gantt.tasksMap[j[i].id].to;
                            }
                            gantt.tasksMap[j[i].id].row.setMinMaxDateByTask(gantt.tasksMap[j[i].id]);
                            gantt.tasksMap[j[i].id].updatePosAndSize();
                            gantt.tasksMap[j[i].id].checkIfMilestone();
                        }

                        originSetupFinishTime = df.clone(task.data.expectedSetupFinishTime) - df.clone(task.data.expectedStartTime);
                        originSetupFinishTime = df.addMilliseconds(task.from, originSetupFinishTime, true);

                        task.data.expectedStartTime = moment(task.from).format(dateFormat);
                        task.data.expectedFinishTime = moment(task.to).format(dateFormat);
                        task.data.expectedSetupFinishTime = moment(originSetupFinishTime).format(dateFormat);
                        if (task.isParallel === true) {
                            task.parallelFrom = df.addMinutes(originSetupFinishTime, task.data.s2sMins, true);
                        } else {
                            task.parallelFrom = task.to;
                        }
                    }
                    task.row.setMinMaxDateByTask(task);
                    task.updatePosAndSize();
                    task.checkIfMilestone();

                    if (typeof callback === 'function') {
                        setTimeout(function() {
                            callback.call(this, rejectTaskMoving, 'ok', event.data);
                        }, 500);
                    }
                }
            };
            worker.onerror = function(event) {
                if (typeof callback === 'function') {
                    callback.call(this, rejectTaskMoving, 'error', event.data);
                }
                throw event.data;
            };
            worker.postMessage(data);
        }
    };
}]);;angular.module('underscore', []).factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
});;gantt.filter('ganttColumnLimit', [ 'binarySearch', function (bs) {
    // Returns only the columns which are visible on the screen

    return function(input, scroll_left, scroll_width) {
        var cmp =  function(c) { return c.left; };
        var start = bs.getIndicesOnly(input, scroll_left, cmp)[0];
        var end = bs.getIndicesOnly(input, scroll_left + scroll_width, cmp)[1];
        return input.slice(start, end);
    };
}]);

gantt.filter('ganttMachineUI2Limit', [ '_', function(_) {
    return function(input, index) {
        return input;
    };
}]);

gantt.filter('ganttColumnPaginationLimit', [ '_', function(_) {
    return function(input, columnPagination, page) {
        if (page > 0 && columnPagination !== undefined && columnPagination[(page - 1)] !== undefined) {
         var _input = [];
         _.each(input, function(row) {
             if (columnPagination[(page - 1)].indexOf(row.id) >= 0) {
                 _input.push(row);
             }
         });
         return _input;
        } else {
         return input;
        }
    };
}]);;gantt.directive('ganttLimitUpdater', ['$timeout', function ($timeout) {
    // Updates the limit filters if the user scrolls the gantt chart

    return {
        restrict: "A",
        controller: ['$scope', '$element', function ($scope, $element) {
            var el = $element[0];
            var update = function() {
                $scope.scroll_start = el.scrollLeft / $scope.getPxToEmFactor();
                $scope.scroll_width = el.offsetWidth / $scope.getPxToEmFactor();
            };

            $element.bind('scroll', function() { $scope.$apply(function() { update(); }); });

            $scope.$watch('gantt.width', function(newValue, oldValue) {
                $timeout(function() {
                    update();
                }, 20, true);
            });
        }]
    };
}]);;gantt.filter('ganttTaskLimit', [function () {
    // Returns only the tasks which are visible on the screen
    // Use the task width and position to decide if a task is still visible

    return function(input, scroll_left, scroll_width) {
        var res = [];
        for(var i = 0, l = input.length; i<l; i++) {
            var task = input[i];
            // If task has a visible part on the screen or if the task is currently being moved/resized by the user
            if (task.left >= scroll_left && task.left <= scroll_left + scroll_width ||
                task.left + task.width >= scroll_left && task.left + task.width <= scroll_left + scroll_width ||
                task.left < scroll_left && task.left + task.width > scroll_left + scroll_width ||
                task.isMoving === true) {
                    res.push(task);
            }
        }

        return res;
    };
}]);;gantt.directive('ganttLabelResizable', ['$document', 'debounce', 'mouseOffset', function ($document, debounce, mouseOffset) {

    return {
        restrict: "A",
        scope: { width: "=ganttLabelResizable",
                 minWidth: "=ganttLabelResizeMin",
                 onResized: "&onLabelResized" },
        controller: ['$scope', '$element', function ($scope, $element) {
            var resizeAreaWidth = 5;
            var cursor = 'ew-resize';
            var originalPos;

            $element.bind("mousedown", function (e) {
                if (isInResizeArea(e)) {
                    enableResizeMode(e);
                    e.preventDefault();
                }
            });

            $element.bind("mousemove", function (e) {
                if (isInResizeArea(e)) {
                    $element.css("cursor", cursor);
                } else {
                    $element.css("cursor", '');
                }
            });

            var resize = function(x) {
                if ($scope.width === 0) {
                    $scope.width = $element[0].offsetWidth;
                }

                $scope.width += x - originalPos;
                if ($scope.width < $scope.minWidth) {
                    $scope.width  = $scope.minWidth;
                }

                originalPos = x;
            };

            var isInResizeArea = function (e) {
                var x = mouseOffset.getOffset(e).x;

                return x > $element[0].offsetWidth - resizeAreaWidth;
            };

            var enableResizeMode = function (e) {
                originalPos = e.screenX;

                angular.element($document[0].body).css({
                    '-moz-user-select': '-moz-none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    'user-select': 'none',
                    'cursor': cursor
                });

                var moveHandler = debounce(function(e) {
                    resize(e.screenX);
                }, 5);

                angular.element($document[0].body).bind("mousemove", moveHandler);

                angular.element($document[0].body).one("mouseup", function() {
                    angular.element($document[0].body).unbind('mousemove', moveHandler);
                    disableResizeMode();
                });
            };

            var disableResizeMode = function () {
                $element.css("cursor", '');

                angular.element($document[0].body).css({
                    '-moz-user-select': '',
                    '-webkit-user-select': '',
                    '-ms-user-select': '',
                    'user-select': '',
                    'cursor': ''
                });

                $scope.onResized({ width: $scope.width });
            };
        }]
    };
}]);;gantt.directive('ganttRightClick', ['$parse', function ($parse) {

    return {
        restrict: "A",
        compile: function($element, attr) {
            var fn = $parse(attr.ganttRightClick);

            return function(scope, element) {
                element.on('contextmenu', function(event) {
                    scope.$apply(function() {
                        fn(scope, {$event:event});
                    });
                });
            };
        }
    };
}]);;gantt.directive('ganttHorizontalScrollReceiver', ['scrollManager', function (scrollManager) {
    // The element with this attribute will scroll at the same time as the scrollSender element

    return {
        restrict: "A",
        controller: ['$scope', '$element', function ($scope, $element) {
            scrollManager.horizontal.push($element[0]);
        }]
    };
}]);;gantt.service('scrollManager', [ function () {
    return { vertical: [], horizontal: [] };
}]);;gantt.directive('ganttScrollSender', ['scrollManager', '$timeout', function (scrollManager, $timeout) {
    // Updates the element which are registered for the horizontal or vertical scroll event

    return {
        restrict: "A",
        controller: ['$scope', '$element', function ($scope, $element) {
            var el = $element[0];
            var updateListeners = function() {
                var i, l;

                for (i = 0, l = scrollManager.vertical.length; i < l; i++) {
                    var vElement = scrollManager.vertical[i];
                    if (vElement.style.top !== -el.scrollTop)
                        vElement.style.top = -el.scrollTop + 'px';
                }

                for (i = 0, l = scrollManager.horizontal.length; i < l; i++) {
                    var hElement = scrollManager.horizontal[i];
                    if (hElement.style.left !== -el.scrollLeft)
                        hElement.style.left = -el.scrollLeft + 'px';
                }
            };

            $element.bind('scroll', updateListeners);

            $scope.$watch('gantt.width', function(newValue, oldValue) {
                if (newValue === 0) {
                    $timeout(function() {
                        updateListeners();
                    }, 20, true);
                }
            });
        }]
    };
}]);;gantt.directive('ganttVerticalScrollReceiver', ['scrollManager', function (scrollManager) {
    // The element with this attribute will scroll at the same time as the scrollSender element

    return {
        restrict: "A",
        controller: ['$scope', '$element', function ($scope, $element) {
            scrollManager.vertical.push($element[0]);
        }]
    };
}]);;gantt.service('sortManager', [ function () {
    // Contains the row which the user wants to sort (the one he started to drag)

    return { startRow: undefined };
}]);;gantt.directive('ganttSortable', ['$document', 'sortManager', function ($document, sortManager) {
    // Provides the row sort functionality to any Gantt row
    // Uses the sortableState to share the current row

    return {
        restrict: "E",
        template: "<div ng-transclude></div>",
        replace: true,
        transclude: true,
        scope: { row: "=ngModel", swap: "&", active: "=?" },
        controller: ['$scope', '$element', function ($scope, $element) {
            $element.bind("mousedown", function () {
                if ($scope.active !== true) {
                    return;
                }

                enableDragMode();

                var disableHandler = function () {
                    $scope.$apply(function() {
                        angular.element($document[0].body).unbind('mouseup', disableHandler);
                        disableDragMode();
                    });
                };
                angular.element($document[0].body).bind("mouseup", disableHandler);
            });

            $element.bind("mousemove", function (e) {
                if (isInDragMode()) {
                    var elementBelowMouse = angular.element($document[0].elementFromPoint(e.clientX, e.clientY));
                    var targetRow = elementBelowMouse.controller("ngModel").$modelValue;

                    $scope.$apply(function() {
                        $scope.swap({a: targetRow, b: sortManager.startRow});
                    });
                }
            });

            var isInDragMode = function () {
                return sortManager.startRow !== undefined && !angular.equals($scope.row, sortManager.startRow);
            };

            var enableDragMode = function () {
                sortManager.startRow = $scope.row;
                $element.css("cursor", "move");
                angular.element($document[0].body).css({
                    '-moz-user-select': '-moz-none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    'user-select': 'none',
                    'cursor': 'no-drop'
                });
            };

            var disableDragMode = function () {
                sortManager.startRow = undefined;
                $element.css("cursor", "pointer");
                angular.element($document[0].body).css({
                    '-moz-user-select': '',
                    '-webkit-user-select': '',
                    '-ms-user-select': '',
                    'user-select': '',
                    'cursor': 'auto'
                });
            };
        }]
    };
}]);;gantt.directive('ganttBounds', [function () {
    // Displays a box representing the earliest allowable start time and latest completion time for a job
    var boundsTemplateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            boundsTemplateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return boundsTemplateLocation + "default.bounds.tmpl.html";
            } else {
                return boundsTemplateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: { task: "=ngModel" },
        controller: ['$scope', '$element', function ($scope, $element) {
            var css = {};

            if(!$scope.task.hasBounds()) {
               $scope.visible = false;
            }

            $scope.getCss = function() {
                if($scope.task.hasBounds()) {
                    css.width = $scope.task.bounds.width + 'em';

                    if($scope.task.isMilestone === true || $scope.task.width === 0) {
                        css.left = ($scope.task.bounds.left-($scope.task.left-0.3)) + 'em';
                    } else {
                        css.left = ($scope.task.bounds.left - $scope.task.left) + 'em';
                    }
                }

                return css;
            };

            $scope.getClass = function() {
                if($scope.task.est === undefined || $scope.task.lct === undefined) {
                    return 'gantt-task-bounds-in';
                } else if($scope.task.est > $scope.task.from) {
                    return 'gantt-task-bounds-out';
                } else if($scope.task.lct < $scope.task.to) {
                    return 'gantt-task-bounds-out';
                } else {
                    return 'gantt-task-bounds-in';
                }
            };

            $scope.$watch("task.isMouseOver", function () {
                if ($scope.task.hasBounds() && !$scope.task.isMoving) {
                    $scope.visible = !($scope.task.isMouseOver === undefined || $scope.task.isMouseOver === false);
                }
            });

            $scope.$watch("task.isMoving", function(newValue, oldValue) {
                if ($scope.task.hasBounds()) {
                    $scope.visible = newValue === true;
                }
            });
        }]
    };
}]);;gantt.directive('ganttTask', ['$window', '$document', '$timeout', 'smartEvent', 'debounce', 'dateFunctions', 'mouseOffset', 'mouseButton', 'binarySearch', '_', 'taskWorker', 'coloured', function ($window, $document, $timeout, smartEvent, debounce, df, mouseOffset, mouseButton, bs, _, worker, coloured) {
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
            var mouseOffsetInEm = [];
            var moveStartX;
            var scrollInterval;
            var rejectTaskMoving = false;

            $scope.gantt.multipleTasksSelected = [];

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
                    if (e.shiftKey === true) {
                        if ($scope.gantt.multipleTasksSelected.length === 0) {
                            var i, j, k, l, m, n, jMap = $scope.gantt.jobsMap;
                            for (i = 0, k = _.keys(jMap), l = k.length; i < l; ++i) {
                                for (j = 0, m = _.keys(jMap[k[i]].tasks), n = m.length; j < n; ++j) {
                                    jMap[k[i]].tasks[m[j]].isHighlight = false;
                                }
                            }
                        }
                        if ($scope.gantt.multipleTasksSelected.indexOf($scope.task.id) >= 0) {
                            delete $scope.gantt.multipleTasksSelected[$scope.gantt.multipleTasksSelected.indexOf($scope.task.id)];
                            $scope.task.isHighlight = false;
                        } else {
                            $scope.gantt.multipleTasksSelected.push($scope.task.id);
                            $scope.task.isHighlight = true;
                        }
                    } else {
                        if (!taskHasBeenChanged) {
                            toggleTaskHighlight();
                            $scope.raiseTaskClickedEvent(e, $scope.task);
                        }
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
                            // { key: 'flowchart', name: 'Show Job Flow' },
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
                            // { key: 'flowchart', name: 'Show Job Flow' },
                            // { key: 'info', name: 'Show Information' },
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
                    if ($scope.allowTaskRowSwitching && $scope.gantt.multipleTasksSelected.length === 0) {
                        var targetRow = getRowByY(mousePos.y);
                        if (targetRow !== undefined &&
                            targetRow.showup === true &&
                            targetRow.id !== $scope.task.row.id &&
                            $scope.task.row.data.factoryOperation.id === targetRow.data.factoryOperation.id) {
                            targetRow.moveTaskToRow($scope.task);
                        }
                    }

                    if ($scope.allowTaskMoving) {
                        $scope.task.moveTo(xInEm - mouseOffsetInEm[$scope.task.id]);
                        if ($scope.gantt.multipleTasksSelected.length > 0) {
                            _.each($scope.gantt.multipleTasksSelected, function(task_id) {
                                if (task_id !== $scope.task.id) {
                                    $scope.gantt.tasksMap[task_id].mouseOffsetX = mousePos.x;
                                    $scope.gantt.tasksMap[task_id].moveTo(xInEm - mouseOffsetInEm[task_id]);
                                }
                            });
                        }
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
                mouseOffsetInEm[$scope.task.id] = xInEm - $scope.task.left;

                if ($scope.gantt.multipleTasksSelected.length > 0) {
                    _.each($scope.gantt.multipleTasksSelected, function(task_id) {
                        mouseOffsetInEm[task_id] = xInEm - $scope.gantt.tasksMap[task_id].left;
                    });
                }

                var taskMoveHandler = debounce(function(e) {
                    var mousePos = mouseOffset.getOffsetForElement(ganttBodyElement[0], e);
                    clearScrollInterval();
                    handleMove(mode, mousePos);
                }, 5);
                smartEvent($scope, windowElement, 'mousemove', taskMoveHandler).bind();

                smartEvent($scope, windowElement, 'mouseup', function(e) {
                    $scope.$apply(function() {
                        windowElement.unbind('mousemove', taskMoveHandler);
                        disableMoveMode(e);
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

            var disableMoveMode = function (e) {
                $scope.task.isMoving = false;
                clearScrollInterval();
                mouseOffsetInEm = [];

                if (e.shiftKey === false) {
                    if ($scope.gantt.multipleTasksSelected.length > 0) {
                        _.each($scope.gantt.multipleTasksSelected, function(task_id) {
                            $scope.gantt.tasksMap[task_id].isHighlight = false;
                        });
                    }
                }

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
                    // $scope.gantt.showOnProcessing = true; // Lightbox
                    // checkTaskOverlap();
                    checkTaskReject();
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

            var checkTaskReject = function() {
                var i, j, k, l, m, n, o, w,
                    rejectTaskMoving = false,
                    map = $scope.gantt.tasksMap,
                    processesMap = $scope.gantt.processesMap,
                    task, originSetupFinishTime,
                    dateFormat = 'YYYY-MM-DDTHH:mm:ss',
                    tasks = $scope.gantt.multipleTasksSelected.length > 0 ? $scope.gantt.multipleTasksSelected : [];
                    tasks.push($scope.task.id);

                if (tasks.length > 0) {
                    for (j = 0, n = tasks.length; j < n; j++) {
                        for (i = 0, k = _.keys(map), l = k.length; i < l; i++) {
                            task = $scope.gantt.tasksMap[tasks[j]];
                            console.log(processesMap[map[k[i]].process.id], processesMap[task.process.id]);
                            if (map[k[i]].process.id === task.process.id) {

                            } else {
                                if (task.from >= map[k[i]].from && (
                                    processesMap[map[k[i]].process.id].previous.indexOf(task.process.id) >= 0 ||
                                    processesMap[task.process.id].next.indexOf(map[k[i]].process.id) >= 0)) {
                                    console.log('reject 1');
                                    rejectTaskMoving = true;
                                    break;
                                }
                            }
                        }
                    }
                }

                if (rejectTaskMoving === true) {
                    console.log('reject!!!');
                } else {
                    console.log('all good to go.');

                    for (j = 0, n = tasks.length; j < n; j++) {
                        task = $scope.gantt.tasksMap[tasks[j]];

                        if (task.id !== $scope.task.id) {
                            w = df.clone($scope.task.from) - df.clone($scope.task.data.expectedStartTime);
                            task.from = df.addMilliseconds(task.from, w, true);
                            task.to = df.addMilliseconds(task.to, w, true);
                            task.parallelFrom = df.addMilliseconds(task.parallelFrom, w, true);
                        } else {
                            if (task.isParallel === true) {
                                task.parallelFrom = df.addMilliseconds(df.addMinutes(task.parallelFrom, 1, true), task.parallelFrom - task.from, true);
                            } else {
                                task.parallelFrom = df.addMilliseconds(df.addMinutes(task.to, 1, true), task.parallelFrom - task.from, true);
                            }
                        }

                        originSetupFinishTime = df.clone(task.data.expectedSetupFinishTime) - df.clone(task.data.expectedStartTime);
                        originSetupFinishTime = df.addMilliseconds(task.from, originSetupFinishTime, true);

                        task.data.expectedStartTime = moment(task.from).format(dateFormat);
                        task.data.expectedFinishTime = moment(task.to).format(dateFormat);
                        task.data.expectedSetupFinishTime = moment(originSetupFinishTime).format(dateFormat);
                        if (task.isParallel === true) {
                            task.parallelFrom = df.addMinutes(originSetupFinishTime, task.data.s2sMins, true);
                        } else {
                            task.parallelFrom = task.to;
                        }
                        task.row.setMinMaxDateByTask(task);
                        task.updatePosAndSize();
                        task.checkIfMilestone();
                    }
                }

                $scope.gantt.multipleTasksSelected = [];
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
;gantt.directive('ganttTooltip', ['$timeout', '$document', 'debounce', 'smartEvent', function ($timeout, $document, debounce, smartEvent) {
    // This tooltip displays more information about a task
    var tooltipTemplateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            tooltipTemplateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return tooltipTemplateLocation + "default.tooltip.tmpl.html";
            } else {
                return tooltipTemplateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: { task: "=ngModel" },
        controller: ['$scope', '$element', function ($scope, $element) {
            var bodyElement = angular.element($document[0].body);
            var parentElement = $element.parent();
            $scope.visible = false;
            $scope.css = {};

            $scope.$watch("task.isMouseOver", function(newValue, oldValue) {
                if (newValue === true) {
                    showTooltip($scope.task.mouseX);
                } else if (newValue === false && $scope.task.isMoving === false) {
                    hideTooltip();
                }
            });

            var mouseMoveHandler = smartEvent($scope, bodyElement, 'mousemove', debounce(function (e) {
                if ($scope.visible === true) {
                    updateTooltip(e.clientX);
                } else {
                    showTooltip(e.clientX);
                }
            }, 1));

            $scope.$watch("task.isMoving", function(newValue, oldValue) {
                if (newValue === true) {
                    mouseMoveHandler.bind();
                } else if (newValue === false ) {
                    mouseMoveHandler.unbind();
                    hideTooltip();
                }
            });

            var getViewPortWidth = function() {
                var d = $document[0];
                return d.documentElement.clientWidth || d.documentElement.getElementById('body')[0].clientWidth;
            };

            var showTooltip = function(x) {
                $scope.visible = true;

                $timeout(function () {
                    updateTooltip(x);

                    $scope.css.top = parentElement[0].getBoundingClientRect().top + "px";
                    $scope.css.marginTop = -$element[0].offsetHeight - 8 + "px";
                    $scope.css.opacity = 1;
                }, 1, true);
            };

            var updateTooltip = function(x) {
                $element.removeClass('gantt-task-infoArrow');
                $element.removeClass('gantt-task-infoArrowR');

                // Check if info is overlapping with view port
                if (x + $element[0].offsetWidth > getViewPortWidth()) {
                    $scope.css.left = (x + 20 - $element[0].offsetWidth) + "px";
                    $element.addClass('gantt-task-infoArrowR'); // Right aligned info
                } else {
                    $scope.css.left = (x - 20) + "px";
                    $element.addClass('gantt-task-infoArrow');
                }
            };

            var hideTooltip = function() {
                $scope.css.opacity = 0;
                $scope.visible = false;
            };
        }]
    };
}]);;gantt.directive('ganttContextMenu', ['$window', '$document', '$timeout', 'mouseOffset', function ($window, $document, $timeout, mouseOffset) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "default.contentmenu.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: { menu: "=ngModel" },
        controller: ['$scope', '$rootScope', '$element', function ($scope, $rootScope, $element) {
            var bodyElement = angular.element($document[0].body);

            var viewScaleList = ['minute', 'hour', 'threehours', 'sixhours', 'eighthours', 'twevelhours', 'day', 'week', 'month'];
            var key = 0, xInEm, clickedColumn, date;

            bodyElement.bind('click', function(e) {
                $scope.$apply(function() {
                    $scope.$parent.gantt.contextMenu = undefined;
                });
            });

            $scope.contextMenuLink = function(key, target, type, $element, e) {
                switch(key) {
                    case 'task':
                        switch(type) {
                            case 'pin':
                                if (confirm('Are you sure to '+(target.isPin ? 'pin' : 'unpin')+' this Task?')) {
                                    target.isPin = !target.isPin;
                                    target.dirty = true;
                                    target.isManual = true;
                                }
                            break;
                            case 'finished':
                                if (target.isFinished === false && confirm('Are you sure to finish this Task?')) {
                                    if (confirm('YOU CANNOT REDO THIS ACTION!!!')) {
                                        target.isFinished = !target.isFinished;
                                        target.dirty = true;
                                        target.isManual = true;
                                    }
                                }
                            break;
                            case 'add':
                                target.gantt.enableTaskEditor = target.row;
                            break;
                            case 'edit':
                                target.gantt.enableTaskEditor = target;
                            break;
                            case 'flowchart':
                                target.gantt.jobFlowChart = target.gantt.jobsMap[target.job.id];
                            break;
                            case 'info':
                                target.gantt.showTaskInformation = target;
                            break;
                            case 'zoomin':
                                key = viewScaleList.indexOf($scope.$parent.viewScale) - 1;
                                $rootScope.$$childTail.scale = viewScaleList[key];

                                xInEm = mouseOffset.getOffset(e).x / $scope.$parent.getPxToEmFactor();
                                clickedColumn = $scope.$parent.gantt.getColumnByPosition(xInEm);
                                date = $scope.$parent.gantt.getDateByPosition(xInEm);

                                $scope.$parent.scrollToDate(date);
                            break;
                            case 'zoomout':
                                key = viewScaleList.indexOf($scope.$parent.viewScale) + 1;
                                $rootScope.$$childTail.scale = viewScaleList[key];

                                xInEm = mouseOffset.getOffset(e).x / $scope.$parent.getPxToEmFactor();
                                clickedColumn = $scope.$parent.gantt.getColumnByPosition(xInEm);
                                date = $scope.$parent.gantt.getDateByPosition(xInEm);

                                $scope.$parent.scrollToDate(date);
                            break;
                            case 'delete':
                                if (confirm('Are you sure to delete this Task?')) {
                                    target.dirty = true;
                                    target.isDeleted = true;
                                    target.isManual = true;

                                    var process = target.gantt.processesMap[target.process.id];
                                    var _operations = [];
                                    _.each(process.operations, function(operation) {
                                        if (operation !== target.id) {
                                            _operations.push(operation);
                                        }
                                    });
                                    process.operations = _operations;

                                    var _previousOperation = null;
                                    if (target.previousOperation !== null && target.gantt.tasksMap[target.previousOperation] !== undefined) {
                                        _previousOperation = target.gantt.tasksMap[target.previousOperation].id;
                                    }
                                    if (target.nextOperations.length > 0) {
                                        _.each(target.nextOperations, function(task_id) {
                                            var task = target.gantt.tasksMap[task_id];

                                            if (parseInt(task.previousOperation, 10) === parseInt(target.id, 10)) {
                                                task.previousOperation = _previousOperation;
                                            }
                                        });
                                    }


                                    $element.remove();
                                }
                            break;
                        }
                    break;
                    case 'row':
                        switch(type) {
                            case 'add':
                                target.gantt.enableTaskEditor = target;
                            break;
                            case 'zoomin':
                                key = viewScaleList.indexOf($scope.$parent.viewScale) - 1;
                                $rootScope.$$childTail.scale = viewScaleList[key];

                                xInEm = mouseOffset.getOffset(e).x / $scope.$parent.getPxToEmFactor();
                                clickedColumn = $scope.$parent.gantt.getColumnByPosition(xInEm);
                                date = $scope.$parent.gantt.getDateByPosition(xInEm);

                                $scope.$parent.scrollToDate(date);
                            break;
                            case 'zoomout':
                                key = viewScaleList.indexOf($scope.$parent.viewScale) + 1;
                                $rootScope.$$childTail.scale = viewScaleList[key];

                                xInEm = mouseOffset.getOffset(e).x / $scope.$parent.getPxToEmFactor();
                                clickedColumn = $scope.$parent.gantt.getColumnByPosition(xInEm);
                                date = $scope.$parent.gantt.getDateByPosition(xInEm);

                                $scope.$parent.scrollToDate(date);
                            break;
                        }
                    break;
                }
            };

            // var parentElement = $element.parent();
            // $scope.visible = false;
            // $scope.css = {};

            // $scope.$watch("task.openContextMenu", function(newValue, oldValue) {
            //     if (newValue === true) {
            //         openContextMenu($scope.task.mouseX);
            //     } else if (newValue === false && $scope.task.isMoving === false) {
            //         closeContextMenu();
            //     }
            // });

            // var getViewPortWidth = function() {
            //     var d = $document[0];
            //     return d.documentElement.clientWidth || d.documentElement.getElementById('body')[0].clientWidth;
            // };

            // var openContextMenu = function(x) {
            //     if (cm.menuTask !== null) {
            //         cm.menuTask.openContextMenu = false;
            //     }
            //     if (x + $element[0].offsetWidth > getViewPortWidth()) {
            //         $scope.css.left = (x + 20 - $element[0].offsetWidth) + "px";
            //     } else {
            //         $scope.css.left = (x - 20) + "px";
            //     }
            //     $scope.css.top = parentElement[0].getBoundingClientRect().top + "px";
            //     $scope.css.marginTop = -$element[0].offsetHeight - 8 + "px";
            //     $scope.css.opacity = 1;

            //     cm.menuTask = $scope.task;
            // };

            // var closeContextMenu = function() {
            //     $scope.css.opacity = 0;
            //     $scope.visible = false;
            //     if (cm.menuTask !== null) {
            //         cm.menuTask.openContextMenu = false;
            //         cm.menuTask = null;
            //     }
            // };
        }]
    };
}]);
;gantt.factory('debounce',['$timeout', function ($timeout) {
    function debounce(fn, timeout) {
        var nthCall = 0;
        return function() {
            var self = this;
            var argz = arguments;
            nthCall++;
            var later = (function(version) {
                return function() {
                    if (version === nthCall) {
                        return fn.apply(self, argz);
                    }
                };
            })(nthCall);
            return $timeout(later, timeout, true);
        };
    }

    return debounce;
}]);;gantt.directive('ganttDepartment', ['$timeout', '$document', 'debounce', 'smartEvent', '_',  function ($timeout, $document, debounce, smartEvent, _) {
    var templateLocation = '', department;

    function sortDepartment(department) {
        var tempArray = [], tempSubArray = [], sortFunction = function(a, b) { return a.sortBy - b.sortBy; };
        for (var i = 0, k = _.keys(department), l = k.length; i < l; i++) {
            if (department[k[i]] !== undefined) {
                tempSubArray = [];
                if (_.keys(department[k[i]].sub).length > 0) {
                    for (var j = 0, m = _.keys(department[k[i]].sub), n = m.length; j < n; j++) {
                        tempSubArray.push({
                            name: m[j],
                            sortBy: department[k[i]].sub[m[j]].sortBy,
                            rows: department[k[i]].sub[m[j]].rows
                        });
                    }
                    tempSubArray.sort(sortFunction);
                }
                tempArray.push({
                    name: k[i],
                    sortBy: department[k[i]].sortBy,
                    sub: tempSubArray,
                    rows: department[k[i]].rows
                });
            }
        }
        tempArray.sort(sortFunction);
        return tempArray;
    }

    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix +'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "default.department.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: {
            dept: "=ngModel"
        },
        controller: ['$scope', '$element', function ($scope, $element) {
            var deptname = -1, subdeptname = -1;
            $scope.departmentMap = [];

            $scope.$watch('dept', function(newValue, oldValue) {
                $scope.departmentMap = sortDepartment(newValue);
                $scope.ganttDepartmentFilter = -1;
                $scope.ganttSubDepartmentFilter = -1;
            });

            // $scope.dept = [];

            // $scope.$watch('gantt.rowsMap', function(newValue, oldValue) {
            //     if (!angular.equals(newValue, oldValue) || _.keys(departmentMap).length === 0) {
            //         departmentMap = {};
            //         for (var i = 0, r = newValue, k = _.keys(r), l = k.length; i < l; ++i) {
            //             var department = r[k[i]].data.settingsMachine.dept;

            //             if (department.name in departmentMap) {
            //                 var dept = departmentMap[department.name];
            //                 if (department.subDept !== undefined && department.subDept !== '') {
            //                     if (department.subDept in dept.sub) {
            //                         departmentMap[department.name].sub[department.subDept].rows.push(r[k[i]]);
            //                     } else {
            //                         departmentMap[department.name].sub[department.subDept] = {
            //                             sort: department.sort || 0,
            //                             rows: [r[k[i]]]
            //                         };
            //                     }
            //                 }
            //                 departmentMap[department.name].rows.push(r[k[i]]);
            //             } else {
            //                 departmentMap[department.name] = {
            //                     sub: {},
            //                     rows: [],
            //                     sort: department.sort || 0
            //                 };
            //                 if (department.subDept !== undefined && department.subDept !== '') {
            //                     departmentMap[department.name].sub[department.subDept] = {
            //                         sort: department.sort || 0,
            //                         rows: [r[k[i]]]
            //                     };
            //                 }
            //                 departmentMap[department.name].rows = [r[k[i]]];
            //             }
            //         }
            //         $scope.$parent.gantt.departmentMap = departmentMap;
            //         $scope.dept = sortDepartment(departmentMap);
            //         console.log('initial department select options', $scope.dept);
            //     }
            // });

            $scope.columnPage = $scope.$parent.gantt.columnPage;

            $scope.$watch("ganttDepartmentFilter", function (newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    deptname = parseInt(newValue, 10);
                    $scope.ganttSubDepartmentFilter = -1;
                    filterRows();
                }
            });

            $scope.$watch("ganttSubDepartmentFilter", function (newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    subdeptname = parseInt(newValue, 10);
                    filterRows();
                }
            });

            $scope.previousColumnPage = function() {
                if (deptname === '-1' || deptname === -1 || deptname === undefined) {
                    if ($scope.$parent.gantt.columnPage > 1) {
                        $scope.$parent.gantt.columnPage--;
                    }
                    $scope.columnPage = $scope.$parent.gantt.columnPage;
                    $scope.$parent.gantt.rowsCounter = $scope.$parent.gantt.columnPagination[($scope.columnPage - 1)].length;
                    $scope.$parent.gantt.visibleRows = [];
                    for (var i = 0, k = _.keys($scope.$parent.gantt.rows), l = k.length; i < l; ++i) {
                        if ($scope.$parent.gantt.columnPagination[($scope.columnPage - 1)].indexOf($scope.$parent.gantt.rows[k[i]].id) >= 0) {
                            $scope.$parent.gantt.visibleRows.push(k[i]);
                        }
                    }
                }
            };
            $scope.nextColumnPage = function() {
                if (deptname === '-1' || deptname === -1 || deptname === undefined) {
                    if ($scope.$parent.gantt.columnPage < $scope.$parent.gantt.columnPagination.length) {
                        $scope.$parent.gantt.columnPage++;
                    }
                    $scope.columnPage = $scope.$parent.gantt.columnPage;
                    $scope.$parent.gantt.rowsCounter = $scope.$parent.gantt.columnPagination[($scope.columnPage - 1)].length;
                    $scope.$parent.gantt.visibleRows = [];
                    for (var i = 0, k = _.keys($scope.$parent.gantt.rows), l = k.length; i < l; ++i) {
                        if ($scope.$parent.gantt.columnPagination[($scope.columnPage - 1)].indexOf($scope.$parent.gantt.rows[k[i]].id) >= 0) {
                            $scope.$parent.gantt.visibleRows.push(k[i]);
                        }
                    }
                }
            };

            var filterRows = function() {
                var i, j, k, l, m, n;
                var showupRowsCounter = 0;
                $scope.columnPage = 1;
                $scope.$parent.gantt.visibleRows = [];

                console.log($scope.departmentMap, deptname, subdeptname);

                if (deptname === '-1' || deptname === -1 || deptname === undefined) {
                    for (i in $scope.departmentMap) {
                        for (j = 0, l = $scope.departmentMap[i].rows.length; j < l; j++) {
                            $scope.departmentMap[i].rows[j].showup = true;
                            showupRowsCounter++;
                        }
                    }
                    $scope.$parent.gantt.columnPage = 1;
                } else {
                    $scope.$parent.gantt.columnPage = 0;
                    if (subdeptname === undefined || subdeptname === '-1' || subdeptname === -1) {
                        for (i = 0, m = $scope.departmentMap.length; i < m; i++) {
                            for (j = 0, l = $scope.departmentMap[i].rows.length; j < l; j++) {
                                if (i !== deptname) {
                                    $scope.departmentMap[i].rows[j].showup = false;
                                } else {
                                    $scope.departmentMap[i].rows[j].showup = true;
                                    showupRowsCounter++;
                                }
                            }
                        }
                    } else {
                        for (j = 0, m = $scope.departmentMap[deptname].sub.length; j < m; j++) {
                            for (k = 0, l = $scope.departmentMap[deptname].sub[j].rows.length; k < l; k++) {
                                if (j !== subdeptname) {
                                    $scope.departmentMap[deptname].sub[j].rows[k].showup = false;
                                } else{
                                    $scope.departmentMap[deptname].sub[j].rows[k].showup = true;
                                    showupRowsCounter++;
                                }
                            }
                        }
                    }
                }
                for (i = 0, k = _.keys($scope.$parent.gantt.rows), l = k.length; i < l; ++i) {
                    if ($scope.$parent.gantt.rows[k[i]].showup === true) {
                        $scope.$parent.gantt.visibleRows.push(k[i]);
                    }
                }
                $scope.$parent.gantt.rowsCounter = showupRowsCounter;
            };
        }]
    };
}]);
;gantt.directive('ganttJobFlowchart', ['$window', '$document', '$timeout', '_', 'coloured', function ($window, $document, $timeout, _, coloured) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix +'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "default.flowchart.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: { job: "=ngModel" },
        controller: ['$scope', '$element', function ($scope, $element) {
            var bodyElement = angular.element($document[0].body);
            var svg = d3.select("#gantt-job-flowchart-svg g");
            var margin = 20;
            var g = new graphlib.CDigraph();
            var renderer = new dagreD3.Renderer();
            var processTasksMap = {}, process_id;
            var processTaskSortable = function(t1, t2) { return t1.foo - t2.foo; };
            var foo = {};
            var tasksMap = $scope.$parent.gantt.tasksMap;
            var process = $scope.$parent.gantt.processesMap;
            var i, j, k, l, m, n, o, p, q, r, colors = {};

            $scope.css = {
                height: '100%'
            };
            var test = $scope.job.tasks;// $scope.$parent.gantt.jobsMap['2044'].tasks;
            for (i = 0, j = test/*$scope.job.tasks*/, l = j.length; i < l; ++i) {
                colors[j[i].id.toString()] = j[i].color;

                if (j[i].process.id in processTasksMap) {
                    // DO NOTHING
                } else {
                    processTasksMap[j[i].process.id] = [];
                }

                if (j[i].isDeleted === true) {
                    // DO NOTHING
                } else {
                    var label = [];
                    var blankLine = "                        ";
                    /*
                     * Job Flow UI
                     * 每一個工序上顯示
                     * 1.  PO# => operation.job.poNo
                     * 2.  PO QTY (Gang的QTY 跟 Card Qty 依照不同工序需求顯示)
                     * PO QTY => operation.job.comboQuantity
                     * Gang QTY, Card Qty => operation.quantity
                     * 3.  Gang# 跟 Job#
                     * Gang# => operation.operation_code
                     * Job# => operation.operation_code
                     * 4.  Job Style  => operation.processingType
                     * 5.  Machine Name => from screen
                     * 6.  Start Time and End time => from screen
                     * 7.  Duration(每個工序所需的工作時間) => from screen
                     * 8.  工序名稱: ex: PT or Mid-Mag, Mid-Lam…等(若無也可) => machine.factoryOperation.displayNames
                     * 9.  目前完成狀態，已完成，執行中跟未開始等 若有Pin也顯示出icon => from screen
                     */
                    label.push('process id: ' + j[i].process.id);
                    label.push('task id: ' + j[i].data.id);
                    label.push('previous task id: ' + j[i].data.previousOperation);
                    label.push('next tasks: ' + j[i].data.nextOperations);
                    label.push("========================");

                    label.push('PO#: ' + j[i].job.poNo);
                    label.push('PO QTY: ' + j[i].job.comboQuantity);
                    label.push(blankLine);

                    var jobStyle = j[i].data.processingType;
                    var operationCodeTitle = '', quantityTitle = '';
                    if (jobStyle === 'GANG') {
                        operationCodeTitle = 'Gang#: ';
                        quantityTitle = 'Gang QTY: ';
                    } else if (jobStyle === 'JOB') {
                        operationCodeTitle = 'Job#: ';
                        quantityTitle = 'Job QTY: ';
                    } else if (jobStyle === 'JOB_FILE') {
                        operationCodeTitle = 'Job file#: ';
                        quantityTitle = 'Job file QTY: ';
                    }
                    label.push('Job Style: ' + j[i].data.processingType);
                    label.push(operationCodeTitle + j[i].data.operationCode);
                    label.push(quantityTitle + j[i].data.quantity);
                    label.push(blankLine);

                    label.push('Run on Machine: ' + j[i].row.description);
                    label.push(blankLine);

                    label.push('Start time: ' + moment(j[i].from).format('YYYY-MM-DD hh:mm'));
                    label.push('Finish time: ' + moment(j[i].to).format('YYYY-MM-DD hh:mm'));
                    label.push('Duration: ' + ((j[i].to - j[i].from) / 1000 / 60 / 60).toFixed(2) + ' (hrs)');
                    label.push(blankLine);

                    label.push('Finished: ' + (j[i].isFinished === true ? 'Y' : 'N'));
                    label.push('Pin: ' + (j[i].isPin === true ? 'Y' : 'N'));
                    label.push('In Processing: ' + (j[i].inProcessing === true ? 'Y' : 'N'));
                    label.push(blankLine);

                    label = label.join("\n");

                    g.addNode(j[i].id.toString(), { label: label, color: j[i].data.color2.replace('0x', '#') });

                    processTasksMap[j[i].process.id].push({
                        id: j[i].id.toString(),
                        previous: j[i].previousOperation,
                        next: j[i].nextOperations,
                        foo: j[i].data.factoryOperation.priority * 1,
                        processId: j[i].process.id * 1,
                        parallel: j[i].isParallel,
                        order: j[i].to.getTime()
                    });
                }
            }

            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (processTasksMap[k[i]].length > 0) {
                    g.addNode(k[i].toString(), { label: 'Process ' + k[i].toString() });

                    if (process_id !== k[i]) {
                        if (process_id !== undefined && g.hasNode(process_id + '_last') === false) {
                            g.addNode(process_id + '_last', { label: '' });
                            g.parent(process_id + '_last', process_id.toString());
                        }
                        if (g.hasNode(k[i].toString() + '_first') === false) {
                            g.addNode(k[i].toString() + '_first', { label: '' });
                            g.parent(k[i].toString() + '_first', k[i].toString());
                            process_id = k[i];
                        }
                    }
                }
            }

            for (i = 0, j = test/*$scope.job.tasks*/, l = j.length; i < l; ++i) {
                if (g.hasNode(j[i].id.toString()) && g.hasNode(j[i].process.id.toString())) {
                    g.parent(j[i].id.toString(), j[i].process.id.toString());
                }
            }

            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (processTasksMap[k[i]].length > 0) {
                    processTasksMap[k[i]].sort(processTaskSortable);
                    for (m = 0, n = processTasksMap[k[i]], o = n.length; m < o; ++m) {
                        if (k[i] in foo) {
                            foo[k[i]] = _.union(foo[k[i]], [n[m].foo]);
                        } else {
                            foo[k[i]] = [n[m].foo];
                        }
                    }
                }
            }
            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (processTasksMap[k[i]].length > 0) {
                    for (m = 0, n = processTasksMap[k[i]], o = n.length; m < o; ++m) {
                        var checkPriority = false;

                        if (foo[k[i]].length === 1 && processTasksMap[k[i]].length >= 1) {
                            for (r = 0, p = processTasksMap[k[i]], q = p.length; r < q; ++r) {
                                if (p.parallel === true) {
                                    checkPriority = true;
                                    break;
                                }
                            }
                        }
                        if (checkPriority === true && foo[k[i]].length === 1) {
                            if (g.hasNode(k[i] + '_last')) {
                                g.addEdge(null, n[m].id.toString(), k[i] + '_last', {});
                            }
                            if (g.hasNode(k[i] + '_first') && n[m].foo === n[0].foo) {
                                g.addEdge(null, k[i] + '_first', n[m].id.toString(), {});
                            }
                        } else {
                            if (g.hasNode(n[m].id.toString()) && g.hasNode(n[m].previous)) {
                                g.addEdge(null, n[m].previous, n[m].id.toString(), {});
                                if (n[m].foo === n[o - 1].foo &&
                                    g.hasNode(k[i] + '_last')) {
                                    if (n[m].next.length > 0) {
                                        for(p = 0, q = n[m].next; p < q.length; ++p) {
                                            if (g.hasNode(q[p].toString())) continue;
                                            g.addEdge(null, n[m].id.toString(), k[i] + '_last', {});
                                        }
                                    } else {
                                        var link_last = true;
                                        for(p = 0, q = processTasksMap[n[m].processId]; p < q.length; ++p) {
                                            if (g.hasNode(q[p].id) &&
                                                q[p].previous === n[m].id.toString()
                                                ) {
                                                link_last = false;
                                                break;
                                            }
                                        }
                                        if (link_last) g.addEdge(null, n[m].id.toString(), k[i] + '_last', {});
                                    }
                                }
                            } else {
                                if ((n[m].foo === n[0].foo || g.hasNode(n[m].previous) === false) &&
                                    g.hasNode(k[i] + '_first')) {
                                    g.addEdge(null, k[i] + '_first', n[m].id.toString(), {});
                                }
                                if ((n[m].foo === n[0].foo || n[m].next.length === 0) &&
                                    g.hasNode(k[i] + '_last')) {
                                    g.addEdge(null, k[i] + '_last', n[m].id.toString(), {});
                                }
                            }
                        }
                    }
                }
            }

            var findPreviousProcessNode = function(process) {
                var processMap = $scope.$parent.gantt.processesMap, previousProcesses = [];
                if (process === undefined) return [];
                process.previous.sort(function(a, b) { return b - a; });
                for (j = 0, m = process.previous, n = m.length; j < n; ++j) {
                    if (g.hasNode(m[j].toString())) {
                        previousProcesses.push(m[j].toString());
                    } else {
                        previousProcesses = _.union(previousProcesses, findPreviousProcessNode(processMap[m[j]]));
                    }
                }
                return previousProcesses;
            };

            for (i = 0, k = _.keys(processTasksMap), l = k.length; i < l; ++i) {
                if (g.hasNode(k[i].toString() + '_first')) {
                    processTasksMap[k[i]].sort(processTaskSortable);
                    if ((previousProcesses = findPreviousProcessNode(process[k[i]])) !== false &&
                        previousProcesses.length > 0) {
                        for(j = 0, m = previousProcesses, n = m.length; j < n; ++j) {
                            g.addEdge(null, m[j] + '_last', k[i] + '_first', {});
                        }
                    }

                }
            }

            process = undefined;
            processTasksMap = undefined;
            process_id = undefined;
            processTaskSortable = undefined;
            foo = undefined;
            tasksMap = undefined;

            var oldPostRender = renderer.postRender();

            var isComposite = function(graph, u) {
                return 'children' in graph && graph.children(u).length;
            };

            var addLabel = function(node, root, marginX, marginY) {
                // Add the rect first so that it appears behind the label
                var label = node.label;
                var rect = root.append('rect');
                var labelSvg = root.append('g');
                addTextLabel(label,
                             labelSvg,
                             Math.floor(node.labelCols),
                             node.labelCut);

                var bbox = root.node().getBBox();

                labelSvg.attr('transform',
                              'translate(' + (-bbox.width / 2) + ',' + (-bbox.height / 2) + ')');

                var color = node.color !== undefined && node.color !== '' && node.color || '#ffffff';
                var fillColor = coloured.isDarkColoured(color.replace('#', '')) ? '#ffffff' : '#000000';

                root.attr('fill', fillColor);

                rect
                    .attr('rx', 5)
                    .attr('ry', 5)
                    .attr('x', -(bbox.width / 2 + marginX))
                    .attr('y', -(bbox.height / 2 + marginY))
                    .attr('width', bbox.width + 2 * marginX)
                    .attr('height', bbox.height + 2 * marginY)
                    .attr('style', 'fill: ' + color);
            };

            var addTextLabel = function(label, root, labelCols, labelCut) {
                if (labelCut === undefined) labelCut = 'false';
                labelCut = (labelCut.toString().toLowerCase() === 'true');

                var node = root
                    .append('text')
                    .attr('text-anchor', 'left');

                label = label.replace(/\\n/g, '\n');

                var arr = labelCols ? wordwrap(label, labelCols, labelCut) : label;
                arr = arr.split('\n');
                for (var i = 0; i < arr.length; i++) {
                    node
                        .append('tspan')
                        .attr('dy', '1.5em')
                        .attr('x', '1')
                        .text(arr[i]);
                }
            };

            var wordwrap = function(str, width, cut, brk) {
                brk = brk || '\n';
                width = width || 75;
                cut = cut || false;

                if (!str) { return str; }

                var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');

                return str.match( new RegExp(regex, 'g') ).join( brk );
            };

            renderer.drawNodes(function (graph, root) {
                var subGraphs = graph.children(null);
                var nodeGroups = root.selectAll('g.cluster')
                    .data(subGraphs, function (sg) { return sg; });

                // Remove any existing cluster data
                nodeGroups.selectAll('*').remove();
                nodeGroups
                    .enter()
                    .append('g')
                    .classed('cluster', true);

                // Draw the nodes for each subgraph inside a group element
                nodeGroups.each(function (sg) {
                    var nodes = graph.nodes().filter(function(u) { return !isComposite(graph, u) && graph.parent(u) === sg; });
                    var cluster = d3.select(this);
                    var svgNodes = cluster
                        .selectAll('g.node')
                        .classed('enter', false)
                        .data(nodes, function(u) { return u; });

                    svgNodes.selectAll('*').remove();

                    svgNodes
                        .enter()
                        .append('g')
                        .style('opacity', 0)
                        .attr('class', 'node enter');

                    svgNodes.each(function(u) { addLabel(graph.node(u), d3.select(this), 10, 10); });
                });

                var svgNodes = root.selectAll('g.node');
                return svgNodes;
            });

            // Whatever margin is used for the clusters needs to be used
            // also as an additive element to node sep
            var clusters_pos = [];
            renderer.postRender(function (graph, root) {

                var superGraph = new graphlib.CDigraph();
                var subGraphs = graph.children(null);
                var nodes = graph.nodes();

                var clusters = root.selectAll('g.cluster');
                clusters.each(function (sg) {
                    var cluster = d3.select(this);
                    var bbox = cluster.node().getBBox();

                    var xPos = -(bbox.width/2 + margin/2);
                    var yPos = -(bbox.height/2 + margin/2);
                    cluster
                        .insert('rect', ':first-child')
                        .attr('id', sg)
                        .attr('x', bbox.x-margin/2)
                        .attr('y', bbox.y-margin/2)
                        .attr('width', bbox.width+margin)
                        .attr('height', bbox.height+margin)
                        .attr('fill', '#ffffff')
                        .attr('stroke', 'black')
                        .attr('stroke-width', '1.5px')
                        .style('opacity', 0.6);
                    clusters_pos.push({id: sg, x: bbox.x-margin/2, y: bbox.y-margin/2, w: bbox.width+margin, h: bbox.height+margin});
                });


                d3.selection.prototype.moveToFront = function() {
                    return this.each(function(){
                        this.parentNode.appendChild(this);
                    });
                };

                var svgEdgeLabels = svg.select('g.edgeLabels');
                var svgEdgePaths = svg.select('g.edgePaths');
                svgEdgeLabels.moveToFront();
                svgEdgePaths.moveToFront();

                oldPostRender(graph, root);
            });

            // renderer.zoom(false);
            renderer.edgeInterpolate('monotone');
            var layout = dagreD3.layout().nodeSep(50).rankSep(100).edgeSep(50).rankDir("LR");
            layout = renderer.layout(layout).run(g, svg);

            if ((layout.graph().width + 40) < $window.innerWidth) {
                d3.select("#gantt-job-flowchart-svg").attr("width", layout.graph().width + 40);
                // transformX = (((layout.graph().width + 24) * 0.6) - (layout.graph().width + 40)) / 2 * -1;
            } else {
                d3.select("#gantt-job-flowchart-svg").attr("width", $window.innerWidth);
                // transformX = ((layout.graph().width + 24) * 0.6 - $window.innerWidth) / 2 * -1;
            }
            if ((layout.graph().height + 40) < $window.innerHeight - 160) {
                d3.select("#gantt-job-flowchart-svg").attr("height", layout.graph().height + 40);
                // transformY = (((layout.graph().height + 24) * 0.6) - (layout.graph().height + 40)) / 2 * -1;
            } else {
                d3.select("#gantt-job-flowchart-svg").attr("height", $window.innerHeight - 160);
                // transformY = ((layout.graph().height + 24) * 0.6 - ($window.innerHeight - 160)) / 2 * -1;
            }

            var transformX = 0, transformY = 0, scale = ($window.innerWidth / layout.graph().width);
            scale = scale < 0.1 ? scale * 10 : scale > 1 ? 1 : scale;

            var tempPosX = 0, tempPosY = 0;
            for (i = 0, k = clusters_pos, m = k.length; i < m; i++) {
                if (k[i].h > tempPosY) {
                    tempPosY = k[i].h;
                    tempPosX = Math.abs(k[i].x - k[i].w);
                }
            }
            transformY = ((tempPosY * scale) / 2) * -1 + ($window.innerHeight / 2);
            transformX = tempPosX * -1 * scale + ($window.innerWidth / 2);

            svg.attr('transform', 'translate(' + transformX + ',' + transformY + ') scale('+ scale +')');
        }]
    };
}]);
;gantt.factory('keepScrollPos',['$timeout', function ($timeout) {
    // Make sure the scroll position will be at the same place after the tasks or columns changed

    function keepScrollPos($scope, fn) {
        return function() {
            var el = $scope.ganttScroll[0];

            // Save scroll position
            var oldScrollLeft = el.scrollLeft;
            var left = $scope.gantt.getFirstColumn();
            var pxToEmFactor = $scope.getPxToEmFactor();

            // Execute Gantt changes
            fn.apply(this, arguments);

            // Re-apply scroll position
            left = left === undefined ? 0: $scope.gantt.getColumnByDate(left.date).left * pxToEmFactor;
            el.scrollLeft = left + oldScrollLeft;

            // Workaround: Set scrollLeft again after the DOM has changed as the assignment of scrollLeft before may not have worked when the scroll area was too tiny.
            if (el.scrollLeft != left + oldScrollLeft) {
                $timeout(function() {
                    el.scrollLeft = left + oldScrollLeft;
                }, 0, false);
            }
        };
    }

    return keepScrollPos;
}]);;gantt.directive('ganttMachineTasks', ['$window', '$document', '$timeout', 'debounce', 'dateFunctions', 'taskWorker', '_', 'coloured', function ($window, $document, $timeout, debounce, df, worker, _, coloured) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "default.tasksonmachine.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        controller: ['$scope', '$element', function ($scope, $element) {
            var bodyElement = angular.element($document[0].body),
                i, j, k, l, m, n;

            $scope.machine = $scope.gantt.tasksOnMachine;
            for (i = 0, k = $scope.machine.tasks, l = k.length; i < l; ++i) {
              k[i].editorFrom = moment(k[i].from).format('YYYY-MM-DDTHH:mm');
              k[i].editorTo = moment(k[i].to).format('YYYY-MM-DDTHH:mm');
              k[i].editorDuring = (k[i].to - k[i].from) / 60000;
              k[i].selected = false;
            }
            $scope.extentionTh = $scope.machine.data.title.split('|');
            $scope.taskSelectAll = false;

            $scope.css = function(color) {
                return {
                    background: color,
                    color: coloured.isDarkColoured(color.replace('#', '')) ? '#ffffff' : '#000000'
                };
            };
            var tempTableWidth = [];
            $scope.tableWidth = function() {
                tempTableWidth.push(angular.element('#tree-node-table-header').width());
                if (tempTableWidth.length > 1) {
                    return {
                        width: Math.max.apply( Math, tempTableWidth ) + 'px'
                    };
                }
            };
            var contextMenuHandler = function(e) {
                var task = $scope.gantt.tasksMap[angular.element(e.currentTarget).data('task-id')];
                $scope.gantt.tooltipTaskOnMachine = {
                    css: {
                        x: (e.clientX + 220 > $element[0].clientWidth) ? $element[0].clientWidth - 220 : e.clientX,
                        y: (e.clientY + 150 > $element[0].clientHeight) ? $element[0].clientHeight - 150 : e.clientY
                    },
                    title: task.id,
                    header: $scope.extentionTh,
                    data: task.tooltips.ui,
                    task: task,
                    element: angular.element(e.currentTarget)
                };
                e.stopPropagation();
                e.preventDefault();
            };
            var disableContextMenuHandler = function(e) {
                $scope.$parent.gantt.tooltipTaskOnMachine = undefined;
            };

            $timeout(function() {
                for (var i = 0, tr = $element.find('tr.machine-task-node'), l = tr.length; i < l; ++i) {
                    angular.element(tr[i]).bind('mousedown', $element, disableContextMenuHandler);
                    angular.element(tr[i]).bind('contextmenu', $element, contextMenuHandler);
                }
            }, 10);

            var processTask = function(task) {
                $timeout(function() {
                    $scope.machine.tasks.sort(function(t1, t2) { return t1.from - t2.from; });

                    for (i = 0, k = $scope.machine.tasks, l = k.length; i < l; ++i) {
                      k[i].editorFrom = moment(k[i].from).format('YYYY-MM-DDTHH:mm');
                      k[i].editorTo = moment(k[i].to).format('YYYY-MM-DDTHH:mm');
                      k[i].editorDuring = (k[i].to - k[i].from) / 60000;
                    }

                    $scope.gantt.showOnProcessing = false;
                }, 100);

              // worker.run(task, $scope.gantt, function(reject) {
              //   if (reject === false) {
              //     console.log(reject);
              //   }

              //   $scope.machine.tasks.sort(function(t1, t2) { return t1.from - t2.from; });

              //   for (i = 0, k = $scope.machine.tasks, l = k.length; i < l; ++i) {
              //     k[i].editorFrom = moment(k[i].from).format('YYYY-MM-DDTHH:mm');
              //     k[i].editorTo = moment(k[i].to).format('YYYY-MM-DDTHH:mm');
              //     k[i].editorDuring = (k[i].to - k[i].from) / 60000;
              //   }
              //   angular.element('#hiddenProcessing').trigger('click');
              // });
            };

            var previousProcesses = [];
            var findPreviousProcessNode = function(process) {
                if (process === undefined) return [];
                process.previous.sort(function(a, b) { return b - a; });
                for (j = 0, m = process.previous, n = m.length; j < n; ++j) {
                    if (g.hasNode(m[j].toString())) {
                        previousProcesses.push(m[j].toString());
                    } else {
                        previousProcesses = _.union(previousProcesses, findPreviousProcessNode($scope.gantt.processesMap[m[j]]));
                    }
                }
                return previousProcesses;
            };

            $scope.changeTaskFrom = function(id, from, to, datetime) {
              var during = to - from;
              datetime = df.clone(datetime + ':00.000');

              if (datetime - df.setSecondsZero(from, true) !== 0) {
                $scope.gantt.showOnProcessing = true;

                $scope.machine.tasksMap[id].to = df.addMilliseconds(datetime, during, true);
                $scope.machine.tasksMap[id].parallelFrom = df.addMilliseconds(datetime, ($scope.gantt.tasksMap[id].parallelFrom - $scope.gantt.tasksMap[id].from), true);
                $scope.machine.tasksMap[id].from = datetime;

                $scope.machine.tasksMap[id].editorTo = moment($scope.machine.tasksMap[id].to).format('YYYY-MM-DDTHH:mm');
                $scope.machine.tasksMap[id].editorDuring = ($scope.machine.tasksMap[id].to - datetime) / 60000;

                processTask($scope.machine.tasksMap[id]);
              }
            };
            $scope.changeTaskTo = function(id, from, to, datetime) {
              var during = to - from;
              datetime = df.clone(datetime + ':00.000');

              if (datetime - df.setSecondsZero(to, true) !== 0) {
                $scope.gantt.showOnProcessing = true;

                $scope.machine.tasksMap[id].from = df.addMilliseconds(datetime, during * -1, true);
                $scope.machine.tasksMap[id].parallelFrom = df.addMilliseconds(datetime, ($scope.gantt.tasksMap[id].parallelFrom - $scope.gantt.tasksMap[id].to), true);
                $scope.machine.tasksMap[id].to = datetime;

                $scope.machine.tasksMap[id].editorFrom = moment($scope.machine.tasksMap[id].from).format('YYYY-MM-DDTHH:mm');
                $scope.machine.tasksMap[id].editorDuring = (datetime - $scope.machine.tasksMap[id].from) / 60000;

                processTask($scope.machine.tasksMap[id]);
              }
            };
            $scope.changeTaskDuring = function(id, from, to, datetime) {
              var during = (to - from) / 60000;

              if (datetime !== during) {
                $scope.gantt.showOnProcessing = true;

                $scope.machine.tasksMap[id].from = df.addMinutes($scope.machine.tasksMap[id].from, (datetime - during), true);
                $scope.machine.tasksMap[id].parallelFrom = df.addMinutes($scope.machine.tasksMap[id].parallelFrom, (datetime - during), true);
                $scope.machine.tasksMap[id].to = df.addMinutes($scope.machine.tasksMap[id].to, (datetime - during), true);

                $scope.machine.tasksMap[id].editorFrom = moment($scope.machine.tasksMap[id].from).format('YYYY-MM-DDTHH:mm');
                $scope.machine.tasksMap[id].editorTo = moment($scope.machine.tasksMap[id].to).format('YYYY-MM-DDTHH:mm');

                processTask($scope.machine.tasksMap[id]);
              }
            };
            $scope.changeTaskPin = function(id) {
              $scope.machine.tasksMap[id].isPin = !$scope.machine.tasksMap[id].isPin;
            };

            $scope.treeOptions = {
                beforeDrag: function(source) {
                    $scope.gantt.tooltipTaskOnMachine = undefined;
                    if ($scope.gantt.disable === true) return false;
                    return true;
                },
                dropped: function(event) {
                    var source = event.source,
                        task = source.nodeScope.task,
                        dest = event.dest, i, k, l;

                    $scope.gantt.showOnProcessing = true;

                    var prevTask = $scope.gantt.tasksOnMachine.tasks[(dest.index - 1)],
                        currentTask = $scope.gantt.tasksOnMachine.tasks[source.index],
                        w = df.clone(currentTask.data.expectedStartTime) - df.addMinutes(prevTask.to, 1, true);
                    currentTask.to = df.addMilliseconds(df.addMinutes(prevTask.to, 1, true), (currentTask.to - currentTask.from), true);
                    currentTask.parallelFrom = df.addMilliseconds(df.addMinutes(prevTask.to, 1, true), (currentTask.parallelFrom - currentTask.from), true);
                    currentTask.from = df.addMinutes(prevTask.to, 1, true);

                    for (i = 0, k = $scope.gantt.tasksOnMachine.tasks, l = k.length; i < l; ++i) {
                        if (k[i].selected === true) {
                            k[i].from = df.addMilliseconds(k[i].from, w, true);
                            k[i].to = df.addMilliseconds(k[i].to, w, true);
                            k[i].parallelFrom = df.addMilliseconds(k[i].parallelFrom, w, true);
                        }
                    }

                    processTask(currentTask);

                    $scope.taskSelectAll = false;
                    // $timeout(function() {
                    //     for (var i = 0, tr = $element.find('tr.machine-task-node'), l = tr.length; i < l; ++i) {
                    //         angular.element(tr[i]).bind('mousedown', $element, disableContextMenuHandler);
                    //         angular.element(tr[i]).bind('contextmenu', $element, contextMenuHandler);
                    //     }
                    // }, 10);


                    // if (dest.index - 1 >= 0 && dest.index !== source.index) {
                    //     $scope.gantt.showOnProcessing = true;
                    //     var prevTask;
                    //     if (dest.index > 0) {
                    //         prevTask = $scope.gantt.tasksOnMachine.tasks[(dest.index - 1)];
                    //         task.to = df.addMilliseconds(df.addMinutes(prevTask.to, 1, true), (task.to - task.from), true);
                    //         task.parallelFrom = df.addMilliseconds(df.addMinutes(prevTask.to, 1, true), (task.parallelFrom - task.from), true);
                    //         task.from = df.addMinutes(prevTask.to, 1, true);
                    //     } else {
                    //         prevTask = $scope.gantt.tasksOnMachine.tasks[1];
                    //         task.from = df.addMilliseconds(df.addMinutes(prevTask.from, -1, true), (task.from - task.to), true);
                    //         task.parallelFrom = df.addMilliseconds(df.addMinutes(prevTask.from, -1, true), (task.from - task.parallelFrom), true);
                    //         task.to = df.addMinutes(prevTask.from, -1, true);
                    //     }

                    //     worker.run(task, $scope.gantt, function(reject) {
                    //         console.log(reject);
                    //         if (reject === false) {
                    //         }

                    //         // Hidden the processing lightbox
                    //         angular.element('#hiddenProcessing').trigger('click');
                    //     });
                    // }
                },
            };
        }]
    };
}]);
;gantt.service('mouseButton', [ function () {
    // Mouse button cross browser normalization

    return {
        getButton: function(e) {
            e = e || window.event;

            if (!e.which) {
                return e.button < 2 ? 1: e.button == 4 ? 2: 3;
            } else {
                return e.which;
            }
        }
    };
}]);;gantt.service('mouseOffset', [ function () {
    // Mouse offset support for lesser browsers (read IE 8)

    return {
        getOffset: function(evt) {
            if (evt.offsetX && evt.offsetY) {
                return { x: evt.offsetX, y: evt.offsetY };
            } if (evt.layerX && evt.layerY) {
                return { x: evt.layerX, y: evt.layerY };
            } else {
                return this.getOffsetForElement(evt.target, evt);
            }
        },
        getOffsetForElement: function(el, evt) {
            var bb = el.getBoundingClientRect();
            return { x: evt.clientX - bb.left, y: evt.clientY - bb.top };
        }
    };
}]);;gantt.factory('smartEvent',[function () {
    // Auto released the binding when the scope is destroyed. Use if an event is registered on another element than the scope.

    function smartEvent($scope, $element, event, fn) {
        $scope.$on('$destroy', function() {
            $element.unbind(event, fn);
        });

        return {
          bindOnce: function() {
            $element.one(event, fn);
          },
          bind: function() {
            $element.bind(event, fn);
          },
          unbind: function() {
            $element.unbind(event, fn);
          }
        };
    }

    return smartEvent;
}]);;gantt.directive('ganttTaskEditor', ['$window', '$document', '$timeout', 'dateFunctions', 'taskWorker', '_', function ($window, $document, $timeout, df, worker, _) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "gantt.taskEditor.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: {
            task: "=ngModel"
        },
        controller: ['$scope', '$element', '$http', '$q', function ($scope, $element, $http, $q) {
            var bodyElement = angular.element($document[0].body),
                i, j, k, l, m, n, ajaxConfig = $scope.$parent.gantt.ajaxUrl;

            // Close task editor.
            $scope.disableTaskEditor = function() {
                $scope.$parent.gantt.enableTaskEditor = undefined;
            };

            $scope.shiftTaskPriority = function(priority) {
                $scope.editTask.priority = priority + 1;
                for (i = 0, k = $scope.editTask.job.tasks, l = k.length; i < l; ++i) {
                    if (k[i].priority >= $scope.editTask.priority) {
                        k[i].priority = k[i].priority + 1;
                        k[i].data.priority = k[i].priority;
                    }
                }
            };

            $scope.saveTaskEditor = function() {
                var data = $scope.editTask, data_checking = true, error_message = '';

                // serialization data
                /**
                 * "oid" : null,
                 * "oid" : null,
                 * "part" : 0,
                 * "operationCode" : "007791B",
                 * "priority" : 200,
                 * "job" : {
                 *   "id" : 1949,
                 *   "comboType" : "4",
                 *   "comboId" : 647,
                 *   "poNo" : "PO-P28463",
                 *   "comboQuantity" : 210367
                 * },
                 * "process" : {
                 *   "id" : 8888,
                 *   "needWaitPrevProcess" : true,
                 *   "operations" : [ 68715, 68716, 68717, 68719, 68720, 68721, 68722, 68718 ],
                 *   "previousProcesses" : [ ],
                 *   "productId" : null
                 * },
                 * "previousOperation" : 68715,
                 * "nextOperations" : [ 68717 ],
                 * "runOnMachineId" : 1,
                 * "actualRunOnMachineId" : null,
                 * "quantity" : 4360,
                 * "actualQuantity" : 0,
                 * "processingType" : "GANG",
                 * "factoryOperation" : {
                 *   "id" : 2,
                 *   "code" : "PT",
                 *   "descript" : "PT",
                 *   "displayNames" : "PT",
                 *   "needMachine" : true,
                 *   "priority" : 2
                 * },
                 * "jobFile" : null,
                 * "manual" : false,
                 * "pin" : false,
                 * "setupTime" : 90,
                 * "productionTime" : 141,
                 * "productionCapacity" : 31,
                 * "s2sMins" : -1,
                 * "up" : 50,
                 * "sheetUp" : 50,
                 * "expectedStartTime" : "2014-07-23T08:00:00.000",
                 * "expectedSetupFinishTime" : "2014-07-23T09:30:00.000",
                 * "expectedFinishTime" : "2014-07-23T11:51:00.000",
                 * "actualStartTime" : null,
                 * "actualSetupFinishTime" : null,
                 * "actualFinishTime" : null,
                 * "finished" : false,
                 * "inProcessing" : false,
                 * "delete" : false,
                 * "parallel" : false,
                 * "parallelCode" : "",
                 * "expectedMoldId" : null,
                 * "tooltip1" : "007791B|647|PO-P28463",
                 * "tooltip2" : "007791B|647|PO-P28463",
                 * "tooltip3" : "007791B|647|PO-P28463",
                 * "color1" : "0xffff00",
                 * "color2" : "",
                 * "timeclockEmployeeId" : null,
                 * "new" : false
                 */

                data.rowId = data.rowId === undefined ? 0 : data.rowId;
                data.taskId = data.taskId === undefined || data.taskId === 0 ? Object.keys($scope.$parent.gantt.tasksMap).length + 1000000 : data.taskId;
                data.poNo = data.poNo === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.job.poNo : null) : data.poNo;
                data.comboId = data.comboId === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.job.comboId : null) : data.comboId;
                data.operationCode = data.operationCode === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.operationCode : null) : data.operationCode;
                data.processId = data.processId === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.processId : 0) : data.processId;
                data.productId = data.productId === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.process.productId : 0) : data.productId;
                data.processingType = data.processingType === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.processingType : null) : data.processingType;
                data.previousTask = data.previousTask === undefined ? null : data.previousTask;
                data.nextTask = data.nextTask === undefined ? [] : [data.nextTask];
                data.priority = data.priority === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.priority : 0) : data.priority;
                data.quantity = data.quantity === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.quantity : 0) : data.quantity;
                data.sheetUp = data.sheetUp === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.sheetUp : 0) : data.sheetUp;
                data.up = data.up === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.up : 0) : data.up;
                data.isPin = data.isPin === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.isPin : false) : !!data.isPin;
                data.isParallel = data.isParallel === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.isParallel : false) : !!data.isParallel;
                data.inProcessing = data.inProcessing === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.inProcessing : false) : !!data.inProcessing;
                data.parallelCode = data.parallelCode === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.parallelCode : null) : data.parallelCode;
                data.s2sMins = data.s2sMins === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.s2sMins : -1) : data.s2sMins;
                data.timeclockEmployeeId = data.timeclockEmployeeId === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.timeclockEmployeeId : null) : data.timeclockEmployeeId;
                data.expectedStartTime = data.expectedStartTime === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.from : null) : data.expectedStartTime;
                data.expectedSetupFinishTime = data.expectedSetupFinishTime === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? df.addMilliseconds(df.clone($scope.task.data.expectedSetupFinishTime), $scope.task.to - $scope.task.from, true) : null) : data.expectedSetupFinishTime;
                data.expectedFinishTime = data.expectedFinishTime === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.to : null) : data.expectedFinishTime;
                data.actualStartTime = data.actualStartTime === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.actualStartTime : null) : data.actualStartTime;
                data.actualSetupFinishTime = data.actualSetupFinishTime === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.actualSetupFinishTime : null) : data.actualSetupFinishTime;
                data.actualFinishTime = data.actualFinishTime === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.actualFinishTime : null) : data.actualFinishTime;
                data.actualQuantity = data.actualQuantity === undefined ? (typeof $scope.task === 'object' && $scope.task.name === 'Task' ? $scope.task.data.actualQuantit : null) : data.actualQuantity;

                // TODO: validation
                // 一律必填欄位：
                // PO#
                // ComboId
                // Product
                // Process
                // Operation Group
                // Operation
                // Processing Type
                // Operation Code
                // Priority
                // Quantity
                //
                // 條件性必填欄位：
                // 1. 當Processing Type 為 GANG時，Up為必填
                // 2. 當Parallel 為 Y 時，Parallel Code為必填
                // 3. 當PIN 為 Y 時，Expect的欄位為必填
                // 4. 當In Processing 為 Y 時，Expect*的欄位為必填，且Actual start、Actual run Machine為必填
                // 5. 當Finish 為 Y 時，Actual*的欄位為必填
                //
                // 欄位預設值：
                // 1. Parallel = N
                // 2. Start to Start Minutes = -1

                if (data.poNo === null || data.comboId === null /*|| data.productId === null*/ || data.processId === null || data.processingType === null ||
                    data.quantity === null || data.priority === null || data.expectedStartTime === null ||
                    data.expectedSetupFinishTime === null || data.expectedFinishTime === null) {
                    data_checking = false;
                    error_message = '1';
                }
                if (data.processingType === 'GANG' && (data.up === null || data.sheetUp === null)) {
                    data_checking = false;
                    error_message = '2';
                }
                if (data.isParallel === true && data.parallelCode === null) {
                    data_checking = false;
                    error_message = '3';
                }
                if (data.isPin === true && (data.expectedStartTime === null ||
                    data.expectedSetupFinishTime === null ||
                    data.expectedFinishTime === null ||
                    data.quantity === null)) {
                    data_checking = false;
                    error_message = '4';
                }
                if (data.inProcessing === true && (data.expectedStartTime === null ||
                    data.expectedSetupFinishTime === null ||
                    data.expectedFinishTime === null || data.actualStartTime === null ||
                    data.actualSetupFinishTime === null ||
                    data.actualFinishTime === null ||
                    data.actualQuantity === null)) {
                    data_checking = false;
                    error_message = '5';
                }


                if (data_checking === false || data.rowId === 0) {
                    alert('Data check failed!');
                } else {
                    // Get the process data and modify.
                    var process = $scope.$parent.gantt.processesMap[data.processId];
                    process.operations.push(data.taskId);

                    // Color 1, task on the same job
                    // Color 2, machine any task

                    var taskData = {
                        id: data.taskId,
                        oid: data.taskId,
                        part: 0,
                        operationCode: data.operationCode,
                        priority: data.priority,
                        job: {
                            id: $scope.editTask.job.id,
                            poNo: $scope.editTask.job.poNo,
                            comboId: $scope.editTask.job.comboId,
                            comboType: $scope.editTask.job.comboType,
                            comboQuantity: $scope.editTask.job.comboQuantity,
                        },
                        process: {
                          id: data.processId,
                          needWaitPrevProcess: process.waitPrevious,
                          operations: process.operations,
                          previousProcesses: process.previous,
                          productId: data.productId
                        },
                        previousOperation: data.previousTask,
                        nextOperations: data.nextTask,
                        runOnMachineId: data.rowId,
                        actualRunOnMachineId: null,
                        quantity: data.quantity,
                        actualQuantity: 0,
                        processingType: data.processingType,
                        factoryOperation: $scope.editTask.factoryOperation,
                        jobFile: null,
                        manual: true,
                        pin: data.isPin,
                        setupTime: (df.clone(data.expectedSetupFinishTime) - df.clone(data.expectedStartTime)) / 1000 / 60,
                        productionTime: (df.clone(data.expectedFinishTime) - df.clone(data.expectedStartTime)) / 1000 / 60,
                        productionCapacity: 0,
                        s2sMins: data.s2sMins,
                        up: data.up,
                        sheetUp: data.sheetUp,
                        expectedStartTime: data.expectedStartTime + ':00.000',
                        expectedSetupFinishTime: data.expectedSetupFinishTime + ':00.000',
                        expectedFinishTime: data.expectedFinishTime + ':00.000',
                        actualStartTime: data.actualStartTime === null ? null: data.actualStartTime + ':00.000',
                        actualSetupFinishTime: data.actualSetupFinishTime === null ? null: data.actualSetupFinishTime + ':00.000',
                        actualFinishTime: data.actualFinishTime === null ? null: data.actualFinishTime + ':00.000',
                        finished: data.isFinish,
                        inProcessing: data.inProcessing,
                        delete: false,
                        parallel: data.isParallel,
                        parallelCode: data.parallelCode,
                        expectedMoldId: null,
                        tooltip1: data.operationCode + '|' + data.comboId + '|' + data.poNo,
                        tooltip2: data.operationCode + '|' + data.comboId + '|' + data.poNo,
                        tooltip3: data.operationCode + '|' + data.comboId + '|' + data.poNo,
                        color1: '0xffff00',
                        color2: '',
                        timeclockEmployeeId: null,
                        new: true
                    };
                    /**
                     * Add the task to the Gantt and run the test.
                     */
                    var row = $scope.$parent.gantt.rowsMap[data.rowId];
                    var task = row.addTask(taskData);

                    row.setMinMaxDateByTask(task);
                    task.updatePosAndSize();
                    task.checkIfMilestone();

                    if (task.process.id in $scope.$parent.gantt.processesMap) {
                        process = $scope.$parent.gantt.processesMap[task.process.id];
                        process.addTask(task);
                        process.addPrevious(task.process.previousProcesses);
                    } else {
                        process = new Processes(task.process, $scope.$parent.gantt);
                        process.addTask(task);
                        process.addPrevious(task.process.previousProcesses);
                        $scope.$parent.gantt.processesMap[task.process.id] = process;
                    }

                    var job;
                    if (task.job.id in $scope.$parent.gantt.jobsMap) {
                        job = $scope.$parent.gantt.jobsMap[task.job.id];
                        job.addTask($scope.$parent.gantt.rowKey, task);
                    } else {
                        job = new Jobs(task.job, $scope.$parent.gantt);
                        job.addTask($scope.$parent.gantt.rowKey, task);

                        $scope.$parent.gantt.jobsMap[task.job.id] = job;
                    }

                    for (i = 0, l = _.keys($scope.$parent.gantt.processesMap); i < l.length; ++i) {
                        for (j = 0, k = $scope.$parent.gantt.processesMap[l[i]].previous; j < k.length; ++j) {
                            if ($scope.$parent.gantt.processesMap[k[j]] !== undefined) {
                                $scope.$parent.gantt.processesMap[k[j]].addNext([$scope.$parent.gantt.processesMap[l[i]].id]);
                            }
                        }
                    }

                    $scope.$parent.gantt.showOnProcessing = true; // Lightbox

                    $scope.$parent.gantt.expandDefaultDateRange(task.from, task.to);
                    alert('Congratulations!!');
                    $scope.disableTaskEditor();
                    $scope.$parent.gantt.showOnProcessing = false; // Lightbox

                    // Run the task worker to test the new or modified task.

                    // $scope.$parent.gantt.showOnProcessing = true; // Lightbox
                    // worker.run(task, $scope.$parent.gantt, function(reject, type, data) {
                    //     if (reject === true) {
                    //         if ($scope.editTask.type === 'New') {
                    //             // fallback the task in process
                    //             var fallbackOperations = [];
                    //             for (i = 0, k = process.operations, l = k.length; i < l; ++i) {
                    //                 if (k[i] !== task.id) {
                    //                     fallbackOperations.push(k[i]);
                    //                 }
                    //             }
                    //             if ($scope.$parent.gantt.processesMap[task.process.id] !== undefined) {
                    //                 $scope.$parent.gantt.processesMap[task.process.id].operations = fallbackOperations;
                    //                 for (i = 0, k = $scope.$parent.gantt.processesMap[task.process.id].tasks, l = k.length; i < l; ++i) {
                    //                     if (k[i].id === task.id) {
                    //                         delete $scope.$parent.gantt.processesMap[task.process.id].tasks[i];
                    //                         break;
                    //                     }
                    //                 }
                    //             }
                    //             // Fallback in tasks
                    //             delete $scope.$parent.gantt.rowsMap[task.row.id].tasksMap[task.id];
                    //             delete $scope.$parent.gantt.tasksMap[task.id];
                    //             for (i = 0, k = $scope.editTask.job.tasks, l = k.length; i < l; ++i) {
                    //                 if (k[i].id === task.id) {
                    //                     delete $scope.editTask.job.tasks[i];
                    //                     delete $scope.$parent.gantt.jobsMap[task.job.id].tasks[i];
                    //                     break;
                    //                 }
                    //             }

                    //             process = $scope.$parent.gantt.processesMap[task.process.id];
                    //             var _operations = [];
                    //             _.each(process.operations, function(operation) {
                    //                 if (operation !== task.id) {
                    //                     _operations.push(operation);
                    //                 }
                    //             });
                    //             process.operations = _operations;

                    //             var _previousOperation = null;
                    //             if (task.previousOperation !== null && $scope.$parent.gantt.tasksMap[task.previousOperation] !== undefined) {
                    //                 _previousOperation = $scope.$parent.gantt.tasksMap[task.previousOperation].id;
                    //             }
                    //             if (task.nextOperations.length > 0) {
                    //                 _.each(task.nextOperations, function(task_id) {
                    //                     var _task = $scope.$parent.gantt.tasksMap[task_id];

                    //                     if (parseInt(_task.previousOperation, 10) === parseInt(task.id, 10)) {
                    //                         $scope.$parent.gantt.tasksMap[task_id] = _previousOperation;
                    //                     }
                    //                 });
                    //             }

                    //             task.dirty = true;
                    //             task.isDeleted = true;
                    //             task.isManual = true;
                    //         }

                    //         alert('Error!!');
                    //         angular.element('#hiddenProcessing').trigger('click');
                    //     } else {
                    //         $scope.$parent.gantt.expandDefaultDateRange(task.from, task.to);
                    //         alert('Congratulations!!');
                    //         $scope.disableTaskEditor();
                    //         angular.element('#hiddenProcessing').trigger('click');
                    //     }
                    // });
                }
            };

            var dropdown = angular.element('#modifyTask_poNo_dropdown');
            $scope.toggleFuzzyDropdown = function(poNo) {
                dropdown.css('display', 'none');
                if (poNo !== undefined) {
                    $scope.editTask.fuzzyPoNo = poNo;
                    $scope.editTask.poNo = poNo;
                }
            };
            $scope.poFuzzySearch = [];
            function handleSuccess(response) {
                var responseType = response.headers('Content-Type').replace(/;(.*)$/gi, '');
                if (responseType === 'application/json') {
                    switch(response.config.data) {
                        case 'poFuzzySearch':
                            $scope.poFuzzySearch = response.data.data;
                            dropdown.css('display', 'block');
                        break;
                        case 'getPoUrl':
                            $scope.editTask.poId = response.data.data.id;
                        break;
                        case 'getComboUrl':
                            $scope.editTask.comboList = response.data.data;
                            for (i = 0, k = _.keys($scope.$parent.gantt.jobsMap), l = k.length; i < l; ++i) {
                                if ($scope.$parent.gantt.jobsMap[k[i]].poNo === $scope.editTask.poNo) {
                                    $scope.editTask.job = $scope.$parent.gantt.jobsMap[k[i]];
                                }
                            }
                        break;
                        case 'getProductUrl':
                            $scope.editTask.productList = response.data.data;
                        break;
                        case 'getProcessUrl':
                            $scope.editTask.processList = response.data.data;
                        break;
                        case 'getProductInfoUrl':
                            $scope.editTask.comboList = [{
                                label: response.data.data.comboId,
                                value: response.data.data.comboId,
                            }];
                            $scope.editTask.productList = [{
                                label: response.data.data.productId,
                                value: response.data.data.productId,
                            }];
                            $scope.editTask.comboId = response.data.data.comboId;
                            $scope.editTask.productId = response.data.data.productId;
                            $scope.editTask.poNo = response.data.data.poNo;
                            $scope.editTask.poId = response.data.data.poNo;
                        break;
                        default:
                            return $q.reject('Response type is not JSON.');
                    }
                    return response.data;
                } else {
                    switch(response.config.data) {
                        case 'poFuzzySearch':
                            $scope.poFuzzySearch = [];
                            for (i = 0, k = _.keys($scope.$parent.gantt.jobsMap), l = k.length; i < l; ++i) {
                                $scope.poFuzzySearch.push({
                                    label: $scope.$parent.gantt.jobsMap[k[i]].poNo,
                                    value: $scope.$parent.gantt.jobsMap[k[i]].poNo
                                });
                            }
                            dropdown.css('display', 'block');
                        break;
                        case 'getPoUrl':
                            $scope.editTask.poId = $scope.editTask.poNo;
                        break;
                        case 'getComboUrl':
                            $scope.editTask.comboList = [];
                            for (i = 0, k = _.keys($scope.$parent.gantt.jobsMap), l = k.length; i < l; ++i) {
                                if ($scope.$parent.gantt.jobsMap[k[i]].poNo === $scope.editTask.poNo) {
                                    $scope.editTask.comboList.push({
                                        label: $scope.$parent.gantt.jobsMap[k[i]].comboId,
                                        value: $scope.$parent.gantt.jobsMap[k[i]].comboId
                                    });
                                    $scope.editTask.job = $scope.$parent.gantt.jobsMap[k[i]];
                                }
                            }
                        break;
                        case 'getProductUrl':
                            $scope.editTask.productList = [];
                            for (i = 0, k = _.keys($scope.$parent.gantt.processesMap), l = k.length; i < l; ++i) {
                                var productId = $scope.$parent.gantt.processesMap[k[i]].productId === null ? 'product-null' : $scope.$parent.gantt.processesMap[k[i]].productId;
                                $scope.editTask.productList.push({
                                    label: productId,
                                    value: productId
                                });
                            }
                        break;
                        case 'getProcessUrl':
                            $scope.editTask.processList = [];
                            for (i = 0, k = _.keys($scope.$parent.gantt.processesMap), l = k.length; i < l; ++i) {
                                if ($scope.$parent.gantt.processesMap[k[i]].productId === null || $scope.$parent.gantt.processesMap[k[i]].productId === $scope.editTask.productId) {
                                    $scope.editTask.processList.push({
                                        label: $scope.$parent.gantt.processesMap[k[i]].id,
                                        value: $scope.$parent.gantt.processesMap[k[i]].id
                                    });
                                }
                            }
                        break;
                        case 'getProductInfoUrl':
                        break;
                        default:
                            return $q.reject('Response type is not JSON.');
                    }
                    return $q.reject('Response type is not JSON.');
                }
            }
            function handleError(response) {
                // Test
                switch(response.config.data) {
                    case 'poFuzzySearch':
                        $scope.poFuzzySearch = [];
                        for (i = 0, k = _.keys($scope.$parent.gantt.jobsMap), l = k.length; i < l; ++i) {
                            $scope.poFuzzySearch.push({
                                label: $scope.$parent.gantt.jobsMap[k[i]].poNo,
                                value: $scope.$parent.gantt.jobsMap[k[i]].poNo
                            });
                        }
                        dropdown.css('display', 'block');
                    break;
                    case 'getPoUrl':
                        $scope.editTask.poId = $scope.editTask.poNo;
                    break;
                    case 'getComboUrl':
                        $scope.editTask.comboList = [];
                        for (i = 0, k = _.keys($scope.$parent.gantt.jobsMap), l = k.length; i < l; ++i) {
                            if ($scope.$parent.gantt.jobsMap[k[i]].poNo === $scope.editTask.poNo) {
                                $scope.editTask.comboList.push({
                                    label: $scope.$parent.gantt.jobsMap[k[i]].comboId,
                                    value: $scope.$parent.gantt.jobsMap[k[i]].comboId
                                });
                                $scope.editTask.job = $scope.$parent.gantt.jobsMap[k[i]];
                            }
                        }
                    break;
                    case 'getProductUrl':
                        $scope.editTask.productList = [];
                        for (i = 0, k = _.keys($scope.$parent.gantt.processesMap), l = k.length; i < l; ++i) {
                            $scope.editTask.productList.push({
                                label: $scope.$parent.gantt.processesMap[k[i]].productId,
                                value: $scope.$parent.gantt.processesMap[k[i]].productId
                            });
                        }
                    break;
                    case 'getProcessUrl':
                        $scope.editTask.processList = [];
                        for (i = 0, k = _.keys($scope.$parent.gantt.processesMap), l = k.length; i < l; ++i) {
                            if ($scope.$parent.gantt.processesMap[k[i]].productId === $scope.editTask.productId) {
                                $scope.editTask.processList.push({
                                    label: $scope.$parent.gantt.processesMap[k[i]].id,
                                    value: $scope.$parent.gantt.processesMap[k[i]].id
                                });
                            }
                        }
                    break;
                    case 'getProductInfoUrl':
                    break;
                }
                if (!angular.isObject( response.data ) || !response.data.message) {
                    return $q.reject("An unknown error occurred.");
                }
                return $q.reject(response.data.message);
            }

            var ajaxTimer = null;
            $scope.editTask = {
                type: 'New',
                rowId: $scope.task.id,
                taskId: 0,
                job: {},
                poNo: '',
                fuzzyPoNo: '',
                operationCode: '',
                comboId: '',
                productId: '',
                processId: '',
                comboList: [],
                productList: [],
                processList: [],
                processingType: 'GANG',
                factoryOperation: {},
                priority: 0,
                quantity: 0,
                sheetUp: 0,
                up: 0,
                isPin: false,
                isParallel: false,
                isFinished: false,
                inProcessing: false,
                parallelCode: '',
                s2sMins: -1,
                timeclockEmployeeId: 0,
                runOnMachineId: $scope.task.id,
                expectedStartTime: null,
                expectedSetupFinishTime: null,
                expectedFinishTime: null,
                actualStartTime: null,
                actualSetupFinishTime: null,
                actualFinishTime: null,
                actualQuantity: 0,
                actualRunOnMachineId: $scope.task.id,
            };

            if (typeof $scope.task === 'object' && $scope.task.name === 'Task') {
                $scope.editTask = $scope.task;

                $scope.editTask = {
                    type: 'Edit',
                    rowId: $scope.task.row.id,
                    taskId: $scope.task.id,
                    poNo: $scope.task.data.job.poNo,
                    FuzzyPoNo: $scope.task.data.job.poNo,
                    comboList: [{
                        label: $scope.task.data.job.comboId,
                        value: $scope.task.data.job.comboId
                    }],
                    comboId: $scope.task.data.job.comboId,
                    operationCode: $scope.task.operationCode,
                    processList: [{
                        label:  $scope.task.data.process.id,
                        value: $scope.task.data.process.id
                    }],
                    processId: $scope.task.data.process.id,
                    productList: [{
                        label: $scope.task.data.process.productId,
                        value: $scope.task.data.process.productId
                    }],
                    productId: $scope.task.data.process.productId,
                    processingType: $scope.task.data.processingType,
                    job: $scope.task.data.job,
                    factoryOperation: $scope.task.row.data.factoryOperation,
                    priority: $scope.task.data.priority,
                    quantity: $scope.task.data.quantity,
                    sheetUp: $scope.task.data.sheetUp,
                    up: $scope.task.data.up,
                    isPin: $scope.task.isPin,
                    isFinished: $scope.task.isFinished,
                    isParallel: $scope.task.isParallel,
                    inProcessing: $scope.task.inProcessing,
                    parallelCode: $scope.task.data.parallelCode,
                    s2sMins: $scope.task.data.s2sMins || -1,
                    timeclockEmployeeId: $scope.task.data.timeclockEmployeeId,
                    expectedStartTime: moment($scope.task.from).format('YYYY-MM-DDTHH:mm'),
                    expectedSetupFinishTime: moment(df.addMilliseconds(df.clone($scope.task.data.expectedSetupFinishTime), $scope.task.to - $scope.task.from, true)).format('YYYY-MM-DDTHH:mm'),
                    expectedFinishTime: moment($scope.task.to).format('YYYY-MM-DDTHH:mm'),
                    runOnMachineId: $scope.task.row.id,
                    actualStartTime: $scope.task.data.actualStartTime === null || $scope.task.data.actualStartTime === '' ? '' : moment(df.clone($scope.task.data.actualStartTime)).format('YYYY-MM-DDTHH:mm'),
                    actualSetupFinishTime: $scope.task.data.actualSetupFinishTime === null || $scope.task.data.actualSetupFinishTime === '' ? '' : moment(df.clone($scope.task.data.actualSetupFinishTime)).format('YYYY-MM-DDTHH:mm'),
                    actualFinishTime: $scope.task.data.actualFinishTime === null || $scope.task.data.actualFinishTime === '' ? '' : moment(df.clone($scope.task.data.actualFinishTime)).format('YYYY-MM-DDTHH:mm'),
                    actualQuantity: $scope.task.data.actualQuantity,
                    actualRunOnMachineId: $scope.task.row.id
                };

                if (ajaxTimer !== null) clearTimeout(ajaxTimer);
                var result = ($http({
                    method: 'get',
                    responseType: 'json',
                    url: ajaxConfig.serverLocation + ajaxConfig.getProductInfoUrl.replace('#taskId#', $scope.task.id),
                    data: 'getProductInfoUrl'
                })).then(handleSuccess, handleError);
            } else if (typeof $scope.task === 'object' && $scope.task.name === 'Row') {
                $scope.editTask.factoryOperation = $scope.task.data.factoryOperation;

                $scope.$watch('editTask.poNo', function(newValue, oldValue) {
                    if (ajaxTimer !== null) clearTimeout(ajaxTimer);
                    if (newValue !== undefined && !angular.equals(newValue, oldValue)) {
                        ajaxTimer = setTimeout(function() {
                            var result = ($http({
                                method: 'get',
                                responseType: 'json',
                                url: ajaxConfig.serverLocation + ajaxConfig.poFuzzySearch.replace('#poNo#', newValue),
                                data: 'poFuzzySearch'
                            })).then(handleSuccess, handleError);
                        }, 300);
                    }
                });

                $scope.$watch('editTask.fuzzyPoNo', function(newValue, oldValue) {
                    if (ajaxTimer !== null) clearTimeout(ajaxTimer);
                    if (newValue !== undefined && !angular.equals(newValue, oldValue)) {
                        ajaxTimer = setTimeout(function() {
                            var result = ($http({
                                method: 'get',
                                responseType: 'json',
                                url: ajaxConfig.serverLocation + ajaxConfig.getPoUrl.replace('#poNo#', newValue),
                                data: 'getPoUrl'
                            })).then(handleSuccess, handleError);
                        }, 300);
                    }
                });

                $scope.$watch('editTask.poId', function(newValue, oldValue) {
                    if (newValue !== undefined && !angular.equals(newValue, oldValue)) {
                        ajaxTimer = setTimeout(function() {
                            var result = ($http({
                                method: 'get',
                                responseType: 'json',
                                url: ajaxConfig.serverLocation + ajaxConfig.getComboUrl.replace('#poId#', newValue),
                                data: 'getComboUrl'
                            })).then(handleSuccess, handleError);
                        }, 300);
                    }
                });

                $scope.$watch('editTask.comboId', function(newValue, oldValue) {
                    if (ajaxTimer !== null) clearTimeout(ajaxTimer);
                    if (newValue !== undefined && !angular.equals(newValue, oldValue)) {
                        ajaxTimer = setTimeout(function() {
                            var result = ($http({
                                method: 'get',
                                responseType: 'json',
                                url: ajaxConfig.serverLocation + ajaxConfig.getProductUrl.replace('#comboId#', newValue),
                                data: 'getProductUrl'
                            })).then(handleSuccess, handleError);
                        }, 300);
                    }
                });
                // TODO:
                // 取得 Process Id
                // 從 Job 取得前後相關的 Process 與 Task ID
                // 列出下拉清單讓新增的 Task 可以選擇前後關係的 Task

                $scope.$watch('editTask.productId', function(newValue, oldValue) {
                    if (typeof newValue === 'object') return false;
                    if (ajaxTimer !== null) clearTimeout(ajaxTimer);
                    if (newValue !== undefined && !angular.equals(newValue, oldValue)) {
                        ajaxTimer = setTimeout(function() {
                            var result = ($http({
                                method: 'get',
                                responseType: 'json',
                                url: ajaxConfig.serverLocation + ajaxConfig.getProcessUrl.replace('#productId#', newValue),
                                data: 'getProcessUrl',
                                params: {
                                    factoryOperationCode: $scope.editTask.factoryOperation.code
                                }
                            })).then(handleSuccess, handleError);
                        }, 300);
                    }
                });
            } else {
                $scope.editTask = {};
            }

            $scope.$watch('editTask.processId', function(newValue, oldValue) {
                $scope.editTask.previousOperation = [];
                $scope.editTask.nextOperation = [];
                if (!angular.equals(newValue, oldValue) && newValue in $scope.$parent.gantt.processesMap) {
                    var tasks = $scope.$parent.gantt.processesMap[newValue].tasks;
                    for (i = 0, k = tasks, l = k.length; i < l; ++i) {
                        $scope.editTask.previousOperation.push({
                            label: k[i].subject,
                            value: k[i].id
                        });
                        $scope.editTask.nextOperation.push({
                            label: k[i].subject,
                            value: k[i].id
                        });
                    }
                }
            });
            $scope.$watch('editTask.previousTask', function(newValue, oldValue) {
                $scope.editTask.nextOperation = [];
                if (!angular.equals(newValue, oldValue) && newValue in $scope.$parent.gantt.tasksMap) {
                    var tasks = $scope.$parent.gantt.processesMap[$scope.editTask.processId].tasks;
                    for (i = 0, k = tasks, l = k.length; i < l; ++i) {
                        if (k[i].from > $scope.$parent.gantt.tasksMap[newValue].from) {
                            $scope.editTask.nextOperation.push({
                                label: k[i].subject,
                                value: k[i].id
                            });
                        }
                    }
                }
            });

            $scope.$watch('editTask.previousTask+\',\'+editTask.nextTask', function(newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    var tasks = newValue.split(',');
                    if (tasks.length > 1 && $scope.$parent.gantt.tasksMap[tasks[1]] !== undefined && $scope.$parent.gantt.tasksMap[tasks[0]] !== undefined) {
                        $scope.shiftTaskPriority($scope.$parent.gantt.tasksMap[tasks[0]]);
                    }
                }
            });

        }]
    };
}]);
;gantt.directive('ganttTaskInformation', ['$window', '$document', '$timeout', 'dateFunctions', '_', function ($window, $document, $timeout, df, _) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "gantt.information.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: {
            task: "=ngModel"
        },
        controller: ['$scope', '$element', function ($scope, $element) {
            var url = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.getMoreInformationPage.replace('#operationIds#', $scope.task.id);

            $scope.checkUrl = url;
            $scope.gantt = $scope.$parent.gantt;

            // TODO: URL Check
            // $http({
            //     method: 'get',
            //     url: url,
            // }).then(function(response) {
            //     console.log(response);
            //     $scope.checkUrl = url;
            // }, function(response) {
            //     console.log(response);

            //     return url;
            // });
        }]
    };
}]);
;gantt.directive('ganttTaskOnProcessing', ['$window', '$document', '$timeout', function ($window, $document, $timeout) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "gantt.processingLightbox.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: {
            show: "=ngModel"
        },
        controller: ['$scope', '$element', function ($scope, $element) {
        }]
    };
}]);
;gantt.directive('ganttMachineTooltip', ['$window', '$document', '$timeout', 'dateFunctions', '_', function($window, $document, $timeout, df, _) {
    var templateLocation = '';
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            templateLocation = $scope.$parent.gantt.ajaxUrl.serverLocation + $scope.$parent.gantt.ajaxUrl.jsLocationPrefix + 'template/';
        },
        templateUrl: function (tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return templateLocation + "gantt.tooltiponmachine.tmpl.html";
            } else {
                return templateLocation + tAttrs.templateUrl;
            }
        },
        replace: true,
        scope: {
            task: "=ngModel"
        },
        controller: ['$scope', '$element', function( $scope, $element) {
            var bodyElement = angular.element($document[0].body),
                i, j, k, l, m, n;

            $scope.css = {
                opacity: 1,
                "z-index": 1000,
                top: $scope.task.css.y + 'px',
                left: $scope.task.css.x + 'px'
            };
            $scope.taskTitle = $scope.task.title;
            $scope.taskInformation = {
                head: $scope.task.header,
                data: $scope.task.data
            };

            $scope.editThisTask = function(target) {
                target.task.gantt.tooltipTaskOnMachine = undefined;
                target.task.gantt.enableTaskEditor = target.task;
            };
            $scope.showTaskJobFlow = function(target) {
                target.task.gantt.tooltipTaskOnMachine = undefined;
                target.task.gantt.jobFlowChart = target.task.gantt.jobsMap[target.task.job.id];
            };
            $scope.showThisTaskInformation = function(target) {
                target.task.gantt.tooltipTaskOnMachine = undefined;
                target.task.gantt.showTaskInformation = target.task;
            };
            $scope.deleteThisTask = function(target) {
                target.task.gantt.tooltipTaskOnMachine = undefined;
                if (confirm('Are you sure to delete this Task?')) {
                    target.task.dirty = true;
                    target.task.isDeleted = true;
                    target.task.isManual = true;
                    target.element.remove();
                }
            };

            $scope.$watch('task', function(newValue, oldValue) {
                if (!angular.equals(newValue, oldValue)) {
                    $scope.css = {
                        opacity: 1,
                        "z-index": 1000,
                        top: newValue.css.y + 'px',
                        left: newValue.css.x + 'px'
                    };
                    $scope.taskInformation = {
                        head: newValue.header,
                        data: newValue.data
                    };
                    $scope.taskTitle = newValue.title;
                }
            });
        }]
    };
}]);

