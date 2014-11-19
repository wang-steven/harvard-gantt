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
            if ($scope.viewScale === undefined) $scope.viewScale = "threehours";
            if ($scope.columnWidth === undefined) $scope.columnWidth = 6;
            if ($scope.columnSubScale === undefined) $scope.columnSubScale = 2;
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

            $scope.exportGanttData = function(save) {
                var isSave = save === undefined ? false : true;

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
                            manual: m[j].isManual,
                            face: m[j].data.face,
                            rounds: m[j].data.rounds
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
                            calculateWeeks: 52,
                            save: isSave
                        }
                    })).then(function(response) {
                        // Success
                        try {
                            if (response.data.messagesEmpty) {
                                // reload data
                                // and do other things
                                // console.log(response.data.data);
                                $scope.clearData();
                                $scope.loadData(response.data.data.machines);
                                console.log(response.data.data.messages);
                                // response.data.data.message 成功的訊息
                                // Disable the gantt all operations, change to readonly.
                                if (isSave) $scope.gantt.disable = true;
                            } else {
                                // TODO: bootstrap model
                                // Add button on the top to show the model dialog
                                console.log("===============here are some errors============");
                                if (response.data.messages) {
                                    while (response.data.messages.length > 0) {
                                        console.log(response.data.messages.pop().value);
                                    }
                                }
                                if (isSave) $scope.gantt.disable = true;
                            }
                        } catch(e) {
                            console.log("Server connect failed.");
                        }
                        return false;
                    }, function(response) {
                        // Error
                        console.log("Server connect failed.");
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
