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
var text = 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long';

var LongTextButton = function LongTextButton() {
  return _react2.default.createElement(_Button2.default, { id: 'long-text', text: text });
};
var LongTextBlockButton = function LongTextBlockButton() {
  return _react2.default.createElement(_Button2.default, { id: 'long-text-block', text: text, isBlock: true });
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(LongTextButton, null),
    _react2.default.createElement('div', { style: spacingStyle }),
    _react2.default.createElement(LongTextBlockButton, null)
  );
};