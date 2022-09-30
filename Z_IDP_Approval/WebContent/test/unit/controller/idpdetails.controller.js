/*global QUnit*/

sap.ui.define([
	"Z_IDP_Development/Z_IDP_Development/controller/idpdetails.controller"
], function (Controller) {
	"use strict";

	QUnit.module("idpdetails Controller");

	QUnit.test("I should test the idpdetails controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});