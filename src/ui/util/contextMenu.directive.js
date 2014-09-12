gantt.directive('ganttContextMenu', ['$window', '$document', '$timeout', function ($window, $document, $timeout) {
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
        controller: ['$scope', '$element', function ($scope, $element) {
            var bodyElement = angular.element($document[0].body);

            bodyElement.bind('click', function(e) {
                $scope.$apply(function() {
                    $scope.$parent.gantt.contextMenu = undefined;
                });
            });

            $scope.contextMenuLink = function(key, target, type, $element) {
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
                        if (type === 'add') {
                            target.gantt.enableTaskEditor = target;
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
