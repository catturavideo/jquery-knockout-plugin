"use strict";

(function (factory) {
if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', 'knockout'], factory);
} else if (typeof require === 'function' && typeof module === 'object') {
	module.exports = factory;
} else {
    // Browser globals
    factory(jQuery, ko);
}
}(function ($, ko) {
	$.fn.koApplyBindings = function(viewModel) {
		return this.each(function() {
			ko.applyBindings(viewModel, this);
		});
	};

	return $;
}));
