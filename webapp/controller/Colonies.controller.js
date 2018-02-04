sap.ui.define([
	"./BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("BeeApp.controller.Colonies", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf BeeApp.view.Colonies
		 */
		 
		 
		 	handelLineItemPress: function(evt) {
			//jQuery.sap.log.error("This should never have happened!");
			//jQuery.sap.log.info("Pressed");
			var oItem, oCtx;
			oItem = evt.getSource();
			oCtx = oItem.getBindingContext();
			//alert("Navigating to Details of " + evt.getSource().getBindingContext());
			this.getRouter().navTo("ColonyDetail", {
				ID : oCtx.getProperty('ID')
				//Connid : oCtx.getProperty("Connid")
			});
		 				
		 	},
			
			onInit: function() {
		
			},
			onOpenDialog : function () {
			this.getOwnerComponent().openColonyCreationDeialog();
		}
			
			


		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf BeeApp.view.Colonies
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf BeeApp.view.Colonies
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf BeeApp.view.Colonies
		 */
		//	onExit: function() {
		//
		//	}

	});

});