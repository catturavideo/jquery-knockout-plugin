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
	$.fn.koBind = function(bindings) {
		return this.each(function() {
			let bindingValues = [];
			for (let key in bindings) {
				let value = bindings[key];
				if (typeof value !== "string") {
					this._koBinds = this._koBinds || {};
					this._koBinds[key] = value;
					value = "$element._koBinds." + key;
				}

				bindingValues.push(`${key}: ${value}`);
			}
			this.dataset.bind =  bindingValues.join(",");
		});
	};

	$.fn.koApplyBindings = function(viewModel) {
		return this.each(function() { 
			ko.applyBindings(viewModel, this);
		});
	};

	return $;
}));
