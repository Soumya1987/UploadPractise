'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconSquareSymbol = require('terra-icon/lib/icon/IconSquareSymbol');

var _IconSquareSymbol2 = _interopRequireDefault(_IconSquareSymbol);

var _Button = require('../../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UtilityButton = function UtilityButton() {
  return _react2.default.createElement(
    'div',
    { id: 'utility', style: { padding: '5px' } },
    _react2.default.createElement(_Button2.default, { id: 'utilityButton', text: 'Utility', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'utility' }),
    _react2.default.createElement(_Button2.default, { id: 'utilityButtonDisabled', text: 'Utility Disabled', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'utility', isDisabled: true })
  );
};

exports.default = UtilityButton;