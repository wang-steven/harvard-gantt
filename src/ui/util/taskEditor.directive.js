gantt.directive('ganttTaskEditor', ['$window', '$document', '$timeout', 'dateFunctions', 'taskWorker', '_', function ($window, $document, $timeout, df, worker, _) {
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
