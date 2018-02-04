sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"BeeApp/model/models",
	"BeeApp/controller/ColonyCreationDialog"
], function(UIComponent, Device, models,ColonyCreationDialog) {
	"use strict";

	return UIComponent.extend("BeeApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			// create the views based on the url/hash
            this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			
				// set dialog
			this.colonyCreationDialog = new ColonyCreationDialog(this.getRootControl());
		},
		 openColonyCreationDeialog : function () {
		 	//this.colonyCreationDialog.setModel(this.getView().getModel());
		 	
			this.colonyCreationDialog.open();
		},
		getColonyCreationDialog :function(){
			return this.colonyCreationDialog;
		}
	});
});