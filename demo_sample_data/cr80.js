function getSampleData() {

return {
"data": [ {
  "machine" : {
    "id" : 1,
    "settingsMachine" : {
      "id" : 1,
      "code" : "PT01",
      "descript" : "???",
      "name" : "Komori 4",
      "settingsMachineType" : {
        "code" : "Komori",
        "descript" : "Komori"
      },
      "dept" : {
        "id" : 7,
        "code" : "Printing Dept_",
        "name" : "Printing Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 90,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "monitorAddress" : "dashboard_PT01",
      "camIp" : "10.100.0.12",
      "ssQuantity" : 2000,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 200
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Material|Sheet Size|Combo Type",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "104257",
    "oid" : "104257",
    "part" : 0,
    "operationCode" : "007844F",
    "priority" : 190,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16530,
      "needWaitPrevProcess" : true,
      "operations" : [ "104256", "104257", "104258" ],
      "previousProcesses" : [ ],
      "productId" : 2208
    },
    "previousOperation" : "104256",
    "nextOperations" : [ "104258" ],
    "runOnMachineId" : 1,
    "actualRunOnMachineId" : null,
    "quantity" : 13020,
    "actualQuantity" : 0,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 200
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 21,
    "productionCapacity" : 31,
    "s2sMins" : -1,
    "up" : 90,
    "sheetUp" : 90,
    "face" : "F",
    "expectedStartTime" : "2014-09-20T14:45:00.000",
    "expectedSetupFinishTime" : "2014-09-20T16:15:00.000",
    "expectedFinishTime" : "2014-09-20T16:36:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "007844F|794|223791",
    "tooltip2" : "PO_NO|OPERATION_CODE|S_E_TIME|SHT_QTY|N|N||625|CR80_STY",
    "tooltip3" : "007844F|794|223791",
    "color1" : "#0000ff",
    "color2" : "#b38600",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "104258",
    "oid" : "104258",
    "part" : 0,
    "operationCode" : "007844B",
    "priority" : 200,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16530,
      "needWaitPrevProcess" : true,
      "operations" : [ "104256", "104257", "104258" ],
      "previousProcesses" : [ ],
      "productId" : 2208
    },
    "previousOperation" : "104257",
    "nextOperations" : [ ],
    "runOnMachineId" : 1,
    "actualRunOnMachineId" : null,
    "quantity" : 9548,
    "actualQuantity" : 0,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 200
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 21,
    "productionCapacity" : 31,
    "s2sMins" : 65,
    "up" : 90,
    "sheetUp" : 90,
    "face" : "B",
    "expectedStartTime" : "2014-09-20T16:37:00.000",
    "expectedSetupFinishTime" : "2014-09-20T18:07:00.000",
    "expectedFinishTime" : "2014-09-20T18:28:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "007844B|794|223791",
    "tooltip2" : "PO_NO|OPERATION_CODE|S_E_TIME|SHT_QTY|N|N||625|CR80_STY",
    "tooltip3" : "007844B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#b38600",
    "timeclockEmployeeId" : null,
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 10,
    "settingsMachine" : {
      "id" : 10,
      "code" : "MD06",
      "descript" : "?? (only for CR80)",
      "name" : "Franklin #1",
      "settingsMachineType" : {
        "code" : "Franklin",
        "descript" : "Franklin"
      },
      "dept" : {
        "id" : 9,
        "code" : "Mid Dept_Hot Stamp",
        "name" : "Mid Dept",
        "subDept" : "Hot Stamp",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 180,
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
      "priority" : 1400
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
      "descript" : "?? (only for CR80)",
      "name" : "Franklin #2",
      "settingsMachineType" : {
        "code" : "Franklin",
        "descript" : "Franklin"
      },
      "dept" : {
        "id" : 9,
        "code" : "Mid Dept_Hot Stamp",
        "name" : "Mid Dept",
        "subDept" : "Hot Stamp",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 180,
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
      "priority" : 1400
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
      "descript" : "??????",
      "name" : "SYSCO (No actual Production)",
      "settingsMachineType" : {
        "code" : "SYSCO",
        "descript" : "SYSCO"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 0,
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
      "priority" : 600
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
      "descript" : "??????",
      "name" : "SYSCO (No actual Production)",
      "settingsMachineType" : {
        "code" : "SYSCO",
        "descript" : "SYSCO"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 0,
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
      "priority" : 600
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
      "descript" : "??sheet????",
      "name" : "Collate #1 (350/hr)",
      "settingsMachineType" : {
        "code" : "Collate",
        "descript" : "Collate"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 700
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
      "descript" : "??sheet????",
      "name" : "Collate #2 (350/hr)",
      "settingsMachineType" : {
        "code" : "Collate",
        "descript" : "Collate"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 700
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
      "descript" : "??sheet????",
      "name" : "Collate #3",
      "settingsMachineType" : {
        "code" : "Collate",
        "descript" : "Collate"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 700
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
      "descript" : "??PVC",
      "name" : "OASYS #1",
      "settingsMachineType" : {
        "code" : "OASYS",
        "descript" : "OASYS"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 240,
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
      "priority" : 800
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
      "descript" : "??PVC",
      "name" : "OASYS #2",
      "settingsMachineType" : {
        "code" : "OASYS",
        "descript" : "OASYS"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 240,
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
      "priority" : 800
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
      "descript" : "?????(only??,????)",
      "name" : "Car 25  1 (CR-80)",
      "settingsMachineType" : {
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
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
      "priority" : 900
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
}, {
  "machine" : {
    "id" : 2,
    "settingsMachine" : {
      "id" : 2,
      "code" : "PT02",
      "descript" : "???",
      "name" : "Komori 3",
      "settingsMachineType" : {
        "code" : "Komori",
        "descript" : "Komori"
      },
      "dept" : {
        "id" : 7,
        "code" : "Printing Dept_",
        "name" : "Printing Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 90,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "monitorAddress" : "dashboard_PT02",
      "camIp" : "10.100.0.11",
      "ssQuantity" : 2000,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 2,
      "code" : "PT",
      "descript" : "PT",
      "displayNames" : "PT",
      "needMachine" : true,
      "priority" : 200
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Material|Sheet Size|Combo Type",
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
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
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
      "priority" : 900
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
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
      "priority" : 900
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
      "descript" : "?????(only??,????)",
      "name" : "Car  25 4",
      "settingsMachineType" : {
        "code" : "CAR25",
        "descript" : "CAR25"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
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
      "priority" : 900
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
      "descript" : "?????(only??, ?????ISOWA??)",
      "name" : "Bobst 106E",
      "settingsMachineType" : {
        "code" : "BOBST106",
        "descript" : "BOBST106"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
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
      "priority" : 1000
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
      "descript" : "?????(??+??2?1)",
      "name" : "Bobst 104SP",
      "settingsMachineType" : {
        "code" : "BOBST104",
        "descript" : "BOBST104"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 1100
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
      "descript" : "????, ???106E??????Blanker",
      "name" : "Blanker",
      "settingsMachineType" : {
        "code" : "Blanker",
        "descript" : "Blanker"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 60,
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
      "priority" : 1100
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
      "descript" : "?SP???????sheet cut machine",
      "name" : "challenge",
      "settingsMachineType" : {
        "code" : "Challenge",
        "descript" : "Challenge"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 1200
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
      "descript" : "??(?challenge???sheet??)",
      "name" : "Spartanic (Need to cut half in advance)",
      "settingsMachineType" : {
        "code" : "Spartanic",
        "descript" : "Spartanic"
      },
      "dept" : {
        "id" : 11,
        "code" : "Mid Dept_Die Cut",
        "name" : "Mid Dept",
        "subDept" : "Die Cut",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 15,
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
      "priority" : 1300
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
      "descript" : "??Lam??? for CR-80",
      "name" : "Inspection Cards #1",
      "settingsMachineType" : {
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "inspection1",
      "camIp" : "000055",
      "ssQuantity" : 135000,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 18,
      "code" : "PZ_INSPECT",
      "descript" : "PZ_INSPECT",
      "displayNames" : "Inspect",
      "needMachine" : true,
      "priority" : 1900
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
      "descript" : "??Lam??? for CR-80",
      "name" : "Inspection Cards #2",
      "settingsMachineType" : {
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "192.168.1.28",
      "camIp" : "000056",
      "ssQuantity" : 135000,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 18,
      "code" : "PZ_INSPECT",
      "descript" : "PZ_INSPECT",
      "displayNames" : "Inspect",
      "needMachine" : true,
      "priority" : 1900
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Data Format Date|Data Approval Date",
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
      "descript" : "?????(??lam????????)",
      "name" : "Silk Screen",
      "settingsMachineType" : {
        "code" : "Silk Screen",
        "descript" : "Silk Screen"
      },
      "dept" : {
        "id" : 7,
        "code" : "Printing Dept_",
        "name" : "Printing Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 60,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "monitorAddress" : "silkscreen",
      "camIp" : "00001",
      "ssQuantity" : 2000,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 3,
      "code" : "PT_SS",
      "descript" : "PT_SS",
      "displayNames" : "Silk Screen",
      "needMachine" : true,
      "priority" : 300
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Material|Sheet Size|Combo Type",
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
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "versa5",
      "camIp" : "000057",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "104262",
    "oid" : "104262",
    "part" : 0,
    "operationCode" : "1470311B",
    "priority" : 2100,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16531,
      "needWaitPrevProcess" : true,
      "operations" : [ "104259", "104260", "104261", "104262", "104263", "104264", "104265", "5796ae15" ],
      "previousProcesses" : [ 16530 ],
      "productId" : 2208
    },
    "previousOperation" : "104261",
    "nextOperations" : [ "104263" ],
    "runOnMachineId" : 30,
    "actualRunOnMachineId" : null,
    "quantity" : 71832,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 172,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-20T18:29:00.000",
    "expectedSetupFinishTime" : "2014-09-20T19:09:00.000",
    "expectedFinishTime" : "2014-09-20T22:01:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1470311B|794|223791",
    "tooltip2" : "PO_NO|OPERATION_CODE|S_E_TIME|CARD_QTY||Big5Services Merchandise Credit Card(null)||",
    "tooltip3" : "1470311B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#003278",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "104263",
    "oid" : "104263",
    "part" : 0,
    "operationCode" : "1470311C",
    "priority" : 2100,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16531,
      "needWaitPrevProcess" : true,
      "operations" : [ "104259", "104260", "104261", "104262", "104263", "104264", "104265", "5796ae15" ],
      "previousProcesses" : [ 16530 ],
      "productId" : 2208
    },
    "previousOperation" : "104262",
    "nextOperations" : [ "104264" ],
    "runOnMachineId" : 30,
    "actualRunOnMachineId" : null,
    "quantity" : 9636,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 14,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-20T22:02:00.000",
    "expectedSetupFinishTime" : "2014-09-20T22:42:00.000",
    "expectedFinishTime" : "2014-09-20T22:56:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "1470311C|794|223791",
    "tooltip2" : "PO_NO|OPERATION_CODE|S_E_TIME|CARD_QTY||Big5Services Merchandise Credit Card(null)||",
    "tooltip3" : "1470311C|794|223791",
    "color1" : "#0000ff",
    "color2" : "#003278",
    "timeclockEmployeeId" : null,
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
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "versa6",
      "camIp" : "000058",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
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
      "descript" : "pz?",
      "name" : "Versa 7",
      "settingsMachineType" : {
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "versa7",
      "camIp" : "000059",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
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
      "descript" : "pz?",
      "name" : "Versa 8",
      "settingsMachineType" : {
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "versa8",
      "camIp" : "000060",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
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
      "descript" : "???CR80",
      "name" : "Versa 9",
      "settingsMachineType" : {
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "versa9",
      "camIp" : "000061",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
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
      "descript" : "pz?",
      "name" : "Versa 10",
      "settingsMachineType" : {
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "versa10",
      "camIp" : "000062",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
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
      "descript" : "hot stamp",
      "name" : "Cardline2",
      "settingsMachineType" : {
        "code" : "Carline",
        "descript" : "Carline"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 50,
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
      "priority" : 2000
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
      "descript" : "???",
      "name" : "Bending Machine #1",
      "settingsMachineType" : {
        "code" : "Bending",
        "descript" : "Bending"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
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
      "priority" : 1800
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
      "descript" : "???",
      "name" : "Bending Machine #2",
      "settingsMachineType" : {
        "code" : "Bending",
        "descript" : "Bending"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
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
      "priority" : 1800
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
      "descript" : "??MINI CR-80,??CR-80",
      "name" : "Proof Master 1",
      "settingsMachineType" : {
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "proofmaster1",
      "camIp" : "000066",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
    },
    "title" : "",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "104264",
    "oid" : "104264",
    "part" : 0,
    "operationCode" : "1470311B",
    "priority" : 2300,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16531,
      "needWaitPrevProcess" : true,
      "operations" : [ "104259", "104260", "104261", "104262", "104263", "104264", "104265", "5796ae15" ],
      "previousProcesses" : [ 16530 ],
      "productId" : 2208
    },
    "previousOperation" : "104263",
    "nextOperations" : [ "5796ae15" ],
    "runOnMachineId" : 39,
    "actualRunOnMachineId" : null,
    "quantity" : 936,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 3,
    "productionCapacity" : 312,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-20T22:57:00.000",
    "expectedSetupFinishTime" : "2014-09-20T23:12:00.000",
    "expectedFinishTime" : "2014-09-20T23:15:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1470311B|794|223791",
    "tooltip2" : "",
    "tooltip3" : "1470311B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#002447",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "5796ae15",
    "oid" : "104264",
    "part" : 1,
    "operationCode" : "1470311B",
    "priority" : 2300,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16531,
      "needWaitPrevProcess" : true,
      "operations" : [ "104259", "104260", "104261", "104262", "104263", "104264", "104265", "5796ae15" ],
      "previousProcesses" : [ 16530 ],
      "productId" : 2208
    },
    "previousOperation" : "104264",
    "nextOperations" : [ "104265" ],
    "runOnMachineId" : 39,
    "actualRunOnMachineId" : null,
    "quantity" : 154440,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 158,
    "productionCapacity" : 312,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-21T05:45:00.000",
    "expectedSetupFinishTime" : "2014-09-21T06:00:00.000",
    "expectedFinishTime" : "2014-09-21T08:38:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1470311B|794|223791",
    "tooltip2" : "",
    "tooltip3" : "1470311B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#002447",
    "timeclockEmployeeId" : null,
    "new" : true
  }, {
    "id" : "104265",
    "oid" : "104265",
    "part" : 0,
    "operationCode" : "1470311C",
    "priority" : 2300,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16531,
      "needWaitPrevProcess" : true,
      "operations" : [ "104259", "104260", "104261", "104262", "104263", "104264", "104265", "5796ae15" ],
      "previousProcesses" : [ 16530 ],
      "productId" : 2208
    },
    "previousOperation" : "5796ae15",
    "nextOperations" : [ ],
    "runOnMachineId" : 39,
    "actualRunOnMachineId" : null,
    "quantity" : 100152,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 13,
    "productionCapacity" : 312,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-21T08:39:00.000",
    "expectedSetupFinishTime" : "2014-09-21T08:54:00.000",
    "expectedFinishTime" : "2014-09-21T09:07:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "1470311C|794|223791",
    "tooltip2" : "",
    "tooltip3" : "1470311C|794|223791",
    "color1" : "#0000ff",
    "color2" : "#002447",
    "timeclockEmployeeId" : null,
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 4,
    "settingsMachine" : {
      "id" : 4,
      "code" : "MD01",
      "descript" : "??????, ???M6(CR80????)?hot stamp",
      "name" : "MagMaster #1",
      "settingsMachineType" : {
        "code" : "MagMaster",
        "descript" : "MagMaster"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept_Magnetic",
        "name" : "Mid Dept",
        "subDept" : "Magnetic",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
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
      "priority" : 400
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "proofmaster2",
      "camIp" : "000067",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
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
      "descript" : "<6\" ????????",
      "name" : "Proof Master 3",
      "settingsMachineType" : {
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "proofmaster3",
      "camIp" : "000068",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
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
      "descript" : "<6\" ????????",
      "name" : "Proof Master 4",
      "settingsMachineType" : {
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "proofmaster4",
      "camIp" : "000069",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
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
      "descript" : "<6\" ????????",
      "name" : "Proof Master 5",
      "settingsMachineType" : {
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "proofmaster5",
      "camIp" : "000070",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
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
      "descript" : ">6\"????",
      "name" : "Proof Master-MP",
      "settingsMachineType" : {
        "code" : "Proof Master",
        "descript" : "Proof Master"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "192.168.1.44",
      "camIp" : "000071",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
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
      "descript" : "New QA Machine",
      "name" : "Proof Master 6",
      "settingsMachineType" : {
        "code" : "Assembly",
        "descript" : "Assembly"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "192.168.1.45",
      "camIp" : "000072",
      "ssQuantity" : 0,
      "machineOrder" : 15
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
    },
    "title" : "",
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
        "code" : "Assembly",
        "descript" : "Assembly"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
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
      "priority" : 2600
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
      "descript" : "Paper to Paper 2 piece",
      "name" : "Haipi #1 Paper (HH1)",
      "settingsMachineType" : {
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
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
      "priority" : 2700
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
      "descript" : "Plastic to Plastic",
      "name" : "Haipi #2 Plastic (HH2)",
      "settingsMachineType" : {
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
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
      "priority" : 2700
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
      "descript" : "Paper to Paper 2 piece",
      "name" : "Haipi #3 Paper (HH3)",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "192.168.1.49",
      "camIp" : "000076",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 2700
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "code" : "MagMaster",
        "descript" : "MagMaster"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept_Magnetic",
        "name" : "Mid Dept",
        "subDept" : "Magnetic",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
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
      "priority" : 400
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Material|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "192.168.1.50",
      "camIp" : "000077",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 2700
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
      "descript" : "Paper to Paper 2 piece",
      "name" : "New Haipi Paper",
      "settingsMachineType" : {
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "192.168.1.51",
      "camIp" : "000078",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 2700
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
      "descript" : "Paper to Paper 2 piece",
      "name" : "New Haipi Paper",
      "settingsMachineType" : {
        "code" : "Haipi",
        "descript" : "Haipi"
      },
      "dept" : {
        "id" : 14,
        "code" : "Multipack_Multi-Pack",
        "name" : "Multipack",
        "subDept" : "Multi-Pack",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 120,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "192.168.1.52",
      "camIp" : "000079",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 27,
      "code" : "MP_HH",
      "descript" : "MP_HH",
      "displayNames" : "MP",
      "needMachine" : true,
      "priority" : 2700
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
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 1",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
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
      "priority" : 2800
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
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 2",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
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
      "priority" : 2800
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
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 3",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
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
      "priority" : 2800
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
      "descript" : "Paper to Paper 1 piece Heat Seal",
      "name" : "Paper Heat Seal 4",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
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
      "priority" : 2800
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
      "descript" : "Plastic to Plastic Heat Seal",
      "name" : "Plastic Heat Seal 1",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
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
      "priority" : 2800
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
      "descript" : "Plastic to Plastic Heat Seal",
      "name" : "Plastic Heat Seal 2",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
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
      "priority" : 2800
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
      "descript" : "Plastic to Plastic Heat Seal",
      "name" : "Plastic Heat Seal 3",
      "settingsMachineType" : {
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
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
      "priority" : 2800
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "code" : "MagMaster",
        "descript" : "MagMaster"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
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
      "priority" : 2200
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "code" : "Heat Seal",
        "descript" : "Heat Seal"
      },
      "dept" : {
        "id" : 15,
        "code" : "Multipack_Heat Seal",
        "name" : "Multipack",
        "subDept" : "Heat Seal",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 0,
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
      "priority" : 2800
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "code" : "Tipping",
        "descript" : "Tipping"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept_Tipping",
        "name" : "Packing Dept",
        "subDept" : "Tipping",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
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
      "priority" : 2500
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
      "descript" : "TP, TF ???Tipping job???",
      "name" : "Tipping Machine #2",
      "settingsMachineType" : {
        "code" : "Tipping",
        "descript" : "Tipping"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept_Tipping",
        "name" : "Packing Dept",
        "subDept" : "Tipping",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
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
      "priority" : 2500
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
      "descript" : "TP, TF, TF2  ???Tipping job???",
      "name" : "Tipping Machine #3",
      "settingsMachineType" : {
        "code" : "Tipping",
        "descript" : "Tipping"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept_Tipping",
        "name" : "Packing Dept",
        "subDept" : "Tipping",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
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
      "priority" : 2500
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
      "descript" : "????CR-80 ??Shrink Wrap",
      "name" : "Manual Packing 1",
      "settingsMachineType" : {
        "code" : "Manual Packing",
        "descript" : "Manual Packing"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept_Shrink Wrap Packing",
        "name" : "Packing Dept",
        "subDept" : "Shrink Wrap Packing",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
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
      "priority" : 3100
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "104268",
    "oid" : "104268",
    "part" : 0,
    "operationCode" : "1470311B",
    "priority" : 3100,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16532,
      "needWaitPrevProcess" : false,
      "operations" : [ "104266", "104267", "104268", "104269", "37846cc2" ],
      "previousProcesses" : [ 16531 ],
      "productId" : 2209
    },
    "previousOperation" : "104267",
    "nextOperations" : [ "37846cc2" ],
    "runOnMachineId" : 64,
    "actualRunOnMachineId" : null,
    "quantity" : 9296,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 3100
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 112,
    "productionCapacity" : 83,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-21T12:08:00.000",
    "expectedSetupFinishTime" : "2014-09-21T12:23:00.000",
    "expectedFinishTime" : "2014-09-21T14:15:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1470311B|794|223791",
    "tooltip2" : "PO_NO|OPERATION_CODE|S_E_TIME|CARD_QTY||||Big5Services Merchandise Credit Card(null)|2.125\"x3.375\"   CR-80|",
    "tooltip3" : "1470311B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#005a5a",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "37846cc2",
    "oid" : "104268",
    "part" : 1,
    "operationCode" : "1470311B",
    "priority" : 3100,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16532,
      "needWaitPrevProcess" : false,
      "operations" : [ "104266", "104267", "104268", "104269", "37846cc2" ],
      "previousProcesses" : [ 16531 ],
      "productId" : 2209
    },
    "previousOperation" : "104268",
    "nextOperations" : [ "104269" ],
    "runOnMachineId" : 64,
    "actualRunOnMachineId" : null,
    "quantity" : 41085,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 3100
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 491,
    "productionCapacity" : 83,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-21T14:45:00.000",
    "expectedSetupFinishTime" : "2014-09-21T15:00:00.000",
    "expectedFinishTime" : "2014-09-21T23:11:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1470311B|794|223791",
    "tooltip2" : "PO_NO|OPERATION_CODE|S_E_TIME|CARD_QTY||||Big5Services Merchandise Credit Card(null)|2.125\"x3.375\"   CR-80|",
    "tooltip3" : "1470311B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#005a5a",
    "timeclockEmployeeId" : null,
    "new" : true
  }, {
    "id" : "104269",
    "oid" : "104269",
    "part" : 0,
    "operationCode" : "1470311C",
    "priority" : 3100,
    "job" : {
      "id" : 3954,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 16532,
      "needWaitPrevProcess" : false,
      "operations" : [ "104266", "104267", "104268", "104269", "37846cc2" ],
      "previousProcesses" : [ 16531 ],
      "productId" : 2209
    },
    "previousOperation" : "37846cc2",
    "nextOperations" : [ ],
    "runOnMachineId" : 64,
    "actualRunOnMachineId" : null,
    "quantity" : 3999,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 3100
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 49,
    "productionCapacity" : 83,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "face" : null,
    "expectedStartTime" : "2014-09-21T23:12:00.000",
    "expectedSetupFinishTime" : "2014-09-21T23:27:00.000",
    "expectedFinishTime" : "2014-09-22T00:16:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "1470311C|794|223791",
    "tooltip2" : "PO_NO|OPERATION_CODE|S_E_TIME|CARD_QTY||||Big5Services Merchandise Credit Card(null)|2.125\"x3.375\"   CR-80|",
    "tooltip3" : "1470311C|794|223791",
    "color1" : "#0000ff",
    "color2" : "#005a5a",
    "timeclockEmployeeId" : null,
    "new" : false
  } ]
}, {
  "machine" : {
    "id" : 65,
    "settingsMachine" : {
      "id" : 65,
      "code" : "PK02",
      "descript" : "????CR-80 ??Shrink Wrap",
      "name" : "Manual Packing 2",
      "settingsMachineType" : {
        "code" : "Manual Packing",
        "descript" : "Manual Packing"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept_Shrink Wrap Packing",
        "name" : "Packing Dept",
        "subDept" : "Shrink Wrap Packing",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 15,
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
      "priority" : 3100
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "code" : "Auto Shrink Wrap",
        "descript" : "Auto Shrink Wrap"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept_Shrink Wrap Packing",
        "name" : "Packing Dept",
        "subDept" : "Shrink Wrap Packing",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 120,
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
      "priority" : 3000
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
      "descript" : "????? ??????MP? ??Shrink Wrap",
      "name" : "Auto Shrink Wrap 2",
      "settingsMachineType" : {
        "code" : "Auto Shrink Wrap",
        "descript" : "Auto Shrink Wrap"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept_Shrink Wrap Packing",
        "name" : "Packing Dept",
        "subDept" : "Shrink Wrap Packing",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 120,
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
      "priority" : 3000
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
      "descript" : "????? ??????MP? ??Shrink Wrap",
      "name" : "Auto Shrink Wrap 3",
      "settingsMachineType" : {
        "code" : "Auto Shrink Wrap",
        "descript" : "Auto Shrink Wrap"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept_Shrink Wrap Packing",
        "name" : "Packing Dept",
        "subDept" : "Shrink Wrap Packing",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 10,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "autoshrinkwrap3",
      "camIp" : "000095",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 34,
      "code" : "PK_TP",
      "descript" : "PK_TP",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 3400
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "code" : "MTL",
        "descript" : "MTL"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept_Magnetic",
        "name" : "Mid Dept",
        "subDept" : "Magnetic",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 500
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
      "descript" : "??MP?? ??Shrink Wrap",
      "name" : "Multi-pack Auto Pack",
      "settingsMachineType" : {
        "code" : "Multipack",
        "descript" : "Multipack"
      },
      "dept" : {
        "id" : 17,
        "code" : "Packing Dept_Shrink Wrap Packing",
        "name" : "Packing Dept",
        "subDept" : "Shrink Wrap Packing",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 30,
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
      "priority" : 3300
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Bundle Pack|Inner Pack|MP Style|Pack|Card Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "code" : "WIP",
        "descript" : "WIP"
      },
      "dept" : {
        "id" : 18,
        "code" : "WIP_WIP",
        "name" : "WIP",
        "subDept" : "WIP",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 0,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB",
      "monitorAddress" : "192.168.1.72",
      "camIp" : "000099",
      "ssQuantity" : 0,
      "machineOrder" : null
    },
    "factoryOperation" : {
      "id" : 15,
      "code" : "WIP",
      "descript" : "WIP",
      "displayNames" : "WIP",
      "needMachine" : true,
      "priority" : 1500
    },
    "title" : "",
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
      "descript" : "?? (only for CR80)",
      "name" : "Franklin #3",
      "settingsMachineType" : {
        "code" : "Franklin",
        "descript" : "Franklin"
      },
      "dept" : {
        "id" : 9,
        "code" : "Mid Dept_Hot Stamp",
        "name" : "Mid Dept",
        "subDept" : "Hot Stamp",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 180,
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
      "priority" : 1400
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "code" : "MTL",
        "descript" : "MTL"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept_Magnetic",
        "name" : "Mid Dept",
        "subDept" : "Magnetic",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 500
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
      "descript" : "?? (only for CR80)",
      "name" : "TW Franklin #4",
      "settingsMachineType" : {
        "code" : "Franklin",
        "descript" : "Franklin"
      },
      "dept" : {
        "id" : 9,
        "code" : "Mid Dept_Hot Stamp",
        "name" : "Mid Dept",
        "subDept" : "Hot Stamp",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 180,
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
      "priority" : 1400
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
      "descript" : "??Lam??? for CR-80",
      "name" : "Inspection Cards #3",
      "settingsMachineType" : {
        "code" : "Versa",
        "descript" : "Versa"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "996",
      "camIp" : "996",
      "ssQuantity" : 135000,
      "machineOrder" : 11
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
      "descript" : "pz?",
      "name" : "Versa 11",
      "settingsMachineType" : {
        "code" : "Carline",
        "descript" : "Carline"
      },
      "dept" : {
        "id" : 12,
        "code" : "PZ Dept_",
        "name" : "PZ Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 40,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "994",
      "camIp" : "994",
      "ssQuantity" : 0,
      "machineOrder" : 13
    },
    "factoryOperation" : {
      "id" : 19,
      "code" : "PZ_VERSA",
      "descript" : "PZ_VERSA",
      "displayNames" : "PZ",
      "needMachine" : true,
      "priority" : 2100
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
      "descript" : "QA",
      "name" : "Proof Master 7",
      "settingsMachineType" : {
        "code" : "Assembly",
        "descript" : "Assembly"
      },
      "dept" : {
        "id" : 13,
        "code" : "QA Dept_",
        "name" : "QA Dept",
        "subDept" : "",
        "sortBy" : 0
      },
      "unit" : "CARD",
      "basicSetupTime" : 30,
      "basicPendingMinutes" : 0,
      "processingType" : "JOB_FILE",
      "monitorAddress" : "993",
      "camIp" : "993",
      "ssQuantity" : 0,
      "machineOrder" : 15
    },
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 2300
    },
    "title" : "",
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
      "descript" : "TP, TF, TF2  ???Tipping job???",
      "name" : "Tipping Machine #4",
      "settingsMachineType" : {
        "code" : "Manual Packing",
        "descript" : "Manual Packing"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept_Tipping",
        "name" : "Packing Dept",
        "subDept" : "Tipping",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
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
      "priority" : 2500
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
      "descript" : "TP, TF, TF2  ???Tipping job???",
      "name" : "Tipping Machine #5",
      "settingsMachineType" : {
        "code" : "Manual Packing",
        "descript" : "Manual Packing"
      },
      "dept" : {
        "id" : 16,
        "code" : "Packing Dept_Tipping",
        "name" : "Packing Dept",
        "subDept" : "Tipping",
        "sortBy" : 0
      },
      "unit" : "PACK",
      "basicSetupTime" : 60,
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
      "priority" : 2500
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Card qty-No job file|TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
      "descript" : "????Silk screen ???Lamination ?Sheets",
      "name" : "Sheet Cutter",
      "settingsMachineType" : {
        "code" : "Sheet Cutter",
        "descript" : "Sheet Cutter"
      },
      "dept" : {
        "id" : 10,
        "code" : "Mid Dept_Lamination",
        "name" : "Mid Dept",
        "subDept" : "Lamination",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 60,
      "basicPendingMinutes" : 0,
      "processingType" : "GANG",
      "monitorAddress" : "997",
      "camIp" : "997",
      "ssQuantity" : 0,
      "machineOrder" : 6
    },
    "factoryOperation" : {
      "id" : 8,
      "code" : "MID_LAM_OASYS",
      "descript" : "MID_LAM_OASYS",
      "displayNames" : "Mid Lam",
      "needMachine" : true,
      "priority" : 800
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
      "descript" : "??sheet???",
      "name" : "MTL-700 #3 (Sheets)",
      "settingsMachineType" : {
        "code" : "MTL",
        "descript" : "MTL"
      },
      "dept" : {
        "id" : 8,
        "code" : "Mid Dept_Magnetic",
        "name" : "Mid Dept",
        "subDept" : "Magnetic",
        "sortBy" : 0
      },
      "unit" : "SHEET",
      "basicSetupTime" : 30,
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
      "priority" : 500
    },
    "title" : "PO#|OperationCode (Gang#)|Start/End Time|Sheet Qty|Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
} ]
};
}
