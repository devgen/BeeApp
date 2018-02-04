sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("BeeApp.controller.MainView", {
		init: function() {

		},
		onOpenDialog: function() {
			this.getOwnerComponent().openAirlineCreationDeialog();
		}

	});
});