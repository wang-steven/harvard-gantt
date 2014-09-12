gantt.service('taskWorker', [ 'dateFunctions', function (df) {
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
                    previous: gantt.processesMap[k[i]].previous
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
                var originSetupFinishTime;

                if (event.data.debug === true) {
                    console.log(event.data);
                } else {
                    if (rejectTaskMoving === false) {
                        for (i = 0, j = event.data.tasksOnMark, l = j.length; i < l; ++i) {
                            gantt.tasksMap[j[i].id].from = j[i].from;
                            gantt.tasksMap[j[i].id].to = j[i].to;
                            gantt.tasksMap[j[i].id].parallelFrom = j[i].parallelFrom;

                            originSetupFinishTime = df.clone(gantt.tasksMap[j[i].id].data.expectedSetupFinishTime) - df.clone(gantt.tasksMap[j[i].id].data.expectedStartTime);
                            originSetupFinishTime = df.addMilliseconds(j[i].from, originSetupFinishTime, true);

                            gantt.tasksMap[j[i].id].data.expectedStartTime = j[i].from.toISOString();
                            gantt.tasksMap[j[i].id].data.expectedFinishTime = j[i].to.toISOString();
                            gantt.tasksMap[j[i].id].data.expectedSetupFinishTime = originSetupFinishTime.toISOString();
                            if (gantt.tasksMap[j[i].id].isParallel === true) {
                                gantt.tasksMap[j[i].id].parallelFrom = df.addMinutes(originSetupFinishTime, gantt.tasksMap[j[i].id].data.s2sMins, true);
                            } else {
                                gantt.tasksMap[j[i].id].parallelFrom = gantt.tasksMap[j[i].id].to;
                            }
                            gantt.tasksMap[j[i].id].row.setMinMaxDateByTask(gantt.tasksMap[j[i].id]);
                            gantt.tasksMap[j[i].id].updatePosAndSize();
                            gantt.tasksMap[j[i].id].checkIfMilestone();
                        }
                    } else {
                        if (task.rowHasBeenChanged === true &&
                            task.preventRowId !== task.row.id) {
                            task.row.removeTask(task.id);
                            gantt.rowsMap[task.preventRowId].tasksMap[task.id] = task;
                            gantt.rowsMap[task.preventRowId].tasks.push(task);
                            gantt.rowsMap[task.preventRowId].setTasksMinMaxDate();
                            task.row = gantt.rowsMap[task.preventRowId];
                            task.rowHasBeenChanged = false;
                        }
                        task.from = task.data.expectedStartTime;
                        task.to = task.data.expectedStartTime;
                        task.parallelFrom = df.clone(task.data.expectedSetupFinishTime);
                        task.parallelFrom = df.addMinutes(task.parallelFrom, task.data.s2sMins, true);
                    }
                    task.row.setMinMaxDateByTask(task);
                    task.updatePosAndSize();
                    task.checkIfMilestone();
                }
                if (typeof callback === 'function') {
                    setTimeout(function() {
                        callback.call(this, rejectTaskMoving, 'ok', event.data);
                    }, 500);
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
}]);