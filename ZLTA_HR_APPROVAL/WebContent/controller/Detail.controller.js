sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("split.ZSPLIT.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf split.ZSPLIT.view.Detail
		 */
		onInit: function () {
  /* var oRouter=new sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched,this);*/
         
          
		}
	/*_onObjectMatched:function(evt){
		var t=this;
			var empid=evt.getParameter("arguments").Eid;
				var oModel=new sap.ui.model.json.JSONModel();
			oModel.loadData("model/data2.json");
			this.getView().setModel(oModel);
           oModel.attachRequestCompleted(function(){
           	
           	var obj={};
           	var arr=[];
           	var len=oModel.oData.results2.length;
           	for(var i=0;i<len;i++){
	        var record=oModel.oData.results2[i].EmpId;
	        if(empid===record){
	        	obj.EmpId=record;
	        	obj.Personalno=  oModel.oData.results2[i].Personalno;
	        	obj.Subtype=oModel.oData.results2[i].Subtype;
	        		obj.EndDate= oModel.oData.results2[i].EndDate;
	        	obj.StartDate= oModel.oData.results2[i].StartDate;
	        	obj.QuotaNumber=oModel.oData.results2[i].QuotaNumber;
	        	obj.abstype=oModel.oData.results2[i].abstype;
	        	obj.Leavetype=oModel.oData.results2[i].Leavetype;
	        	obj.Remarks=oModel.oData.results2[i].Remarks;
	        	arr.push(obj);
	        	obj={};
	        
	        }
	        			var oModel1=new sap.ui.model.json.JSONModel();
			oModel1.setData(arr);
				t.getView().setModel(oModel1,"new");
           	}
           	
	
         });

		}*/

	});

});