function getSampleData() {

return {
"data":[ {
  "machine" : {
    "id" : 1,
    "settingsMachine" : {
      "id" : 1,
      "code" : "PT01",
      "descript" : "???",
      "name" : "Komori 4",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Komori",
        "descript" : "Komori"
      },
      "dept" : {
        "id" : 7,
        "code" : "Printing Dept._",
        "name" : "Printing Dept.",
        "subDept" : ""
      },
      "unit" : "SHEET",
      "basicSetupTime" : 90,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 2
      },
      "monitorAddress" : "dashboard_PT01",
      "camIp" : "10.100.0.12",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 2
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57504,
    "operationCode" : "144038-G",
    "priority" : 200,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7174,
      "needWaitPrevProcess" : true,
      "operations" : [ 57503, 57504, 57505, 57507, 57506 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57503,
    "nextOperations" : [ 57505 ],
    "runOnMachineId" : 1,
    "actualRunOnMachineId" : null,
    "quantity" : 5625,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 2
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 113,
    "productionCapacity" : 50,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-03T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-03T09:30:00.000",
    "expectedFinishTime" : "2014-07-03T11:23:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "144038-G|45|PO-1011310",
    "tooltip2" : "144038-G|45|PO-1011310",
    "tooltip3" : "144038-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57505,
    "operationCode" : "144038-G",
    "priority" : 200,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7174,
      "needWaitPrevProcess" : true,
      "operations" : [ 57503, 57504, 57505, 57507, 57506 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57504,
    "nextOperations" : [ 57507, 57506 ],
    "runOnMachineId" : 1,
    "actualRunOnMachineId" : null,
    "quantity" : 5625,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 2
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 113,
    "productionCapacity" : 50,
    "s2sMins" : 40,
    "expectedStartTime" : "2014-07-03T11:24:00.000",
    "expectedSetupFinishTime" : "2014-07-03T12:54:00.000",
    "expectedFinishTime" : "2014-07-03T14:47:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "144038-G|45|PO-1011310",
    "tooltip2" : "144038-G|45|PO-1011310",
    "tooltip3" : "144038-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 2,
    "settingsMachine" : {
      "id" : 2,
      "code" : "PT02",
      "descript" : "???",
      "name" : "Komori 3",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Komori",
        "descript" : "Komori"
      },
      "dept" : {
        "id" : 7,
        "code" : "Printing Dept._",
        "name" : "Printing Dept.",
        "subDept" : ""
      },
      "unit" : "SHEET",
      "basicSetupTime" : 90,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 2
      },
      "monitorAddress" : "dashboard_PT02",
      "camIp" : "10.100.0.11",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 2
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57493,
    "operationCode" : "144037-G",
    "priority" : 200,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7172,
      "needWaitPrevProcess" : true,
      "operations" : [ 57492, 57493, 57494, 57496, 57497, 57495 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57492,
    "nextOperations" : [ 57494 ],
    "runOnMachineId" : 2,
    "actualRunOnMachineId" : null,
    "quantity" : 2250,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 2
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 73,
    "productionCapacity" : 31,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-03T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-03T09:30:00.000",
    "expectedFinishTime" : "2014-07-03T10:43:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "144037-G|45|PO-1011310",
    "tooltip2" : "144037-G|45|PO-1011310",
    "tooltip3" : "144037-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57494,
    "operationCode" : "144037-G",
    "priority" : 200,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7172,
      "needWaitPrevProcess" : true,
      "operations" : [ 57492, 57493, 57494, 57496, 57497, 57495 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57493,
    "nextOperations" : [ 57496, 57497, 57495 ],
    "runOnMachineId" : 2,
    "actualRunOnMachineId" : null,
    "quantity" : 2250,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 2
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 73,
    "productionCapacity" : 31,
    "s2sMins" : 65,
    "expectedStartTime" : "2014-07-03T10:44:00.000",
    "expectedSetupFinishTime" : "2014-07-03T12:14:00.000",
    "expectedFinishTime" : "2014-07-03T13:27:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "144037-G|45|PO-1011310",
    "tooltip2" : "144037-G|45|PO-1011310",
    "tooltip3" : "144037-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 3,
    "settingsMachine" : {
      "id" : 3,
      "code" : "PT03",
      "descript" : "?????(??lam????????)",
      "name" : "Silk Screen",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Silk Screen",
        "descript" : "Silk Screen"
      },
      "dept" : {
        "id" : 7,
        "code" : "Printing Dept._",
        "name" : "Printing Dept.",
        "subDept" : ""
      },
      "unit" : "SHEET",
      "basicSetupTime" : 60,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 3,
        "code" : "PT_SS",
        "descript" : "PT_SS",
        "displayNames" : "Silk Screen",
        "needMachine" : true,
        "priority" : 3
      },
      "monitorAddress" : "silkscreen",
      "camIp" : "00001",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 3,
      "code" : "PT_SS",
      "descript" : "PT_SS",
      "displayNames" : "Silk Screen",
      "needMachine" : true,
      "priority" : 3
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 4,
    "settingsMachine" : {
      "id" : 4,
      "code" : "MD01",
      "descript" : "??????, ???M6(CR80????)?hot stamp",
      "name" : "MagMaster #1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "MagMaster",
        "descript" : "MagMaster"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept._Magnetic",
        "name" : "Mid Dept.",
        "subDept" : "Magnetic"
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB",
      "settingsFactoryOperation" : {
        "id" : 4,
        "code" : "MID_MAG_MASTER",
        "descript" : "MID_MAG_MASTER",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 4
      },
      "monitorAddress" : "magmaster1",
      "camIp" : "00002",
      "ssQuantity" : 50000
    },
    "factoryOperation" : {
      "id" : 4,
      "code" : "MID_MAG_MASTER",
      "descript" : "MID_MAG_MASTER",
      "displayNames" : "Mid Mag",
      "needMachine" : true,
      "priority" : 4
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 5,
    "settingsMachine" : {
      "id" : 5,
      "code" : "MD02",
      "descript" : "??????, ???M6(CR80????)?hot stamp",
      "name" : "MagMaster #2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "MagMaster",
        "descript" : "MagMaster"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept._Magnetic",
        "name" : "Mid Dept.",
        "subDept" : "Magnetic"
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB",
      "settingsFactoryOperation" : {
        "id" : 4,
        "code" : "MID_MAG_MASTER",
        "descript" : "MID_MAG_MASTER",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 4
      },
      "monitorAddress" : "magmaster2",
      "camIp" : "00003",
      "ssQuantity" : 50000
    },
    "factoryOperation" : {
      "id" : 4,
      "code" : "MID_MAG_MASTER",
      "descript" : "MID_MAG_MASTER",
      "displayNames" : "Mid Mag",
      "needMachine" : true,
      "priority" : 4
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 6,
    "settingsMachine" : {
      "id" : 6,
      "code" : "PZ10",
      "descript" : "?Vincent",
      "name" : "MagMaster",
      "settingsMachineType" : {
        "id" : null,
        "code" : "MagMaster",
        "descript" : "MagMaster"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 22,
        "code" : "PZ_MAG_MASTER",
        "descript" : "PZ_MAG_MASTER",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 22
      },
      "monitorAddress" : "00001",
      "camIp" : "00004",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 22,
      "code" : "PZ_MAG_MASTER",
      "descript" : "PZ_MAG_MASTER",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 22
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 7,
    "settingsMachine" : {
      "id" : 7,
      "code" : "MD03",
      "descript" : "??sheet??? (sheet size ???)",
      "name" : "MTL-700 #1 (Sheets)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "MTL",
        "descript" : "MTL"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept._Magnetic",
        "name" : "Mid Dept.",
        "subDept" : "Magnetic"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 5
      },
      "monitorAddress" : "mtl700-1",
      "camIp" : "10.100.0.13",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 5,
      "code" : "MID_MAG_MTL",
      "descript" : "MID_MAG_MTL",
      "displayNames" : "Mid Mag",
      "needMachine" : true,
      "priority" : 5
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 8,
    "settingsMachine" : {
      "id" : 8,
      "code" : "MD04",
      "descript" : "??sheet???",
      "name" : "MTL-700 #2 (Sheets)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "MTL",
        "descript" : "MTL"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept._Magnetic",
        "name" : "Mid Dept.",
        "subDept" : "Magnetic"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 5
      },
      "monitorAddress" : "mtl700-2",
      "camIp" : "10.100.0.14",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 5,
      "code" : "MID_MAG_MTL",
      "descript" : "MID_MAG_MTL",
      "displayNames" : "Mid Mag",
      "needMachine" : true,
      "priority" : 5
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 9,
    "settingsMachine" : {
      "id" : 9,
      "code" : "MD05",
      "descript" : "??sheet???",
      "name" : "MTL-700 #3 (Sheets)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "MTL",
        "descript" : "MTL"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept._Magnetic",
        "name" : "Mid Dept.",
        "subDept" : "Magnetic"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 5
      },
      "monitorAddress" : "mtl700-3",
      "camIp" : "10.100.0.15",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 5,
      "code" : "MID_MAG_MTL",
      "descript" : "MID_MAG_MTL",
      "displayNames" : "Mid Mag",
      "needMachine" : true,
      "priority" : 5
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 10,
    "settingsMachine" : {
      "id" : 10,
      "code" : "MD06",
      "descript" : "?? (only for CR80)",
      "name" : "Franklin #1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Franklin",
        "descript" : "Franklin"
      },
      "dept" : {
        "id" : 9,
        "code" : "Mid Dept._Hot Stamp",
        "name" : "Mid Dept.",
        "subDept" : "Hot Stamp"
      },
      "unit" : "CARD",
      "basicSetupTime" : 180,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB",
      "settingsFactoryOperation" : {
        "id" : 14,
        "code" : "MID_HOT_STAMP",
        "descript" : "MID_HOT_STAMP",
        "displayNames" : "Mid Hot Stamp",
        "needMachine" : true,
        "priority" : 14
      },
      "monitorAddress" : "192.168.1.9",
      "camIp" : "00005",
      "ssQuantity" : 50000
    },
    "factoryOperation" : {
      "id" : 14,
      "code" : "MID_HOT_STAMP",
      "descript" : "MID_HOT_STAMP",
      "displayNames" : "Mid Hot Stamp",
      "needMachine" : true,
      "priority" : 14
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 11,
    "settingsMachine" : {
      "id" : 11,
      "code" : "MD21",
      "descript" : "?? (only for CR80)",
      "name" : "Franklin #2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Franklin",
        "descript" : "Franklin"
      },
      "dept" : {
        "id" : 9,
        "code" : "Mid Dept._Hot Stamp",
        "name" : "Mid Dept.",
        "subDept" : "Hot Stamp"
      },
      "unit" : "CARD",
      "basicSetupTime" : 180,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB",
      "settingsFactoryOperation" : {
        "id" : 14,
        "code" : "MID_HOT_STAMP",
        "descript" : "MID_HOT_STAMP",
        "displayNames" : "Mid Hot Stamp",
        "needMachine" : true,
        "priority" : 14
      },
      "monitorAddress" : "192.168.1.10",
      "camIp" : "00006",
      "ssQuantity" : 50000
    },
    "factoryOperation" : {
      "id" : 14,
      "code" : "MID_HOT_STAMP",
      "descript" : "MID_HOT_STAMP",
      "displayNames" : "Mid Hot Stamp",
      "needMachine" : true,
      "priority" : 14
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 12,
    "settingsMachine" : {
      "id" : 12,
      "code" : "MD07",
      "descript" : "??????",
      "name" : "SYSCO (No actual Production)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "SYSCO",
        "descript" : "SYSCO"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept._Lamination",
        "name" : "Mid Dept.",
        "subDept" : "Lamination"
      },
      "unit" : "CARD",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 6,
        "code" : "MID_LAM_SYSCO",
        "descript" : "MID_LAM_SYSCO",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 6
      },
      "monitorAddress" : "192.168.1.11",
      "camIp" : "00007",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 6,
      "code" : "MID_LAM_SYSCO",
      "descript" : "MID_LAM_SYSCO",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 6
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57495,
    "operationCode" : "144037-G",
    "priority" : 600,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7172,
      "needWaitPrevProcess" : true,
      "operations" : [ 57492, 57493, 57494, 57496, 57497, 57495 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57494,
    "nextOperations" : [ 57496 ],
    "runOnMachineId" : 12,
    "actualRunOnMachineId" : null,
    "quantity" : 2250,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 6,
      "code" : "MID_LAM_SYSCO",
      "descript" : "MID_LAM_SYSCO",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 6
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 0,
    "productionTime" : 1,
    "productionCapacity" : 2147483647,
    "s2sMins" : 65,
    "expectedStartTime" : "2014-07-03T13:28:00.000",
    "expectedSetupFinishTime" : "2014-07-03T13:28:00.000",
    "expectedFinishTime" : "2014-07-03T13:29:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "1",
    "expectedMoldId" : null,
    "tooltip1" : "144037-G|45|PO-1011310",
    "tooltip2" : "144037-G|45|PO-1011310",
    "tooltip3" : "144037-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 13,
    "settingsMachine" : {
      "id" : 13,
      "code" : "MD20",
      "descript" : "??????",
      "name" : "SYSCO (No actual Production)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "SYSCO",
        "descript" : "SYSCO"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept._Lamination",
        "name" : "Mid Dept.",
        "subDept" : "Lamination"
      },
      "unit" : "CARD",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 6,
        "code" : "MID_LAM_SYSCO",
        "descript" : "MID_LAM_SYSCO",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 6
      },
      "monitorAddress" : "192.168.1.12",
      "camIp" : "00008",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 6,
      "code" : "MID_LAM_SYSCO",
      "descript" : "MID_LAM_SYSCO",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 6
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 14,
    "settingsMachine" : {
      "id" : 14,
      "code" : "MD08",
      "descript" : "??sheet????",
      "name" : "Collate #1 (350/hr)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Collate",
        "descript" : "Collate"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept._Lamination",
        "name" : "Mid Dept.",
        "subDept" : "Lamination"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 7,
        "code" : "MID_LAM_COLLATE",
        "descript" : "MID_LAM_COLLATE",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 7
      },
      "monitorAddress" : "collate1",
      "camIp" : "00009",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 7,
      "code" : "MID_LAM_COLLATE",
      "descript" : "MID_LAM_COLLATE",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 7
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 15,
    "settingsMachine" : {
      "id" : 15,
      "code" : "MD09",
      "descript" : "??sheet????",
      "name" : "Collate #2 (350/hr)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Collate",
        "descript" : "Collate"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept._Lamination",
        "name" : "Mid Dept.",
        "subDept" : "Lamination"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 7,
        "code" : "MID_LAM_COLLATE",
        "descript" : "MID_LAM_COLLATE",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 7
      },
      "monitorAddress" : "collate2",
      "camIp" : "000010",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 7,
      "code" : "MID_LAM_COLLATE",
      "descript" : "MID_LAM_COLLATE",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 7
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 16,
    "settingsMachine" : {
      "id" : 16,
      "code" : "MD19",
      "descript" : "??sheet????",
      "name" : "Collate #3",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Collate",
        "descript" : "Collate"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept._Lamination",
        "name" : "Mid Dept.",
        "subDept" : "Lamination"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 7,
        "code" : "MID_LAM_COLLATE",
        "descript" : "MID_LAM_COLLATE",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 7
      },
      "monitorAddress" : "192.168.1.15",
      "camIp" : "000011",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 7,
      "code" : "MID_LAM_COLLATE",
      "descript" : "MID_LAM_COLLATE",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 7
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57496,
    "operationCode" : "144037-G",
    "priority" : 700,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7172,
      "needWaitPrevProcess" : true,
      "operations" : [ 57492, 57493, 57494, 57496, 57497, 57495 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57495,
    "nextOperations" : [ 57497 ],
    "runOnMachineId" : 16,
    "actualRunOnMachineId" : null,
    "quantity" : 2250,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 7,
      "code" : "MID_LAM_COLLATE",
      "descript" : "MID_LAM_COLLATE",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 7
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 30,
    "productionTime" : 250,
    "productionCapacity" : 9,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-03T13:30:00.000",
    "expectedSetupFinishTime" : "2014-07-03T14:00:00.000",
    "expectedFinishTime" : "2014-07-03T18:10:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "1",
    "expectedMoldId" : null,
    "tooltip1" : "144037-G|45|PO-1011310",
    "tooltip2" : "144037-G|45|PO-1011310",
    "tooltip3" : "144037-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 17,
    "settingsMachine" : {
      "id" : 17,
      "code" : "MD10",
      "descript" : "??PVC",
      "name" : "OASYS #1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "OASYS",
        "descript" : "OASYS"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept._Lamination",
        "name" : "Mid Dept.",
        "subDept" : "Lamination"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 240,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 8,
        "code" : "MID_LAM_OASYS",
        "descript" : "MID_LAM_OASYS",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 8
      },
      "monitorAddress" : "oasys1",
      "camIp" : "000012",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 8,
      "code" : "MID_LAM_OASYS",
      "descript" : "MID_LAM_OASYS",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 8
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57497,
    "operationCode" : "144037-G",
    "priority" : 800,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7172,
      "needWaitPrevProcess" : true,
      "operations" : [ 57492, 57493, 57494, 57496, 57497, 57495 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57496,
    "nextOperations" : [ ],
    "runOnMachineId" : 17,
    "actualRunOnMachineId" : null,
    "quantity" : 2250,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 8,
      "code" : "MID_LAM_OASYS",
      "descript" : "MID_LAM_OASYS",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 8
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 240,
    "productionTime" : 450,
    "productionCapacity" : 5,
    "s2sMins" : 223,
    "expectedStartTime" : "2014-07-04T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-04T12:00:00.000",
    "expectedFinishTime" : "2014-07-04T19:30:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "1",
    "expectedMoldId" : null,
    "tooltip1" : "144037-G|45|PO-1011310",
    "tooltip2" : "144037-G|45|PO-1011310",
    "tooltip3" : "144037-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 18,
    "settingsMachine" : {
      "id" : 18,
      "code" : "MD11",
      "descript" : "??PVC",
      "name" : "OASYS #2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "OASYS",
        "descript" : "OASYS"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept._Lamination",
        "name" : "Mid Dept.",
        "subDept" : "Lamination"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 240,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 8,
        "code" : "MID_LAM_OASYS",
        "descript" : "MID_LAM_OASYS",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 8
      },
      "monitorAddress" : "oasys2",
      "camIp" : "000013",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 8,
      "code" : "MID_LAM_OASYS",
      "descript" : "MID_LAM_OASYS",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 8
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 19,
    "settingsMachine" : {
      "id" : 19,
      "code" : "MD12",
      "descript" : "?????(only??,????)",
      "name" : "Car 25  1 (CR-80)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 9
      },
      "monitorAddress" : "car25-1",
      "camIp" : "10.100.0.16",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 20,
    "settingsMachine" : {
      "id" : 20,
      "code" : "MD13",
      "descript" : "?????(only??,????)",
      "name" : "Car  25 2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 9
      },
      "monitorAddress" : "car25-2",
      "camIp" : "10.100.0.17",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 21,
    "settingsMachine" : {
      "id" : 21,
      "code" : "MD14",
      "descript" : "?????(only??,????)",
      "name" : "Car  25 3 (Mini CR-80 or CR-80 option)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 9
      },
      "monitorAddress" : "car25-3",
      "camIp" : "10.100.0.18",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 22,
    "settingsMachine" : {
      "id" : 22,
      "code" : "MD15",
      "descript" : "?????(only??,????)",
      "name" : "Car  25 4",
      "settingsMachineType" : {
        "id" : null,
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 9
      },
      "monitorAddress" : "car25-4",
      "camIp" : "10.100.0.19",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 23,
    "settingsMachine" : {
      "id" : 23,
      "code" : "MD16",
      "descript" : "?????(only??, ?????ISOWA??)",
      "name" : "Bobst 106E",
      "settingsMachineType" : {
        "id" : null,
        "code" : "BOBST",
        "descript" : "BOBST"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 10,
        "code" : "MID_DIE_BOBST",
        "descript" : "MID_DIE_BOBST",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 10
      },
      "monitorAddress" : "bobst106e",
      "camIp" : "10.100.0.20",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 10,
      "code" : "MID_DIE_BOBST",
      "descript" : "MID_DIE_BOBST",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 10
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57506,
    "operationCode" : "144038-G",
    "priority" : 1000,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7174,
      "needWaitPrevProcess" : true,
      "operations" : [ 57503, 57504, 57505, 57507, 57506 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57505,
    "nextOperations" : [ 57507 ],
    "runOnMachineId" : 23,
    "actualRunOnMachineId" : null,
    "quantity" : 5625,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 10,
      "code" : "MID_DIE_BOBST",
      "descript" : "MID_DIE_BOBST",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 10
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 209,
    "productionCapacity" : 27,
    "s2sMins" : 40,
    "expectedStartTime" : "2014-07-03T14:48:00.000",
    "expectedSetupFinishTime" : "2014-07-03T15:03:00.000",
    "expectedFinishTime" : "2014-07-03T18:32:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "1",
    "expectedMoldId" : 338,
    "tooltip1" : "144038-G|45|PO-1011310",
    "tooltip2" : "144038-G|45|PO-1011310",
    "tooltip3" : "144038-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 24,
    "settingsMachine" : {
      "id" : 24,
      "code" : "MD17",
      "descript" : "?????(??+??2?1)",
      "name" : "Bobst 104SP",
      "settingsMachineType" : {
        "id" : null,
        "code" : "BOBST",
        "descript" : "BOBST"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 10,
        "code" : "MID_DIE_BOBST",
        "descript" : "MID_DIE_BOBST",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 10
      },
      "monitorAddress" : "bobst104sp",
      "camIp" : "10.100.0.21",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 10,
      "code" : "MID_DIE_BOBST",
      "descript" : "MID_DIE_BOBST",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 10
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 25,
    "settingsMachine" : {
      "id" : 25,
      "code" : "MD22",
      "descript" : "????, ???106E??????Blanker",
      "name" : "Blanker",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Blanker",
        "descript" : "Blanker"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 60,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 11,
        "code" : "MID_DIE_BLANKER",
        "descript" : "MID_DIE_BLANKER",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 11
      },
      "monitorAddress" : "192.168.1.23",
      "camIp" : "000052",
      "ssQuantity" : 2000
    },
    "factoryOperation" : {
      "id" : 11,
      "code" : "MID_DIE_BLANKER",
      "descript" : "MID_DIE_BLANKER",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 11
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57507,
    "operationCode" : "144038-G",
    "priority" : 1100,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7174,
      "needWaitPrevProcess" : true,
      "operations" : [ 57503, 57504, 57505, 57507, 57506 ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : 57506,
    "nextOperations" : [ ],
    "runOnMachineId" : 25,
    "actualRunOnMachineId" : null,
    "quantity" : 5625,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 11,
      "code" : "MID_DIE_BLANKER",
      "descript" : "MID_DIE_BLANKER",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 11
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 60,
    "productionTime" : 402,
    "productionCapacity" : 14,
    "s2sMins" : 75,
    "expectedStartTime" : "2014-07-04T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-04T09:00:00.000",
    "expectedFinishTime" : "2014-07-04T15:42:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "1",
    "expectedMoldId" : null,
    "tooltip1" : "144038-G|45|PO-1011310",
    "tooltip2" : "144038-G|45|PO-1011310",
    "tooltip3" : "144038-G|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 26,
    "settingsMachine" : {
      "id" : 26,
      "code" : "MD23",
      "descript" : "?SP???????sheet cut machine",
      "name" : "challenge",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Challenge",
        "descript" : "Challenge"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 12,
        "code" : "MID_DIE_SHEETCUT",
        "descript" : "MID_DIE_SHEETCUT",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 12
      },
      "monitorAddress" : "192.168.1.25",
      "camIp" : "000053",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 12,
      "code" : "MID_DIE_SHEETCUT",
      "descript" : "MID_DIE_SHEETCUT",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 12
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 27,
    "settingsMachine" : {
      "id" : 27,
      "code" : "MD18",
      "descript" : "??(?challenge???sheet??)",
      "name" : "Spartanic (Need to cut half in advance)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Spartanic",
        "descript" : "Spartanic"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept._Die Cut",
        "name" : "Mid Dept.",
        "subDept" : "Die Cut"
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "settingsFactoryOperation" : {
        "id" : 13,
        "code" : "MID_DIE_SP",
        "descript" : "MID_DIE_SP",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 13
      },
      "monitorAddress" : "spartanic",
      "camIp" : "000054",
      "ssQuantity" : 1600
    },
    "factoryOperation" : {
      "id" : 13,
      "code" : "MID_DIE_SP",
      "descript" : "MID_DIE_SP",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 13
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 28,
    "settingsMachine" : {
      "id" : 28,
      "code" : "PZ01",
      "descript" : "??PT?MID???",
      "name" : "Inspection Cards #1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Inspection",
        "descript" : "Inspection"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 18,
        "code" : "PZ_INSPECT",
        "descript" : "PZ_INSPECT",
        "displayNames" : "Inspect",
        "needMachine" : true,
        "priority" : 19
      },
      "monitorAddress" : "inspection1",
      "camIp" : "000055",
      "ssQuantity" : 135000
    },
    "factoryOperation" : {
      "id" : 18,
      "code" : "PZ_INSPECT",
      "descript" : "PZ_INSPECT",
      "displayNames" : "Inspect",
      "needMachine" : true,
      "priority" : 19
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 29,
    "settingsMachine" : {
      "id" : 29,
      "code" : "PZ02",
      "descript" : "??PT?MID???",
      "name" : "Inspection Cards #2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Inspection",
        "descript" : "Inspection"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 18,
        "code" : "PZ_INSPECT",
        "descript" : "PZ_INSPECT",
        "displayNames" : "Inspect",
        "needMachine" : true,
        "priority" : 19
      },
      "monitorAddress" : "192.168.1.28",
      "camIp" : "000056",
      "ssQuantity" : 135000
    },
    "factoryOperation" : {
      "id" : 18,
      "code" : "PZ_INSPECT",
      "descript" : "PZ_INSPECT",
      "displayNames" : "Inspect",
      "needMachine" : true,
      "priority" : 19
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 30,
    "settingsMachine" : {
      "id" : 30,
      "code" : "PZ03",
      "descript" : "pz?",
      "name" : "Versa 5",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 21
      },
      "monitorAddress" : "versa5",
      "camIp" : "000057",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57502,
    "operationCode" : "144037F",
    "priority" : 2100,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7173,
      "needWaitPrevProcess" : true,
      "operations" : [ 57498, 57499, 57500, 57501, 57502 ],
      "previousProcesses" : [ 7172, 7174 ],
      "productId" : null
    },
    "previousOperation" : 57501,
    "nextOperations" : [ ],
    "runOnMachineId" : 30,
    "actualRunOnMachineId" : null,
    "quantity" : 2496,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 9,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-05T08:40:00.000",
    "expectedFinishTime" : "2014-07-05T08:49:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "F",
    "expectedMoldId" : null,
    "tooltip1" : "144037F|45|PO-1011310",
    "tooltip2" : "144037F|45|PO-1011310",
    "tooltip3" : "144037F|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 31,
    "settingsMachine" : {
      "id" : 31,
      "code" : "PZ04",
      "descript" : "pz?",
      "name" : "Versa 6",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 21
      },
      "monitorAddress" : "versa6",
      "camIp" : "000058",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57498,
    "operationCode" : "144037B",
    "priority" : 2100,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7173,
      "needWaitPrevProcess" : true,
      "operations" : [ 57498, 57499, 57500, 57501, 57502 ],
      "previousProcesses" : [ 7172, 7174 ],
      "productId" : null
    },
    "previousOperation" : null,
    "nextOperations" : [ 57499 ],
    "runOnMachineId" : 31,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 172,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-05T08:40:00.000",
    "expectedFinishTime" : "2014-07-05T11:32:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "144037B|45|PO-1011310",
    "tooltip2" : "144037B|45|PO-1011310",
    "tooltip3" : "144037B|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 32,
    "settingsMachine" : {
      "id" : 32,
      "code" : "PZ05",
      "descript" : "pz?",
      "name" : "Versa 7",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 21
      },
      "monitorAddress" : "versa7",
      "camIp" : "000059",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57499,
    "operationCode" : "144037C",
    "priority" : 2100,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7173,
      "needWaitPrevProcess" : true,
      "operations" : [ 57498, 57499, 57500, 57501, 57502 ],
      "previousProcesses" : [ 7172, 7174 ],
      "productId" : null
    },
    "previousOperation" : 57498,
    "nextOperations" : [ 57500 ],
    "runOnMachineId" : 32,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 172,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-05T08:40:00.000",
    "expectedFinishTime" : "2014-07-05T11:32:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "144037C|45|PO-1011310",
    "tooltip2" : "144037C|45|PO-1011310",
    "tooltip3" : "144037C|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 33,
    "settingsMachine" : {
      "id" : 33,
      "code" : "PZ06",
      "descript" : "pz?",
      "name" : "Versa 8",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 21
      },
      "monitorAddress" : "versa8",
      "camIp" : "000060",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57500,
    "operationCode" : "144037D",
    "priority" : 2100,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7173,
      "needWaitPrevProcess" : true,
      "operations" : [ 57498, 57499, 57500, 57501, 57502 ],
      "previousProcesses" : [ 7172, 7174 ],
      "productId" : null
    },
    "previousOperation" : 57499,
    "nextOperations" : [ 57501 ],
    "runOnMachineId" : 33,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 172,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-05T08:40:00.000",
    "expectedFinishTime" : "2014-07-05T11:32:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "D",
    "expectedMoldId" : null,
    "tooltip1" : "144037D|45|PO-1011310",
    "tooltip2" : "144037D|45|PO-1011310",
    "tooltip3" : "144037D|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 34,
    "settingsMachine" : {
      "id" : 34,
      "code" : "PZ07",
      "descript" : "???CR80",
      "name" : "Versa 9",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 21
      },
      "monitorAddress" : "versa9",
      "camIp" : "000061",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57501,
    "operationCode" : "144037E",
    "priority" : 2100,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7173,
      "needWaitPrevProcess" : true,
      "operations" : [ 57498, 57499, 57500, 57501, 57502 ],
      "previousProcesses" : [ 7172, 7174 ],
      "productId" : null
    },
    "previousOperation" : 57500,
    "nextOperations" : [ 57502 ],
    "runOnMachineId" : 34,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 172,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-05T08:40:00.000",
    "expectedFinishTime" : "2014-07-05T11:32:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "E",
    "expectedMoldId" : null,
    "tooltip1" : "144037E|45|PO-1011310",
    "tooltip2" : "144037E|45|PO-1011310",
    "tooltip3" : "144037E|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 35,
    "settingsMachine" : {
      "id" : 35,
      "code" : "PZ08",
      "descript" : "pz?",
      "name" : "Versa 10",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 21
      },
      "monitorAddress" : "versa10",
      "camIp" : "000062",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 21
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 36,
    "settingsMachine" : {
      "id" : 36,
      "code" : "PZ09",
      "descript" : "hot stamp",
      "name" : "Cardline2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Carline",
        "descript" : "Carline"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 50,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 21,
        "code" : "PZ_CARLINE",
        "descript" : "PZ_CARLINE",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 20
      },
      "monitorAddress" : "cardline2",
      "camIp" : "000063",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 21,
      "code" : "PZ_CARLINE",
      "descript" : "PZ_CARLINE",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 20
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 37,
    "settingsMachine" : {
      "id" : 37,
      "code" : "PZ11",
      "descript" : "???",
      "name" : "Bending Machine #1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Bending",
        "descript" : "Bending"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 20,
        "code" : "PZ_BENDING",
        "descript" : "PZ_BENDING",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 18
      },
      "monitorAddress" : "192.168.1.37",
      "camIp" : "000064",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 20,
      "code" : "PZ_BENDING",
      "descript" : "PZ_BENDING",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 18
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 38,
    "settingsMachine" : {
      "id" : 38,
      "code" : "PZ12",
      "descript" : "???",
      "name" : "Bending Machine #2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Bending",
        "descript" : "Bending"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept._",
        "name" : "PZ Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 20,
        "code" : "PZ_BENDING",
        "descript" : "PZ_BENDING",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 18
      },
      "monitorAddress" : "192.168.1.38",
      "camIp" : "000065",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 20,
      "code" : "PZ_BENDING",
      "descript" : "PZ_BENDING",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 18
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 39,
    "settingsMachine" : {
      "id" : 39,
      "code" : "QA01",
      "descript" : "??MINI CR-80,??CR-80",
      "name" : "Proof Master 1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept._",
        "name" : "QA Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 23
      },
      "monitorAddress" : "proofmaster1",
      "camIp" : "000066",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 40,
    "settingsMachine" : {
      "id" : 40,
      "code" : "QA02",
      "descript" : "<6\" ????????",
      "name" : "Proof Master 2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept._",
        "name" : "QA Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 23
      },
      "monitorAddress" : "proofmaster2",
      "camIp" : "000067",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 41,
    "settingsMachine" : {
      "id" : 41,
      "code" : "QA03",
      "descript" : "<6\" ????????",
      "name" : "Proof Master 3",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept._",
        "name" : "QA Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 23
      },
      "monitorAddress" : "proofmaster3",
      "camIp" : "000068",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 42,
    "settingsMachine" : {
      "id" : 42,
      "code" : "QA04",
      "descript" : "<6\" ????????",
      "name" : "Proof Master 4",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept._",
        "name" : "QA Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 23
      },
      "monitorAddress" : "proofmaster4",
      "camIp" : "000069",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 43,
    "settingsMachine" : {
      "id" : 43,
      "code" : "QA05",
      "descript" : "<6\" ????????",
      "name" : "Proof Master 5",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept._",
        "name" : "QA Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 23
      },
      "monitorAddress" : "proofmaster5",
      "camIp" : "000070",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 44,
    "settingsMachine" : {
      "id" : 44,
      "code" : "QA06",
      "descript" : ">6\"????",
      "name" : "Proof Master-MP",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept._",
        "name" : "QA Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 23
      },
      "monitorAddress" : "192.168.1.44",
      "camIp" : "000071",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 45,
    "settingsMachine" : {
      "id" : 45,
      "code" : "QA07",
      "descript" : "",
      "name" : "New Proof Master",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept._",
        "name" : "QA Dept.",
        "subDept" : ""
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 23
      },
      "monitorAddress" : "192.168.1.45",
      "camIp" : "000072",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 46,
    "settingsMachine" : {
      "id" : 46,
      "code" : "MP01",
      "descript" : "Paper to Paper 1 piece or Plastic to Plastic",
      "name" : "Assembly (HO)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Assembly",
        "descript" : "Assembly"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack"
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 26,
        "code" : "MP_HO",
        "descript" : "MP_HO",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 26
      },
      "monitorAddress" : "assembly",
      "camIp" : "000073",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 26,
      "code" : "MP_HO",
      "descript" : "MP_HO",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 26
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 47,
    "settingsMachine" : {
      "id" : 47,
      "code" : "MP02",
      "descript" : "Paper to Paper 2 piece",
      "name" : "Haipi #1 Paper (HH1)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack"
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 27
      },
      "monitorAddress" : "haipi1",
      "camIp" : "000074",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 27
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 48,
    "settingsMachine" : {
      "id" : 48,
      "code" : "MP03",
      "descript" : "Plastic to Plastic",
      "name" : "Haipi #2 Plastic (HH2)",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack"
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 27
      },
      "monitorAddress" : "192.168.1.48",
      "camIp" : "000075",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 27
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 49,
    "settingsMachine" : {
      "id" : 49,
      "code" : "MP04",
      "descript" : "Paper to Paper 2 piece",
      "name" : "New Haipi Paper",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack"
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 27
      },
      "monitorAddress" : "192.168.1.49",
      "camIp" : "000076",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 27
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 50,
    "settingsMachine" : {
      "id" : 50,
      "code" : "MP05",
      "descript" : "Paper to Paper 2 piece",
      "name" : "New Haipi Paper",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack"
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 27
      },
      "monitorAddress" : "192.168.1.50",
      "camIp" : "000077",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 27
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 51,
    "settingsMachine" : {
      "id" : 51,
      "code" : "MP06",
      "descript" : "Paper to Paper 2 piece",
      "name" : "New Haipi Paper",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack"
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 27
      },
      "monitorAddress" : "192.168.1.51",
      "camIp" : "000078",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 27
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 52,
    "settingsMachine" : {
      "id" : 52,
      "code" : "MP07",
      "descript" : "Paper to Paper 2 piece",
      "name" : "New Haipi Paper",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack"
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 27
      },
      "monitorAddress" : "192.168.1.52",
      "camIp" : "000079",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 27
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 53,
    "settingsMachine" : {
      "id" : 53,
      "code" : "HS01",
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "paperheatseal1",
      "camIp" : "000080",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 54,
    "settingsMachine" : {
      "id" : 54,
      "code" : "HS02",
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "paperheatseal2",
      "camIp" : "000081",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 55,
    "settingsMachine" : {
      "id" : 55,
      "code" : "HS03",
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 3",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "paperheatseal3",
      "camIp" : "000082",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 56,
    "settingsMachine" : {
      "id" : 56,
      "code" : "HS04",
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 4",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "paperheatseal4",
      "camIp" : "000083",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 57,
    "settingsMachine" : {
      "id" : 57,
      "code" : "HS05",
      "descript" : "Plastic to Plastic Heat Seal",
      "name" : "Plastic Heat Seal 1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "plasticheatseal1",
      "camIp" : "000084",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 58,
    "settingsMachine" : {
      "id" : 58,
      "code" : "HS06",
      "descript" : "Plastic to Plastic Heat Seal",
      "name" : "Plastic Heat Seal 2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "plasticheatseal2",
      "camIp" : "000085",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 59,
    "settingsMachine" : {
      "id" : 59,
      "code" : "HS07",
      "descript" : "Plastic to Plastic Heat Seal",
      "name" : "Plastic Heat Seal 3",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "plasticheatseal3",
      "camIp" : "000086",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 60,
    "settingsMachine" : {
      "id" : 60,
      "code" : "HS08",
      "descript" : "Plastic to Plastic Heat Seal",
      "name" : "Plastic Heat Seal 4",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal"
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 28
      },
      "monitorAddress" : "plasticheatseal4",
      "camIp" : "000087",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 28,
      "code" : "HS",
      "descript" : "HS",
      "displayNames" : "HS",
      "needMachine" : true,
      "priority" : 28
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 61,
    "settingsMachine" : {
      "id" : 61,
      "code" : "TP01",
      "descript" : "TP, TF, TF2, Wrap ???Tipping job???",
      "name" : "Tipping Machine #1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Tipping",
        "descript" : "Tipping"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept._Tipping",
        "name" : "Packing Dept.",
        "subDept" : "Tipping"
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 25
      },
      "monitorAddress" : "tipping1",
      "camIp" : "000088",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57512,
    "operationCode" : "144037F",
    "priority" : 2500,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7175,
      "needWaitPrevProcess" : true,
      "operations" : [ 57508, 57509, 57510, 57511, 57512 ],
      "previousProcesses" : [ 7173 ],
      "productId" : null
    },
    "previousOperation" : 57511,
    "nextOperations" : [ ],
    "runOnMachineId" : 61,
    "actualRunOnMachineId" : null,
    "quantity" : 2496,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 60,
    "productionTime" : 14,
    "productionCapacity" : 187,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T11:33:00.000",
    "expectedSetupFinishTime" : "2014-07-05T12:33:00.000",
    "expectedFinishTime" : "2014-07-05T12:47:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "F",
    "expectedMoldId" : null,
    "tooltip1" : "144037F|45|PO-1011310",
    "tooltip2" : "144037F|45|PO-1011310",
    "tooltip3" : "144037F|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57510,
    "operationCode" : "144037D",
    "priority" : 2500,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7175,
      "needWaitPrevProcess" : true,
      "operations" : [ 57508, 57509, 57510, 57511, 57512 ],
      "previousProcesses" : [ 7173 ],
      "productId" : null
    },
    "previousOperation" : 57509,
    "nextOperations" : [ 57511 ],
    "runOnMachineId" : 61,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 60,
    "productionTime" : 268,
    "productionCapacity" : 187,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T12:48:00.000",
    "expectedSetupFinishTime" : "2014-07-05T13:48:00.000",
    "expectedFinishTime" : "2014-07-05T18:16:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "D",
    "expectedMoldId" : null,
    "tooltip1" : "144037D|45|PO-1011310",
    "tooltip2" : "144037D|45|PO-1011310",
    "tooltip3" : "144037D|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 62,
    "settingsMachine" : {
      "id" : 62,
      "code" : "TP02",
      "descript" : "TP, TF ???Tipping job???",
      "name" : "Tipping Machine #2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Tipping",
        "descript" : "Tipping"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept._Tipping",
        "name" : "Packing Dept.",
        "subDept" : "Tipping"
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 25
      },
      "monitorAddress" : "tipping2",
      "camIp" : "000089",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57508,
    "operationCode" : "144037B",
    "priority" : 2500,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7175,
      "needWaitPrevProcess" : true,
      "operations" : [ 57508, 57509, 57510, 57511, 57512 ],
      "previousProcesses" : [ 7173 ],
      "productId" : null
    },
    "previousOperation" : null,
    "nextOperations" : [ 57509 ],
    "runOnMachineId" : 62,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 60,
    "productionTime" : 268,
    "productionCapacity" : 187,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T11:33:00.000",
    "expectedSetupFinishTime" : "2014-07-05T12:33:00.000",
    "expectedFinishTime" : "2014-07-05T17:01:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "144037B|45|PO-1011310",
    "tooltip2" : "144037B|45|PO-1011310",
    "tooltip3" : "144037B|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57511,
    "operationCode" : "144037E",
    "priority" : 2500,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7175,
      "needWaitPrevProcess" : true,
      "operations" : [ 57508, 57509, 57510, 57511, 57512 ],
      "previousProcesses" : [ 7173 ],
      "productId" : null
    },
    "previousOperation" : 57510,
    "nextOperations" : [ 57512 ],
    "runOnMachineId" : 62,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 60,
    "productionTime" : 268,
    "productionCapacity" : 187,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-06T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-06T09:00:00.000",
    "expectedFinishTime" : "2014-07-06T13:28:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "E",
    "expectedMoldId" : null,
    "tooltip1" : "144037E|45|PO-1011310",
    "tooltip2" : "144037E|45|PO-1011310",
    "tooltip3" : "144037E|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 63,
    "settingsMachine" : {
      "id" : 63,
      "code" : "TP03",
      "descript" : "TP, TF, TF2  ???Tipping job???",
      "name" : "Tipping Machine #3",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Tipping",
        "descript" : "Tipping"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept._Tipping",
        "name" : "Packing Dept.",
        "subDept" : "Tipping"
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 25
      },
      "monitorAddress" : "tipping3",
      "camIp" : "000090",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57509,
    "operationCode" : "144037C",
    "priority" : 2500,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7175,
      "needWaitPrevProcess" : true,
      "operations" : [ 57508, 57509, 57510, 57511, 57512 ],
      "previousProcesses" : [ 7173 ],
      "productId" : null
    },
    "previousOperation" : 57508,
    "nextOperations" : [ 57510 ],
    "runOnMachineId" : 63,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 25,
      "code" : "TP",
      "descript" : "TP",
      "displayNames" : "TP",
      "needMachine" : true,
      "priority" : 25
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 60,
    "productionTime" : 268,
    "productionCapacity" : 187,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-05T11:33:00.000",
    "expectedSetupFinishTime" : "2014-07-05T12:33:00.000",
    "expectedFinishTime" : "2014-07-05T17:01:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "144037C|45|PO-1011310",
    "tooltip2" : "144037C|45|PO-1011310",
    "tooltip3" : "144037C|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 64,
    "settingsMachine" : {
      "id" : 64,
      "code" : "PK01",
      "descript" : "????CR-80 ??Shrink Wrap",
      "name" : "Manual Packing 1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Manual Packing",
        "descript" : "Manual Packing"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept._Shrink Wrap Packing",
        "name" : "Packing Dept.",
        "subDept" : "Shrink Wrap Packing"
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 31,
        "code" : "PK_MANUAL",
        "descript" : "PK_MANUAL",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 31
      },
      "monitorAddress" : "manualpacking1",
      "camIp" : "000091",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 31
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 65,
    "settingsMachine" : {
      "id" : 65,
      "code" : "PK02",
      "descript" : "????CR-80 ??Shrink Wrap",
      "name" : "Manual Packing 2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Manual Packing",
        "descript" : "Manual Packing"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept._Shrink Wrap Packing",
        "name" : "Packing Dept.",
        "subDept" : "Shrink Wrap Packing"
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 31,
        "code" : "PK_MANUAL",
        "descript" : "PK_MANUAL",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 31
      },
      "monitorAddress" : "manualpacking2",
      "camIp" : "000092",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 31
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 66,
    "settingsMachine" : {
      "id" : 66,
      "code" : "PK03",
      "descript" : "????? ??????MP? ??Shrink Wrap",
      "name" : "Auto Shrink Wrap 1",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Auto Shrink Wrap",
        "descript" : "Auto Shrink Wrap"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept._Shrink Wrap Packing",
        "name" : "Packing Dept.",
        "subDept" : "Shrink Wrap Packing"
      },
      "unit" : "CARD",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 30
      },
      "monitorAddress" : "autoshrinkwrap1",
      "camIp" : "000093",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 30,
      "code" : "PK_AUTO",
      "descript" : "PK_AUTO",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 30
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 67,
    "settingsMachine" : {
      "id" : 67,
      "code" : "PK04",
      "descript" : "????? ??????MP? ??Shrink Wrap",
      "name" : "Auto Shrink Wrap 2",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Auto Shrink Wrap",
        "descript" : "Auto Shrink Wrap"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept._Shrink Wrap Packing",
        "name" : "Packing Dept.",
        "subDept" : "Shrink Wrap Packing"
      },
      "unit" : "CARD",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 30
      },
      "monitorAddress" : "autoshrinkwrap2",
      "camIp" : "000094",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 30,
      "code" : "PK_AUTO",
      "descript" : "PK_AUTO",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 30
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 68,
    "settingsMachine" : {
      "id" : 68,
      "code" : "PK05",
      "descript" : "????? ??????MP? ??Shrink Wrap",
      "name" : "Auto Shrink Wrap 3",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Auto Shrink Wrap",
        "descript" : "Auto Shrink Wrap"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept._Shrink Wrap Packing",
        "name" : "Packing Dept.",
        "subDept" : "Shrink Wrap Packing"
      },
      "unit" : "CARD",
      "basicSetupTime" : 10,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 34,
        "code" : "PK_TP",
        "descript" : "PK_TP",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 34
      },
      "monitorAddress" : "autoshrinkwrap3",
      "camIp" : "000095",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 34,
      "code" : "PK_TP",
      "descript" : "PK_TP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 34
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : 57522,
    "operationCode" : "144037F",
    "priority" : 3400,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7176,
      "needWaitPrevProcess" : false,
      "operations" : [ 57518, 57513, 57519, 57514, 57520, 57515, 57521, 57516, 57522, 57517 ],
      "previousProcesses" : [ 7175 ],
      "productId" : null
    },
    "previousOperation" : 57517,
    "nextOperations" : [ ],
    "runOnMachineId" : 68,
    "actualRunOnMachineId" : null,
    "quantity" : 2496,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 34,
      "code" : "PK_TP",
      "descript" : "PK_TP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 34
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 10,
    "productionTime" : 6,
    "productionCapacity" : 458,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-06T16:29:00.000",
    "expectedSetupFinishTime" : "2014-07-06T16:39:00.000",
    "expectedFinishTime" : "2014-07-06T16:45:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "F",
    "expectedMoldId" : null,
    "tooltip1" : "144037F|45|PO-1011310",
    "tooltip2" : "144037F|45|PO-1011310",
    "tooltip3" : "144037F|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57518,
    "operationCode" : "144037B",
    "priority" : 3400,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7176,
      "needWaitPrevProcess" : false,
      "operations" : [ 57518, 57513, 57519, 57514, 57520, 57515, 57521, 57516, 57522, 57517 ],
      "previousProcesses" : [ 7175 ],
      "productId" : null
    },
    "previousOperation" : 57513,
    "nextOperations" : [ 57519, 57514 ],
    "runOnMachineId" : 68,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 34,
      "code" : "PK_TP",
      "descript" : "PK_TP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 34
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 10,
    "productionTime" : 110,
    "productionCapacity" : 458,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-06T16:46:00.000",
    "expectedSetupFinishTime" : "2014-07-06T16:56:00.000",
    "expectedFinishTime" : "2014-07-06T18:46:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "144037B|45|PO-1011310",
    "tooltip2" : "144037B|45|PO-1011310",
    "tooltip3" : "144037B|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57519,
    "operationCode" : "144037C",
    "priority" : 3400,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7176,
      "needWaitPrevProcess" : false,
      "operations" : [ 57518, 57513, 57519, 57514, 57520, 57515, 57521, 57516, 57522, 57517 ],
      "previousProcesses" : [ 7175 ],
      "productId" : null
    },
    "previousOperation" : 57514,
    "nextOperations" : [ 57520, 57515 ],
    "runOnMachineId" : 68,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 34,
      "code" : "PK_TP",
      "descript" : "PK_TP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 34
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 10,
    "productionTime" : 110,
    "productionCapacity" : 458,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-07T08:00:00.000",
    "expectedSetupFinishTime" : "2014-07-07T08:10:00.000",
    "expectedFinishTime" : "2014-07-07T10:00:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "144037C|45|PO-1011310",
    "tooltip2" : "144037C|45|PO-1011310",
    "tooltip3" : "144037C|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57520,
    "operationCode" : "144037D",
    "priority" : 3400,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7176,
      "needWaitPrevProcess" : false,
      "operations" : [ 57518, 57513, 57519, 57514, 57520, 57515, 57521, 57516, 57522, 57517 ],
      "previousProcesses" : [ 7175 ],
      "productId" : null
    },
    "previousOperation" : 57515,
    "nextOperations" : [ 57521, 57516 ],
    "runOnMachineId" : 68,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 34,
      "code" : "PK_TP",
      "descript" : "PK_TP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 34
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 10,
    "productionTime" : 110,
    "productionCapacity" : 458,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-07T10:01:00.000",
    "expectedSetupFinishTime" : "2014-07-07T10:11:00.000",
    "expectedFinishTime" : "2014-07-07T12:01:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "D",
    "expectedMoldId" : null,
    "tooltip1" : "144037D|45|PO-1011310",
    "tooltip2" : "144037D|45|PO-1011310",
    "tooltip3" : "144037D|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  }, {
    "id" : 57521,
    "operationCode" : "144037E",
    "priority" : 3400,
    "job" : {
      "id" : 1549,
      "comboType" : "3"
    },
    "process" : {
      "id" : 7176,
      "needWaitPrevProcess" : false,
      "operations" : [ 57518, 57513, 57519, 57514, 57520, 57515, 57521, 57516, 57522, 57517 ],
      "previousProcesses" : [ 7175 ],
      "productId" : null
    },
    "previousOperation" : 57516,
    "nextOperations" : [ 57522, 57517 ],
    "runOnMachineId" : 68,
    "actualRunOnMachineId" : null,
    "quantity" : 50001,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 34,
      "code" : "PK_TP",
      "descript" : "PK_TP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 34
    },
    "jobFile" : null,
    "pin" : false,
    "setupTime" : 10,
    "productionTime" : 110,
    "productionCapacity" : 458,
    "s2sMins" : -1,
    "expectedStartTime" : "2014-07-07T12:02:00.000",
    "expectedSetupFinishTime" : "2014-07-07T12:12:00.000",
    "expectedFinishTime" : "2014-07-07T14:02:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "parallel" : true,
    "parallelCode" : "E",
    "expectedMoldId" : null,
    "tooltip1" : "144037E|45|PO-1011310",
    "tooltip2" : "144037E|45|PO-1011310",
    "tooltip3" : "144037E|45|PO-1011310",
    "color1" : "0xff0000",
    "color2" : "",
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 71,
    "settingsMachine" : {
      "id" : 71,
      "code" : "PK07",
      "descript" : "??MP?? ??Shrink Wrap",
      "name" : "Multi-pack Auto Pack",
      "settingsMachineType" : {
        "id" : null,
        "code" : "Multipack",
        "descript" : "Multipack"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept._Shrink Wrap Packing",
        "name" : "Packing Dept.",
        "subDept" : "Shrink Wrap Packing"
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "settingsFactoryOperation" : {
        "id" : 33,
        "code" : "PK_MP",
        "descript" : "PK_MP",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 33
      },
      "monitorAddress" : "multipackautopacking",
      "camIp" : "000098",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 33,
      "code" : "PK_MP",
      "descript" : "PK_MP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 33
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 72,
    "settingsMachine" : {
      "id" : 72,
      "code" : "WIP",
      "descript" : "",
      "name" : "WIP",
      "settingsMachineType" : {
        "id" : null,
        "code" : "WIP",
        "descript" : "WIP"
      },
      "dept" : {
        "id" : 18,
        "code" : "WIP_WIP",
        "name" : "WIP",
        "subDept" : "WIP"
      },
      "unit" : "CARD",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB",
      "settingsFactoryOperation" : {
        "id" : 15,
        "code" : "WIP",
        "descript" : "WIP",
        "displayNames" : "WIP",
        "needMachine" : true,
        "priority" : 15
      },
      "monitorAddress" : "192.168.1.72",
      "camIp" : "000099",
      "ssQuantity" : 0
    },
    "factoryOperation" : {
      "id" : 15,
      "code" : "WIP",
      "descript" : "WIP",
      "displayNames" : "WIP",
      "needMachine" : true,
      "priority" : 15
    },
    "title" : "OperationCode|ComboId|PoNo#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
} ]
};
}
