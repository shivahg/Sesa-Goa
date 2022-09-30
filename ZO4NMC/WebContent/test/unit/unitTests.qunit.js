/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZO4NMCC/ZO4NMCC/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});