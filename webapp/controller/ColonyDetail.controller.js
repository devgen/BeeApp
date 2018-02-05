sap.ui.define([
	"./BaseController",
	'sap/m/MessageBox'
], function(BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("BeeApp.controller.ColonyDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf BeeApp.view.ColonyDetail
		 */
		onInit: function() {

			var oRouter = this.getRouter();

			oRouter.getRoute("ColonyDetail").attachPatternMatched(this._onObjectMatched, this);

		},
		
		_onObjectMatched: function(oEvent) {

			var oArgs, oView;

			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			var myPath = "/Colony(" + oArgs.ID + ")";
			var myPathWeight = "/Colony(" + oArgs.ID + ")/ItsWeight";
			var myPathTemperatureIn = "/Colony(" + oArgs.ID + ")/ItsTemperatureIn";
			var myPathTemperatureOut = "/Colony(" + oArgs.ID + ")/ItsTemperatureOut";
			var myPathHumidityIn = "/Colony(" + oArgs.ID + ")/ItsHumidityIn";
			var myPathHumidityOut = "/Colony(" + oArgs.ID + ")/ItsHumidityOut";
			
			var oVizFrame = oView.byId("WEIGHTChart");
			oVizFrame.destroyDataset();
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions : [ {
					name : 'Timestamp',
					value : {
						parts: ['TIMESTAMP'], 
						formatter : function(timestamp) {
							var dateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"YYYY/MM/DD HH:mm:ss"});
							var date = new Date(timestamp);
				            return dateFormat.format(date);
						}
					}
				} ],
				measures : [{
					name : "Weight",
					value : "{WEIGHT}"
				}],
				data : {
					path : myPathWeight
				}
			});
			oVizFrame.setDataset(oDataset);
			
			oVizFrame = oView.byId("weightChart");
			oVizFrame.destroyDataset();
			oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions : [ {
					name : 'Timestamp',
					value : {
						parts: ['TIMESTAMP'], 
						formatter : function(timestamp) {
							var dateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"YYYY/MM/DD HH:mm:ss"});
							var date = new Date(timestamp);
				            return dateFormat.format(date);
						}
					}
				} ],
				measures : [{
					name : "Temperature",
					value : "{TEMP}"
				}],
				data : {
					path : myPathTemperatureIn
				}
			});
			oVizFrame.setDataset(oDataset);
			
			oVizFrame = oView.byId("tempOutChart");
			oVizFrame.destroyDataset();
			oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions : [ {
					name : 'Timestamp',
					value : {
						parts: ['TIMESTAMP'], 
						formatter : function(timestamp) {
							var dateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"YYYY/MM/DD HH:mm:ss"});
							var date = new Date(timestamp);
				            return dateFormat.format(date);
						}
					}
				} ],
				measures : [{
					name : "Temperature",
					value : "{TEMP}"
				}],
				data : {
					path : myPathTemperatureOut
				}
			});
			oVizFrame.setDataset(oDataset);
			
			oVizFrame = oView.byId("hdtOutChart");
			oVizFrame.destroyDataset();
			oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions : [ {
					name : 'Timestamp',
					value : {
						parts: ['TIMESTAMP'], 
						formatter : function(timestamp) {
							var dateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"YYYY/MM/DD HH:mm:ss"});
							var date = new Date(timestamp);
				            return dateFormat.format(date);
						}
					}
				} ],
				measures : [{
					name : "Humidity",
					value : "{HUMIDITY}"
				}],
				data : {
					path : myPathHumidityOut
				}
			});
			oVizFrame.setDataset(oDataset);
			
			oVizFrame = oView.byId("hdtInChart");
			oVizFrame.destroyDataset();
			oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions : [ {
					name : 'Timestamp',
					value : {
						parts: ['TIMESTAMP'], 
						formatter : function(timestamp) {
							var dateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"YYYY/MM/DD HH:mm:ss"});
							var date = new Date(timestamp);
				            return dateFormat.format(date);
						}
					}
				} ],
				measures : [{
					name : "Humidity",
					value : "{HUMIDITY}"
				}],
				data : {
					path : myPathHumidityIn
				}
			});
			oVizFrame.setDataset(oDataset);

			oView.bindElement({
				path: myPath,
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function(oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function(oEvent) {
						oView.setBusy(false);
					}

				}
			});

		},
		_onBindingChange: function(oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		onPressAccept: function(oEvent) {
				var oModel, oView;
				oView = this.getView();
				oModel = oView.getModel();
				oModel.submitChanges({

					success: function(oParam) {
						sap.m.MessageBox.show(oParam.text + " Colony updated", {
							icon: MessageBox.Icon.INFORMATION,
							title: "Colony update",
							actions: [
								MessageBox.Action.OK
							]
						});
					},

					error: function(oParam) {

					}
				});
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf BeeApp.view.ColonyDetail
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf BeeApp.view.ColonyDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf BeeApp.view.ColonyDetail
		 */
		//	onExit: function() {
		//
		//	}

	});

});