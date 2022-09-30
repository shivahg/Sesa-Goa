sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZO4NMCC.ZO4NMCC.controller.overview", {
		onInit: function () {

				/*	var t=this;
         	var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZPM_NOTIFICATION_SRV_01/");
         	
			oModel.read("/zpm_str_notificationSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				//////date///
				var date=evt.results[i].Qmdat;
				var frmt = sap.ui.core.format.DateFormat.getDateInstance({pattern:"dd-MM-yyyy"});
            	var d = frmt.format(new Date(date));
            	////////////////////////////////////////
            	var bd=evt.results[i].Breakdown;
            	if(bd==="true"){
            		t.b="X"
            	}
            	else{
            		t.b=""
            	}
            	////////////////////////////////////
				obj.nt=evt.results[i].NotifType;
				obj.ne=evt.results[i].Equipment;
				obj.nn=evt.results[i].NotifNo;
				obj.np=evt.results[i].Maintplant;
				obj.nda=d;
				obj.nd=evt.results[i].ShortText;
				obj.ns=evt.results[i].Status;
				
				obj.np1=evt.results[i].PersnResp;
				obj.nc=evt.results[i].Ernam;
				obj.nb=t.b;
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"ntdata");
			}
			
			});
*/
		},
		/*new:function(){
			var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ncreation");
		}*/
	});
});