'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconSquareSymbol = require('terra-icon/lib/icon/IconSquareSymbol');

var _IconSquareSymbol2 = _interopRequireDefault(_IconSquareSymbol);

var _Button = require('../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spacingStyle = { padding: '20px' };

var IconNeutralButton = function IconNeutralButton() {
  return _react2.default.createElement(_Button2.default, { id: 'iconNeutralButton', text: 'Button with Icon', icon: _react2.default.createElement(_IconSquareSymbol2.default, null) });
};
var IconOnlyButton = function IconOnlyButton() {
  return _react2.default.createElement(_Button2.default, { id: 'iconOnlyButton', text: 'iconOnlyButton', isIconOnly: true, icon: _react2.default.createElement(_IconSquareSymbol2.default, null) });
};
var IconReversedButton = function IconReversedButton() {
  return _react2.default.createElement(_Button2.default, { id: 'iconReversedButton', text: 'Button with Icon and reversed', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), isReversed: true });
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(IconNeutralButton, null),
    _react2.default.createElement('div', { style: spacingStyle }),
    _react2.default.createElement(IconOnlyButton, null),
    _react2.default.createElement('div', { style: spacingStyle }),
    _react2.default.createElement(IconReversedButton, null)
  );
};