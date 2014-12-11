gantt.factory('Gantt', ['Row', 'Jobs', 'Processes', 'ColumnGenerator', 'HeaderGenerator', 'dateFunctions', 'binarySearch', '_', 'IndexedDB', function (Row, Jobs, Processes, ColumnGenerator, HeaderGenerator, df, bs, _, db) {

    // Gantt logic. Manages the columns, rows and sorting functionality.
    var Gantt = function(viewScale, columnWidth, columnSubScale, firstDayOfWeek, weekendDays, showWeekends, workHours, showNonWorkHours) {
        var self = this;
        var machineDB = new db('ganttMachineDB', 'machines');
        var jobDB = new db('ganttJobDB', 'jobs');
        var taskDB = new db('ganttTaskDB', 'tasks');

        self.name = 'Gantt';
        self.rowsMap = {};
        self.rows = [];
        self.rowsCounter = 0;
        self.visibleRows = [];
        self.rowKey = 0;
        self.jobsMap = {};
        self.tasksMap = {};
        self.processesMap = {};
        self.departmentMap = {};
        self.paginationMap = {};
        self.columnPagination = [];
        self.columnPage = 1;
        self.columnLimit = 12;
        self.columns = [];
        self.headers = {};
        self.width = 0;
        self.defaultDateRange = undefined;
        self.contextMenu = undefined;
        self.jobFlowChart = undefined;
        self.tasksOnMachine = undefined;

        // Sets the Gantt view scale. Call reGenerateColumns to make changes visible after changing the view scale.
        // The headers are shown depending on the defined view scale.
        self.setViewScale = function(viewScale, columnWidth, columnSubScale, firstDayOfWeek, weekendDays, showWeekends, workHours, showNonWorkHours) {
            switch(viewScale) {
                case 'minute': self.columnGenerator = new ColumnGenerator.MinuteGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours); break;
                case 'hour': self.columnGenerator = new ColumnGenerator.HourGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours); break;
                case 'threehours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 3); break;
                case 'sixhours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 6); break;
                case 'eighthours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 8); break;
                case 'twevelhours': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 12); break;
                case 'day': self.columnGenerator = new ColumnGenerator.CustomHoursGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours, 24); break;
                // case 'day': self.columnGenerator = new ColumnGenerator.DayGenerator(columnWidth, columnSubScale, weekendDays, showWeekends, workHours, showNonWorkHours); break;
                case 'week': self.columnGenerator = new ColumnGenerator.WeekGenerator(columnWidth, columnSubScale, firstDayOfWeek); break;
                case 'month': self.columnGenerator = new ColumnGenerator.MonthGenerator(columnWidth, columnSubScale); break;
                default:
                    throw "Unsupported view scale: " + viewScale;
            }

            self.headerGenerator = new HeaderGenerator.instance(viewScale);
        };

        self.setViewScale(viewScale, columnWidth, columnSubScale, firstDayOfWeek, weekendDays, showWeekends, workHours, showNonWorkHours);

        // Expands the default date range. Even if there tasks are smaller the specified date range is shown.
        self.expandDefaultDateRange = function(from, to) {
            if (from !== undefined && to !== undefined) {
                if (self.defaultDateRange === undefined) {
                    self.defaultDateRange = {
                        from: from,
                        to: to
                    };
                }
                expandDateRange(from, to);
                expandColumns();
            }
        };

        var expandDateRange = function(from, to) {
            from = df.clone(from);
            to = df.clone(to);

            if (self.defaultDateRange === undefined) {
                self.defaultDateRange = {};
                self.defaultDateRange.from = from;
                self.defaultDateRange.to = to;
            } else {
                if (from < self.defaultDateRange.from) {
                    self.defaultDateRange.from = from;
                }
                if (to > self.defaultDateRange.to) {
                    self.defaultDateRange.to = to;
                }
            }
        };

        // Generates the Gantt columns according to the current self.defaultDateRange. The columns are generated if necessary only.
        var expandColumns = function() {
            if (self.defaultDateRange === undefined) {
                throw "From and to date range cannot be undefined";
            }

            // Only expand if expand is necessary
            if (self.columns.length === 0) {
                expandColumnsNoCheck(self.defaultDateRange.from, self.defaultDateRange.to);
            } else if (self.getFirstColumn().date > self.defaultDateRange.from || self.getLastColumn().date < self.defaultDateRange.to) {
                var minFrom = self.getFirstColumn().date > self.defaultDateRange.from ? self.defaultDateRange.from : self.getFirstColumn().date;
                var maxTo = self.getLastColumn().date < self.defaultDateRange.to ? self.defaultDateRange.to : self.getLastColumn().date;

                expandColumnsNoCheck(minFrom, maxTo);
            }
        };

        // Generates the Gantt columns according to the specified from - to date range. Uses the currently assigned column generator.
        var expandColumnsNoCheck = function(from ,to) {
            self.columns = self.columnGenerator.generate(from, to);
            self.headers = self.headerGenerator.generate(self.columns);
            self.updateTasksPosAndSize();

            var lastColumn = self.getLastColumn();
            self.width = lastColumn !== undefined ? lastColumn.left + lastColumn.width: 0;
        };

        // Removes all existing columns and re-generates them. E.g. after e.g. the view scale changed.
        self.reGenerateColumns = function() {
            self.columns = [];
            if (self.defaultDateRange !== undefined) {
                expandColumns();
                return true;
            } else {
                return false;
            }
        };

        // Update the position/size of all tasks in the Gantt
        self.updateTasksPosAndSize = function() {
            for (var i = 0, l = self.rows.length; i < l; i++) {
                for (var j = 0, k = self.rows[i].tasks.length; j < k; j++) {
                    self.rows[i].tasks[j].updatePosAndSize();
                }
            }
        };

        // Returns the last Gantt column or undefined
        self.getLastColumn = function() {
            if (self.columns.length > 0) {
                return self.columns[self.columns.length-1];
            } else {
                return undefined;
            }
        };

        // Returns the first Gantt column or undefined
        self.getFirstColumn = function() {
            if (self.columns.length > 0) {
                return self.columns[0];
            } else {
                return undefined;
            }
        };

        // Returns the column at the given or next possible date
        self.getColumnByDate = function(date) {
            var columns = bs.get(self.columns, date, function(c) { return c.date; });
            return columns[0] !== undefined ? columns[0]: columns[1];
        };

        // Returns the column at the given position x (in em)
        self.getColumnByPosition = function(x) {
            return bs.get(self.columns, x, function(c) { return c.left; })[0];
        };

        // Returns the exact column date at the given position x (in em)
        self.getDateByPosition = function(x, snapForward) {
            var column = self.getColumnByPosition(x);
            if (column !== undefined) {
                if(arguments.length == 2) return column.getDateByPosition(x - column.left, snapForward);
                else return column.getDateByPosition(x - column.left);
            } else {
                return undefined;
            }
        };

        // Returns the position inside the Gantt calculated by the given date
        self.getPositionByDate = function(date) {
            var column = self.getColumnByDate(date);
            if (column !== undefined) {
                return column.getPositionByDate(date);
            } else {
                return undefined;
            }
        };

        // Returns the current Gantt date range or undefined if it has not been defined
        self.getDateRange = function() {
            if (self.defaultDateRange === undefined) {
                return undefined;
            } else {
                return {
                    from: df.clone(self.defaultDateRange.from),
                    to: df.clone(self.defaultDateRange.to)
                };
            }
        };

        // Returns the min and max date of all loaded tasks or undefined if there are no tasks loaded
        self.getTasksDateRange = function() {
            if (self.rows.length === 0) {
                return undefined;
            } else {
                var minDate, maxDate;

                for (var i = 0, l = self.rows.length; i < l; i++) {
                    var row = self.rows[i];

                    if (minDate === undefined || row.minFromDate < minDate) {
                        minDate = row.minFromDate;
                    }

                    if (maxDate === undefined || row.maxToDate > maxDate) {
                        maxDate = row.maxToDate;
                    }
                }

                return {
                    from: minDate,
                    to: maxDate
                };
            }
        };

        // Returns the number of active headers
        self.getActiveHeadersCount = function() {
            var size = 0, key;
            for (key in self.headers) {
                if (self.headers.hasOwnProperty(key)) size++;
            }
            return size;
        };

        // Adds or update rows and tasks.
        self.addData = function(data, addEventFn, updateEventFN) {
            var source, type;
            if (data.machines !== undefined && data.machines.length > 0) {
                source = data.machines;
                type = 'machine';
            } else if (data.molds !== undefined && data.molds.length > 0) {
                source = data.molds;
                type = 'mold';
            } else if (data.jobs !== undefined && data.jobs.length > 0) {
                source = data.jobs;
                type = 'job';
            } else {
                // row = rowData;
                throw 'Loading JSON Data Error!';
            }

            for (var i = 0, l = source.length; i < l; i++) {
                var rowData = source[i];
                var isUpdate = addRow(rowData, type);
                var row = self.rowsMap[rowData.id];

                if (isUpdate === true && updateEventFN !== undefined) {
                    updateEventFN(row);
                } else if (addEventFn !== undefined) {
                    addEventFn(row);
                }
            }
            // self.rowsCounter = self.rows.length;

            if (self.defaultDateRange !== undefined) {
                expandColumns();
            }

            // Do the pagination
            self.columnPagination = [];
            var page = 0;
            for (var j = 0, k = _.keys(self.paginationMap), m = k.length; j < m; j++) {
                if (self.columnPagination[page] !== undefined &&
                    (self.columnPagination[page].length >= self.columnLimit ||
                    (j + 1 < m && (self.columnPagination[page].length + self.paginationMap[k[j]].length) > Math.ceil(self.columnLimit * 1.5)))) {
                    page++;
                }
                if (self.columnPagination[page] === undefined) self.columnPagination[page] = [];

                self.columnPagination[page] = self.columnPagination[page].concat(self.paginationMap[k[j]]);
            }
            self.rowsCounter = self.columnPagination[0].length;
        };

        // Adds a row to the list of rows. Merges the row and it tasks if there is already one with the same id
        var addRow = function(rowData, type) {
            // Copy to new row (add) or merge with existing (update)
            var row = rowData[type], rowId, isUpdate = false;

            if (row.id in self.rowsMap) {
                row = self.rowsMap[row.id];
                row.copy(rowData);
                isUpdate = true;
            } else {
                var order = row.order || row.id || undefined;
                var description = row.description || undefined;
                var data = {}, x;

                // Check if the row has a order predefined. If not assign one
                if (order === undefined) {
                    order = self.highestRowOrder || 0;
                }

                if (order >= self.highestRowOrder) {
                    self.highestRowOrder = order + 1;
                }

                for (x in row) {
                    if (data[x] === undefined) {
                        data[x] = row[x];
                    }
                }

                if (description === undefined) {
                    switch(type) {
                        case 'machine':
                            description = row.settingsMachine.name;
                            break;
                        case 'job':
                            description = 'JOB '+row.id;
                            break;
                        case 'mold':
                            description = row.settingsMold.descript === '' || row.settingsMold.descript === null ? row.settingsMold.name : row.settingsMold.descript;
                            break;
                        default:
                            description = '';
                    }
                }

                row = new Row(row.id/*rowData.id*/, self, type, description, order, data);
                self.rowsMap[row.id] = row;
                self.rows.push(row);

                self.rowKey++;
            }

            var tasks = rowData.operationQueue !== undefined ? rowData.operationQueue : rowData.tasks !== undefined ? rowData.tasks : [];
            if (tasks.length > 0) {
                var i, j, k, l;
                for (i = 0, l = tasks.length; i < l; i++) {
                    var task = row.addTask(tasks[i]);
                    if (task === undefined) continue;
                    if (task.from === null || task.from === undefined || task.to === null || task.to === undefined) continue;
                    expandDateRange(task.from, task.to);
                    task.updatePosAndSize();

                    var process;
                    if (tasks[i].process.id in self.processesMap) {
                        process = self.processesMap[tasks[i].process.id];
                        process.addTask(task);
                        process.addPrevious(task.process.previousProcesses);
                    } else {
                        process = new Processes(tasks[i].process, self);
                        process.addTask(task);
                        process.addPrevious(task.process.previousProcesses);
                        self.processesMap[tasks[i].process.id] = process;
                    }

                    var job;
                    if (tasks[i].job.id in self.jobsMap) {
                        job = self.jobsMap[tasks[i].job.id];
                        job.addTask(self.rowKey, task);
                    } else {
                        job = new Jobs(tasks[i].job, self);
                        job.addTask(self.rowKey, task);

                        self.jobsMap[tasks[i].job.id] = job;
                    }
                }
                for (i = 0, l = _.keys(self.processesMap); i < l.length; ++i) {
                    for (j = 0, k = self.processesMap[l[i]].previous; j < k.length; ++j) {
                        if (self.processesMap[k[j]] !== undefined) {
                            self.processesMap[k[j]].addNext([self.processesMap[l[i]].id]);
                        }
                    }
                }

                expandColumns();
            }
            return isUpdate;
        };

        // Removes specified rows or tasks.
        // If a row has no tasks inside the complete row will be deleted.
        self.removeData = function(data, updateEventFn) {
            for (var i = 0, l = data.length; i < l; i++) {
                var rowData = data[i];

                if (rowData.tasks !== undefined && rowData.tasks.length > 0) {
                    // Only delete the specified tasks but not the row and the other tasks

                    if (rowData.id in self.rowsMap) {
                        var row = self.rowsMap[rowData.id];

                        for (var j = 0, k = rowData.tasks.length; j < k; j++) {
                            row.removeTask(rowData.tasks[j].id);
                        }

                        if (updateEventFn !== undefined) {
                            updateEventFn(row);
                        }
                    }
                } else {
                    // Delete the complete row
                    removeRow(rowData.id);
                }
            }
        };

        // Removes the complete row including all tasks
        var removeRow = function(rowId) {
            if (rowId in self.rowsMap) {
                // delete self.rowsMap[rowId]; // Remove from map
                self.rowsMap[rowId].showup = false;

                // for (var i = 0, l = self.rows.length; i < l; i++) {
                //     var row = self.rows[i];
                //     if (row.id === rowId) {
                //         self.rows.splice(i, 1); // Remove from array
                //         return row;
                //     }
                // }
            }

            return undefined;
        };

        // Removes all rows and tasks
        self.removeAllRows = function() {
            self.rowsMap = {};
            self.rows = [];
            self.highestRowOrder = 0;
            self.columns = [];
            self.defaultDateRange = undefined;
        };

        // Swaps two rows and changes the sort order to custom to display the swapped rows
        self.swapRows = function (a, b) {
            // Swap the two rows
            var order = a.order;
            a.order = b.order;
            b.order = order;
        };

        // Sort helper to sort by the date of the task with the earliest from date.
        // Rows with no min date will be sorted by name
        var sortByDate = function (a, b) {
            if (a.minFromDate === undefined && b.minFromDate === undefined) {
                return sortByName(a, b);
            } else if (a.minFromDate === undefined) {
                return 1;
            } else if (b.minFromDate === undefined) {
                return -1;
            } else {
                return a.minFromDate - b.minFromDate;
            }
        };

        // Sort helper to sort by description name (switch to localeCompare() in the future?)
        var sortByName = function (a, b) {
            if (a.description.toLowerCase() === b.description.toLowerCase()) {
                return 0;
            } else {
                return (a.description.toLowerCase() < b.description.toLowerCase()) ? -1 : 1;
            }
        };

        // Sort helper to sort by order.
        // If a row has no order move it at the end. If both rows have no order they will be sorted by name.
        var sortByCustom = function (a, b) {
            if (a.order === undefined && b.order === undefined) {
                return sortByName(a, b);
            } else if (a.order === undefined) {
                return 1;
            } else if (b.order === undefined) {
                return -1;
            } else {
                return a.order - b.order;
            }
        };
        var sortByDept = function(a, b) {
            if ((a.department === undefined && b.department === undefined) &&
                (a.department.id === undefined && b.department.id === undefined)) {
                return sortByName(a, b);
            } else if (a.department.id === undefined) {
                return 1;
            } else if (b.department.id === undefined) {
                return -1;
            } else {
                if (a.department.id === b.department.id) {
                    return 0;
                } else {
                    return (a.department.id < b.department.id) ? -1 : 1;
                }
            }
        };

        // Sort rows by the specified sort mode (name, order, custom, dept)
        self.sortRows = function (mode) {
            switch (mode) {
                case "name":
                    self.rows.sort(sortByName);
                    break;
                case "-name":
                    self.rows.reverse(sortByName);
                    break;
                case "date":
                    self.rows.reverse(sortByDate);
                    break;
                case "-date":
                    self.rows.reverse(sortByDate);
                    break;
                case 'dept':
                    self.rows.sort(sortByDept);
                    break;
                case '-dept':
                    self.rows.sort(sortByDept);
                    break;
                case "custom":
                    self.rows.sort(sortByCustom);
                    break;
                case "-custom":
                    self.rows.sort(sortByCustom);
                    break;
                default:
                    self.rows.sort(sortByDate);
                    break;
            }
        };
    };

    return Gantt;
}]);