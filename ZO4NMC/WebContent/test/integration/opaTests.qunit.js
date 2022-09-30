/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZO4NMCC/ZO4NMCC/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});