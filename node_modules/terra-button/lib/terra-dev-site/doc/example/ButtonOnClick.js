'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('terra-button/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyle = { margin: '5px' };
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var ButtonOnClick = function ButtonOnClick() {
  return (
    // eslint-disable-next-line no-alert
    _react2.default.createElement(_Button2.default, { text: 'Click Me', onClick: function onClick() {
        return alert('Ive been clicked!');
      }, style: buttonStyle })
  );
};

exports.default = ButtonOnClick;