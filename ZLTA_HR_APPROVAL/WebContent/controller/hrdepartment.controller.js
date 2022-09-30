sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("split.ZSPLIT.controller.hrdepartment", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf split.ZSPLIT.view.hrdepartment
		 */
		onInit: function () {
        var oRouter=new sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("hrdepartment").attachPatternMatched(this.onObjectMatched,this);
		},
		onObjectMatched:function(evt){
			var t=this;
			var eid=evt.mParameters.arguments.Eid;
					var oModel=new sap.ui.model.json.JSONModel();
			oModel.loadData("model/data2.json");
			this.getView().setModel(oModel);
		 oModel.attachRequestCompleted(function(){
				var obj={};
           	var arr=[];
           	
           	var len=oModel.oData.hrdata2.length;
           		for(var i=0;i<len;i++){
	        var hremp=oModel.oData.hrdata2[i].empno;
	        if(eid===hremp){
	        	obj.EmpId=hremp;
	        	obj.company=  oModel.oData.hrdata2[i].company;
	        	obj.ltacy=oModel.oData.hrdata2[i].ltacy;
	        		obj.ltano= oModel.oData.hrdata2[i].ltano;
	        			obj.ename= oModel.oData.hrdata2[i].empname;
	        			obj.nod= oModel.oData.hrdata2[i].nod;
	        	obj.dept= oModel.oData.hrdata2[i].dept;
	        	obj.des=oModel.oData.hrdata2[i].des;
	        	obj.laf=oModel.oData.hrdata2[i].laf;
	        	obj.lat=oModel.oData.hrdata2[i].lat;
	        	obj.mot=oModel.oData.hrdata2[i].mot;
	        		obj.desn=oModel.oData.hrdata2[i].desn;
	        			obj.cot=oModel.oData.hrdata2[i].cot;
	        				obj.af=oModel.oData.hrdata2[i].af;
	        				obj.del=oModel.oData.hrdata2[i].del;
	        	arr.push(obj);
	        	obj={};
	        
	        }
	        	
           	}
           			var oModel1=new sap.ui.model.json.JSONModel();
			oModel1.setData(arr);
				t.getView().setModel(oModel1,"hrdata");
			});
			
		},
		Approve:function(){
			var oRouter= sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("taxationdept");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf split.ZSPLIT.view.hrdepartment
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf split.ZSPLIT.view.hrdepartment
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf split.ZSPLIT.view.hrdepartment
		 */
		//	onExit: function() {
		//
		//	}

	});

});