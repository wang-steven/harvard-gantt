gantt.directive('ganttMachineTooltip', ['$window', '$document', '$timeout', 'dateFunctions', '_', function($window, $document, $timeout, df, _) {
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

