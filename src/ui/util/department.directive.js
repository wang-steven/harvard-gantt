gantt.directive('ganttDepartment', ['$timeout', '$document', 'debounce', 'smartEvent', '_',  function ($timeout, $document, debounce, smartEvent, _) {
    var templateLocation = '', department;

    function sortDepartment(department) {
        var tempArray = [], tempSubArray = [], sortFunction = function(a, b) { return a.sort - b.sort; };
        for (var i = 0, k = _.keys(department), l = k.length; i < l; i++) {
            if (department[k[i]] !== undefined) {
                tempSubArray = [];
                if (_.keys(department[k[i]].sub).length > 0) {
                    for (var j = 0, m = _.keys(department[k[i]].sub), n = m.length; j < n; j++) {
                        tempSubArray.push({
                            name: m[j],
                            sort: department[k[i]].sub[m[j]].sort,
                            rows: department[k[i]].sub[m[j]].rows
                        });
                    }
                    tempSubArray.sort(sortFunction);
                }
                tempArray.push({
                    name: k[i],
                    sort: department[k[i]].sort,
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
