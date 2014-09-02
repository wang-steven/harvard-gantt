gantt.factory('IndexedDB', ['$window', '$q', 'binarySearch', function ($window, $q, bs) {
    var IndexedDB = function(dbName, storeName, dbVersion) {
        var self = this;
        var IDBKeyRange = $window.IDBKeyRange || $window.webkitIDBKeyRange || $window.msIDBKeyRange;

        self.name = 'Store';
        self.indexedDB = $window.indexedDB || $window.mozIndexedDB || $window.webkitIndexedDB || $window.msIndexedDB;
        self.db = dbName || 'GanttStoreDB';
        self.storeName = storeName || 'machines';
        self.version = dbVersion || 1;
        self.lastIndex = 0;

        self.open = function(storeName, dbVersion) {
            var deferred = $q.defer();
            var request = self.indexedDB.open(self.db, (dbVersion || self.version));

            self.storeName = storeName || self.storeName;

            request.onupgradeneeded = function(event) {
                self.db = event.target.result;

                event.target.transaction.onerror = self.indexedDB.onerror;

                if (self.db.objectStoreNames.contains(self.storeName)) {
                    self.db.deleteObjectStore(self.storeName);
                }

                var store = self.db.createObjectStore(self.storeName, { keyPath: 'id' });
            };
            request.onsuccess = function(event) {
                self.db = event.target.result;
                deferred.resolve();
            };

            request.onerror = function() {
                deferred.reject();
            };

            return deferred.promise;
        };

        self.clear = function() {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);
                var request = store.clear();

                request.onsuccess = function(event) {
                    deferred.resolve([]);
                };
                request.onerror = function(event) {
                    deferred.reject("Cannot clear the store object!");
                };
            }

            return deferred.promise;
        };

        self.getItems = function() {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);
                var items = [];

                // Get everything in the store;
                var keyRange = IDBKeyRange.lowerBound(0);
                var cursorRequest = store.openCursor(keyRange);

                cursorRequest.onsuccess = function(event) {
                    var result = event.target.result;
                    if(result === null || result === undefined) {
                        deferred.resolve(items);
                    } else {
                        items.push(result.value);
                        if (result.value.id > self.lastIndex) {
                            self.lastIndex = result.value.id;
                        }
                        result.continue();
                    }
                };

                cursorRequest.onerror = function(event) {
                    deferred.reject("Something went wrong!!!");
                };
            }

            return deferred.promise;
        };

        self.removeItem = function(id) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                var request = store.delete(id);

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be removed.");
                };
            }

            return deferred.promise;
        };

        self.addTask = function(data) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                self.lastIndex++;
                var request = store.put({
                    id: data.id,
                    operationCode: data.operationCode,
                    priority: data.priority,
                    job: data.job,
                    process: data.process,
                    previousOperation: data.previousOperation,
                    nextOperations: data.nextOperations,
                    runOnMachineId: data.runOnMachineId,
                    actualRunOnMachineId: data.actualRunOnMachineId,
                    quantity: data.quantity,
                    processingType: data.processingType,
                    factoryOperation: data.factoryOperation,
                    jobFile: data.jobFile,
                    pin: data.pin,
                    setupTime: data.setupTime,
                    productionTime: data.productionTime,
                    productionCapacity: data.productionCapacity,
                    s2sMins: data.s2sMins,
                    expectedStartTime: data.expectedStartTime,
                    expectedSetupFinishTime: data.expectedSetupFinishTime,
                    expectedFinishTime: data.expectedFinishTime,
                    actualStartTime: data.actualStartTime,
                    actualSetupFinishTime: data.actualSetupFinishTime,
                    actualFinishTime: data.actualFinishTime,
                    finished: data.finished,
                    inProcessing: data.inProcessing,
                    parallel: data.parallel,
                    parallelCode: data.parallelCode,
                    expectedMoldId: data.expectedMoldId,
                    tooltip1: data.tooltip1,
                    tooltip2: data.tooltip2,
                    tooltip3: data.tooltip3,
                    color1: data.color1,
                    color2: data.color2,
                    new: data.new
                });

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be added!");
                };
            }
            return deferred.promise;
        };

        self.addJob = function(data) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                self.lastIndex++;
                var request = store.put({
                    id: data.id,
                    operationQueue: data.operationQueue
                });

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be added!");
                };
            }
            return deferred.promise;
        };

        self.addMachine = function(data) {
            var deferred = $q.defer();

            if (self.db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = self.db.transaction([self.storeName], "readwrite");
                var store = trans.objectStore(self.storeName);

                self.lastIndex++;
                var request = store.put({
                    id: data.id,
                    code: data.settingsMachine.code,
                    settingsMachine: data.settingsMachine,
                    factoryOperation: data.factoryOperation,
                    currentTimeWorks: data.currentTimeWorks,
                    online: data.online,
                    operationQueue: data.operationQueue
                });

                request.onsuccess = function(event) {
                    deferred.resolve();
                };

                request.onerror = function(event) {
                    deferred.reject("Machine item couldn't be added!");
                };
            }
            return deferred.promise;
        };
    };

    return IndexedDB;
}]);