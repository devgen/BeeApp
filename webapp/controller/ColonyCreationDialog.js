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
			var oDialog = oView.byId("airlineCreation");

			// create dialog lazily
			if (!oDialog) {
				var oFragmentController = {
					onCloseDialog: function() {
						oDialog.close();
					},
					onAcceptDealog: function() {
						//var oPersonInfo = sap.ui.getCore().byId("TODO").getValue();
						//hier Odata create

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