sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/m/List",
		"sap/m/Input",
	"sap/m/Label",
	"sap/ui/layout/form/SimpleForm",
		"sap/m/Button",
		 "sap/m/VBox",
		 "sap/m/MessageBox",
		 "sap/m/MessageToast",
		 "sap/m/Column"
], function (Controller,Dialog,List,Input,Label,SimpleForm,Button,VBox,MessageBox,MessageToast,Column) {
	"use strict";

	return Controller.extend("lta1.ZLTA.controller.View1", {
		onInit: function () {
           var t=this;
		this.E_Id="00000019";
		var model = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION_SRV");
		t.Cr_array=[];
		t.objc={};
		model.read("/TOIJNOMTYPSet", {
		
			success: function (oData) {
				var rd=responsedata;
				if(rd.Ltano === "0"){
					t.objc=rd.Pernr;
					t.objc=rd.Ename;
					t.objc=rd.Dept;
					t.objc=rd.Desi;
					t.objc.company_name=rd.company_name;
					t.objc.Gjhr=rd.Gjhr;
					t.objc.Ltano=rd.Ltano;
				}
				else{
					t.display();
				}
				t.Cr_array.push(t.objc);
				var Cr_Model = new sap.ui.model.json.JSONModel();
				Cr_Model.setData(t.Cr_array);
				t.getView().setModel(Cr_Model, "lta__model");
				
			},
			error:function(data){
				var d=data;
				}
			})

		
		t.f_array=[];
		t.doc_array=[];
		},
	addrow:function(){
		var t = this;
		
							t.obj={};
			var p = new Dialog({
				title: 'Enter the family detailes',
				content: [
					new VBox({
						items:[
					
					new Label ({ text:"Name"}),
					new Input({value:"", width:"40%"}),
					new Label ({ text:"Relationship"}),
					new Input({value:"", width:"40%"}),
					new Label ({ text:"Age"}),
					new Input({value:"", width:"40%"}),
				
					],
					}),
					
				],
				buttons: [
					new Button({
						text: 'ok',

						press: function (oEvent) {
							
                      var n=oEvent.oSource.oParent.mAggregations.content[0].mAggregations.items[1].mProperties.value;
                      t.obj.name=n;
                      
                      var r=oEvent.oSource.oParent.mAggregations.content[0].mAggregations.items[3].mProperties.value;
                      t.obj.relation=r;
                      
                      var a=oEvent.oSource.oParent.mAggregations.content[0].mAggregations.items[5].mProperties.value;
						t.obj.age=a;
						t.f_array.push(t.obj);
						var model = new sap.ui.model.json.JSONModel();
			model.setData(t.f_array);
			t.getView().setModel(model, "fam_model");
							p.close();
							 
						}.bind(this)
					}),
					new Button({
						text: 'close',

						press: function (oEvent) {

							p.close();
						}.bind(this)
					})
				]
			});
			t.getView().addDependent(p);
			//}

			p.open();
	},

       
        	handleUploadComplete: function(oEvent) {
			//var sResponse = oEvent.getParameter("response");
			var sId = "uploadComplete";
			if (sId) {
				var sMsg = "Upload Success";
				} else {
					sMsg = "Upload Failed";
				}

				MessageToast.show(sMsg);
			
		},
handleDelete:function(event){
        	this.index=(event.getParameter("listItem").getBindingContextPath()).slice(1);
        	MessageBox.show("removeThisItemFromTable",{
        		icon:MessageBox.Icon.WARNING,
        		title:"confirmDeletion",
        		actions:[MessageBox.Action.OK,MessageBox.Action.CANCEL],
        		onClose:function(oAction){
        			if(oAction===MessageBox.Action.OK){
        				this.delete1(event);
        			}
        		}.bind(this)
        	});
        },
        delete:function(oEvent){
        	var mod = this.getView().byId("table").getModel("fam_model");
        	mod.getData().splice(this.index,1);
        	mod.refresh(true);
        	
        },
		handleUploadPress: function() {
			var t=this;
			var oFileUploader = this.byId("fileUploader");
			oFileUploader.upload();
			var f=oFileUploader.mProperties.value;
			var d=this.getView().byId("descId").getValue();
			t.obj={};
			t.obj.file=f;
			t.obj.desc=d;
			t.doc_array.push(t.obj);
				var Model = new sap.ui.model.json.JSONModel();
			Model.setData(t.doc_array);
			t.getView().setModel(Model, "doc_model");
		},
		handleFileDelete:function(event){
        	this.index=(event.getParameter("listItem").getBindingContextPath()).slice(1);
        	MessageBox.show("removeThisItemFromTable",{
        		icon:MessageBox.Icon.WARNING,
        		title:"confirmDeletion",
        		actions:[MessageBox.Action.OK,MessageBox.Action.CANCEL],
        		onClose:function(oAction){
        			if(oAction===MessageBox.Action.OK){
        				this.delete1(event);
        			}
        		}.bind(this)
        	});
        },
        delete1:function(oEvent){
        	var mod = this.getView().byId("table1").getModel("doc_model");
        	mod.getData().splice(this.index,1);
        	mod.refresh(true);
        	
        },
        submit:function(){
        	var C_val=this.getView().by("C_id").getText();
        	var LY_val=this.getView().by("LY_id").getText();
        	var E_val=this.getView().by("E_tid").getText();
        	var EN_val=this.getView().by("En_id").getText();
        	var d_val=this.getView().by("D_id").getText();
        	var Des_val=this.getView().by("Des_id").getText();
        	var DP_val=this.getView().by("DP1_id").getText();
        	var ND_val=this.getView().by("inp1_id").getText();
        	var MT_val=this.getView().by("inp2_id").getText();
        	var Dst_val=this.getView().by("inp3_id").getText();
        	var CT_val=this.getView().by("inp4_id").getText();
        	var AIR_val=this.getView().by("inp5_id").getText();
        	var C_val=this.getView().by("inp6_id").getText();
        	MessageToast.show("Form sumbited successfully");
        },
        // create:function(){
        // 	this.getView().byId("inp1").setValue("");
        // 		this.getView().byId("inp2").setValue("");
        // 	this.getView().byId("inp3").setValue("");
        // 	this.getView().byId("inp4").setValue("");
        // 	this.getView().byId("inp5").setValue("");
        // 	this.getView().byId("inp6").setValue("");
        	
        // 	        	this.getView().byId("DP1").setEditable(true);
        	
        // 	this.getView().byId("inp1").setEditable(true);
        // 	this.getView().byId("inp2").setEditable(true);
        // 	this.getView().byId("inp3").setEditable(true);
        // 	this.getView().byId("inp4").setEditable(true);
        // 	this.getView().byId("inp5").setEditable(true);
        // 	this.getView().byId("inp6").setEditable(true);
        // 	this.getView().byId("fileUploader").setVisible(true);
        // 		this.getView().byId("descId").setVisible(true);
        // 		this.getView().byId("FId").setVisible(true);
        // 		this.getView().byId("DId").setVisible(true);
        // 		this.getView().byId("uploadId").setVisible(true);
        // 		this.getView().byId("RId").setVisible(true);
        // },
        display:function(){
        	var L_Id=this.getView().byId("L_tid").getText();
			var model = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZHR_LTA_REQUEST_SRV");
		var t=this;
			model.read("/ZHRLTASet('"+L_Id+"')?$expand=ZHRLTA_APPROVALSSet", {
			
				success: function (responsedata) {
					var r=responsedata;
					t.ob={};
					t.f_array=[];
					t.ob.Adamt=r.Adamt;
					t.ob.Airf=r.Airf;
					t.ob.Altaa=r.Altaa;
					t.ob.Amlta=r.Amlta;
					t.ob.Ataxl=r.Ataxl;
					t.ob.Bltap=r.Bltap;
					t.ob.Ctrvl=r.Ctrvl;
					t.ob.Delu=r.Delu;
					t.ob.Dept=r.Dept;
					t.ob.Desi=r.Desi;
					t.ob.Dest=r.Dest;
					t.ob.Ename=r.Ename;
					t.ob.Gjahr=r.Gjahr;
					t.ob.Lamti=r.Lamti;
					t.ob.Lfrom=r.Lfrom;
					t.ob.Ltano=r.Ltano;
					t.ob.Lto=r.Lto;
					t.ob.Mandt=r.Mandt;
					t.ob.Ndays=r.Ndays;
					t.ob.Pernr=r.Pernr;
					t.ob.Tmod=r.Tmod;
					t.ob.company_name=r.company_name;
					t.f_array.push(t.ob);
					
					var model1 = new sap.ui.model.json.JSONModel();
					model1.setData(t.f_array);
					t.getView().setModel(model1, "lta_model");
					
				},
				error:function(data){
					var d=data;
					}
				})
			
			model.read("/ZHRLTASet('"+L_Id+"')?$expand=ZHRLTA_FAMSet", {
			
				success: function (responsedata) {
				var r=responsedata.ZHRLTA_FAMSet.results;
				t.T_array=[];
				for(var i=0;i<r.length;i++){
				t.T_array.push(r[i]);
				
				}
				var T_model = new sap.ui.model.json.JSONModel();
				T_model.setData(t.T_array);
				t.getView().setModel(T_model, "fam_model");
				},
			error:function(){
				
			}
				})
				
				model.read("/ZHRLTASet('"+L_Id+"')?$expand=ZHRLTA_ATTACHSet", {
			
				success: function (responsedata) {
				var rs=responsedata.ZHRLTA_ATTACHSet.results;
				t.At_array=[];
				for(var j=0;j<rs.length;j++){
				t.At_array.push(rs[j]);
				
				}
				var At_model = new sap.ui.model.json.JSONModel();
				At_model.setData(t.At_array);
				t.getView().setModel(At_model, "doc_model");
				},
			error:function(){
				
			}
				})
        	this.getView().byId("DP1").setEditable(false);
        	
        	this.getView().byId("inp1").setEditable(false);
        	this.getView().byId("inp2").setEditable(false);
        	this.getView().byId("inp3").setEditable(false);
        	this.getView().byId("inp4").setEditable(false);
        	this.getView().byId("inp5").setEditable(false);
        	this.getView().byId("inp6").setEditable(false);
        	this.getView().byId("fileUploader").setVisible(false);
        		this.getView().byId("descId").setVisible(false);
        		this.getView().byId("FId").setVisible(false);
        		this.getView().byId("DId").setVisible(false);
        		this.getView().byId("uploadId").setVisible(false);
        		this.getView().byId("RId").setVisible(false);
        		this.getView().byId("Edit_Id").setVisible(true);
        		
        		
        },
        edit:function(){
        	this.getView().byId("DP1").setEditable(true);
        	
        	this.getView().byId("inp1").setEditable(true);
        	this.getView().byId("inp2").setEditable(true);
        	this.getView().byId("inp3").setEditable(true);
        	this.getView().byId("inp4").setEditable(true);
        	this.getView().byId("inp5").setEditable(true);
        	this.getView().byId("inp6").setEditable(true);
        	this.getView().byId("fileUploader").setVisible(true);
        		this.getView().byId("descId").setVisible(true);
        		this.getView().byId("FId").setVisible(true);
        		this.getView().byId("DId").setVisible(true);
        		this.getView().byId("uploadId").setVisible(true);
        		this.getView().byId("RId").setVisible(true);
        }
	});
});