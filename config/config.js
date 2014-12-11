"use strict";

var ganttApp = angular.module('ganttApp', ['gantt']);

ganttApp.controller("ganttController", ['$scope', '$http', '$location', function($scope, $http, $location) {
	$scope.mode = "custom";
	$scope.maxHeight = 0;
	$scope.showWeekends = true;
	$scope.showNonWorkHours = true;
	$scope.jumpToDateTime = new Date();

	$scope.loadServerConfiguration = function(config) {
		var configuration = {
			serverLocation: (config.serverLocation || '')
            ,jsLocationPrefix: (config.jsLocationPrefix || '/')
            ,saveGanttUrl: (config.saveGanttUrl || '/calculate')
            ,calcGanttUrl: (config.calcGanttUrl || '/calculate')

			// 以字串(term)模糊查詢符合的PoNo
			// url: GET /company/sales/pos/like/{term}
			// return: list of labelValueModel, label: poNo, value: poNo
			,
			poFuzzySearch: (config.poFuzzySearchUrl || 'company/sales/pos/like/#poNo#')

			// 以PoNo取得Po資料
			// url: GET /company/sales/po/{poNo}
			// return: po data
			,
			getPoUrl: (config.getPoUrl || 'company/sales/po/#poNo#')

			// 以PoId取得其下的Combo
			// url: GET /company/sales/combo/by-po/{PoId}
			// return: list of labelValueModel, label: comboId, value: comboId
			,
			getComboUrl: (config.getComboUrl || 'company/sales/combo/by-po/#poId#')

			// 以ComboId取得其下的Product
			// uurl: GET /company/sales/combo/product/by-combo/{comboId}
			// return list of labelValeModel, label: product info, value: productId
			,
			getProductUrl: (config.getProductUrl || 'company/sales/combo/product/by-combo/#comboId#')

			// 取poNo, comboId, productId資訊
			,
			getProductInfoUrl: (config.getProductInfoUrl || 'aps/operations/pdt-info/#taskId#')

			// 以ProductId取得其下的Process
			// url: GET /aps/processes/by-product/{productId}?factoryOperationCode={factoryOperationCode}
			// request params:
			// factoryOperationCode, default: blank, 有給的話會過濾出所屬該factoryOperationCode的process, 沒給的話不過濾
			// return list of labelValueModel, label: process info, value processId
			// ?factoryOperationCode=#factoryOperationCode#
			,
			getProcessUrl: (config.getProcessUrl || 'aps/processes/by-product/#productId#')

			// url: /aps/operations/{operationIds} (operationIds用逗號分隔)
			,
			getMoreInformationPage: (config.getMoreInformationPage || 'aps/operations/#operationIds#')

			// confirm
			// url: POST or PUT /company/scheduler/plans/confirm
			// request params:
			// check, default: true, 計算前是否要執行precondition check?
			// calculate, defaul: true, 是否要計算
			// calculateFrom, default: system day + 1 day, 從哪一天開始計算
			// calculateWeeks, default: 12, 要計算幾周
			// return tw.com.softleader.harvard.aps.service.result.ApsMessage
			,
			confirmGanttUrl: (config.confirmGanttUrl || 'company/scheduler/plans/calculate/')
		};
		console.log("initial server configuration", configuration);
		return configuration;
	};

	$scope.addMachines = function() {
		if (!!getSampleMachineData().data.machines && getSampleMachineData().data.machines.length) {
			console.log('have sample data, use it.');
			$scope.loadData(getSampleMachineData().data);
		} else {
			// get machine json from server
			$http({
				method: 'GET',
				url: $location.absUrl() + '/machines'
			}).success(function(response, status, headers, config) {
				$scope.loadData(response);
			}).error(function() {
				// load data from sample
				$scope.loadData(getSampleData().data);
			});
		}
	};

	$scope.addMolds = function() {
		// get machine json from server
		$http({
			method: 'GET',
			url: $location.absUrl() + '/molds'
		}).success(function(response, status, headers, config) {
			$scope.loadData(response);
		}).error(function() {
			// load data from sample
			$scope.loadData(getSampleData().data);
		});
	};

	$scope.jumpToDate = function(date) {
		console.log(date);
		var date = date === undefined ? new Date() : new Date(date);
		$scope.centerDate(date);
	};

	$scope.triggerMaxHeight = function() {
		if ($scope.maxHeight === 0) {
			$scope.maxHeight = 320;// ;(window.outerHeight - (document.getElementById('form-box').offsetTop +
			// document.getElementById('form-box').offsetHeight)) - 150;
		} else {
			$scope.maxHeight = 0;
		}
	};

	$scope.removeSomeSamples = function() {
		$scope.removeData([]);
	};

	$scope.removeSamples = function() {
		$scope.clearData();
	};

	 $scope.serverResponse = function(response) {
        console.log(response);
        // UI initial有訊息, 先另外印在console
        if (response.state == 'initial') {
        	// alert("UI initialization message, Please contact your System Administrator.");
        	console.log("UI initialization message: " + response.data.join("\r\n") );
        }

        else if (response.state == 'ok') {
        	// server有回應計算完成, 但有訊息
        	if (!response.data.data.data.messagesEmpty) {
				// 先印在console..
				// console.log(response.data.data.data.messages.map(function(msg) {return msg.value;}).join("\r\n"));
			}
        }

        else if (response.state == 'error') {
        	// server有回應但計算被打斷
        	if (response.data.data && !response.data.data.messagesEmpty) {
				alert("Calculate break:\r\n" + response.data.data.messages.map(function(msg) {return msg.value;}).join("\r\n") + '\r\nRollback all moves!');
				console.log("Calculate break by server: " + response.data.data.messages.map(function(msg) {return msg.value;}).join("\r\n"));
			}
        	// 以外的其他錯誤
        	else {
        		alert("Something went wrong...\r\n[" + response.data.status + "] " + response.data.statusText + "\r\nRollback all moves!");
        	}
        }
    };
    $scope.taskEditorSaved = function(data) {
        var data_checking = true , error_message;

        if (data.poNo === null || data.comboId === null /*|| data.productId === null*/ || data.processId === null || data.processingType === null ||
            data.quantity === null || data.priority === null || data.expectedStartTime === null ||
            data.expectedSetupFinishTime === null || data.expectedFinishTime === null) {
            data_checking = false;
            error_message = '1';
        }
        if (data.processingType === 'GANG' && (data.up === null || data.sheetUp === null)) {
            data_checking = false;
            error_message = '2';
        }
        if (data.isParallel === true && data.parallelCode === null) {
            data_checking = false;
            error_message = '3';
        }
        if (data.isPin === true && (data.expectedStartTime === null ||
            data.expectedSetupFinishTime === null ||
            data.expectedFinishTime === null ||
            data.quantity === null)) {
            data_checking = false;
            error_message = '4';
        }
        if (data.inProcessing === true && (data.expectedStartTime === null ||
            data.expectedSetupFinishTime === null ||
            data.expectedFinishTime === null || data.actualStartTime === null ||
            data.actualSetupFinishTime === null ||
            data.actualFinishTime === null ||
            data.actualQuantity === null)) {
            data_checking = false;
            error_message = '5';
        }

        return {
            state: data_checking ? 'ok' : 'error',
            data: data,
            errorMessage: error_message
        };
    };

	$scope.rowAddEvent = function(event) {
		// A row has been added, updated or clicked. Use this event to save back the updated row e.g. after a user re-ordered it.
		// console.log('Row event (by user: ' + event.userTriggered + '): ' + event.date + ' ' + event.row.description + ' (Custom data: ' +
		// event.row.data + ')');
		// console.log('add', event);
	};

	$scope.saveButton = function(event) {

	};

	$scope.rowClickEvent = function(event) {
		// A row has been added, updated or clicked. Use this event to save back the updated row e.g. after a user re-ordered it.
		// console.log('Row event (by user: ' + event.userTriggered + '): ' + event.date + ' ' + event.row.description + ' (Custom data: ' +
		// event.row.data + ')');
		console.log('click', event);
	};

	$scope.rowUpdateEvent = function(event) {
		// A row has been added, updated or clicked. Use this event to save back the updated row e.g. after a user re-ordered it.
		// console.log('Row event (by user: ' + event.userTriggered + '): ' + event.date + ' ' + event.row.description + ' (Custom data: ' +
		// event.row.data + ')');
		console.log('update', event);
	};

	$scope.scrollEvent = function(event) {
	};

	$scope.taskEvent = function(event) {
		// A task has been updated or clicked.
		console.log('event', event.task);
	};

	$scope.taskUpdate = function(event) {
		// A task has been updated or clicked.
		console.log('updated', event.task);
	};
}]);
