'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT = undefined;

var _mobx = require('mobx');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) 2016, Pavlo Aksonov
// All rights reserved.

var DEFAULT = exports.DEFAULT = "default";

var Transition = function Transition(parent, data) {
  _classCallCheck(this, Transition);

  (0, _assert2.default)(data, "Data should be defined");
  Object.assign(this, data);
  (0, _assert2.default)(parent, "Parent should be defined for transition:" + this.event);

  this.onTransition = function (params) {
    data.ontransition && data.ontransition(params);
    // if (this.mode === 'push'){
    //   assert(data.target, "Target should be defined for push transition");
    //   parent.push({name: data.target, data:params && params.data || {}});
    // }
    // if (this.mode === 'jump'){
    //   assert(data.target, "Target should be defined for push transition");
    //   parent.jump({name: data.target, data:params && params.data || {}});
    // }
  };
};

exports.default = Transition;