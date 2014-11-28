gantt.factory('Task', ['dateFunctions', '_', function (df, _) {
    var Task = function(id, row, subject, color, classes, priority, from, to, data, est, lct) {
        var self = this;

        self.id = id;
        self.name = 'Task';
        self.gantt = row.gantt;
        self.row = row;
        self.subject = subject+'('+id+')';
        self.color = color;
        self.classes = classes;
        self.priority = priority;
        self.from = df.clone(from);
        self.to = df.clone(to);
        self.tmp = df.clone(from);
        self.process = data.process;
        self.job = data.job;
        self.previousOperation = data.previousOperation;
        self.nextOperations = data.nextOperations;
        self.data = data;
        self.tooltips = {};
        self.dirty = false;
        self.rowHasBeenChanged = false;
        self.preventRowId = row.id;
        self.openLightbox = false;
        self.openContextMenu = false;
        self.est = df.clone(from);
        self.lct = df.clone(to);
        self.showup = true;

        self.tmp = self.from;
        self.during = df.clone(data.expectedFinishTime) - df.clone(data.expectedStartTime);
        self.left = 0;
        self.width = 0;
        self.isHighlight = false;

        if (est !== undefined && lct !== undefined) {
            self.est = df.clone(est);  //Earliest Start Time
            self.lct = df.clone(lct);  //Latest Completion Time
        }

        self.checkIfMilestone = function() {
            self.isMilestone = self.from - self.to === 0;
        };
        self.checkIfFinished = function() {
            self.isFinished = !!self.data.finished;
            //self.isMoving = !self.isFinished;
        };
        self.checkIfInProcessing = function() {
            self.inProcessing = !!self.data.inProcessing;
            //self.isMoving = !self.isFinished;
        };
        self.checkIfPin = function() {
            self.isPin = !!self.data.pin;
        };
        self.checkIfDelete = function() {
            self.isDeleted = !!self.data.delete;
        };
        self.checkIfManual = function() {
            self.isManual = !!self.data.manual;
        };
        self.checkParallelFrom = function() {
            var parallelFrom = self.data.actualSetupFinishTime === null || self.data.actualSetupFinishTime === undefined ? self.data.expectedSetupFinishTime : self.data.actualSetupFinishTime;
            if (self.isParallel === true && self.data.s2sMins >= 0) {
                self.parallelFrom = df.clone(parallelFrom);
                self.parallelFrom = df.addMinutes(self.parallelFrom, self.data.s2sMins, true);
            } else {
                self.parallelFrom = df.clone(self.to);
                self.isParallel = false;
            }
        };
        self.checkIfParallel = function() {
            self.isParallel = !!self.data.parallel;
            self.checkParallelFrom();
        };
        self.checkIfNew = function() {
            self.isNew = !!self.data.new;
        };
        // self.rejectMoving = function() {
        //     var from = (self.data.actualStartTime === null || self.data.actualStartTime === undefined) ? self.data.expectedStartTime : self.data.actualStartTime,
        //         to = (self.data.actualFinishTime === null || self.data.actualFinishTime === undefined) ? self.data.expectedFinishTime : self.data.actualFinishTime,
        //         parallelFrom = self.data.actualSetupFinishTime === null || self.data.actualSetupFinishTime === undefined ? self.data.expectedSetupFinishTime : self.data.actualSetupFinishTime;
        //     self.dirty = false;
        //     self.from = df.clone(from);
        //     self.to = df.clone(to);
        //     if (self.isParallel === true) {
        //         self.parallelFrom = df.clone(parallelFrom);
        //         self.parallelFrom = df.addMinutes(self.parallelFrom, self.data.s2sMins, true);
        //     } else {
        //         self.parallelFrom = self.to;
        //     }
        //     self.row.setMinMaxDateByTask(self);
        //     self.updatePosAndSize();
        //     self.checkIfMilestone();
        // };
        // self.updateMoving = function() {
        //     self.dirty = false;
        //     var from = (self.data.actualStartTime === null || self.data.actualStartTime === undefined) ? self.data.expectedStartTime : self.data.actualStartTime,
        //         to = (self.data.actualFinishTime === null || self.data.actualFinishTime === undefined) ? self.data.expectedFinishTime : self.data.actualFinishTime,
        //         parallelFrom = self.data.actualSetupFinishTime === null || self.data.actualSetupFinishTime === undefined ? self.data.expectedSetupFinishTime : self.data.actualSetupFinishTime;
        //     var originSetupFinishTime = df.clone(parallelFrom) - df.clone(from);
        //     originSetupFinishTime = df.addMilliseconds(self.from, originSetupFinishTime, true);

        //     self.expectedFinishTime = self.to.toISOString();
        //     self.expectedStartTime = self.from.toISOString();
        //     self.expectedSetupFinishTime = originSetupFinishTime.toISOString();
        //     if (self.isParallel === true) {
        //         self.parallelFrom = df.addMinutes(originSetupFinishTime, self.data.s2sMins, true);
        //     } else {
        //         self.parallelFrom = self.to;
        //     }
        // };

        self.prepareTooltips = function() {
            var tooltips = {'tip': self.data.tooltip1, 'ui': self.data.tooltip2, 'chart': self.data.tooltip3};
            for (var i = 0, j = _.keys(tooltips), l = j.length; i < l; ++i) {
                self.tooltips[j[i]] = tooltips[j[i]].split('|');
            }
        };

        self.checkIfNew();
        self.checkIfDelete();
        self.checkIfManual();
        self.checkIfMilestone();
        self.checkIfInProcessing();
        self.checkIfFinished();
        self.checkIfPin();
        self.checkIfParallel();
        self.prepareTooltips();

        self.hasBounds = function() {
            return self.bounds !== undefined;
        };

        // Updates the pos and size of the task according to the from - to date
        self.updatePosAndSize = function() {
            self.left = self.gantt.getPositionByDate(self.from);
            self.width = Math.ceil((self.gantt.getPositionByDate(self.to) - self.left) * 10) / 10;

            self.row.tasks.sort(function(t1, t2) { return t1.from - t2.from; });
            for (var i = 0, k = self.row.tasks, l = k.length; i < l; i++) {
                if (k[i].id === self.id) {
                    if (k[(i-1)] !== undefined) {
                        self.est = df.addMinutes(k[(i-1)].to, 1, true);
                    } else {
                        self.est = df.clone(self.from);
                    }
                    if (k[(i+1)] !== undefined) {
                        self.lct = df.addMinutes(k[(i+1)].from, -1, true);
                    } else {
                        self.lct = df.clone(self.to);
                    }
                    break;
                }
            }

            if (self.est !== undefined && self.lct !== undefined) {
                self.bounds = {};
                self.bounds.left = self.gantt.getPositionByDate(self.est);
                self.bounds.width = Math.ceil((self.gantt.getPositionByDate(self.lct) - self.bounds.left) * 10) / 10;
            }
        };

        // Expands the start of the task to the specified position (in em)
        self.setFrom = function(x) {
            if (x > self.left + self.width) {
                x = self.left + self.width;
            } else if (x < 0) {
                x = 0;
            }

            self.from = self.gantt.getDateByPosition(x, true);
            self.est = df.clone(self.from);
            self.row.setMinMaxDateByTask(self);
            self.updatePosAndSize();
            self.checkIfMilestone();
        };

        // Expands the end of the task to the specified position (in em)
        self.setTo = function(x) {
            if (x < self.left) {
                x = self.left;
            } else if (x > self.gantt.width) {
                x = self.gantt.width;
            }

            self.to = self.gantt.getDateByPosition(x, false);
            self.lct = df.clone(self.to);
            self.row.setMinMaxDateByTask(self);
            self.updatePosAndSize();
            self.checkIfMilestone();
        };

        // Moves the task to the specified position (in em)
        self.moveTo = function(x) {
            if (x < 0) {
                x = 0;
            } else if (x + self.width >= self.gantt.width) {
                x = self.gantt.width - self.width;
            }

            self.from = self.gantt.getDateByPosition(x, true);
            self.left = self.gantt.getPositionByDate(self.from);
            self.to = df.addMilliseconds(self.from, self.during, true);
            self.width = Math.ceil((self.gantt.getPositionByDate(self.to) - self.left) * 10) / 10;

            self.row.setMinMaxDateByTask(self);
        };

        self.copy = function(task) {
            self.subject = task.subject;
            self.color = task.color;
            self.classes = task.classes;
            self.priority = task.priority;
            self.from = df.clone(task.from);
            self.to = df.clone(task.to);
            self.est = task.est !== undefined ? df.clone(task.est): undefined;
            self.lct = task.lct !== undefined ? df.clone(task.lct): undefined;
            data = task.data;
            self.isMilestone = task.isMilestone;
        };

        self.clone = function() {
            return new Task(self.id, self.row, self.subject, self.color, self.classes, self.priority, self.from, self.to, data, self.est, self.lct);
        };
    };

    return Task;
}]);
