'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconEdit = require('terra-icon/lib/icon/IconEdit');

var _IconEdit2 = _interopRequireDefault(_IconEdit);

var _Button = require('terra-button/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyle = { margin: '5px' };
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var ButtonVariant = function ButtonVariant() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Button2.default, { text: 'Neutral', style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'Emphasis', variant: 'emphasis', style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'De-emphasis', variant: 'de-emphasis', style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'Action', variant: 'action', icon: _react2.default.createElement(_IconEdit2.default, null), style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'Utility', variant: 'utility', icon: _react2.default.createElement(_IconEdit2.default, null), style: buttonStyle })
  );
};

exports.default = ButtonVariant;