sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Z_IDP_Development.Z_IDP_Development.controller.idpdetails", {
		onInit: function () {
	
			/*this.getView().byId("tb1").setVisible(false);
			this.getView().byId("r1").setSelected(false);*/
			
		
			
			this.getView().byId("tb1").setVisible(true);
			var t=this;
          	
			var Model=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZHR_OD_IDP_APPROVAL_SRV/");
					
					Model.read("/ZHR_T_IDPSet",{
						success:function(evt){
							var arr1=[];
							var obj1={};
							var len=evt.results.length;
						
						
						for(var i=0;i<len;i++){
							obj1.len=len;
							obj1.idpno=evt.results[i].IdpNo;
							obj1.empno=evt.results[i].Pernr;
							obj1.ename=evt.results[i].Ename;
							obj1.dept=evt.results[i].Dept;
							obj1.Status=evt.results[i].Status;
							arr1.push(obj1);
							obj1={};
						}
						var model2=new sap.ui.model.json.JSONModel();
						model2.setData(arr1);
						t.getView().setModel(model2,"idpdetails");
						var model=t.getView().getModel("idpdetails").getData();
						model.refresh(true);
						}
					
				});
					
					
			
		},
		
	
		
		df:function(evt){ 
			
			var idpno1=evt.oSource.mProperties.text;
			
			var oRouter=this.getOwnerComponent().getRouter();
			oRouter.navTo("idpform",{idpno:idpno1});
			/*this.getOwnerComponent().getTargets().display("idpform",{idpno:idpno1});*/
		},
		
		fldownload:function(evt){
			var path=evt.getSource().oPropagatedProperties.oBindingContexts.idpdetails.sPath;
			
			var IdpNo=this.getView().getModel("idpdetails").getProperty(path).idpno;
			
			var string="/ZHR_S_IDP_ATTACHSet(IdpNo='"+IdpNo+"')/$value";
			var Model5=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZHR_OD_IDP_APPROVAL_SRV/");
			Model5.read(string,{
				success:function(odata,response){
					var file=response.requestUri;
				     window.open(file);
				},
				error:function(evt){
					var message=evt.message;
					MessageBox.show("'"+message+"'",{
		        		icon:MessageBox.Icon.WARNING,
		        		title:"",
		        		actions:[MessageBox.Action.OK],
		        		onClose:function(oAction){
		        			if(oAction===MessageBox.Action.OK){
		        			
		        			}
		        		}.bind(this)
		        	});
					
				}
				
			});

		  

	   },
	   onSearch:function(oEvent){
		 /*  var t=this;
		   var tab=t.getView().byId("tb1");
			var filt=[];
			var a=evt.getSource().getValue()
		
			var input = t.getView().byId("search").setValue(a);
			//retrive list by using id
			
			//binding the values
			var binding=tab.mAggregations.items;
			if(a&&a.length>0){
			var filter=new sap.ui.model.Filter("idpno", sap.ui.model.FilterOperator.EQ, a);
			filt.push(filter);
			}

			binding.filter(filt);
		   */
		   var sQuery = oEvent.getParameter("query");
			if(oEvent.getId() == "liveChange"){
				sQuery = oEvent.getParameter("newValue");
			}
			var oFilter1=new sap.ui.model.Filter("idpno","Contains",sQuery);
			var oFilter2=new sap.ui.model.Filter("empno","Contains",sQuery);
			var oFilter3=new sap.ui.model.Filter("ename","Contains",sQuery);
			var oFilter4=new sap.ui.model.Filter("dept","Contains",sQuery);
			var oFilter5=new sap.ui.model.Filter("Status","Contains",sQuery);
			
			var aFilters=new sap.ui.model.Filter([oFilter1,oFilter2,oFilter3,oFilter4,oFilter5]);
			var oTable=this.byId("tb1");
			var oBinding=oTable.getBinding("items");
			if(oBinding){
				oBinding.filter([aFilters]);
			}
	   }
		
	});
});