gantt.directive('ganttTaskOnProcessing', ['$window', '$document', '$timeout', function ($window, $document, $timeout) {
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
