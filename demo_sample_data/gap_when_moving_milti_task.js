function getSampleData() {

return {
"data": 
{
  "machines" : [ {
    "machine" : {
      "id" : 1,
      "settingsMachine" : {
        "id" : 1,
        "code" : "PT01",
        "descript" : "Komori 4",
        "name" : "Komori 4",
        "settingsMachineType" : {
          "code" : "Komori",
          "descript" : "Komori",
          "color" : null
        },
        "dept" : {
          "id" : 7,
          "code" : "Printing Dept_",
          "name" : "Printing Dept",
          "subDept" : "",
          "sortBy" : 1
        },
        "unit" : "SHEET",
        "basicSetupTime" : 90,
        "basicCapacity" : 31,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "dashboard_PT01",
        "camIp" : "10.100.0.12",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Material|Sheet Size|Combo Type",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ {
      "id" : "17416",
      "oid" : "17416",
      "part" : 0,
      "operationCode" : "008121F",
      "priority" : 190,
      "job" : {
        "id" : 586,
        "comboType" : "2",
        "comboId" : 1640,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2262,
        "needWaitPrevProcess" : true,
        "operations" : [ "17415", "17416", "17417", "17418", "17419", "17420" ],
        "previousProcesses" : [ ],
        "productId" : 4380
      },
      "previousOperation" : "17415",
      "nextOperations" : [ "17417" ],
      "runOnMachineId" : 1,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 90,
      "productionTime" : 3,
      "productionCapacity" : 42,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : "F",
      "expectedStartTime" : "2014-12-11T14:45:00.000",
      "expectedSetupFinishTime" : "2014-12-11T16:15:00.000",
      "expectedFinishTime" : "2014-12-11T16:18:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121F|1640|204768",
      "tooltip2" : "204768|008121F|12-11 14:45 - 12-11 16:18|87|Y|Y|Styrene|87|M6",
      "tooltip3" : "008121F|1640|204768",
      "color1" : "#D7E3BC",
      "color2" : "#b38600",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "1-008121F-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17429",
      "oid" : "17429",
      "part" : 0,
      "operationCode" : "008121F",
      "priority" : 190,
      "job" : {
        "id" : 587,
        "comboType" : "2",
        "comboId" : 1641,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2265,
        "needWaitPrevProcess" : true,
        "operations" : [ "17428", "17429", "17430", "17431", "17432", "17433" ],
        "previousProcesses" : [ ],
        "productId" : 4378
      },
      "previousOperation" : "17428",
      "nextOperations" : [ "17430" ],
      "runOnMachineId" : 1,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 90,
      "productionTime" : 3,
      "productionCapacity" : 42,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : "F",
      "expectedStartTime" : "2014-12-11T16:19:00.000",
      "expectedSetupFinishTime" : "2014-12-11T17:49:00.000",
      "expectedFinishTime" : "2014-12-11T17:52:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121F|1641|204768",
      "tooltip2" : "204768|008121F|12-11 16:19 - 12-11 17:52|87|Y|Y|Styrene|87|M6",
      "tooltip3" : "008121F|1641|204768",
      "color1" : "#D7E3BC",
      "color2" : "#b38600",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "1-008121F-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17442",
      "oid" : "17442",
      "part" : 0,
      "operationCode" : "008121F",
      "priority" : 190,
      "job" : {
        "id" : 588,
        "comboType" : "2",
        "comboId" : 1642,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2268,
        "needWaitPrevProcess" : true,
        "operations" : [ "17441", "17442", "17443", "17444", "21741", "17445", "17446" ],
        "previousProcesses" : [ ],
        "productId" : 4382
      },
      "previousOperation" : "17441",
      "nextOperations" : [ "17443" ],
      "runOnMachineId" : 1,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 90,
      "productionTime" : 3,
      "productionCapacity" : 42,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : "F",
      "expectedStartTime" : "2014-12-11T17:53:00.000",
      "expectedSetupFinishTime" : "2014-12-11T19:23:00.000",
      "expectedFinishTime" : "2014-12-11T19:26:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121F|1642|204768",
      "tooltip2" : "204768|008121F|12-11 17:53 - 12-11 19:26|87|Y|Y|Styrene|87|M6",
      "tooltip3" : "008121F|1642|204768",
      "color1" : "#D7E3BC",
      "color2" : "#b38600",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "1-008121F-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17417",
      "oid" : "17417",
      "part" : 0,
      "operationCode" : "008121B",
      "priority" : 200,
      "job" : {
        "id" : 586,
        "comboType" : "2",
        "comboId" : 1640,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2262,
        "needWaitPrevProcess" : true,
        "operations" : [ "17415", "17416", "17417", "17418", "17419", "17420" ],
        "previousProcesses" : [ ],
        "productId" : 4380
      },
      "previousOperation" : "17416",
      "nextOperations" : [ "17418" ],
      "runOnMachineId" : 1,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 90,
      "productionTime" : 3,
      "productionCapacity" : 42,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : "B",
      "expectedStartTime" : "2014-12-12T16:18:00.000",
      "expectedSetupFinishTime" : "2014-12-12T17:48:00.000",
      "expectedFinishTime" : "2014-12-12T17:51:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121B|1640|204768",
      "tooltip2" : "204768|008121B|12-12 16:18 - 12-12 17:51|87|Y|Y|Styrene|87|M6",
      "tooltip3" : "008121B|1640|204768",
      "color1" : "#D7E3BC",
      "color2" : "#b38600",
      "timeclockEmployeeId" : null,
      "rounds" : 2,
      "taskGroup" : "1-008121B-2-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17430",
      "oid" : "17430",
      "part" : 0,
      "operationCode" : "008121B",
      "priority" : 200,
      "job" : {
        "id" : 587,
        "comboType" : "2",
        "comboId" : 1641,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2265,
        "needWaitPrevProcess" : true,
        "operations" : [ "17428", "17429", "17430", "17431", "17432", "17433" ],
        "previousProcesses" : [ ],
        "productId" : 4378
      },
      "previousOperation" : "17429",
      "nextOperations" : [ "17431" ],
      "runOnMachineId" : 1,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 90,
      "productionTime" : 3,
      "productionCapacity" : 42,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : "B",
      "expectedStartTime" : "2014-12-12T17:52:00.000",
      "expectedSetupFinishTime" : "2014-12-12T19:22:00.000",
      "expectedFinishTime" : "2014-12-12T19:25:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121B|1641|204768",
      "tooltip2" : "204768|008121B|12-12 17:52 - 12-12 19:25|87|Y|Y|Styrene|87|M6",
      "tooltip3" : "008121B|1641|204768",
      "color1" : "#D7E3BC",
      "color2" : "#b38600",
      "timeclockEmployeeId" : null,
      "rounds" : 2,
      "taskGroup" : "1-008121B-2-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17443",
      "oid" : "17443",
      "part" : 0,
      "operationCode" : "008121B",
      "priority" : 200,
      "job" : {
        "id" : 588,
        "comboType" : "2",
        "comboId" : 1642,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2268,
        "needWaitPrevProcess" : true,
        "operations" : [ "17441", "17442", "17443", "17444", "21741", "17445", "17446" ],
        "previousProcesses" : [ ],
        "productId" : 4382
      },
      "previousOperation" : "17442",
      "nextOperations" : [ "17444" ],
      "runOnMachineId" : 1,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 90,
      "productionTime" : 3,
      "productionCapacity" : 42,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : "B",
      "expectedStartTime" : "2014-12-12T19:26:00.000",
      "expectedSetupFinishTime" : "2014-12-12T20:56:00.000",
      "expectedFinishTime" : "2014-12-12T20:59:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121B|1642|204768",
      "tooltip2" : "204768|008121B|12-12 19:26 - 12-12 20:59|87|Y|Y|Styrene|87|M6",
      "tooltip3" : "008121B|1642|204768",
      "color1" : "#D7E3BC",
      "color2" : "#b38600",
      "timeclockEmployeeId" : null,
      "rounds" : 2,
      "taskGroup" : "1-008121B-2-0",
      "machineShiftLabel" : null,
      "new" : false
    } ]
  }, {
    "machine" : {
      "id" : 2,
      "settingsMachine" : {
        "id" : 2,
        "code" : "PT02",
        "descript" : "Komori 3",
        "name" : "Komori 3",
        "settingsMachineType" : {
          "code" : "Komori",
          "descript" : "Komori",
          "color" : null
        },
        "dept" : {
          "id" : 7,
          "code" : "Printing Dept_",
          "name" : "Printing Dept",
          "subDept" : "",
          "sortBy" : 1
        },
        "unit" : "SHEET",
        "basicSetupTime" : 90,
        "basicCapacity" : 31,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "dashboard_PT02",
        "camIp" : "10.100.0.11",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 2,
        "code" : "PT",
        "descript" : "PT",
        "displayNames" : "PT",
        "needMachine" : true,
        "priority" : 200,
        "color" : "#FFBF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Material|Sheet Size|Combo Type",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 3,
      "settingsMachine" : {
        "id" : 3,
        "code" : "PT03",
        "descript" : "Silk Screen",
        "name" : "Silk Screen",
        "settingsMachineType" : {
          "code" : "Silk Screen",
          "descript" : "Silk Screen",
          "color" : null
        },
        "dept" : {
          "id" : 7,
          "code" : "Printing Dept_",
          "name" : "Printing Dept",
          "subDept" : "",
          "sortBy" : 1
        },
        "unit" : "SHEET",
        "basicSetupTime" : 60,
        "basicCapacity" : 16,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "silkscreen",
        "camIp" : "00001",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 3,
        "code" : "PT_SS",
        "descript" : "PT_SS",
        "displayNames" : "Silk Screen",
        "needMachine" : true,
        "priority" : 300,
        "color" : "#30D5C8"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Material|Sheet Size|Combo Type",
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
        "descript" : "MagMaster #1",
        "name" : "MagMaster #1",
        "settingsMachineType" : {
          "code" : "MagMaster",
          "descript" : "MagMaster",
          "color" : null
        },
        "dept" : {
          "id" : 8,
          "code" : "Mid Dept_Magnetic",
          "name" : "Mid Dept",
          "subDept" : "Magnetic",
          "sortBy" : 2
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 183,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB",
        "monitorAddress" : "magmaster1",
        "camIp" : "00002",
        "ssQuantity" : 50000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 4,
        "code" : "MID_MAG_MASTER",
        "descript" : "MID_MAG_MASTER",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 500,
        "color" : "#00FF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "MagMaster #2",
        "name" : "MagMaster #2",
        "settingsMachineType" : {
          "code" : "MagMaster",
          "descript" : "MagMaster",
          "color" : null
        },
        "dept" : {
          "id" : 8,
          "code" : "Mid Dept_Magnetic",
          "name" : "Mid Dept",
          "subDept" : "Magnetic",
          "sortBy" : 2
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 183,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB",
        "monitorAddress" : "magmaster2",
        "camIp" : "00003",
        "ssQuantity" : 50000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 4,
        "code" : "MID_MAG_MASTER",
        "descript" : "MID_MAG_MASTER",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 500,
        "color" : "#00FF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "MTL-700 #1 (Sheets)",
        "name" : "MTL-700 #1 (Sheets)",
        "settingsMachineType" : {
          "code" : "MTL",
          "descript" : "MTL",
          "color" : null
        },
        "dept" : {
          "id" : 8,
          "code" : "Mid Dept_Magnetic",
          "name" : "Mid Dept",
          "subDept" : "Magnetic",
          "sortBy" : 2
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 7,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "mtl700-1",
        "camIp" : "10.100.0.13",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ {
      "id" : "17418",
      "oid" : "17418",
      "part" : 0,
      "operationCode" : "008121",
      "priority" : 575,
      "job" : {
        "id" : 586,
        "comboType" : "2",
        "comboId" : 1640,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2262,
        "needWaitPrevProcess" : true,
        "operations" : [ "17415", "17416", "17417", "17418", "17419", "17420" ],
        "previousProcesses" : [ ],
        "productId" : 4380
      },
      "previousOperation" : "17417",
      "nextOperations" : [ "17419" ],
      "runOnMachineId" : 7,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 30,
      "productionTime" : 13,
      "productionCapacity" : 7,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : null,
      "expectedStartTime" : "2014-12-12T17:52:00.000",
      "expectedSetupFinishTime" : "2014-12-12T18:22:00.000",
      "expectedFinishTime" : "2014-12-12T18:35:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121|1640|204768",
      "tooltip2" : "204768|008121|12-12 17:52 - 12-12 18:35|87|Y|Y|4.875\"x3.375\"|Styrene|||Lo-Co|0.391|Brown|2 Track",
      "tooltip3" : "008121|1640|204768",
      "color1" : "#D7E3BC",
      "color2" : "#00005a",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "7-008121-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17431",
      "oid" : "17431",
      "part" : 0,
      "operationCode" : "008121",
      "priority" : 575,
      "job" : {
        "id" : 587,
        "comboType" : "2",
        "comboId" : 1641,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2265,
        "needWaitPrevProcess" : true,
        "operations" : [ "17428", "17429", "17430", "17431", "17432", "17433" ],
        "previousProcesses" : [ ],
        "productId" : 4378
      },
      "previousOperation" : "17430",
      "nextOperations" : [ "17432" ],
      "runOnMachineId" : 7,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 30,
      "productionTime" : 13,
      "productionCapacity" : 7,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : null,
      "expectedStartTime" : "2014-12-12T18:36:00.000",
      "expectedSetupFinishTime" : "2014-12-12T19:06:00.000",
      "expectedFinishTime" : "2014-12-12T19:19:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121|1641|204768",
      "tooltip2" : "204768|008121|12-12 18:36 - 12-12 19:19|87|Y|Y|4.875\"x3.375\"|Styrene|||Lo-Co|0.391|Brown|2 Track",
      "tooltip3" : "008121|1641|204768",
      "color1" : "#D7E3BC",
      "color2" : "#00005a",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "7-008121-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17444",
      "oid" : "17444",
      "part" : 0,
      "operationCode" : "008121",
      "priority" : 575,
      "job" : {
        "id" : 588,
        "comboType" : "2",
        "comboId" : 1642,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2268,
        "needWaitPrevProcess" : true,
        "operations" : [ "17441", "17442", "17443", "17444", "21741", "17445", "17446" ],
        "previousProcesses" : [ ],
        "productId" : 4382
      },
      "previousOperation" : "17443",
      "nextOperations" : [ "21741" ],
      "runOnMachineId" : 7,
      "actualRunOnMachineId" : null,
      "quantity" : 77,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 30,
      "productionTime" : 11,
      "productionCapacity" : 7,
      "s2sMins" : -1,
      "up" : 12,
      "sheetUp" : 36,
      "face" : null,
      "expectedStartTime" : "2014-12-12T19:20:00.000",
      "expectedSetupFinishTime" : "2014-12-12T19:50:00.000",
      "expectedFinishTime" : "2014-12-12T20:01:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121|1642|204768",
      "tooltip2" : "204768|008121|12-12 19:20 - 12-12 20:01|77|Y|Y|4.875\"x3.375\"|Styrene|||Lo-Co|0.391|Brown|2 Track",
      "tooltip3" : "008121|1642|204768",
      "color1" : "#D7E3BC",
      "color2" : "#00005a",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "7-008121-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "21741",
      "oid" : "21741",
      "part" : 0,
      "operationCode" : "008121",
      "priority" : 575,
      "job" : {
        "id" : 588,
        "comboType" : "2",
        "comboId" : 1642,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2268,
        "needWaitPrevProcess" : true,
        "operations" : [ "17441", "17442", "17443", "17444", "21741", "17445", "17446" ],
        "previousProcesses" : [ ],
        "productId" : 4382
      },
      "previousOperation" : "17444",
      "nextOperations" : [ "17445" ],
      "runOnMachineId" : 7,
      "actualRunOnMachineId" : null,
      "quantity" : 10,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 0,
      "productionTime" : 2,
      "productionCapacity" : 7,
      "s2sMins" : 286,
      "up" : 12,
      "sheetUp" : 36,
      "face" : null,
      "expectedStartTime" : "2014-12-12T20:02:00.000",
      "expectedSetupFinishTime" : "2014-12-12T20:02:00.000",
      "expectedFinishTime" : "2014-12-12T20:04:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : null,
      "tooltip1" : "008121|1642|204768",
      "tooltip2" : "204768|008121|12-12 20:02 - 12-12 20:04|10|Y|Y|4.875\"x3.375\"|Styrene|||Lo-Co|0.391|Brown|2 Track",
      "tooltip3" : "008121|1642|204768",
      "color1" : "#D7E3BC",
      "color2" : "#00005a",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "7-008121-1-0",
      "machineShiftLabel" : null,
      "new" : false
    } ]
  }, {
    "machine" : {
      "id" : 8,
      "settingsMachine" : {
        "id" : 8,
        "code" : "MD04",
        "descript" : "MTL-700 #2 (Sheets)",
        "name" : "MTL-700 #2 (Sheets)",
        "settingsMachineType" : {
          "code" : "MTL",
          "descript" : "MTL",
          "color" : null
        },
        "dept" : {
          "id" : 8,
          "code" : "Mid Dept_Magnetic",
          "name" : "Mid Dept",
          "subDept" : "Magnetic",
          "sortBy" : 2
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 7,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "mtl700-2",
        "camIp" : "10.100.0.14",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "MTL-700 #3 (Sheets)",
        "name" : "MTL-700 #3 (Sheets)",
        "settingsMachineType" : {
          "code" : "MTL",
          "descript" : "MTL",
          "color" : null
        },
        "dept" : {
          "id" : 8,
          "code" : "Mid Dept_Magnetic",
          "name" : "Mid Dept",
          "subDept" : "Magnetic",
          "sortBy" : 2
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 7,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "mtl700-3",
        "camIp" : "10.100.0.15",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 88,
      "settingsMachine" : {
        "id" : 88,
        "code" : "MD27",
        "descript" : "MTL-700 #4 (Sheets)",
        "name" : "MTL-700 #4 (Sheets)",
        "settingsMachineType" : {
          "code" : "MTL",
          "descript" : "MTL",
          "color" : null
        },
        "dept" : {
          "id" : 8,
          "code" : "Mid Dept_Magnetic",
          "name" : "Mid Dept",
          "subDept" : "Magnetic",
          "sortBy" : 2
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 7,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "mtl700-4",
        "camIp" : "",
        "ssQuantity" : 2000,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 5,
        "code" : "MID_MAG_MTL",
        "descript" : "MID_MAG_MTL",
        "displayNames" : "Mid Mag",
        "needMachine" : true,
        "priority" : 600,
        "color" : "#000080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "SYSCO (No actual Production)",
        "name" : "SYSCO (No actual Production)",
        "settingsMachineType" : {
          "code" : "SYSCO",
          "descript" : "SYSCO",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "CARD",
        "basicSetupTime" : 0,
        "basicCapacity" : 2147483647,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "192.168.1.11",
        "camIp" : "00007",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 6,
        "code" : "MID_LAM_SYSCO",
        "descript" : "MID_LAM_SYSCO",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 700,
        "color" : "#E32636"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 13,
      "settingsMachine" : {
        "id" : 13,
        "code" : "MD20",
        "descript" : "SYSCO (No actual Production)",
        "name" : "SYSCO (No actual Production)",
        "settingsMachineType" : {
          "code" : "SYSCO",
          "descript" : "SYSCO",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "CARD",
        "basicSetupTime" : 0,
        "basicCapacity" : 2147483647,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "192.168.1.12",
        "camIp" : "00008",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 6,
        "code" : "MID_LAM_SYSCO",
        "descript" : "MID_LAM_SYSCO",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 700,
        "color" : "#E32636"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Collate #3",
        "name" : "Collate #3",
        "settingsMachineType" : {
          "code" : "Collate",
          "descript" : "Collate",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 9,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "192.168.1.15",
        "camIp" : "000011",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 7,
        "code" : "MID_LAM_COLLATE",
        "descript" : "MID_LAM_COLLATE",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 800,
        "color" : "#4B0080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Collate #1 (350/hr)",
        "name" : "Collate #1 (350/hr)",
        "settingsMachineType" : {
          "code" : "Collate",
          "descript" : "Collate",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "collate1",
        "camIp" : "00009",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 7,
        "code" : "MID_LAM_COLLATE",
        "descript" : "MID_LAM_COLLATE",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 800,
        "color" : "#4B0080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Collate #2 (350/hr)",
        "name" : "Collate #2 (350/hr)",
        "settingsMachineType" : {
          "code" : "Collate",
          "descript" : "Collate",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "collate2",
        "camIp" : "000010",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 7,
        "code" : "MID_LAM_COLLATE",
        "descript" : "MID_LAM_COLLATE",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 800,
        "color" : "#4B0080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 17,
      "settingsMachine" : {
        "id" : 17,
        "code" : "MD10",
        "descript" : "OASYS #1",
        "name" : "OASYS #1",
        "settingsMachineType" : {
          "code" : "OASYS",
          "descript" : "OASYS",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "SHEET",
        "basicSetupTime" : 240,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "oasys1",
        "camIp" : "000012",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 8,
        "code" : "MID_LAM_OASYS",
        "descript" : "MID_LAM_OASYS",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 900,
        "color" : "#FFFF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 18,
      "settingsMachine" : {
        "id" : 18,
        "code" : "MD11",
        "descript" : "OASYS #2",
        "name" : "OASYS #2",
        "settingsMachineType" : {
          "code" : "OASYS",
          "descript" : "OASYS",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "SHEET",
        "basicSetupTime" : 240,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "oasys2",
        "camIp" : "000013",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 8,
        "code" : "MID_LAM_OASYS",
        "descript" : "MID_LAM_OASYS",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 900,
        "color" : "#FFFF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Car 25  1 (CR-80)",
        "name" : "Car 25  1 (CR-80)",
        "settingsMachineType" : {
          "code" : "CAR25",
          "descript" : "CAR25",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 15,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "car25-1",
        "camIp" : "10.100.0.16",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1000,
        "color" : "#00FFFF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Car  25 2",
        "name" : "Car  25 2",
        "settingsMachineType" : {
          "code" : "CAR25",
          "descript" : "CAR25",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 15,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "car25-2",
        "camIp" : "10.100.0.17",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1000,
        "color" : "#00FFFF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ {
      "id" : "17419",
      "oid" : "17419",
      "part" : 0,
      "operationCode" : "008121",
      "priority" : 950,
      "job" : {
        "id" : 586,
        "comboType" : "2",
        "comboId" : 1640,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2262,
        "needWaitPrevProcess" : true,
        "operations" : [ "17415", "17416", "17417", "17418", "17419", "17420" ],
        "previousProcesses" : [ ],
        "productId" : 4380
      },
      "previousOperation" : "17418",
      "nextOperations" : [ "17420" ],
      "runOnMachineId" : 20,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1000,
        "color" : "#00FFFF"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 15,
      "productionTime" : 18,
      "productionCapacity" : 5,
      "s2sMins" : 286,
      "up" : 12,
      "sheetUp" : 36,
      "face" : null,
      "expectedStartTime" : "2014-12-12T18:36:00.000",
      "expectedSetupFinishTime" : "2014-12-12T18:51:00.000",
      "expectedFinishTime" : "2014-12-12T19:09:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : 415,
      "tooltip1" : "008121|1640|204768",
      "tooltip2" : "204768|008121|12-12 18:36 - 12-12 19:09|87|Y|Y|4.875\"x3.375\"|Styrene|||Lo-Co|0.391|Brown|2 Track",
      "tooltip3" : "008121|1640|204768",
      "color1" : "#D7E3BC",
      "color2" : "#00b3b3",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "20-008121-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17432",
      "oid" : "17432",
      "part" : 0,
      "operationCode" : "008121",
      "priority" : 950,
      "job" : {
        "id" : 587,
        "comboType" : "2",
        "comboId" : 1641,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2265,
        "needWaitPrevProcess" : true,
        "operations" : [ "17428", "17429", "17430", "17431", "17432", "17433" ],
        "previousProcesses" : [ ],
        "productId" : 4378
      },
      "previousOperation" : "17431",
      "nextOperations" : [ "17433" ],
      "runOnMachineId" : 20,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1000,
        "color" : "#00FFFF"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 15,
      "productionTime" : 18,
      "productionCapacity" : 5,
      "s2sMins" : 286,
      "up" : 12,
      "sheetUp" : 36,
      "face" : null,
      "expectedStartTime" : "2014-12-12T19:10:00.000",
      "expectedSetupFinishTime" : "2014-12-12T19:25:00.000",
      "expectedFinishTime" : "2014-12-12T19:43:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : 415,
      "tooltip1" : "008121|1641|204768",
      "tooltip2" : "204768|008121|12-12 19:10 - 12-12 19:43|87|Y|Y|4.875\"x3.375\"|Styrene|||Lo-Co|0.391|Brown|2 Track",
      "tooltip3" : "008121|1641|204768",
      "color1" : "#D7E3BC",
      "color2" : "#00b3b3",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "20-008121-1-0",
      "machineShiftLabel" : null,
      "new" : false
    }, {
      "id" : "17445",
      "oid" : "17445",
      "part" : 0,
      "operationCode" : "008121",
      "priority" : 950,
      "job" : {
        "id" : 588,
        "comboType" : "2",
        "comboId" : 1642,
        "poNo" : "204768",
        "comboQuantity" : 2500
      },
      "process" : {
        "id" : 2268,
        "needWaitPrevProcess" : true,
        "operations" : [ "17441", "17442", "17443", "17444", "21741", "17445", "17446" ],
        "previousProcesses" : [ ],
        "productId" : 4382
      },
      "previousOperation" : "21741",
      "nextOperations" : [ "17446" ],
      "runOnMachineId" : 20,
      "actualRunOnMachineId" : null,
      "quantity" : 87,
      "actualQuantity" : 0,
      "processingType" : "GANG",
      "factoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1000,
        "color" : "#00FFFF"
      },
      "jobFile" : null,
      "manual" : false,
      "pin" : false,
      "setupTime" : 15,
      "productionTime" : 18,
      "productionCapacity" : 5,
      "s2sMins" : 286,
      "up" : 12,
      "sheetUp" : 36,
      "face" : null,
      "expectedStartTime" : "2014-12-12T19:44:00.000",
      "expectedSetupFinishTime" : "2014-12-12T19:59:00.000",
      "expectedFinishTime" : "2014-12-12T20:17:00.000",
      "actualStartTime" : null,
      "actualSetupFinishTime" : null,
      "actualFinishTime" : null,
      "finished" : false,
      "inProcessing" : false,
      "delete" : false,
      "parallel" : false,
      "parallelCode" : "",
      "expectedMoldId" : 415,
      "tooltip1" : "008121|1642|204768",
      "tooltip2" : "204768|008121|12-12 19:44 - 12-12 20:17|87|Y|Y|4.875\"x3.375\"|Styrene|||Lo-Co|0.391|Brown|2 Track",
      "tooltip3" : "008121|1642|204768",
      "color1" : "#D7E3BC",
      "color2" : "#00b3b3",
      "timeclockEmployeeId" : null,
      "rounds" : 1,
      "taskGroup" : "20-008121-1-0",
      "machineShiftLabel" : null,
      "new" : false
    } ]
  }, {
    "machine" : {
      "id" : 21,
      "settingsMachine" : {
        "id" : 21,
        "code" : "MD14",
        "descript" : "Car  25 3 (Mini CR-80 or CR-80 option)",
        "name" : "Car  25 3 (Mini CR-80 or CR-80 option)",
        "settingsMachineType" : {
          "code" : "CAR25",
          "descript" : "CAR25",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 15,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "car25-3",
        "camIp" : "10.100.0.18",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1000,
        "color" : "#00FFFF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Car  25 4",
        "name" : "Car  25 4",
        "settingsMachineType" : {
          "code" : "CAR25",
          "descript" : "CAR25",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 15,
        "basicCapacity" : 5,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "car25-4",
        "camIp" : "10.100.0.19",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 9,
        "code" : "MID_DIE_CAR25",
        "descript" : "MID_DIE_CAR25",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1000,
        "color" : "#00FFFF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Bobst 106E",
        "name" : "Bobst 106E",
        "settingsMachineType" : {
          "code" : "BOBST106",
          "descript" : "BOBST106",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 15,
        "basicCapacity" : 27,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "bobst106e",
        "camIp" : "10.100.0.21",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 10,
        "code" : "MID_DIE_BOBST_106",
        "descript" : "MID_DIE_BOBST_106",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1300,
        "color" : "#6495ED"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Blanker",
        "name" : "Blanker",
        "settingsMachineType" : {
          "code" : "Blanker",
          "descript" : "Blanker",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 60,
        "basicCapacity" : 14,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "192.168.1.23",
        "camIp" : "000052",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 11,
        "code" : "MID_DIE_BLANKER",
        "descript" : "MID_DIE_BLANKER",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1400,
        "color" : "#7FFFD4"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 113,
      "settingsMachine" : {
        "id" : 113,
        "code" : "MD28",
        "descript" : "",
        "name" : "Manual Blanker(V)",
        "settingsMachineType" : {
          "code" : "Blanker",
          "descript" : "Blanker",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 0,
        "basicCapacity" : 2,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "",
        "camIp" : "",
        "ssQuantity" : 2000,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 11,
        "code" : "MID_DIE_BLANKER",
        "descript" : "MID_DIE_BLANKER",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1400,
        "color" : "#7FFFD4"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 26,
      "settingsMachine" : {
        "id" : 26,
        "code" : "MD23",
        "descript" : "challenge",
        "name" : "challenge",
        "settingsMachineType" : {
          "code" : "Challenge",
          "descript" : "Challenge",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 2147483647,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "192.168.1.25",
        "camIp" : "000053",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 12,
        "code" : "MID_DIE_SHEETCUT",
        "descript" : "MID_DIE_SHEETCUT",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1500,
        "color" : "#F0F8FF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Spartanic (Need to cut half in advance)",
        "name" : "Spartanic (Need to cut half in advance)",
        "settingsMachineType" : {
          "code" : "Spartanic",
          "descript" : "Spartanic",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 15,
        "basicCapacity" : 3,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "spartanic",
        "camIp" : "000054",
        "ssQuantity" : 1600,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 13,
        "code" : "MID_DIE_SPARTANIC",
        "descript" : "MID_DIE_SPARTANIC",
        "displayNames" : "Mid Die Cut",
        "needMachine" : true,
        "priority" : 1600,
        "color" : "#5E86C1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Franklin #1",
        "name" : "Franklin #1",
        "settingsMachineType" : {
          "code" : "Franklin",
          "descript" : "Franklin",
          "color" : null
        },
        "dept" : {
          "id" : 9,
          "code" : "Mid Dept_Hot Stamp",
          "name" : "Mid Dept",
          "subDept" : "Hot Stamp",
          "sortBy" : 3
        },
        "unit" : "CARD",
        "basicSetupTime" : 180,
        "basicCapacity" : 4,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB",
        "monitorAddress" : "192.168.1.9",
        "camIp" : "00005",
        "ssQuantity" : 50000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 14,
        "code" : "MID_HOT_STAMP",
        "descript" : "MID_HOT_STAMP",
        "displayNames" : "Mid Hot Stamp",
        "needMachine" : true,
        "priority" : 1800,
        "color" : "#1E90FF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Franklin #2",
        "name" : "Franklin #2",
        "settingsMachineType" : {
          "code" : "Franklin",
          "descript" : "Franklin",
          "color" : null
        },
        "dept" : {
          "id" : 9,
          "code" : "Mid Dept_Hot Stamp",
          "name" : "Mid Dept",
          "subDept" : "Hot Stamp",
          "sortBy" : 3
        },
        "unit" : "CARD",
        "basicSetupTime" : 180,
        "basicCapacity" : 4,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB",
        "monitorAddress" : "192.168.1.10",
        "camIp" : "00006",
        "ssQuantity" : 50000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 14,
        "code" : "MID_HOT_STAMP",
        "descript" : "MID_HOT_STAMP",
        "displayNames" : "Mid Hot Stamp",
        "needMachine" : true,
        "priority" : 1800,
        "color" : "#1E90FF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 80,
      "settingsMachine" : {
        "id" : 80,
        "code" : "MD26",
        "descript" : "TW Franklin #4",
        "name" : "TW Franklin #4",
        "settingsMachineType" : {
          "code" : "Franklin",
          "descript" : "Franklin",
          "color" : null
        },
        "dept" : {
          "id" : 9,
          "code" : "Mid Dept_Hot Stamp",
          "name" : "Mid Dept",
          "subDept" : "Hot Stamp",
          "sortBy" : 3
        },
        "unit" : "CARD",
        "basicSetupTime" : 180,
        "basicCapacity" : 67,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB",
        "monitorAddress" : "998",
        "camIp" : "998",
        "ssQuantity" : 0,
        "machineOrder" : 10
      },
      "factoryOperation" : {
        "id" : 14,
        "code" : "MID_HOT_STAMP",
        "descript" : "MID_HOT_STAMP",
        "displayNames" : "Mid Hot Stamp",
        "needMachine" : true,
        "priority" : 1800,
        "color" : "#1E90FF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 79,
      "settingsMachine" : {
        "id" : 79,
        "code" : "MD25",
        "descript" : "Franklin #3",
        "name" : "Franklin #3",
        "settingsMachineType" : {
          "code" : "Franklin",
          "descript" : "Franklin",
          "color" : null
        },
        "dept" : {
          "id" : 9,
          "code" : "Mid Dept_Hot Stamp",
          "name" : "Mid Dept",
          "subDept" : "Hot Stamp",
          "sortBy" : 3
        },
        "unit" : "CARD",
        "basicSetupTime" : 180,
        "basicCapacity" : 41,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB",
        "monitorAddress" : "999",
        "camIp" : "999",
        "ssQuantity" : 0,
        "machineOrder" : 10
      },
      "factoryOperation" : {
        "id" : 14,
        "code" : "MID_HOT_STAMP",
        "descript" : "MID_HOT_STAMP",
        "displayNames" : "Mid Hot Stamp",
        "needMachine" : true,
        "priority" : 1800,
        "color" : "#1E90FF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "descript" : "Inspection Cards #1",
        "name" : "Inspection Cards #1",
        "settingsMachineType" : {
          "code" : "Inspection",
          "descript" : "Inspection",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 281,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "inspection1",
        "camIp" : "000055",
        "ssQuantity" : 135000,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 18,
        "code" : "PZ_INSPECT",
        "descript" : "PZ_INSPECT",
        "displayNames" : "Inspect",
        "needMachine" : true,
        "priority" : 2000,
        "color" : "#002FA7"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Data Format Date|Data Approval Date",
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
        "descript" : "Inspection Cards #2",
        "name" : "Inspection Cards #2",
        "settingsMachineType" : {
          "code" : "Inspection",
          "descript" : "Inspection",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 281,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.28",
        "camIp" : "000056",
        "ssQuantity" : 135000,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 18,
        "code" : "PZ_INSPECT",
        "descript" : "PZ_INSPECT",
        "displayNames" : "Inspect",
        "needMachine" : true,
        "priority" : 2000,
        "color" : "#002FA7"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Data Format Date|Data Approval Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 81,
      "settingsMachine" : {
        "id" : 81,
        "code" : "PZ13",
        "descript" : "Inspection Cards #3",
        "name" : "Inspection Cards #3",
        "settingsMachineType" : {
          "code" : "Inspection",
          "descript" : "Inspection",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 281,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "996",
        "camIp" : "996",
        "ssQuantity" : 135000,
        "machineOrder" : 11
      },
      "factoryOperation" : {
        "id" : 18,
        "code" : "PZ_INSPECT",
        "descript" : "PZ_INSPECT",
        "displayNames" : "Inspect",
        "needMachine" : true,
        "priority" : 2000,
        "color" : "#002FA7"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Data Format Date|Data Approval Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 83,
      "settingsMachine" : {
        "id" : 83,
        "code" : "PZ15",
        "descript" : "Versa 11",
        "name" : "Versa 11",
        "settingsMachineType" : {
          "code" : "Versa",
          "descript" : "Versa",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 40,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "versa11",
        "camIp" : "10.0.0.56",
        "ssQuantity" : 0,
        "machineOrder" : 13
      },
      "factoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2500,
        "color" : "#0047AB"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "descript" : "Versa 5",
        "name" : "Versa 5",
        "settingsMachineType" : {
          "code" : "Versa",
          "descript" : "Versa",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 40,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "versa5",
        "camIp" : "10.0.0.50",
        "ssQuantity" : 0,
        "machineOrder" : 13
      },
      "factoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2500,
        "color" : "#0047AB"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 31,
      "settingsMachine" : {
        "id" : 31,
        "code" : "PZ04",
        "descript" : "Versa 6",
        "name" : "Versa 6",
        "settingsMachineType" : {
          "code" : "Versa",
          "descript" : "Versa",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 40,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "versa6",
        "camIp" : "10.0.0.51",
        "ssQuantity" : 0,
        "machineOrder" : 13
      },
      "factoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2500,
        "color" : "#0047AB"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 32,
      "settingsMachine" : {
        "id" : 32,
        "code" : "PZ05",
        "descript" : "Versa 7",
        "name" : "Versa 7",
        "settingsMachineType" : {
          "code" : "Versa",
          "descript" : "Versa",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 40,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "versa7",
        "camIp" : "10.0.0.52",
        "ssQuantity" : 0,
        "machineOrder" : 13
      },
      "factoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2500,
        "color" : "#0047AB"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 33,
      "settingsMachine" : {
        "id" : 33,
        "code" : "PZ06",
        "descript" : "Versa 8",
        "name" : "Versa 8",
        "settingsMachineType" : {
          "code" : "Versa",
          "descript" : "Versa",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 40,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "versa8",
        "camIp" : "10.0.0.53",
        "ssQuantity" : 0,
        "machineOrder" : 13
      },
      "factoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2500,
        "color" : "#0047AB"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 34,
      "settingsMachine" : {
        "id" : 34,
        "code" : "PZ07",
        "descript" : "Versa 9",
        "name" : "Versa 9",
        "settingsMachineType" : {
          "code" : "Versa",
          "descript" : "Versa",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 40,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "versa9",
        "camIp" : "10.0.0.54",
        "ssQuantity" : 0,
        "machineOrder" : 13
      },
      "factoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2500,
        "color" : "#0047AB"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 35,
      "settingsMachine" : {
        "id" : 35,
        "code" : "PZ08",
        "descript" : "Versa 10",
        "name" : "Versa 10",
        "settingsMachineType" : {
          "code" : "Versa",
          "descript" : "Versa",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 40,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "versa10",
        "camIp" : "10.0.0.55",
        "ssQuantity" : 0,
        "machineOrder" : 13
      },
      "factoryOperation" : {
        "id" : 19,
        "code" : "PZ_VERSA",
        "descript" : "PZ_VERSA",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2500,
        "color" : "#0047AB"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "descript" : "Bending Machine #1",
        "name" : "Bending Machine #1",
        "settingsMachineType" : {
          "code" : "Bending",
          "descript" : "Bending",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 2147483647,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.37",
        "camIp" : "000064",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 20,
        "code" : "PZ_BENDING",
        "descript" : "PZ_BENDING",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2300,
        "color" : "#66FF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "descript" : "Bending Machine #2",
        "name" : "Bending Machine #2",
        "settingsMachineType" : {
          "code" : "Bending",
          "descript" : "Bending",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 2147483647,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.38",
        "camIp" : "000065",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 20,
        "code" : "PZ_BENDING",
        "descript" : "PZ_BENDING",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2300,
        "color" : "#66FF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "descript" : "Cardline2",
        "name" : "Cardline2",
        "settingsMachineType" : {
          "code" : "Carline",
          "descript" : "Carline",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 50,
        "basicCapacity" : 166,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "cardline2",
        "camIp" : "000063",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 21,
        "code" : "PZ_CARLINE",
        "descript" : "PZ_CARLINE",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2400,
        "color" : "#808000"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "descript" : "MagMaster",
        "name" : "MagMaster",
        "settingsMachineType" : {
          "code" : "MagMaster",
          "descript" : "MagMaster",
          "color" : null
        },
        "dept" : {
          "id" : 12,
          "code" : "PZ Dept_",
          "name" : "PZ Dept",
          "subDept" : "",
          "sortBy" : 6
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 166,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "00001",
        "camIp" : "00004",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 22,
        "code" : "PZ_MAG_MASTER",
        "descript" : "PZ_MAG_MASTER",
        "displayNames" : "PZ",
        "needMachine" : true,
        "priority" : 2600,
        "color" : "#CCFF00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "descript" : "Proof Master 1",
        "name" : "Proof Master 1",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 15,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "proofmaster1",
        "camIp" : "000066",
        "ssQuantity" : 500,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
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
        "descript" : "Proof Master 2",
        "name" : "Proof Master 2",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 15,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "proofmaster2",
        "camIp" : "000067",
        "ssQuantity" : 500,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
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
        "descript" : "Proof Master 3",
        "name" : "Proof Master 3",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 15,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "proofmaster3",
        "camIp" : "000068",
        "ssQuantity" : 500,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
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
        "descript" : "Proof Master 4",
        "name" : "Proof Master 4",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 15,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "proofmaster4",
        "camIp" : "000069",
        "ssQuantity" : 500,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
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
        "descript" : "Proof Master 5",
        "name" : "Proof Master 5",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 15,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "proofmaster5",
        "camIp" : "000070",
        "ssQuantity" : 500,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
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
        "descript" : "Proof Master-MP",
        "name" : "Proof Master-MP",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 208,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.44",
        "camIp" : "000071",
        "ssQuantity" : 500,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 106,
      "settingsMachine" : {
        "id" : 106,
        "code" : "QA09",
        "descript" : "Proof Master-MP #2",
        "name" : "Proof Master-MP #2",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 208,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "",
        "camIp" : "",
        "ssQuantity" : 500,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 84,
      "settingsMachine" : {
        "id" : 84,
        "code" : "QA08",
        "descript" : "Proof Master 7",
        "name" : "Proof Master 7",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "993",
        "camIp" : "993",
        "ssQuantity" : 500,
        "machineOrder" : 15
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
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
        "descript" : "Proof Master 6",
        "name" : "Proof Master 6",
        "settingsMachineType" : {
          "code" : "Proof Master",
          "descript" : "Proof Master",
          "color" : null
        },
        "dept" : {
          "id" : 13,
          "code" : "QA Dept_",
          "name" : "QA Dept",
          "subDept" : "",
          "sortBy" : 7
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 292,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.45",
        "camIp" : "000072",
        "ssQuantity" : 500,
        "machineOrder" : 15
      },
      "factoryOperation" : {
        "id" : 23,
        "code" : "QA",
        "descript" : "QA",
        "displayNames" : "QA",
        "needMachine" : true,
        "priority" : 2700,
        "color" : "#003366"
      },
      "title" : "",
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
        "descript" : "Tipping Machine #1",
        "name" : "Tipping Machine #1",
        "settingsMachineType" : {
          "code" : "Tipping",
          "descript" : "Tipping",
          "color" : null
        },
        "dept" : {
          "id" : 16,
          "code" : "Packing Dept_Tipping",
          "name" : "Packing Dept",
          "subDept" : "Tipping",
          "sortBy" : 11
        },
        "unit" : "PACK",
        "basicSetupTime" : 60,
        "basicCapacity" : 187,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "tipping1",
        "camIp" : "000088",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 3000,
        "color" : "#082567"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 62,
      "settingsMachine" : {
        "id" : 62,
        "code" : "TP02",
        "descript" : "Tipping Machine #2",
        "name" : "Tipping Machine #2",
        "settingsMachineType" : {
          "code" : "Tipping",
          "descript" : "Tipping",
          "color" : null
        },
        "dept" : {
          "id" : 16,
          "code" : "Packing Dept_Tipping",
          "name" : "Packing Dept",
          "subDept" : "Tipping",
          "sortBy" : 11
        },
        "unit" : "PACK",
        "basicSetupTime" : 60,
        "basicCapacity" : 187,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "tipping2",
        "camIp" : "000089",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 3000,
        "color" : "#082567"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 63,
      "settingsMachine" : {
        "id" : 63,
        "code" : "TP03",
        "descript" : "Tipping Machine #3",
        "name" : "Tipping Machine #3",
        "settingsMachineType" : {
          "code" : "Tipping",
          "descript" : "Tipping",
          "color" : null
        },
        "dept" : {
          "id" : 16,
          "code" : "Packing Dept_Tipping",
          "name" : "Packing Dept",
          "subDept" : "Tipping",
          "sortBy" : 11
        },
        "unit" : "PACK",
        "basicSetupTime" : 60,
        "basicCapacity" : 187,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "tipping3",
        "camIp" : "000090",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 3000,
        "color" : "#082567"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 85,
      "settingsMachine" : {
        "id" : 85,
        "code" : "TP04",
        "descript" : "Tipping Machine #4",
        "name" : "Tipping Machine #4",
        "settingsMachineType" : {
          "code" : "Tipping",
          "descript" : "Tipping",
          "color" : null
        },
        "dept" : {
          "id" : 16,
          "code" : "Packing Dept_Tipping",
          "name" : "Packing Dept",
          "subDept" : "Tipping",
          "sortBy" : 11
        },
        "unit" : "PACK",
        "basicSetupTime" : 60,
        "basicCapacity" : 208,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "992",
        "camIp" : "992",
        "ssQuantity" : 0,
        "machineOrder" : 18
      },
      "factoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 3000,
        "color" : "#082567"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 86,
      "settingsMachine" : {
        "id" : 86,
        "code" : "TP05",
        "descript" : "Tipping Machine #5",
        "name" : "Tipping Machine #5",
        "settingsMachineType" : {
          "code" : "Tipping",
          "descript" : "Tipping",
          "color" : null
        },
        "dept" : {
          "id" : 16,
          "code" : "Packing Dept_Tipping",
          "name" : "Packing Dept",
          "subDept" : "Tipping",
          "sortBy" : 11
        },
        "unit" : "PACK",
        "basicSetupTime" : 60,
        "basicCapacity" : 208,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "991",
        "camIp" : "991",
        "ssQuantity" : 0,
        "machineOrder" : 18
      },
      "factoryOperation" : {
        "id" : 25,
        "code" : "TP",
        "descript" : "TP",
        "displayNames" : "TP",
        "needMachine" : true,
        "priority" : 3000,
        "color" : "#082567"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
        "descript" : "Assembly (HO)",
        "name" : "Assembly (HO)",
        "settingsMachineType" : {
          "code" : "Assembly",
          "descript" : "Assembly",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 83,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "assembly",
        "camIp" : "000073",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 26,
        "code" : "MP_HO",
        "descript" : "MP_HO",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3100,
        "color" : "#FFCC00"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Haipi #1 Paper (HH1)",
        "name" : "Haipi #1 Paper (HH1)",
        "settingsMachineType" : {
          "code" : "Haipi",
          "descript" : "Haipi",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 34,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "haipi1",
        "camIp" : "000074",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3200,
        "color" : "#2A52BE"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Haipi #2 Plastic (HH2)",
        "name" : "Haipi #2 Plastic (HH2)",
        "settingsMachineType" : {
          "code" : "Haipi",
          "descript" : "Haipi",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 34,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.48",
        "camIp" : "000075",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3200,
        "color" : "#2A52BE"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 107,
      "settingsMachine" : {
        "id" : 107,
        "code" : "MP08",
        "descript" : "Haipi #2 Plastic (HH2) - 2",
        "name" : "Haipi #2 Plastic (HH2) - 2",
        "settingsMachineType" : {
          "code" : "Haipi",
          "descript" : "Haipi",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 34,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "",
        "camIp" : "",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3200,
        "color" : "#2A52BE"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Haipi #3 Paper (HH3)",
        "name" : "Haipi #3 Paper (HH3)",
        "settingsMachineType" : {
          "code" : "Haipi",
          "descript" : "Haipi",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 33,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.49",
        "camIp" : "000076",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3200,
        "color" : "#2A52BE"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "New Haipi Paper",
        "name" : "New Haipi Paper 4",
        "settingsMachineType" : {
          "code" : "Haipi",
          "descript" : "Haipi",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 33,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.50",
        "camIp" : "000077",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3200,
        "color" : "#2A52BE"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "New Haipi Paper",
        "name" : "New Haipi Paper 5",
        "settingsMachineType" : {
          "code" : "Haipi",
          "descript" : "Haipi",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 33,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.51",
        "camIp" : "000078",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3200,
        "color" : "#2A52BE"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "New Haipi Paper",
        "name" : "New Haipi Paper 6",
        "settingsMachineType" : {
          "code" : "Haipi",
          "descript" : "Haipi",
          "color" : null
        },
        "dept" : {
          "id" : 14,
          "code" : "Multipack_Multi-Pack",
          "name" : "Multipack",
          "subDept" : "Multi-Pack",
          "sortBy" : 9
        },
        "unit" : "PACK",
        "basicSetupTime" : 120,
        "basicCapacity" : 33,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.52",
        "camIp" : "000079",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 27,
        "code" : "MP_HH",
        "descript" : "MP_HH",
        "displayNames" : "MP",
        "needMachine" : true,
        "priority" : 3200,
        "color" : "#2A52BE"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Paper Heat Seal 1",
        "name" : "Paper Heat Seal 1",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 30,
        "basicCapacity" : 26,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "paperheatseal1",
        "camIp" : "000080",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Paper Heat Seal 2",
        "name" : "Paper Heat Seal 2",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 30,
        "basicCapacity" : 26,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "paperheatseal2",
        "camIp" : "000081",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Paper Heat Seal 3",
        "name" : "Paper Heat Seal 3",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 30,
        "basicCapacity" : 26,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "paperheatseal3",
        "camIp" : "000082",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Paper Heat Seal 4",
        "name" : "Paper Heat Seal 4",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 30,
        "basicCapacity" : 26,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "paperheatseal4",
        "camIp" : "000083",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Plastic Heat Seal 1",
        "name" : "Plastic Heat Seal 1",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 0,
        "basicCapacity" : 22,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "plasticheatseal1",
        "camIp" : "000084",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Plastic Heat Seal 2",
        "name" : "Plastic Heat Seal 2",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 0,
        "basicCapacity" : 22,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "plasticheatseal2",
        "camIp" : "000085",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Plastic Heat Seal 3",
        "name" : "Plastic Heat Seal 3",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 0,
        "basicCapacity" : 22,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "plasticheatseal3",
        "camIp" : "000086",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Plastic Heat Seal 4",
        "name" : "Plastic Heat Seal 4",
        "settingsMachineType" : {
          "code" : "Heat Seal",
          "descript" : "Heat Seal",
          "color" : null
        },
        "dept" : {
          "id" : 15,
          "code" : "Multipack_Heat Seal",
          "name" : "Multipack",
          "subDept" : "Heat Seal",
          "sortBy" : 10
        },
        "unit" : "PACK",
        "basicSetupTime" : 0,
        "basicCapacity" : 22,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "plasticheatseal4",
        "camIp" : "000087",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 28,
        "code" : "HS",
        "descript" : "HS",
        "displayNames" : "HS",
        "needMachine" : true,
        "priority" : 3300,
        "color" : "#4169E1"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "descript" : "Auto Shrink Wrap 1",
        "name" : "Auto Shrink Wrap 1",
        "settingsMachineType" : {
          "code" : "Auto Shrink Wrap",
          "descript" : "Auto Shrink Wrap",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 120,
        "basicCapacity" : 458,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "autoshrinkwrap1",
        "camIp" : "000093",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3500,
        "color" : "#FFD700"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "descript" : "Auto Shrink Wrap 2",
        "name" : "Auto Shrink Wrap 2",
        "settingsMachineType" : {
          "code" : "Auto Shrink Wrap",
          "descript" : "Auto Shrink Wrap",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 120,
        "basicCapacity" : 458,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "autoshrinkwrap2",
        "camIp" : "000094",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3500,
        "color" : "#FFD700"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "descript" : "Auto Shrink Wrap 3",
        "name" : "Auto Shrink Wrap 3",
        "settingsMachineType" : {
          "code" : "Auto Shrink Wrap",
          "descript" : "Auto Shrink Wrap",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 10,
        "basicCapacity" : 458,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "autoshrinkwrap3",
        "camIp" : "000095",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3500,
        "color" : "#FFD700"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 70,
      "settingsMachine" : {
        "id" : 70,
        "code" : "PK09",
        "descript" : "New Machine Upack #2",
        "name" : "New Machine Upack #2",
        "settingsMachineType" : {
          "code" : "Auto Shrink Wrap",
          "descript" : "Auto Shrink Wrap",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 312,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.70",
        "camIp" : "000097",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3500,
        "color" : "#FFD700"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 109,
      "settingsMachine" : {
        "id" : 109,
        "code" : "PK11",
        "descript" : "New Machine Upack #4",
        "name" : "New Machine Upack #4",
        "settingsMachineType" : {
          "code" : "Auto Shrink Wrap",
          "descript" : "Auto Shrink Wrap",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 312,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "",
        "camIp" : "",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3500,
        "color" : "#FFD700"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 69,
      "settingsMachine" : {
        "id" : 69,
        "code" : "PK08",
        "descript" : "New Machine Upack #1",
        "name" : "New Machine Upack #1",
        "settingsMachineType" : {
          "code" : "Auto Shrink Wrap",
          "descript" : "Auto Shrink Wrap",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 250,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "192.168.1.69",
        "camIp" : "000096",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3500,
        "color" : "#FFD700"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 108,
      "settingsMachine" : {
        "id" : 108,
        "code" : "PK10",
        "descript" : "New Machine Upack #3",
        "name" : "New Machine Upack #3",
        "settingsMachineType" : {
          "code" : "Auto Shrink Wrap",
          "descript" : "Auto Shrink Wrap",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 30,
        "basicCapacity" : 250,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "",
        "camIp" : "",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 30,
        "code" : "PK_AUTO",
        "descript" : "PK_AUTO",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3500,
        "color" : "#FFD700"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 64,
      "settingsMachine" : {
        "id" : 64,
        "code" : "PK01",
        "descript" : "Manual Packing 1",
        "name" : "Manual Packing 1",
        "settingsMachineType" : {
          "code" : "Manual Packing",
          "descript" : "Manual Packing",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 15,
        "basicCapacity" : 83,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "manualpacking1",
        "camIp" : "000091",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 31,
        "code" : "PK_MANUAL",
        "descript" : "PK_MANUAL",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3600,
        "color" : "#008080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "descript" : "Manual Packing 2",
        "name" : "Manual Packing 2",
        "settingsMachineType" : {
          "code" : "Manual Packing",
          "descript" : "Manual Packing",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 15,
        "basicCapacity" : 83,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "manualpacking2",
        "camIp" : "000092",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 31,
        "code" : "PK_MANUAL",
        "descript" : "PK_MANUAL",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3600,
        "color" : "#008080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 114,
      "settingsMachine" : {
        "id" : 114,
        "code" : "PK14",
        "descript" : "",
        "name" : "Human Packing(V)",
        "settingsMachineType" : {
          "code" : "Manual Packing",
          "descript" : "Manual Packing",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "CARD",
        "basicSetupTime" : 0,
        "basicCapacity" : 1000,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "",
        "camIp" : "",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 31,
        "code" : "PK_MANUAL",
        "descript" : "PK_MANUAL",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3600,
        "color" : "#008080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 111,
      "settingsMachine" : {
        "id" : 111,
        "code" : "PK13",
        "descript" : "",
        "name" : "SBX",
        "settingsMachineType" : {
          "code" : "Manual Packing",
          "descript" : "Manual Packing",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "PACK",
        "basicSetupTime" : 15,
        "basicCapacity" : 291,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "",
        "camIp" : "",
        "ssQuantity" : 0,
        "machineOrder" : 0
      },
      "factoryOperation" : {
        "id" : 31,
        "code" : "PK_MANUAL",
        "descript" : "PK_MANUAL",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3600,
        "color" : "#008080"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 71,
      "settingsMachine" : {
        "id" : 71,
        "code" : "PK07",
        "descript" : "Multi-pack Auto Pack",
        "name" : "Multi-pack Auto Pack",
        "settingsMachineType" : {
          "code" : "Multipack",
          "descript" : "Multipack",
          "color" : null
        },
        "dept" : {
          "id" : 17,
          "code" : "Packing Dept_Shrink Wrap Packing",
          "name" : "Packing Dept",
          "subDept" : "Shrink Wrap Packing",
          "sortBy" : 12
        },
        "unit" : "PACK",
        "basicSetupTime" : 30,
        "basicCapacity" : 166,
        "basicPendingMinutes" : 0,
        "processingType" : "JOB_FILE",
        "monitorAddress" : "multipackautopacking",
        "camIp" : "000098",
        "ssQuantity" : 0,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 33,
        "code" : "PK_MP",
        "descript" : "PK_MP",
        "displayNames" : "Packing",
        "needMachine" : true,
        "priority" : 3800,
        "color" : "#FF2400"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|MP Style|Pack|Card Name|Multipack-Carrier|Multipack-# of Clam Shells",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 87,
      "settingsMachine" : {
        "id" : 87,
        "code" : "MD24",
        "descript" : "Sheet Cutter",
        "name" : "Sheet Cutter",
        "settingsMachineType" : {
          "code" : "Sheet Cutter",
          "descript" : "Sheet Cutter",
          "color" : null
        },
        "dept" : {
          "id" : 10,
          "code" : "Mid Dept_Lamination",
          "name" : "Mid Dept",
          "subDept" : "Lamination",
          "sortBy" : 4
        },
        "unit" : "SHEET",
        "basicSetupTime" : 60,
        "basicCapacity" : 8,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "997",
        "camIp" : "997",
        "ssQuantity" : 0,
        "machineOrder" : 6
      },
      "factoryOperation" : {
        "id" : 37,
        "code" : "MID_SHEET_CUT_EDGE",
        "descript" : "MID_SHEET_CUT_EDGE",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 1100,
        "color" : "#CCCCFF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  }, {
    "machine" : {
      "id" : 24,
      "settingsMachine" : {
        "id" : 24,
        "code" : "MD17",
        "descript" : "Bobst 104SP",
        "name" : "Bobst 104SP",
        "settingsMachineType" : {
          "code" : "BOBST104",
          "descript" : "BOBST104",
          "color" : null
        },
        "dept" : {
          "id" : 11,
          "code" : "Mid Dept_Die Cut",
          "name" : "Mid Dept",
          "subDept" : "Die Cut",
          "sortBy" : 5
        },
        "unit" : "SHEET",
        "basicSetupTime" : 30,
        "basicCapacity" : 31,
        "basicPendingMinutes" : 0,
        "processingType" : "GANG",
        "monitorAddress" : "bobst104sp",
        "camIp" : "10.100.0.20",
        "ssQuantity" : 2000,
        "machineOrder" : null
      },
      "factoryOperation" : {
        "id" : 38,
        "code" : "MID_DIE_BOBST_104",
        "descript" : "MID_DIE_BOBST_104",
        "displayNames" : "Mid Lam",
        "needMachine" : true,
        "priority" : 1200,
        "color" : "#FF00FF"
      },
      "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
      "currentTimeWorks" : 0,
      "online" : true
    },
    "operationQueue" : [ ]
  } ],
  "messages" : [ ]
}
};}