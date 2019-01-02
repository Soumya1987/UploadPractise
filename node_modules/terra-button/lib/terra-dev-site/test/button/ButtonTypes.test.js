'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spacingStyle = { padding: '20px' };

var ButtonWithTypeButton = function ButtonWithTypeButton() {
  return _react2.default.createElement(_Button2.default, { id: 'buttonWithTypeButton', text: 'Button Type is Default', type: 'button' });
};
var ButtonWithTypeReset = function ButtonWithTypeReset() {
  return _react2.default.createElement(_Button2.default, { id: 'buttonWithTypeReset', text: 'Button Type is Reset', type: 'reset' });
};
var ButtonWithTypeSubmit = function ButtonWithTypeSubmit() {
  return _react2.default.createElement(_Button2.default, { id: 'buttonWithTypeSubmit', text: 'Button Type is Submit', type: 'submit' });
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(ButtonWithTypeButton, null),
    _react2.default.createElement('div', { style: spacingStyle }),
    _react2.default.createElement(ButtonWithTypeReset, null),
    _react2.default.createElement('div', { style: spacingStyle }),
    _react2.default.createElement(ButtonWithTypeSubmit, null)
  );
};