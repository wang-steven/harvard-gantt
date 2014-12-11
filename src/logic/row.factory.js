gantt.factory('Row', ['Task', 'dateFunctions', '_', function (Task, df, _) {
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

                return task;
            } else {
                return undefined;
            }
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
