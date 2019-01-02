'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TestComponent = require('./TestComponent');

var _TestComponent2 = _interopRequireDefault(_TestComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestComponentExample = function TestComponentExample() {
  return _react2.default.createElement(_TestComponent2.default, { text: 'Hey', otherText: 'Seeya' });
};

exports.default = TestComponentExample;