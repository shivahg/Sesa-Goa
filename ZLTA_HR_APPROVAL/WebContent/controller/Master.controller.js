sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("split.ZSPLIT.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf split.ZSPLIT.view.Master
		 */
		onInit: function () {
					var oModel=new sap.ui.model.json.JSONModel();
			oModel.loadData("model/data2.json");
			this.getView().setModel(oModel);
				},
		onItemSelection:function(evt){
		var ei=evt.oSource.mProperties.title;
			// 	var oRouter = this.getOwnerComponent().getRouter();
			// oRouter.navTo("Detail",{Eid:ei});
			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("hrdepartment",{Eid:ei});
		}
		

	});

});