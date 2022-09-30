/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Z_IDP_Development/Z_IDP_Development/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});