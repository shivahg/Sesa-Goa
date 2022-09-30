sap.ui.define([
	"sap/ui/core/mvc/Controller",
	 "sap/m/MessageBox"
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("ZO4NMCC.ZO4NMCC.controller.ncreation", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZO4NMCC.ZO4NMCC.view.ncreation
		 */
		onInit: function () {

		},
		onsuggest_nn:function(evt){
			 var val=evt.getSource().getValue().toUpperCase();
			 this.getView().byId("nn").setValue(val);
		},
		onsuggest_vn:function(evt){
			var t=this;
			t.val = evt.getSource().getValue().toUpperCase();
			t.getView().byId("cr").setValue(null);
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/OIGVSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.vn=evt.results[i].Vehicle;
				obj.cr=evt.results[i].Carrier;
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"vndata");
			}
		});
			
			var model1=t.getView().getModel("vndata");
			var modeldata=model1.getData().length;
			var val;
			for(var i=0;i<modeldata;i++){
				var vehicleno=model1.getData()[i].vn;
				var cr=model1.getData()[i].cr;
			if(t.val===vehicleno){
				
				t.getView().byId("cr").setValue(cr);
			
				
				}
			}
			
		},
		
		onsuggest_dn:function(evt){
			var t=this;
			var cn=t.getView().byId("cn").setValue(null);
			t.getView().byId("vna").setValue(null);
			t.val = evt.getSource().getValue().toUpperCase();
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/VBAKSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.dn=evt.results[i].Vbeln;
				obj.ky=evt.results[i].Kunnr;
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"dndata");
			}
		});
			
			var dn=t.getView().byId("dn");
			var cn=t.getView().byId("cn");
			var mod=t.getView().getModel("dndata");
			var mode=t.getView().getModel("dndata").getData().length;
		
			
			for(var i=0;i<mode;i++){
				var val11=mod.oData[i].dn;
				var val1=mod.oData[i].ky;
				if(t.val===val11){
					
					dn.setValue(val11);
					
			
			////////////////////////////////////
			var cn=t.getView().byId("cn");
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/KNA1Set?$filter=Kunnr eq '"+val1+"'",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			var ky;
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				
				ky=evt.results[i].Name1;
				cn.setValue(ky).setEditable(false);
				
			}
			
			}
		});
				}
			}
			var oModel1=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel1.read("/OIGVTSet(Vehicle='"+t.val+"')",{
				
				success:function(evt){
					var h;
					h=evt.VehText;
					t.getView().byId("vna").setValue(h).setEditable(false);
				}
				
			});
			
		} ,
		onsuggest_in:function(evt){
			var t=this;
			t.val = evt.getSource().getValue().toUpperCase();
			
			var dn=t.getView().byId("dn").getValue();
				var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
				oModel.read("/VBAPSet?$filter=Vbeln eq '"+dn+"'",{
					success:function(evt){
				
					var arr=[];
					var obj={};
				
				var len=evt.results.length;
				for(var i=0;i<len;i++){
					obj.in=evt.results[i].Posnr;
					obj.mc=evt.results[i].Matnr;
					arr.push(obj);
					obj={};
				}
				var model1=new sap.ui.model.json.JSONModel();
				model1.setData(arr);
				t.getView().setModel(model1,"indata");
				}
				
			});
				 var in1=t.getView().byId("in1");
		           var mc=t.getView().byId("mc");
					var mod=t.getView().getModel("indata");
					var mode=t.getView().getModel("indata").getData().length;
				
					
					for(var i=0;i<mode;i++){
						var val11=mod.oData[i].in;
						var val1=mod.oData[i].mc;
						if(t.val===val11){
							
							in1.setValue(val11);
							mc.setValue(val1).setEditable(false);
						}
					}
		},
		onsuggest_bun:function(evt){
			var t=this;
			t.val = evt.getSource().getValue().toUpperCase();
			
			t.getView().byId("bun").setValue(t.val);
			
		},
		dn:function(evt){
			var t=this;
			var cn=t.getView().byId("cn");
			t.getView().byId("cn").setValue(null);
		
			t.getView().byId("vna").setValue(null);
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/VBAKSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.dn=evt.results[i].Vbeln;
				obj.ky=evt.results[i].Kunnr;
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"dndata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'SALES DOCUMENT NUMBER ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("dn", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'dndata>/',
							template: new sap.m.StandardListItem({
								title: "{dndata>dn}",
								
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							var dn=t.getView().byId("dn");
							var cn=t.getView().byId("cn");
							var mod=t.getView().getModel("dndata");
							var mode=t.getView().getModel("dndata").getData().length;
						
							
							for(var i=0;i<mode;i++){
								var val11=mod.oData[i].dn;
								var val1=mod.oData[i].ky;
								if(value===val11){
									
									dn.setValue(val11);
									
							
							////////////////////////////////////
							
							
							var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
							oModel.read("/KNA1Set?$filter=Kunnr eq '"+val1+"'",{
								success:function(evt){
							
								var arr=[];
								var obj={};
							var ky;
							var len=evt.results.length;
							for(var i=0;i<len;i++){
								
								ky=evt.results[i].Name1;
								cn.setValue(ky).setEditable(false);
								
							}
							
							}
						});
								}
							}
							var oModel1=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
							oModel1.read("/OIGVTSet(Vehicle='"+value+"')",{
								
								success:function(evt){
									var h;
									h=evt.VehText;
									t.getView().byId("vna").setValue(h).setEditable(false);
								}
								
							});
							
						
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		/*onsuggest_dn:function(evt){
			this.val = evt.getSource().getValue().toUpperCase();
			 var value = this.getView().byId("dn").setValue(this.val);
			
		},*/
		//2//////////////////////////////////////////////////////////////////////////////////
		in:function(evt){
			var t=this;
			
		var dn=t.getView().byId("dn").getValue();
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/VBAPSet?$filter=Vbeln eq '"+dn+"'",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.in=evt.results[i].Posnr;
				obj.mc=evt.results[i].Matnr;
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"indata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'ITEM NUMBER ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("in", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'indata>/',
							template: new sap.m.StandardListItem({
								title: "{indata>in}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							/*t.getView().byId("in1").setValue(value);*/
							 var in1=t.getView().byId("in1");
				           var mc=t.getView().byId("mc");
							var mod=t.getView().getModel("indata");
							var mode=t.getView().getModel("indata").getData().length;
						
							
							for(var i=0;i<mode;i++){
								var val11=mod.oData[i].in;
								var val1=mod.oData[i].mc;
								if(value===val11){
									
									in1.setValue(val11);
									mc.setValue(val1).setEditable(false);
								}
							}
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		/*onsuggest_por:function(evt){
			this.val = evt.getSource().getValue().toUpperCase();
			 var value = this.getView().byId("por").setValue(this.val);
			
		},*/
		//3////////////////////////////////////////////////////////////////////
		
		bun:function(evt){
			var t=this;
			
		
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/ZMVL_TVM_HDSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.bun=evt.results[i].ZmTv;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"bundata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'BARGE UNLOADING EQUIPMENT ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("bun", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'bundata>/',
							template: new sap.m.StandardListItem({
								title: "{bundata>bun}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("bun").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		onsuggest_bun:function(evt){
			this.val = evt.getSource().getValue().toUpperCase();
			 var value = this.getView().byId("bun").setValue(this.val);
			
		},
		 
		vn:function(evt){
			var t=this;
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/OIGVSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.vn=evt.results[i].Vehicle;
				obj.cr=evt.results[i].Carrier;
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"vndata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'VEHICLE NUMBER ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("vn", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'vndata>/',
							template: new sap.m.StandardListItem({
								title: "{vndata>vn}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("vn").setValue(value);
							var model1=t.getView().getModel("vndata");
							var modeldata=model1.getData().length;
							var val;
							for(var i=0;i<modeldata;i++){
								var vehicleno=model1.getData()[i].vn;
								var cr=model1.getData()[i].cr;
							if(value===vehicleno){
								
								t.getView().byId("cr").setValue(cr);
							
								
								}
							}
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		//////load/////
		lsl:function(){
			var t=this;
			var lpp=t.getView().byId("lpp").getValue();
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/T001LSet?$filter=Lgort eq '"+lpp+"'",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.lsl=evt.results[i].Lgort;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"lsldata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'LOCATION PARTNER STORAGE LOCATION ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("lsl", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'lsldata>/',
							template: new sap.m.StandardListItem({
								title: "{lsldata>lsl}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("lsl").setValue(value);
							
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		
		lpp:function(){
	var t=this;
			
			var sl=t.getView().byId("li").getValue();
			for(var i=1;i<sl.length;i++){
				var d="-";
				if(d == sl[i]){
					var i=i+1;
					//for(var j=i;j<d.length;j++){
			sl=sl.slice(i);
					}
				//}
			}
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/T001WSet?$filter=Werks eq '"+sl+"'",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.lpp=evt.results[i].Werks;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"lppdata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'LOCATION PARTNER PlANT ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("lpp", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'lppdata>/',
							template: new sap.m.StandardListItem({
								title: "{lppdata>lpp}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("lpp").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		
		li:function(){
var t=this;
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/OIJLOCSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.li=evt.results[i].Locid;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"lidata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'LOCATION ID ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("li", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'lidata>/',
							template: new sap.m.StandardListItem({
								title: "{lidata>li}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("li").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		
		/*dm:function(){
var t=this;

var in1=t.getView().byId("in1").getValue();
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/MAKTSet?$filter=Matnr eq '"+in1+"'",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.dm=evt.results[i].Matnr;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"dmdata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'DEMAND METERIAL ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("dm", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'dmdata>/',
							template: new sap.m.StandardListItem({
								title: "{dmdata>dm}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("dm").setValue(value);
							t.getView().byId("dm1").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
			
		},*/
		
		///////////////////////desti///////////////////////////
		
		
	
		lsl1:function(){
			var t=this;
			var lpp1=t.getView().byId("lpp1").getValue();
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/T001LSet?$filter=Lgort eq '"+lpp1+"'",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.lsl=evt.results[i].Lgort;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"lsldata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'LOCATION PARTNER STORAGE LOCATION ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("lsl", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'lsldata>/',
							template: new sap.m.StandardListItem({
								title: "{lsldata>lsl}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("lsl1").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		
		lpp1:function(){
var t=this;
			
			var sl=t.getView().byId("li1").getValue();
			for(var i=1;i<sl.length;i++){
				var d="-";
				if(d == sl[i]){
					var i=i+1;
					//for(var j=i;j<d.length;j++){
			sl=sl.slice(i);
					}
				//}
			}
			
			var oModel1=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel1.read("/T001WSet?$filter=Werks eq '"+sl+"'",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.lpp=evt.results[i].Werks;
				
				arr.push(obj);
				obj={};
			}
			var model2=new sap.ui.model.json.JSONModel();
			model2.setData(arr);
			t.getView().setModel(model2,"lpp1data");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'LOCATION PARTNER PlANT ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("lpp", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'lpp1data>/',
							template: new sap.m.StandardListItem({
								title: "{lpp1data>lpp}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("lpp1").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		
		li1:function(){
var t=this;
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/OIJLOCSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.li=evt.results[i].Locid;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"lidata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'LOCATION ID ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("li", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'lidata>/',
							template: new sap.m.StandardListItem({
								title: "{lidata>li}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("li1").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
		
		/*dm1:function(){
var t=this;
			
			var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV/");
			oModel.read("/MAKTSet",{
				success:function(evt){
			
				var arr=[];
				var obj={};
			
			var len=evt.results.length;
			for(var i=0;i<len;i++){
				obj.dm=evt.results[i].Matnr;
				
				arr.push(obj);
				obj={};
			}
			var model1=new sap.ui.model.json.JSONModel();
			model1.setData(arr);
			t.getView().setModel(model1,"dmdata");
			}
		});
			var t = this;
		
			var p = new sap.m.Dialog({
				title: 'DEMAND METERIAL ',
				content: [
					new sap.m.SearchField({
						liveChange:function(evt){
								var filt=[];
	var a=evt.mParameters.newValue;
	//retrive list by using id
	
	//binding the values
	var binding=t.l.getBinding("items");
	if(a&&a.length>0){
	var filter=new sap.ui.model.Filter("dm", sap.ui.model.FilterOperator.Contains, a);
	filt.push(filter);
	}

	binding.filter(filt);

						}

					}),
					
					t.l=new sap.m.List({
						growing:true,
						items: {
							path: 'dmdata>/',
							template: new sap.m.StandardListItem({
								title: "{dmdata>dm}",
								//description:"{pgdata>pgd}",
								// info:"Desc",
								type: "Active"
							}),

						},
						itemPress: function (oevt) {
							var value = oevt.getParameter("listItem").getProperty("title");
							t.getView().byId("dm1").setValue(value);
						
							p.close();
							
						}
					})
				],
				buttons: [
					new sap.m.Button({
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
			
		},*/
		
		onsuggest_ts:function(evt){
			var t=this;
			var val = evt.getSource().getValue();
			  t.getView().byId("ts1").setValue(val);
			
		},
		onsuggest_dm:function(evt){
			var t=this;
			var val = evt.getSource().getValue();
			  t.getView().byId("dm1").setValue(val);
			  t.getView().byId("dm1").setEditable(false);
			
		},
	/*	onsuggest_lsl:function(evt){
			var t=this;
			var val = evt.getSource().getValue();
			  t.getView().byId("lsl1").setValue(val);
			
		},*/
		onsuggest_sq:function(evt){
			var t=this;
			var val = evt.getSource().getValue();
			  var h=t.getView().byId("sq1").setValue(val);
			 
			
		},
		
		sdate:function(evt){
			var t=this;
			var th=t.getView().byId("sd1");
			var d=evt.mParameters.value;
			 
           	th.setText(d);
					
            	
				
			
		},
		/////////////////////////////////////////////////////////////////////
		save:function(){
			 var vn=this.getView().byId("vn");
				var nn=this.getView().byId("nn");
				var cr=this.getView().byId("cr");
				var dn=this.getView().byId("dn");
				var inn=this.getView().byId("in1");
				var bun=this.getView().byId("bun");
				
				var cn=this.getView().byId("cn");
				var vna=this.getView().byId("vna");
				var mc=this.getView().byId("mc");
				////////////source/////////////////
				var ts=this.getView().byId("ts");
				var lpp=this.getView().byId("lpp");
				var lsl=this.getView().byId("lsl");
				var li=this.getView().byId("li");
				/*var dm=this.getView().byId("dm");*/
				var sd=this.getView().byId("sd");
				var sq=this.getView().byId("sq");
			/////////////////desti////////////////////////
				var ts1=this.getView().byId("ts1");
				var lpp1=this.getView().byId("lpp1");
				var lsl1=this.getView().byId("lsl1");
				var li1=this.getView().byId("li1");
				var dm1=this.getView().byId("dm1");
				var sd1=this.getView().byId("sd1");
				var sq1=this.getView().byId("sq1");
				
				
				var d1=sd.getDateValue();
				if(d1!==null){
					var oTemp_date=new Date(d1.setHours("00","00","00","00"));
					 var datee=new Date(oTemp_date.getTime() +  oTemp_date.getTimezoneOffset() * (-60000));
					}
					 //////////////////////////////////////////////////////////////////
					 if((bun.getValue==="")&&(inn.getValue()==="")&&(dn.getValue==="")&&(nn.getValue()==="")&&(vn.getTextValue()==="")&&(ts.getText()==="")&&(lpp.getValue()==="")&&(lsl.getValue()==="")&&(li.getValue()==="")&&(dm.getValue()==="")&&(sd.getDateValue()==="")&&(sq.getValue()==="")&&(ts1.getText()==="")&&(lpp1.getValue()==="")&&(lsl1.getValue()==="")&&(li1.getValue()==="")&&(dm1.getValue()==="")&&(sd1.getText()==="")&&(sq1.getValue()==="")){
						 MessageBox.warning("Please fill all the fields");
					 }
					 else if((vn.getValue()==="")){
						 MessageBox.warning("Please fill Vehicle Number");
					 }
					 else if((nn.getValue()==="")){
						 MessageBox.warning("Please fill  Nomination Number");
					 }
					 /*else if((cr.getValue()==="")){
						 MessageBox.warning("Please fill  Carrier");
					 }*/
					 else if((dn.getValue()==="")){
						 MessageBox.warning("Please fill  Sales Document Number");
					 }
					 else if((cn.getValue()==="")){
						 MessageBox.warning("Please fill  Customer Number");
					 }
					 else if((vna.getValue()==="")){
						 MessageBox.warning("Please fill  Vessel Name");
					 }
					 
					 else if((mc.getValue()==="")){
						 MessageBox.warning("Please fill  Material Code");
					 }
					 else if((bun.getValue()==="")){
						 MessageBox.warning("Please fill  Barge Unloading Equipment");
					 }
					 
					 
					 
					 else if((ts.getText()==="")){
						 MessageBox.warning("Please fill Source Transport System");
						 
					 }
					 
					 else if((lpp.getValue()==="")){
						 MessageBox.warning("Please fill  Source Location Partner Plant");
					 }
					 
					 else if((lsl.getValue()==="")){
						 MessageBox.warning("Please fill  Source Location Partner Storage Location");
					 }
					
					
					 else if((li.getValue()==="")){
						 MessageBox.warning("Please fill  Source Location ID");
					 }
					 
					/* else if((dm.getValue()==="")){
						 MessageBox.error("Please fill  Source Demand Meterial");
					 }
					 else if((dm1.getValue()==="")){
						 MessageBox.error("Please fill  Destination Demand Meterial");
					 }*/
					
					 else if((sd.getDateValue()===null)){
						 MessageBox.warning("Please fill  Schedule Date");
					 }
					 
					 else if((sq.getValue()==="")){
						 MessageBox.warning("Please fill  Source Schedule Quantity");
					 }
					 
					 
					 ///////////////////////////////////////////
					 else if((ts1.getText()==="")){
						 MessageBox.warning("Please fill  Destination Transport System");
					 }
					 else if((lpp1.getValue()==="")){
						 MessageBox.warning("Please fill  Destination Location Partner Plant");
					 }
					 else if((lsl1.getValue()==="")){
						 MessageBox.warning("Please fill  Destination Location Partner Storage Location");
					 }
					 else if((li1.getValue()==="")){
						 MessageBox.warning("Please fill  Destination Location ID");
					 }
					 else if((sd1.getText()==="")){
						 MessageBox.warning("Please fill   Destination Schedule Date");
					 }
					 else if((sq1.getValue()==="")){
						 MessageBox.warning("Please fill  Destination Schedule Quantity");
					 }
				
					 else {
				var o4nmdata={
						Nominationkey:"",
						Nominationno:nn.getValue(),
						Vehicleid:vn.getValue(),
						Zsvbeln:dn.getValue(),
						Zsposnr:inn.getValue(),
						ZmTv:bun.getValue(),
						LocationplantO:lpp.getValue(),
						LocationstoragelocationO:lsl.getValue(),
						LocationplantD:lpp1.getValue(),
						LocationstoragelocationD :lsl1.getValue(),
						
						Vehiclereferenceid:vna.getValue(),
					
						Demandmaterial:mc.getValue(),
						Nominatedquantity :parseFloat(sq.getValue()),
						Scheduleddate:datee,
						Transportationplanningpoint:"",
					
						Zzsdreasontxt:"",
						LocationidO:li.getValue(),
						LocationidD:li1.getValue(),
						Transportsystem:ts.getText(),
						Zvehicle:"",
						TripNo:"",
						OijUniti:"",
						Indicator:"",
						LogSheetTripNo:""
						
				};
				var t1=this;
				
				
				var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV");
				oModel.create("/ZBMS_NOMI_CREATE01Set",o4nmdata,{
					success:function(oData){
						var arr=[];
						var obj={};
						var message=oData.Nominationkey;
						MessageBox.success("Nomination Succesfully Saved  '"+message+"' ");
						
						t1.vn=t1.getView().byId("vn");
						t1.nn=t1.getView().byId("nn");
						t1.cr=t1.getView().byId("cr");
						t1.dn=t1.getView().byId("dn");
						t1.cn=t1.getView().byId("cn");
						t1.vna=t1.getView().byId("vna");
						t1.in1=t1.getView().byId("in1");
						t1.mc=t1.getView().byId("mc");
						t1.bun=t1.getView().byId("bun");
						/////////////////////////////////////////
						t1.lpp=t1.getView().byId("lpp");
						t1.lsl=t1.getView().byId("lsl");
						t1.li=t1.getView().byId("li");
						t1.sd=t1.getView().byId("sd");
						t1.sq=t1.getView().byId("sq");
						//////////////////////////////////////////////
						t1.lpp1=t1.getView().byId("lpp1");
						t1.lsl1=t1.getView().byId("lsl1");
						t1.li1=t1.getView().byId("li1");
						t1.sd1=t1.getView().byId("sd1");
						t1.sq1=t1.getView().byId("sq1");
						
						
						/////////////////////////////////////////
						obj.vn=t1.vn;
						obj.nn=t1.nn;
						obj.cr=t1.cr;
						obj.dn=t1.dn;
						obj.cn=t1.cn;
						obj.vna=t1.vna;
						obj.in1=t1.in1;
						obj.mc=t1.mc;
						obj.bun=t1.bun;
						obj.lpp=t1.lpp;
						obj.lsl=t1.lsl;
						
						obj.li=t1.li;
						obj.sd=t1.sd;
						obj.sq=t1.sq;
						obj.lpp1=t1.lpp1;
						obj.lsl1=t1.lsl1;
						obj.li1=t1.li1;
						obj.sd1=t1.sd1;
						obj.sq1=t1.sq1;
						

						
						arr.push(obj);
						obj={};
			var data=new sap.ui.model.json.JSONModel();
			data.setData(arr);
			t1.getView().setModel(data);

                     /////////////////////////////////////
			            t1.vn.setValue(null);
						t1.nn.setValue(null);
						t1.cr.setValue(null);
						t1.dn.setValue(null);
						t1.cn.setValue(null);
						t1.vna.setValue(null);
						t1.in1.setValue(null);
						t1.mc.setValue(null);
						t1.bun.setValue(null);
						t1.lpp.setValue(null);
						t1.lsl.setValue(null);
						t1.li.setValue(null);
						t1.sd.setValue(null);
						t1.sq.setValue(null);
						t1.lpp1.setValue(null);
						t1.lsl1.setValue(null);
						t1.li1.setValue(null);
						t1.sd1.setText(null);
						t1.sq1.setValue(null);
						
						data.refresh(true);
						
						
					},
					error:function(error){
						var message=error;
						/*	MessageBox.show("'"+message+"'",{
				        		icon:MessageBox.Icon.WARNING,
				        		title:"",
				        		actions:[MessageBox.Action.OK],
				        		onClose:function(oAction){
				        			if(oAction===MessageBox.Action.OK){
				        			
				        			}
				        		}.bind(this)
				        	});*/
							var msg=$(error.response.body).find('message').first().text();
							MessageBox.error(msg);
					}
					
				});
					 }
		},
		
		///////////////////////////////////////////////////////
		
		validate:function(evt){
			 var vn=this.getView().byId("vn");
				var nn=this.getView().byId("nn");
				var cr=this.getView().byId("cr");
				var dn=this.getView().byId("dn");
				var inn=this.getView().byId("in1");
				var bun=this.getView().byId("bun");
				var cn=this.getView().byId("cn");
				var vna=this.getView().byId("vna");
				var mc=this.getView().byId("mc");
				////////////source/////////////////
				var ts=this.getView().byId("ts");
				var lpp=this.getView().byId("lpp");
				var lsl=this.getView().byId("lsl");
				var li=this.getView().byId("li");
				var dm=this.getView().byId("dm");
				var sd=this.getView().byId("sd");
				var sq=this.getView().byId("sq");
			/////////////////desti////////////////////////
				var ts1=this.getView().byId("ts1");
				var lpp1=this.getView().byId("lpp1");
				var lsl1=this.getView().byId("lsl1");
				var li1=this.getView().byId("li1");
				var dm1=this.getView().byId("dm1");
				var sd1=this.getView().byId("sd1");
				var sq1=this.getView().byId("sq1");
				
				
				var d1=sd.getDateValue();
				if(d1!==null){
					var oTemp_date=new Date(d1.setHours("00","00","00","00"));
					 var datee=new Date(oTemp_date.getTime() +  oTemp_date.getTimezoneOffset() * (-60000));
					}
					 
				if((bun.getValue()==="")&&(inn.getValue()==="")&&(dn.getValue()==="")&&(nn.getValue()==="")&&(vn.getValue()==="")&&(ts.getText()==="")&&(lpp.getValue()==="")&&(lsl.getValue()==="")&&(li.getValue()==="")&&(dm.getValue()==="")&&(sd.getDateValue()==="")&&(sq.getValue()==="")&&(ts1.getText()==="")&&(lpp1.getValue()==="")&&(lsl1.getValue()==="")&&(li1.getValue()==="")&&(dm1.getValue()==="")&&(sd1.getText()==="")&&(sq1.getValue()==="")){
					 MessageBox.warning("Please fill all the fields");
				 }
				 else if((vn.getValue()==="")){
					 MessageBox.warning("Please fill Vehicle Number");
				 }
				 else if((nn.getValue()==="")){
					 MessageBox.warning("Please fill  Nomination Number");
				 }
				 /*else if((cr.getValue()==="")){
					 MessageBox.warning("Please fill  Carrier");
				 }*/
				 else if((dn.getValue()==="")){
					 MessageBox.warning("Please fill  Sales Document Number");
				 }
				 else if((cn.getValue()==="")){
					 MessageBox.warning("Please fill  Customer Number");
				 }
				 else if((vna.getValue()==="")){
					 MessageBox.warning("Please fill  Vessel Name");
				 }
				 
				 else if((mc.getValue()==="")){
					 MessageBox.warning("Please fill  Material Code");
				 }
				 else if((bun.getValue()==="")){
					 MessageBox.warning("Please fill  Barge Unloading Equipment");
				 }
				 
				 
				 
				 else if((ts.getText()==="")){
					 MessageBox.warning("Please fill Source Transport System");
					 
				 }
				 
				 else if((lpp.getValue()==="")){
					 MessageBox.warning("Please fill  Source Location Partner Plant");
				 }
				 
				 else if((lsl.getValue()==="")){
					 MessageBox.warning("Please fill  Source Location Partner Storage Location");
				 }
				
				
				 else if((li.getValue()==="")){
					 MessageBox.warning("Please fill  Source Location ID");
				 }
				 
				/* else if((dm.getValue()==="")){
					 MessageBox.error("Please fill  Source Demand Meterial");
				 }
				 else if((dm1.getValue()==="")){
					 MessageBox.error("Please fill  Destination Demand Meterial");
				 }*/
				
				 else if((sd.getDateValue()===null)){
					 MessageBox.warning("Please fill  Schedule Date");
				 }
				 
				 else if((sq.getValue()==="")){
					 MessageBox.warning("Please fill  Source Schedule Quantity");
				 }
				 
				 
				 ///////////////////////////////////////////
				 else if((ts1.getText()==="")){
					 MessageBox.warning("Please fill  Destination Transport System");
				 }
				 else if((lpp1.getValue()==="")){
					 MessageBox.warning("Please fill  Destination Location Partner Plant");
				 }
				 else if((lsl1.getValue()==="")){
					 MessageBox.warning("Please fill  Destination Location Partner Storage Location");
				 }
				 else if((li1.getValue()==="")){
					 MessageBox.warning("Please fill  Destination Location ID");
				 }
				 else if((sd1.getText()==="")){
					 MessageBox.warning("Please fill   Destination Schedule Date");
				 }
				 else if((sq1.getValue()==="")){
					 MessageBox.warning("Please fill  Destination Schedule Quantity");
				 }
				
				 else {
				var o4nmdata={
						Nominationkey:"",
						Nominationno:nn.getValue(),
						Vehicleid:vn.getValue(),
						Zsvbeln:dn.getValue(),
						Zsposnr:inn.getValue(),
						ZmTv:bun.getValue(),
						LocationplantO:lpp.getValue(),
						LocationstoragelocationO:lsl.getValue(),
						LocationplantD:lpp1.getValue(),
						LocationstoragelocationD :lsl1.getValue(),
						
						Vehiclereferenceid:vna.getValue(),
					
						Demandmaterial:mc.getValue(),
						Nominatedquantity :parseFloat(sq.getValue()),
						Scheduleddate:datee,
						Transportationplanningpoint:"",
					
						Zzsdreasontxt:"",
						LocationidO:li.getValue(),
						LocationidD:li1.getValue(),
						Transportsystem:ts.getText(),
						Zvehicle:"",
						TripNo:"",
						OijUniti:"",
						Indicator:"V",
						LogSheetTripNo:""
						
				};
				var t1=this;
				
				var V;
				var oModel=new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZOIL_NOMINATION_CREATION01_SRV");
				oModel.create("/ZBMS_NOMI_CREATE01Set",o4nmdata,{
					success:function(oData){
						var message=oData.Nominationkey;
						MessageBox.information("Nomination Succesfully Checked-No Error Occurred");
						
					},
					error:function(error){
						var message=error;
						/*	MessageBox.show("'"+message+"'",{
				        		icon:MessageBox.Icon.WARNING,
				        		title:"",
				        		actions:[MessageBox.Action.OK],
				        		onClose:function(oAction){
				        			if(oAction===MessageBox.Action.OK){
				        			
				        			}
				        		}.bind(this)
				        	});*/
							var msg=$(error.response.body).find('message').first().text();
							MessageBox.error(msg);
					}
					
				});
		}
		}
	});

});