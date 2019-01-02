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

var Icon = _react2.default.createElement(_IconEdit2.default, null);
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var buttonStyle = { margin: '5px' };

var ButtonIcon = function ButtonIcon() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Button2.default, { icon: Icon, text: 'icon', style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { icon: Icon, text: 'icon', isReversed: true, style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { icon: Icon, isIconOnly: true, text: 'isIconOnly', style: buttonStyle })
  );
};

exports.default = ButtonIcon;