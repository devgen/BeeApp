sap.ui.define([
	"sap/ui/base/Object"
], function(UI5Object) {
	"use strict";

	return UI5Object.extend("BeeApp.controller.ColonyCreationDialog", {

		constructor: function(oView) {
			this._oView = oView;
		},

		open: function() {
			var oView = this._oView;
			var oDialog = oView.byId("Colonies");

			// create dialog lazily
			if (!oDialog) {
				var oFragmentController = {
					onCloseDialog: function() {
						oDialog.close();
					},
					onAcceptDealog: function() {
						//var oPersonInfo = sap.ui.getCore().byId("TODO").getValue();
						//hier Odata create
		
/*					var oModel;
					//oView = this.getView();
					oModel = this._oView.getModel();
					
					
								var ID =  sap.ui.getCore().byId("ID").getValue();
            		 var NAME = sap.ui.getCore().byId("colonyDetails--NAME").getValue();
                	 var LON = sap.ui.getCore().byId("colonyDetails--LON").getValue();
            		 var LAT = sap.ui.getCore().byId("colonyDetails--LAT").getValue();
                	
					
					
					var oEntry = {
						"ID":	ID,
						"NAME":NAME,
						"LON":LON,
						"LAT":LAT
					};
					
					this._oView.getModel().create ("/Colony", oEntry, "POST",  {success: function(){
						
					}, error: function(){
						
					}});*/
					

					}
				};
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "BeeApp.view.ColonyCreation", oFragmentController);
				// connect dialog to the root view of this component (models, lifecycle)
				oView.addDependent(oDialog);
			}
			oDialog.open();
		}

	});

});