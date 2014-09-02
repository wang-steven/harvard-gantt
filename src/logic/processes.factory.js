gantt.factory('Processes', ['dateFunctions', 'binarySearch', '_', function (df, bs, _) {
    var Processes = function(process, gantt) {
        var self = this;

        self.id = process.id;
        self.name = 'Process';
        self.gantt = gantt;
        self.productId = process.productId;
        self.waitPrevious = process.needWaitPrevProcess === true ? true : false;
        self.operations = process.operations;
        self.previous = [];
        self.tasks = [];
        self.next = [];

        self.addTask = function(task) {
            self.tasks.push(task);
            // Sort the task by date position.
            self.tasks.sort(function(t1, t2) { return t1.from - t2.from; });
        };

        self.addPrevious = function(processes) {
            self.previous = _.union(self.previous, processes);
        };

        self.addNext = function(processes) {
            self.next = _.union(self.next, processes);
        };
    };

    return Processes;
}]);