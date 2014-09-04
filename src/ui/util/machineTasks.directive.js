gantt.directive('ganttMachineTasks', ['$window', '$document', '$timeout', 'debounce', 'dateFunctions', 'taskWorker', '_', 'coloured', function ($window, $document, $timeout, debounce, df, worker, _, coloured) {
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
            $scope.extentionTh = $scope.machine.data.title.split('|');
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
                console.log('fire');
                for (var i = 0, tr = $element.find('tr.machine-task-node'), l = tr.length; i < l; ++i) {
                    angular.element(tr[i]).bind('mousedown', $element, disableContextMenuHandler);
                    angular.element(tr[i]).bind('contextmenu', $element, contextMenuHandler);
                }
            }, 10);

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

            $scope.treeOptions = {
                beforeDrag: function(source) {
                    $scope.gantt.tooltipTaskOnMachine = undefined;
                    if ($scope.gantt.disable === true) return false;
                    return true;
                },
                dropped: function(event) {
                    var source = event.source,
                        task = source.nodeScope.task,
                        dest = event.dest;

                    console.log(source.index, dest.index, $scope.machine);

                    if (dest.index - 1 >= 0 && dest.index !== source.index) {
                        $scope.gantt.showOnProcessing = true;

                        var prevTask = $scope.gantt.tasksOnMachine.tasks[(dest.index - 1)],
                            currentTask = $scope.gantt.tasksOnMachine.tasks[source.index];
                        currentTask.to = df.addMilliseconds(df.addMinutes(prevTask.to, 1, true), (currentTask.to - currentTask.from), true);
                        currentTask.parallelFrom = df.addMilliseconds(df.addMinutes(prevTask.to, 1, true), (currentTask.parallelFrom - currentTask.from), true);
                        currentTask.from = df.addMinutes(prevTask.to, 1, true);

                        worker.run(currentTask, $scope.gantt, function(reject) {
                          if (reject === false) {
                            console.log(reject);
                          }

                          $scope.machine.tasks.sort(function(t1, t2) { return t1.from - t2.from; });
                          angular.element('#hiddenProcessing').trigger('click');
                        });
                    }
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
