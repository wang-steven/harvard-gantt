gantt.directive('ganttTaskInformation', ['$window', '$document', '$timeout', 'dateFunctions', '_', function ($window, $document, $timeout, df, _) {
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
