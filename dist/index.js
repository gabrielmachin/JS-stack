"use strict";

var _dog = _interopRequireDefault(require("./dog.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
var toby = new _dog["default"]('Toby');
console.log(toby.bark());