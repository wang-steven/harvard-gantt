gantt.factory('Jobs', ['dateFunctions', 'binarySearch', '_', function (df, bs, _) {
    var Jobs = function(job, gantt) {
        var self = this;

        self.id = job.id;
        self.name = 'Job';
        self.gantt = gantt;
        self.comboType = job.comboType;
        self.comboId = job.comboId;
        self.poNo = job.poNo;
        self.comboQuantity = job.comboQuantity;
        self.processes = [];
        self.tasks = [];

        self.addTask = function(rowKey, taskData) {
            if (taskData.rowKey === undefined) {
                taskData.rowKey = rowKey;
            }
            self.tasks.push(taskData);

            if (self.processes.indexOf(taskData.process.id) < 0) {
                self.processes.push(taskData.process.id);
            }

            // Sort the task by date position.
            self.tasks.sort(function(t1, t2) { return t1.left - t2.left; });

            return self.tasks;
        };
    };

    return Jobs;
}]);