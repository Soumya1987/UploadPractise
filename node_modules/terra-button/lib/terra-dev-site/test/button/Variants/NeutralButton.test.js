'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NeutralButton = function NeutralButton() {
  return _react2.default.createElement(
    'div',
    { id: 'neutral', style: { padding: '5px' } },
    _react2.default.createElement(_Button2.default, { id: 'neutralButton', text: 'Neutral', variant: 'neutral' }),
    _react2.default.createElement(_Button2.default, { id: 'neutralButtonDisabled', text: 'Neutral Disabled', variant: 'neutral', isDisabled: true })
  );
};

exports.default = NeutralButton;