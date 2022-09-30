sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
	
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("Z_IDP_Development.Z_IDP_Development.controller.idpform", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Z_IDP_Development.Z_IDP_Development.view.idpform
		 */
		onInit: function () {
			/*this.getView().byId("st").setEditable(false);
			this.getView().byId("nc").setEditable(false);
			this.getView().byId("omg").setEditable(false);*/
			var oRouter=new sap.ui.core.UIComponent.getRouterFor(this);
	          oRouter.getRoute("idpform").attachPatternMatched(this.onObjectMatched,this);

		},
		onObjectMatched:function(evt){
			var t=this;
			t.idpno=evt.mParameters.arguments.idpno;
            var Model=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZHR_OD_IDP_APPROVAL_SRV/");
			
			Model.read("/ZHR_T_IDPSet('"+t.idpno+"')?$expand=ZHR_T_IDP_AODSet,ZHR_T_IDP_STBLSet,ZHR_T_IDP_APP_STSet",{
				success:function(evt){
					var data=evt;
					var arr1=[];
					var obj1={};
                    t.level=evt.SavSub;
					 
					 /////////////////manager  comments//////////////////
					 if(t.level==="T"){
						 t.getView().byId("empcmt").setEditable(false);
						 t.getView().byId("mngcmt").setEditable(true);
						 t.getView().byId("hrcmt").setEditable(false);
						 t.getView().byId("empmy").setEditable(false);
						 t.getView().byId("mngy").setEditable(false);
						 t.getView().byId("hry").setEditable(false);
						 t.getView().byId("dy").setEditable(false);
						 arr1.push(obj1);
						 obj1={};
						var model4=new sap.ui.model.json.JSONModel();
						model4.setData(data);
						t.getView().setModel(model4,"idpdata");
                        var m=evt.ZHR_T_IDP_AODSet.results.length;
                        var arr3=[];
                        var obj2={};
                        var date1;
                        var d1,d2;
                        for(var i=0;i<m;i++){
                        obj2.LeadComp=evt.ZHR_T_IDP_AODSet.results[i].LeadComp;
                        obj2.DeveOpt=evt.ZHR_T_IDP_AODSet.results[i].DeveOpt;
                        obj2.GoalAssig=evt.ZHR_T_IDP_AODSet.results[i].GoalAssig;
                        obj2.DescAssig=evt.ZHR_T_IDP_AODSet.results[i].DescAssig;
                        obj2.EstiSartDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiSartDate);
		                 obj2.EstiCompDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiCompDate);
                       
                        arr3.push(obj2);
                        obj2={};
                         }
                         var model5=new sap.ui.model.json.JSONModel();
		                 model5.setData(arr3);
		                  t.getView().setModel(model5,"idpdata1");
                         var len2=evt.ZHR_T_IDP_STBLSet.results.length;
                        var arr4=[];
                        var obj3={};
                        
                        for(var i=0;i<len2;i++){
                        obj3.LeadComp=evt.ZHR_T_IDP_STBLSet.results[i].LeadComp;
                        obj3.DeveOpt=evt.ZHR_T_IDP_STBLSet.results[i].DeveOpt;
                        obj3.GoalAssig=evt.ZHR_T_IDP_STBLSet.results[i].GoalAssig;
                        obj3.DescAssig=evt.ZHR_T_IDP_STBLSet.results[i].DescAssig;
                        obj3.EstiSartDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiSartDate);
		                 obj3.EstiCompDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiCompDate);
	                   
                        arr4.push(obj3);
		                obj3={};
		                }
                        var model6=new sap.ui.model.json.JSONModel();
					    model6.setData(arr4);
					    t.getView().setModel(model6,"idpdata2");
				            }
					 
					 
					 /////////////HR comments///////////////
					 
					 if(t.level==="0"){
						 t.getView().byId("empcmt").setEditable(false);
						 t.getView().byId("mngcmt").setEditable(false);
						 t.getView().byId("hrcmt").setEditable(true);
						 t.getView().byId("empmy").setEditable(false);
						 t.getView().byId("mngy").setEditable(false);
						 t.getView().byId("hry").setEditable(false);
						 t.getView().byId("dy").setEditable(false);
						 arr1.push(obj1);
							obj1={};
							var model4=new sap.ui.model.json.JSONModel();
							model4.setData(data);
							t.getView().setModel(model4,"idpdata");
	                    /////////////////////////////////////////////
	                   obj1.ZHR_S_IDP_ATTACHSet=evt.ZHR_S_IDP_ATTACHSet;
	                   //////////////////////////////////////
	                   var m=evt.ZHR_T_IDP_AODSet.results.length;
	                   var arr3=[];
	                   var obj2={};
	                   for(var i=0;i<m;i++){

	                   obj2.LeadComp=evt.ZHR_T_IDP_AODSet.results[i].LeadComp;
	                   obj2.DeveOpt=evt.ZHR_T_IDP_AODSet.results[i].DeveOpt;
	                   obj2.GoalAssig=evt.ZHR_T_IDP_AODSet.results[i].GoalAssig;
	                   obj2.DescAssig=evt.ZHR_T_IDP_AODSet.results[i].DescAssig;
	                   obj2.EstiSartDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiSartDate);
		                 obj2.EstiCompDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiCompDate);
	                    
	                   arr3.push(obj2);
	                   obj2={};
	                     }
	                   var model5=new sap.ui.model.json.JSONModel();
			           model5.setData(arr3);
			           t.getView().setModel(model5,"idpdata1");
                       var len2=evt.ZHR_T_IDP_STBLSet.results.length;
	                   var arr4=[];
	                   var obj3={};
	                   for(var i=0;i<len2;i++){
                      obj3.LeadComp=evt.ZHR_T_IDP_STBLSet.results[i].LeadComp;
	                  obj3.DeveOpt=evt.ZHR_T_IDP_STBLSet.results[i].DeveOpt;
	                  obj3.GoalAssig=evt.ZHR_T_IDP_STBLSet.results[i].GoalAssig;
	                  obj3.DescAssig=evt.ZHR_T_IDP_STBLSet.results[i].DescAssig;
	                  obj3.EstiSartDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiSartDate);
		                 obj3.EstiCompDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiCompDate);
	                    
	                  arr4.push(obj3);
			         obj3={};
			          }
                       var model6=new sap.ui.model.json.JSONModel();
						model6.setData(arr4);
						t.getView().setModel(model6,"idpdata2");
					 }
					 
					 /////manager mid year review///////////////
					 if(t.level==="2"){
						 t.getView().byId("empcmt").setEditable(false);
						 t.getView().byId("mngcmt").setEditable(false);
						 t.getView().byId("hrcmt").setEditable(false);
						 t.getView().byId("empmy").setEditable(false);
						 t.getView().byId("mngy").setEditable(true);
						 t.getView().byId("hry").setEditable(false);
						 t.getView().byId("dy").setEditable(false);
						 arr1.push(obj1);
							obj1={};
							var model4=new sap.ui.model.json.JSONModel();
							model4.setData(data);
							t.getView().setModel(model4,"idpdata");
	
                      var m=evt.ZHR_T_IDP_AODSet.results.length;
	                  var arr3=[];
	                  var obj2={};
	                  for(var i=0;i<m;i++){
                      obj2.LeadComp=evt.ZHR_T_IDP_AODSet.results[i].LeadComp;
	                  obj2.DeveOpt=evt.ZHR_T_IDP_AODSet.results[i].DeveOpt;
	                  obj2.GoalAssig=evt.ZHR_T_IDP_AODSet.results[i].GoalAssig;
	                  obj2.DescAssig=evt.ZHR_T_IDP_AODSet.results[i].DescAssig;
	                  obj2.EstiSartDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiSartDate);
	                 obj2.EstiCompDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiCompDate);
	                   
	                  arr3.push(obj2);
	                  obj2={};
	                  }
	                 var model5=new sap.ui.model.json.JSONModel();
			        model5.setData(arr3);
			        t.getView().setModel(model5,"idpdata1");
			        
                      //////////////////////////////////
			        var len2=evt.ZHR_T_IDP_STBLSet.results.length;
	                var arr4=[];
	                var obj3={};
	                for(var i=0;i<len2;i++){
                    obj3.LeadComp=evt.ZHR_T_IDP_STBLSet.results[i].LeadComp;
	                obj3.DeveOpt=evt.ZHR_T_IDP_STBLSet.results[i].DeveOpt;
	                obj3.GoalAssig=evt.ZHR_T_IDP_STBLSet.results[i].GoalAssig;
	                obj3.DescAssig=evt.ZHR_T_IDP_STBLSet.results[i].DescAssig;
	               
	                 obj3.EstiSartDate =new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiSartDate);
	                 obj3.EstiCompDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiCompDate);
			 		
			 		
                    
	                arr4.push(obj3);
			        obj3={};
			        }
                    var model6=new sap.ui.model.json.JSONModel();
					model6.setData(arr4);
					t.getView().setModel(model6,"idpdata2");
						 }
					 
					 
					 /////HR mid year review///////////////
					 
					 if(t.level==="3"){
						 t.getView().byId("empcmt").setEditable(false);
						 t.getView().byId("mngcmt").setEditable(false);
						 t.getView().byId("hrcmt").setEditable(false);
						 t.getView().byId("empmy").setEditable(false);
						 t.getView().byId("mngy").setEditable(false);
						 t.getView().byId("hry").setEditable(true);
						 t.getView().byId("dy").setEditable(false);
						 arr1.push(obj1);
						 obj1={};
						 var model4=new sap.ui.model.json.JSONModel();
						 model4.setData(data);
						t.getView().setModel(model4,"idpdata");
	
	                    var m=evt.ZHR_T_IDP_AODSet.results.length;
	                    var arr3=[];
	                    var obj2={};
	                    for(var i=0;i<m;i++){
                        obj2.LeadComp=evt.ZHR_T_IDP_AODSet.results[i].LeadComp;
	                    obj2.DeveOpt=evt.ZHR_T_IDP_AODSet.results[i].DeveOpt;
	                    obj2.GoalAssig=evt.ZHR_T_IDP_AODSet.results[i].GoalAssig;
	                    obj2.DescAssig=evt.ZHR_T_IDP_AODSet.results[i].DescAssig;
	                    obj2.EstiSartDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiSartDate);
		                 obj2.EstiCompDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiCompDate);
	                     
	                    arr3.push(obj2);
	                    obj2={};
	     
	                   }
	                    var model5=new sap.ui.model.json.JSONModel();
			            model5.setData(arr3);
			            t.getView().setModel(model5,"idpdata1");
                        var len2=evt.ZHR_T_IDP_STBLSet.results.length;
	                    var arr4=[];
	                    var obj3={};
	                    for(var i=0;i<len2;i++){
                        obj3.LeadComp=evt.ZHR_T_IDP_STBLSet.results[i].LeadComp;
	                    obj3.DeveOpt=evt.ZHR_T_IDP_STBLSet.results[i].DeveOpt;
	                    obj3.GoalAssig=evt.ZHR_T_IDP_STBLSet.results[i].GoalAssig;
	                    obj3.DescAssig=evt.ZHR_T_IDP_STBLSet.results[i].DescAssig;
	                    obj3.EstiSartDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiSartDate);
		                 obj3.EstiCompDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiCompDate);
	                    
	                    arr4.push(obj3);
			            obj3={};
			             }
                        var model6=new sap.ui.model.json.JSONModel();
						model6.setData(arr4);
						t.getView().setModel(model6,"idpdata2");
						 }
					 
					 ///Director comments///////
					 if(t.level==="4"){
						 t.getView().byId("empcmt").setEditable(false);
						 t.getView().byId("mngcmt").setEditable(false);
						 t.getView().byId("hrcmt").setEditable(false);
						 t.getView().byId("empmy").setEditable(false);
						 t.getView().byId("mngy").setEditable(false);
						 t.getView().byId("hry").setEditable(false);
						 t.getView().byId("dy").setEditable(true);
						 arr1.push(obj1);
						 obj1={};
						 var model4=new sap.ui.model.json.JSONModel();
						 model4.setData(data);
						 t.getView().setModel(model4,"idpdata");
                         var m=evt.ZHR_T_IDP_AODSet.results.length;
	                     var arr3=[];
	                     var obj2={};
	                     for(var i=0;i<m;i++){
                         obj2.LeadComp=evt.ZHR_T_IDP_AODSet.results[i].LeadComp;
	                     obj2.DeveOpt=evt.ZHR_T_IDP_AODSet.results[i].DeveOpt;
	                     obj2.GoalAssig=evt.ZHR_T_IDP_AODSet.results[i].GoalAssig;
	                     obj2.DescAssig=evt.ZHR_T_IDP_AODSet.results[i].DescAssig;
	                  
	                     obj2.EstiSartDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiSartDate);
		                 obj2.EstiCompDate=new Date(evt.ZHR_T_IDP_AODSet.results[i].EstiCompDate);
	                     arr3.push(obj2);
	                     obj2={};
	                     }
	                     var model5=new sap.ui.model.json.JSONModel();
			             model5.setData(arr3);
			             t.getView().setModel(model5,"idpdata1");
                         var len2=evt.ZHR_T_IDP_STBLSet.results.length;
	                     var arr4=[];
	                     var obj3={};
	                     for(var i=0;i<len2;i++){
                         obj3.LeadComp=evt.ZHR_T_IDP_STBLSet.results[i].LeadComp;
	                     obj3.DeveOpt=evt.ZHR_T_IDP_STBLSet.results[i].DeveOpt;
	                     obj3.GoalAssig=evt.ZHR_T_IDP_STBLSet.results[i].GoalAssig;
	                     obj3.DescAssig=evt.ZHR_T_IDP_STBLSet.results[i].DescAssig;
	                     obj3.EstiSartDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiSartDate);
		                 obj3.EstiCompDate=new Date(evt.ZHR_T_IDP_STBLSet.results[i].EstiCompDate);
	                     arr4.push(obj3);
			             obj3={};
			             }
                        var model6=new sap.ui.model.json.JSONModel();
						model6.setData(arr4);
						t.getView().setModel(model6,"idpdata2");
						 }
					     }
			           });
				         },
	back:function(){
		var t=this;
		var oRouter=t.getOwnerComponent().getRouter();
		oRouter.navTo("idpdetails");
		
	},
	
	

	////////////////Approved data//////////////////////////////////////
	
	
	Approve:function(){
		           var t=this;
		           var condition=t.getView().getModel("idpdata").getData().SavSub;
		           sap.m.MessageBox.warning("Do you want to Approve", {
		           title: "Warning",                                    // default
		           styleClass: "",                                      // default
		           actions:[sap.m.MessageBox.Action.OK,sap.m.MessageBox.Action.CANCEL],               // default
		          // default
		           initialFocus: null,                                  // default
		           textDirection: sap.ui.core.TextDirection.Inherit ,
		           onClose:function(oAction){
		    	   if(oAction==="OK"){
		    		var arr=[];
		    		var obj={};
		    		arr.push(obj);
		    		var nul=arr;
		    		obj={}
		    		var aodtable=t.getView().byId("tb1").getModel("idpdata1").getData();
		    		var stbtable=t.getView().byId("tb3").getModel("idpdata2").getData();
		    		////////////////////////////////////////////////////////////////
		    		if((condition==="T")&&(t.getView().byId("mngcmt").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill Manager Comments");
		    		}
		    		else if((condition==="0")&&(t.getView().byId("hrcmt").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill HR Comments");
		    		}
		    		else if((condition==="2")&&(t.getView().byId("mngy").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill Manager Midyear Comments");
		    		}
		    		else if((condition==="3")&&(t.getView().byId("hry").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill HR Midyear Comments");
		    		}
		    		else if((condition==="4")&&(t.getView().byId("dy").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill Director Comments");
		    		}
		    		else{
		    		
		    		var approvedata={
		    			"Comments": "", 
		    			"Dept": t.getView().getModel("idpdata").getData().Dept,
		    			"Descr": t.getView().getModel("idpdata").getData().Descr,
		    			"Desi": t.getView().getModel("idpdata").getData().Desi,
		    			"Direname":t.getView().getModel("idpdata").getData().Direname,
		    			"DireMrComm": t.getView().getModel("idpdata").getData().DireMrComm,
		    			"Diremrapprej": t.getView().getModel("idpdata").getData().Diremrapprej,
		    			"EmpComm": t.getView().getModel("idpdata").getData().EmpComm,
		    			"EmpMrComm": t.getView().getModel("idpdata").getData().EmpMrComm,
		    			"Ename": t.getView().getModel("idpdata").getData().Ename,
		    			"EndDate": t.getView().getModel("idpdata").getData().EndDate,
		    			"Grade": t.getView().getModel("idpdata").getData().Grade,
		    			"Hod": t.getView().getModel("idpdata").getData().Hod,
		    			"Hrname":t.getView().getModel("idpdata").getData().Hrname,
		    			"HrComm": t.getView().getModel("idpdata").getData().HrComm,
		    			"HrMrComm": t.getView().getModel("idpdata").getData().HrMrComm,
		    			"Idpmana":t.getView().getModel("idpdata").getData().Idpmana,
		    			"Idphr":t.getView().getModel("idpdata").getData().Idphr,
		    			"Idprmana":t.getView().getModel("idpdata").getData().Idprmana,
		    			"Idprhr":t.getView().getModel("idpdata").getData().Idprhr,
		    			"Idprdir":t.getView().getModel("idpdata").getData().Idprdir,
		    			"Hrmrapprej": t.getView().getModel("idpdata").getData().Hrmrapprej,
		    			"IdpNo": t.getView().getModel("idpdata").getData().IdpNo,
		    			"Mangname":t.getView().getModel("idpdata").getData().Mangname,
		    			"MangComm": t.getView().getModel("idpdata").getData().MangComm,
		    			"MangMrComm": t.getView().getModel("idpdata").getData().MangMrComm,
		    			"Mangapprej": t.getView().getModel("idpdata").getData().Mangapprej,
		    			"Mangmrapprej": t.getView().getModel("idpdata").getData().Mangmrapprej,
		    			"Message": t.getView().getModel("idpdata").getData().Message,
		    			"NextCarrer": t.getView().getModel("idpdata").getData().NextCarrer,
		    			"OpenMg": t.getView().getModel("idpdata").getData().OpenMg,
		    			"Pernr": t.getView().getModel("idpdata").getData().Pernr,
		    			"SavSub": t.getView().getModel("idpdata").getData().SavSub,
		    			"ShortTerm": t.getView().getModel("idpdata").getData().ShortTerm,
		    			"StartDate": t.getView().getModel("idpdata").getData().StartDate,
		    			"Status": t.getView().getModel("idpdata").getData().Status,
		    			"Apprej":"A",
		    			"ZHR_S_IDP_ATTACHSet": nul,
		    			"ZHR_T_IDP_AODSet": aodtable,
		    			"ZHR_T_IDP_APP_STSet": nul,
		    			"ZHR_T_IDP_STBLSet":stbtable
		    		}
		    		        var Modelapprove=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZHR_OD_IDP_APPROVAL_SRV/");
		    		        Modelapprove.create("/ZHR_T_IDPSet",approvedata,{
		    		        success:function(odata,response){
		    				var idpno=odata.IdpNo;
		    				var arr=[];
		    				var obj={};
		    				var nul;
		    				sap.m.MessageBox.success("IDP.No: '"+idpno+"' Approved succesfully", {
		    				    title: "Success",                                    // default
		    				    onClose: null,                                       // default
		    				    styleClass: "",                                      // default
		    				    actions: sap.m.MessageBox.Action.OK,                 // default
		    				    emphasizedAction: sap.m.MessageBox.Action.OK,        // default
		    				    initialFocus: null,                                  // default
		    				    textDirection: sap.ui.core.TextDirection.Inherit ,
		    				    onClose:function(){
		    				    if(oAction==="OK"){
		    				    
		    				    
		    				    	var oRouter=t.getOwnerComponent().getRouter();
		    						oRouter.navTo("idpdetails");
		    				    }
		    				    }
		    				});
		    				
		    			},
		    			error:function(error){
							var message=error;
							var msg=$(error.response.body).find('message').first().text();
							MessageBox.error(msg);
						}
		    		});
		    		
		    	}
		    	
		    	   }
		    }
		   
		});
	
	},
	
	Reject:function(){
		var t=this;
		var condition=t.getView().getModel("idpdata").getData().SavSub;
		            sap.m.MessageBox.warning("Do you want to Reject", {
		            title: "Warning",                                    // default
		            styleClass: "",                                      // default
		            actions: [sap.m.MessageBox.Action.OK,sap.m.MessageBox.Action.CANCEL],              // default
		            
		            initialFocus: null,                                  // default
		            textDirection: sap.ui.core.TextDirection.Inherit ,
		            onClose:function(oAction){
		    	    if(oAction==="OK"){
		    	
		    		
		    		
		    		var arr=[];
		    		var obj={};
		    		arr.push(obj);
		    		var nul=arr;
		    		obj={}
		    		var aodtable=t.getView().byId("tb1").getModel("idpdata1").getData();
		    		var stbtable=t.getView().byId("tb3").getModel("idpdata2").getData();
		    		//////////////validations///////////////////
		    		if((condition==="T")&&(t.getView().byId("mngcmt").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill Manager Comments");
		    		}
		    		else if((condition==="0")&&(t.getView().byId("hrcmt").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill HR Comments");
		    		}
		    		else if((condition==="2")&&(t.getView().byId("mngy").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill Manager Midyear Comments");
		    		}
		    		else if((condition==="3")&&(t.getView().byId("hry").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill HR Midyear Comments");
		    		}
		    		else if((condition==="4")&&(t.getView().byId("dy").getValue()==="")){
		    			sap.m.MessageBox.warning("Please Fill Director Comments");
		    		}
		    		else{
		    		
		    		var Rejectdata={
		    			"Comments": "",
		    			"Dept": t.getView().getModel("idpdata").getData().Dept,
		    			"Descr": t.getView().getModel("idpdata").getData().Descr,
		    			"Desi": t.getView().getModel("idpdata").getData().Desi,
		    			"Direname":t.getView().getModel("idpdata").getData().Direname,
		    			"DireMrComm": t.getView().getModel("idpdata").getData().DireMrComm,
		    			"Diremrapprej": t.getView().getModel("idpdata").getData().Diremrapprej,
		    			"EmpComm": t.getView().getModel("idpdata").getData().EmpComm,
		    			"EmpMrComm": t.getView().getModel("idpdata").getData().EmpMrComm,
		    			"Ename": t.getView().getModel("idpdata").getData().Ename,
		    			"EndDate": t.getView().getModel("idpdata").getData().EndDate,
		    			"Grade": t.getView().getModel("idpdata").getData().Grade,
		    			"Hod": t.getView().getModel("idpdata").getData().Hod,
		    			"Hrname":t.getView().getModel("idpdata").getData().Hrname,
		    			"HrComm": t.getView().getModel("idpdata").getData().HrComm,
		    			"HrMrComm": t.getView().getModel("idpdata").getData().HrMrComm,
		    			"Idpmana":t.getView().getModel("idpdata").getData().Idpmana,
		    			"Idphr":t.getView().getModel("idpdata").getData().Idphr,
		    			"Idprmana":t.getView().getModel("idpdata").getData().Idprmana,
		    			"Idprhr":t.getView().getModel("idpdata").getData().Idprhr,
		    			"Idprdir":t.getView().getModel("idpdata").getData().Idprdir,
		    			"Hrmrapprej": t.getView().getModel("idpdata").getData().Hrmrapprej,
		    			"IdpNo": t.getView().getModel("idpdata").getData().IdpNo,
		    			"Mangname":t.getView().getModel("idpdata").getData().Mangname,
		    			"MangComm": t.getView().getModel("idpdata").getData().MangComm,
		    			"MangMrComm": t.getView().getModel("idpdata").getData().MangMrComm,
		    			"Mangapprej": t.getView().getModel("idpdata").getData().Mangapprej,
		    			"Mangmrapprej": t.getView().getModel("idpdata").getData().Mangmrapprej,
		    			"Message": t.getView().getModel("idpdata").getData().Message,
		    			"NextCarrer": t.getView().getModel("idpdata").getData().NextCarrer,
		    			"OpenMg": t.getView().getModel("idpdata").getData().OpenMg,
		    			"Pernr": t.getView().getModel("idpdata").getData().Pernr,
		    			"SavSub": t.getView().getModel("idpdata").getData().SavSub,
		    			"ShortTerm": t.getView().getModel("idpdata").getData().ShortTerm,
		    			"StartDate": t.getView().getModel("idpdata").getData().StartDate,
		    			"Status": "",
		    			"Apprej":"R",
		    			"ZHR_S_IDP_ATTACHSet": nul,
		    			"ZHR_T_IDP_AODSet": aodtable,
		    			"ZHR_T_IDP_APP_STSet": nul,
		    			"ZHR_T_IDP_STBLSet":stbtable
		    		}
		    		 var Modelapprove=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZHR_OD_IDP_APPROVAL_SRV/");
		    		Modelapprove.create("/ZHR_T_IDPSet",Rejectdata,{
		    			success:function(odata,response){
		    				var idpno=odata.IdpNo;
		    				var arr=[];
		    				var obj={};
		    				var nul;
		    				sap.m.MessageBox.error("IDP.No: '"+idpno+"' Rejected", {
		    				    title: "error",                                    // default
		    				    onClose: null,                                       // default
		    				    styleClass: "",                                      // default
		    				    actions: sap.m.MessageBox.Action.OK,                 // default
		    				    emphasizedAction: sap.m.MessageBox.Action.OK,        // default
		    				    initialFocus: null,                                  // default
		    				    textDirection: sap.ui.core.TextDirection.Inherit ,
		    				    onClose:function(){
		    				    if(oAction==="OK"){
		    				    
		    				    
		    				    	
		    						var oRouter=t.getOwnerComponent().getRouter();
		    						oRouter.navTo("idpdetails");
		    				    }
		    				    }
		    				});
		    				
		    			},
		    			error:function(error){
							var message=error;
							
								var msg=$(error.response.body).find('message').first().text();
								MessageBox.error(msg);
						}
		    		});
		    		
		    	}
		    	    }
		    	
		    }
		   
		});
		
	}


		/**
		 * Similar to onAfterRendering, but t hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Z_IDP_Development.Z_IDP_Development.view.idpform
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * t hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Z_IDP_Development.Z_IDP_Development.view.idpform
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use t one to free resources and finalize activities.
		 * @memberOf Z_IDP_Development.Z_IDP_Development.view.idpform
		 */
		//	onExit: function() {
		//
		//	}

	});

});