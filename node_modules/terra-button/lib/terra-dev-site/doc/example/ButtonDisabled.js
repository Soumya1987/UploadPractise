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


var ButtonDisabled = function ButtonDisabled() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Button2.default, { text: 'Disabled Button', isDisabled: true, style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'Disabled Emphasis', variant: 'emphasis', isDisabled: true, style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'Disabled De-emphasis', variant: 'de-emphasis', isDisabled: true, style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'Disabled Action', variant: 'action', isDisabled: true, icon: _react2.default.createElement(_IconEdit2.default, null), style: buttonStyle }),
    _react2.default.createElement(_Button2.default, { text: 'Disabled Utility', variant: 'utility', isDisabled: true, icon: _react2.default.createElement(_IconEdit2.default, null), style: buttonStyle })
  );
};

exports.default = ButtonDisabled;