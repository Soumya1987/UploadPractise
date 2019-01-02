'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeemphasisButton = function DeemphasisButton() {
  return _react2.default.createElement(
    'div',
    { id: 'de-emphasis', style: { padding: '5px' } },
    _react2.default.createElement(_Button2.default, { id: 'de-emphasisButton', text: 'De-emphasis', variant: 'de-emphasis' }),
    _react2.default.createElement(_Button2.default, { id: 'de-emphasisButtonDisabled', text: 'De-emphasis Disabled', variant: 'de-emphasis', isDisabled: true })
  );
};

exports.default = DeemphasisButton;