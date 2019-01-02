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

var ActionButton = function ActionButton() {
  return _react2.default.createElement(
    'div',
    { id: 'action', style: { padding: '5px' } },
    _react2.default.createElement(_Button2.default, { id: 'actionButton', text: 'Action', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'action' }),
    _react2.default.createElement(_Button2.default, { id: 'actionButtonDisabled', text: 'Action Disabled', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'action', isDisabled: true })
  );
};

exports.default = ActionButton;