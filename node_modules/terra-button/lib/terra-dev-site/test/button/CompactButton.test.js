'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactButton = function CompactButton() {
  return _react2.default.createElement(_Button2.default, { id: 'compactButton', text: 'Compact', isCompact: true });
};

exports.default = CompactButton;