'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmphasisButton = function EmphasisButton() {
  return _react2.default.createElement(
    'div',
    { id: 'emphasis', style: { padding: '5px' } },
    _react2.default.createElement(_Button2.default, { id: 'emphasisButton', text: 'Emphasis', variant: 'emphasis' }),
    _react2.default.createElement(_Button2.default, { id: 'emphasisButtonDisabled', text: 'Emphasis Disabled', variant: 'emphasis', isDisabled: true })
  );
};

exports.default = EmphasisButton;