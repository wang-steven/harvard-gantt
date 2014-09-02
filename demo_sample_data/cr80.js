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
        "sort" : 7
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
      "priority" : 2
    },
    "title" : "Data Format|Data Approval|Material|Sheet Size|Combo Type",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "83532",
    "oid" : "83532",
    "part" : 0,
    "operationCode" : "1480020-GB",
    "priority" : 200,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11076,
      "needWaitPrevProcess" : true,
      "operations" : [ "83532", "83533", "83534", "83535", "83536", "83537" ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : null,
    "nextOperations" : [ "83533" ],
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
      "priority" : 2
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 20,
    "productionCapacity" : 31,
    "s2sMins" : -1,
    "up" : 90,
    "sheetUp" : 90,
    "expectedStartTime" : "2014-08-19T14:45:00.000",
    "expectedSetupFinishTime" : "2014-08-19T16:15:00.000",
    "expectedFinishTime" : "2014-08-19T16:35:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "1480020-GB|794|223791",
    "tooltip2" : "N|N|||CR80_STY",
    "tooltip3" : "1480020-GB|794|223791",
    "color1" : "#0000ff",
    "color2" : "#b38600",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "83533",
    "oid" : "83533",
    "part" : 0,
    "operationCode" : "1480020-GF",
    "priority" : 200,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11076,
      "needWaitPrevProcess" : true,
      "operations" : [ "83532", "83533", "83534", "83535", "83536", "83537" ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : "83532",
    "nextOperations" : [ "83534" ],
    "runOnMachineId" : 1,
    "actualRunOnMachineId" : null,
    "quantity" : 9579,
    "actualQuantity" : 0,
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
    "manual" : false,
    "pin" : false,
    "setupTime" : 90,
    "productionTime" : 20,
    "productionCapacity" : 31,
    "s2sMins" : 65,
    "up" : 90,
    "sheetUp" : 90,
    "expectedStartTime" : "2014-08-19T16:36:00.000",
    "expectedSetupFinishTime" : "2014-08-19T18:06:00.000",
    "expectedFinishTime" : "2014-08-19T18:26:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "",
    "expectedMoldId" : null,
    "tooltip1" : "1480020-GF|794|223791",
    "tooltip2" : "N|N|||CR80_STY",
    "tooltip3" : "1480020-GF|794|223791",
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
        "sort" : 9
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
      "priority" : 14
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 9
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
      "priority" : 14
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 10
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
      "priority" : 6
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 10
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
      "priority" : 6
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 10
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
      "priority" : 7
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 10
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
      "priority" : 7
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 10
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
      "priority" : 7
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 10
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
      "priority" : 8
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 10
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
      "priority" : 8
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 9
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "83534",
    "oid" : "83534",
    "part" : 0,
    "operationCode" : "1480020-G",
    "priority" : 900,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11076,
      "needWaitPrevProcess" : true,
      "operations" : [ "83532", "83533", "83534", "83535", "83536", "83537" ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : "83533",
    "nextOperations" : [ "83535" ],
    "runOnMachineId" : 19,
    "actualRunOnMachineId" : null,
    "quantity" : 1365,
    "actualQuantity" : 0,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 30,
    "productionCapacity" : 5,
    "s2sMins" : 65,
    "up" : 90,
    "sheetUp" : 90,
    "expectedStartTime" : "2014-08-19T18:27:00.000",
    "expectedSetupFinishTime" : "2014-08-19T18:42:00.000",
    "expectedFinishTime" : "2014-08-19T19:12:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "1",
    "expectedMoldId" : 408,
    "tooltip1" : "1480020-G|794|223791",
    "tooltip2" : "N|N||||||||",
    "tooltip3" : "1480020-G|794|223791",
    "color1" : "#0000ff",
    "color2" : "#00b3b3",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "83535",
    "oid" : "83535",
    "part" : 0,
    "operationCode" : "1480020-G",
    "priority" : 900,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11076,
      "needWaitPrevProcess" : true,
      "operations" : [ "83532", "83533", "83534", "83535", "83536", "83537" ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : "83534",
    "nextOperations" : [ "83536" ],
    "runOnMachineId" : 19,
    "actualRunOnMachineId" : null,
    "quantity" : 1135,
    "actualQuantity" : 0,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 30,
    "productionCapacity" : 5,
    "s2sMins" : 400,
    "up" : 90,
    "sheetUp" : 90,
    "expectedStartTime" : "2014-08-19T19:13:00.000",
    "expectedSetupFinishTime" : "2014-08-19T19:28:00.000",
    "expectedFinishTime" : "2014-08-19T19:58:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "2",
    "expectedMoldId" : 408,
    "tooltip1" : "1480020-G|794|223791",
    "tooltip2" : "N|N||||||||",
    "tooltip3" : "1480020-G|794|223791",
    "color1" : "#0000ff",
    "color2" : "#00b3b3",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "83536",
    "oid" : "83536",
    "part" : 0,
    "operationCode" : "1480020-G",
    "priority" : 900,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11076,
      "needWaitPrevProcess" : true,
      "operations" : [ "83532", "83533", "83534", "83535", "83536", "83537" ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : "83535",
    "nextOperations" : [ "83537" ],
    "runOnMachineId" : 19,
    "actualRunOnMachineId" : null,
    "quantity" : 905,
    "actualQuantity" : 0,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 30,
    "productionCapacity" : 5,
    "s2sMins" : 400,
    "up" : 90,
    "sheetUp" : 90,
    "expectedStartTime" : "2014-08-19T19:59:00.000",
    "expectedSetupFinishTime" : "2014-08-19T20:14:00.000",
    "expectedFinishTime" : "2014-08-19T20:44:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "3",
    "expectedMoldId" : 408,
    "tooltip1" : "1480020-G|794|223791",
    "tooltip2" : "N|N||||||||",
    "tooltip3" : "1480020-G|794|223791",
    "color1" : "#0000ff",
    "color2" : "#00b3b3",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "83537",
    "oid" : "83537",
    "part" : 0,
    "operationCode" : "1480020-G",
    "priority" : 900,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11076,
      "needWaitPrevProcess" : true,
      "operations" : [ "83532", "83533", "83534", "83535", "83536", "83537" ],
      "previousProcesses" : [ ],
      "productId" : null
    },
    "previousOperation" : "83536",
    "nextOperations" : [ ],
    "runOnMachineId" : 19,
    "actualRunOnMachineId" : null,
    "quantity" : 675,
    "actualQuantity" : 0,
    "processingType" : "GANG",
    "factoryOperation" : {
      "id" : 9,
      "code" : "MID_DIE_CAR25",
      "descript" : "MID_DIE_CAR25",
      "displayNames" : "Mid Die Cut",
      "needMachine" : true,
      "priority" : 9
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 30,
    "productionCapacity" : 5,
    "s2sMins" : 400,
    "up" : 90,
    "sheetUp" : 90,
    "expectedStartTime" : "2014-08-19T20:45:00.000",
    "expectedSetupFinishTime" : "2014-08-19T21:00:00.000",
    "expectedFinishTime" : "2014-08-19T21:30:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "4",
    "expectedMoldId" : 408,
    "tooltip1" : "1480020-G|794|223791",
    "tooltip2" : "N|N||||||||",
    "tooltip3" : "1480020-G|794|223791",
    "color1" : "#0000ff",
    "color2" : "#00b3b3",
    "timeclockEmployeeId" : null,
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
        "code" : "Komori",
        "descript" : "Komori"
      },
      "dept" : {
        "id" : 7,
        "code" : "Printing Dept_",
        "name" : "Printing Dept",
        "subDept" : "",
        "sort" : 7
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
      "priority" : 2
    },
    "title" : "Data Format|Data Approval|Material|Sheet Size|Combo Type",
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
        "sort" : 11
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
      "priority" : 9
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 9
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 9
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 10
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 11
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 11
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 12
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 11
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
      "priority" : 13
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 12
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
      "priority" : 19
    },
    "title" : "Card Size|Card Name|Material|Data Format Date|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 19
    },
    "title" : "Card Size|Card Name|Material|Data Format Date|Data Approval Date",
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
        "sort" : 7
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
      "priority" : 3
    },
    "title" : "Data Format|Data Approval|Material|Sheet Size|Combo Type",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "83541",
    "oid" : "83541",
    "part" : 0,
    "operationCode" : "1480020B",
    "priority" : 2100,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11077,
      "needWaitPrevProcess" : true,
      "operations" : [ "83538", "83539", "83540", "83541", "83542", "83543", "83544", "2474331d" ],
      "previousProcesses" : [ 11076 ],
      "productId" : null
    },
    "previousOperation" : "83540",
    "nextOperations" : [ "2474331d" ],
    "runOnMachineId" : 30,
    "actualRunOnMachineId" : null,
    "quantity" : 18688,
    "actualQuantity" : 0,
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
    "manual" : false,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 64,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "expectedStartTime" : "2014-08-19T21:31:00.000",
    "expectedSetupFinishTime" : "2014-08-19T22:11:00.000",
    "expectedFinishTime" : "2014-08-19T23:15:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1480020B|794|223791",
    "tooltip2" : "|Big5Services Merchandise Credit Card(null)||",
    "tooltip3" : "1480020B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#003278",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "2474331d",
    "oid" : "83541",
    "part" : 1,
    "operationCode" : "1480020B",
    "priority" : 2100,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11077,
      "needWaitPrevProcess" : true,
      "operations" : [ "83538", "83539", "83540", "83541", "83542", "83543", "83544", "2474331d" ],
      "previousProcesses" : [ 11076 ],
      "productId" : null
    },
    "previousOperation" : "83541",
    "nextOperations" : [ "83542" ],
    "runOnMachineId" : 30,
    "actualRunOnMachineId" : null,
    "quantity" : 137240,
    "actualQuantity" : 0,
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
    "manual" : false,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 108,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "expectedStartTime" : "2014-08-20T05:45:00.000",
    "expectedSetupFinishTime" : "2014-08-20T06:25:00.000",
    "expectedFinishTime" : "2014-08-20T08:13:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1480020B|794|223791",
    "tooltip2" : "|Big5Services Merchandise Credit Card(null)||",
    "tooltip3" : "1480020B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#003278",
    "timeclockEmployeeId" : null,
    "new" : true
  }, {
    "id" : "83542",
    "oid" : "83542",
    "part" : 0,
    "operationCode" : "1480020C",
    "priority" : 2100,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11077,
      "needWaitPrevProcess" : true,
      "operations" : [ "83538", "83539", "83540", "83541", "83542", "83543", "83544", "2474331d" ],
      "previousProcesses" : [ 11076 ],
      "productId" : null
    },
    "previousOperation" : "2474331d",
    "nextOperations" : [ "83543" ],
    "runOnMachineId" : 30,
    "actualRunOnMachineId" : null,
    "quantity" : 93732,
    "actualQuantity" : 0,
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
    "manual" : false,
    "pin" : false,
    "setupTime" : 40,
    "productionTime" : 14,
    "productionCapacity" : 292,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "expectedStartTime" : "2014-08-20T08:14:00.000",
    "expectedSetupFinishTime" : "2014-08-20T08:54:00.000",
    "expectedFinishTime" : "2014-08-20T09:08:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "1480020C|794|223791",
    "tooltip2" : "|Big5Services Merchandise Credit Card(null)||",
    "tooltip3" : "1480020C|794|223791",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 20
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 18
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 18
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 13
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
      "priority" : 23
    },
    "title" : "",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "83543",
    "oid" : "83543",
    "part" : 0,
    "operationCode" : "1480020B",
    "priority" : 2300,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11077,
      "needWaitPrevProcess" : true,
      "operations" : [ "83538", "83539", "83540", "83541", "83542", "83543", "83544", "2474331d" ],
      "previousProcesses" : [ 11076 ],
      "productId" : null
    },
    "previousOperation" : "83542",
    "nextOperations" : [ "83544" ],
    "runOnMachineId" : 39,
    "actualRunOnMachineId" : null,
    "quantity" : 90792,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 161,
    "productionCapacity" : 312,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "expectedStartTime" : "2014-08-20T09:09:00.000",
    "expectedSetupFinishTime" : "2014-08-20T09:24:00.000",
    "expectedFinishTime" : "2014-08-20T12:05:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1480020B|794|223791",
    "tooltip2" : "",
    "tooltip3" : "1480020B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#002447",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "83544",
    "oid" : "83544",
    "part" : 0,
    "operationCode" : "1480020C",
    "priority" : 2300,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11077,
      "needWaitPrevProcess" : true,
      "operations" : [ "83538", "83539", "83540", "83541", "83542", "83543", "83544", "2474331d" ],
      "previousProcesses" : [ 11076 ],
      "productId" : null
    },
    "previousOperation" : "83543",
    "nextOperations" : [ ],
    "runOnMachineId" : 39,
    "actualRunOnMachineId" : null,
    "quantity" : 35568,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 23,
      "code" : "QA",
      "descript" : "QA",
      "displayNames" : "QA",
      "needMachine" : true,
      "priority" : 23
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
    "expectedStartTime" : "2014-08-20T12:06:00.000",
    "expectedSetupFinishTime" : "2014-08-20T12:21:00.000",
    "expectedFinishTime" : "2014-08-20T12:34:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "1480020C|794|223791",
    "tooltip2" : "",
    "tooltip3" : "1480020C|794|223791",
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
        "sort" : 8
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
      "priority" : 4
    },
    "title" : "Card Size|Card Name|Material|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 13
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
      "priority" : 23
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
        "sort" : 13
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
      "priority" : 23
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
        "sort" : 13
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
      "priority" : 23
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
        "sort" : 13
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
      "priority" : 23
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
        "sort" : 13
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
      "priority" : 23
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
        "sort" : 13
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
      "priority" : 23
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
        "sort" : 14
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
      "priority" : 26
    },
    "title" : "MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 14
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
      "priority" : 27
    },
    "title" : "MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 14
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
      "priority" : 27
    },
    "title" : "MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 14
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
      "priority" : 27
    },
    "title" : "MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 8
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
      "priority" : 4
    },
    "title" : "Card Size|Card Name|Material|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 14
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
      "priority" : 27
    },
    "title" : "MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 14
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
      "priority" : 27
    },
    "title" : "MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 14
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
      "priority" : 27
    },
    "title" : "MP Style|Pack|Card Name|First Case|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 12
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
      "priority" : 22
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 15
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
      "priority" : 28
    },
    "title" : "MP Style|Pack|Card Name|Client Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 16
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
      "priority" : 25
    },
    "title" : "TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
        "sort" : 16
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
      "priority" : 25
    },
    "title" : "TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
        "sort" : 16
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
      "priority" : 25
    },
    "title" : "TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
        "sort" : 17
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
      "priority" : 31
    },
    "title" : "Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ {
    "id" : "83547",
    "oid" : "83547",
    "part" : 0,
    "operationCode" : "1480020B",
    "priority" : 3100,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11078,
      "needWaitPrevProcess" : false,
      "operations" : [ "83545", "83546", "83547", "83548", "5a75bad4" ],
      "previousProcesses" : [ 11077 ],
      "productId" : null
    },
    "previousOperation" : "83546",
    "nextOperations" : [ "5a75bad4" ],
    "runOnMachineId" : 64,
    "actualRunOnMachineId" : null,
    "quantity" : 36935,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 31
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 15,
    "productionTime" : 445,
    "productionCapacity" : 83,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "expectedStartTime" : "2014-08-20T15:35:00.000",
    "expectedSetupFinishTime" : "2014-08-20T15:50:00.000",
    "expectedFinishTime" : "2014-08-20T23:15:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1480020B|794|223791",
    "tooltip2" : "||CARD_STYLE|Big5Services Merchandise Credit Card(null)|2.125\"x3.375\"   CR-80|",
    "tooltip3" : "1480020B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#005a5a",
    "timeclockEmployeeId" : null,
    "new" : false
  }, {
    "id" : "5a75bad4",
    "oid" : "83547",
    "part" : 1,
    "operationCode" : "1480020B",
    "priority" : 3100,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11078,
      "needWaitPrevProcess" : false,
      "operations" : [ "83545", "83546", "83547", "83548", "5a75bad4" ],
      "previousProcesses" : [ 11077 ],
      "productId" : null
    },
    "previousOperation" : "83547",
    "nextOperations" : [ "83548" ],
    "runOnMachineId" : 64,
    "actualRunOnMachineId" : null,
    "quantity" : 42330,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 31
    },
    "jobFile" : null,
    "manual" : false,
    "pin" : false,
    "setupTime" : 0,
    "productionTime" : 158,
    "productionCapacity" : 83,
    "s2sMins" : -1,
    "up" : 1,
    "sheetUp" : 1,
    "expectedStartTime" : "2014-08-21T05:45:00.000",
    "expectedSetupFinishTime" : "2014-08-21T05:45:00.000",
    "expectedFinishTime" : "2014-08-21T08:23:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "B",
    "expectedMoldId" : null,
    "tooltip1" : "1480020B|794|223791",
    "tooltip2" : "||CARD_STYLE|Big5Services Merchandise Credit Card(null)|2.125\"x3.375\"   CR-80|",
    "tooltip3" : "1480020B|794|223791",
    "color1" : "#0000ff",
    "color2" : "#005a5a",
    "timeclockEmployeeId" : null,
    "new" : true
  }, {
    "id" : "83548",
    "oid" : "83548",
    "part" : 0,
    "operationCode" : "1480020C",
    "priority" : 3100,
    "job" : {
      "id" : 2494,
      "comboType" : "1",
      "comboId" : 794,
      "poNo" : "223791",
      "comboQuantity" : 54000
    },
    "process" : {
      "id" : 11078,
      "needWaitPrevProcess" : false,
      "operations" : [ "83545", "83546", "83547", "83548", "5a75bad4" ],
      "previousProcesses" : [ 11077 ],
      "productId" : null
    },
    "previousOperation" : "5a75bad4",
    "nextOperations" : [ ],
    "runOnMachineId" : 64,
    "actualRunOnMachineId" : null,
    "quantity" : 27888,
    "actualQuantity" : 0,
    "processingType" : "JOB_FILE",
    "factoryOperation" : {
      "id" : 31,
      "code" : "PK_MANUAL",
      "descript" : "PK_MANUAL",
      "displayNames" : "Packing",
      "needMachine" : true,
      "priority" : 31
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
    "expectedStartTime" : "2014-08-21T08:24:00.000",
    "expectedSetupFinishTime" : "2014-08-21T08:39:00.000",
    "expectedFinishTime" : "2014-08-21T09:28:00.000",
    "actualStartTime" : null,
    "actualSetupFinishTime" : null,
    "actualFinishTime" : null,
    "finished" : false,
    "inProcessing" : false,
    "delete" : false,
    "parallel" : false,
    "parallelCode" : "C",
    "expectedMoldId" : null,
    "tooltip1" : "1480020C|794|223791",
    "tooltip2" : "||CARD_STYLE|Big5Services Merchandise Credit Card(null)|2.125\"x3.375\"   CR-80|",
    "tooltip3" : "1480020C|794|223791",
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
        "sort" : 17
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
      "priority" : 31
    },
    "title" : "Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "sort" : 17
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
      "priority" : 30
    },
    "title" : "Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "sort" : 17
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
      "priority" : 30
    },
    "title" : "Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "sort" : 17
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
      "priority" : 34
    },
    "title" : "Bundle Pack|Inner Pack|Card Style|Card Name|Card Size|Shipping Date",
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
        "sort" : 8
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
      "priority" : 5
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 17
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
      "priority" : 33
    },
    "title" : "Bundle Pack|Inner Pack|MP Style|Pack|Card Name|Multipack-Carrier|Multipack-# of Clam Shells",
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
        "sort" : 18
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
      "priority" : 15
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
        "sort" : 9
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
      "priority" : 14
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 8
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
      "priority" : 5
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 9
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
      "priority" : 14
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 12
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
      "priority" : 21
    },
    "title" : "Card Size|Card Name|Sol/Hot Stamp|Data Approval Date",
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
        "sort" : 13
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
      "priority" : 23
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
        "sort" : 16
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
      "priority" : 25
    },
    "title" : "TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
        "sort" : 16
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
      "priority" : 25
    },
    "title" : "TP Style|Data Approval Date|Card Name|First Case|Shipping Date",
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
        "sort" : 10
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
      "priority" : 8
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
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
        "sort" : 8
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
      "priority" : 5
    },
    "title" : "Data Format|Data Approval|Card Size|Material|Lamination Front|Lamination Back|Magstripe Type|Magstripe Size|Magstripe Color|Magstripe Track#",
    "currentTimeWorks" : 0,
    "online" : true
  },
  "operationQueue" : [ ]
} ]
};
}
