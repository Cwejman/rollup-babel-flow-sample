(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sample = factory());
}(this, (function () { 'use strict';

	var mul = function mul(x, y) {
	  return x * y;
	};
	var div = function div(x, y) {
	  return x / y;
	};
	 // ?

	var math = /*#__PURE__*/Object.freeze({
		mul: mul,
		div: div
	});

	// s

	return math;

})));
