'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconSquareSymbol = require('terra-icon/lib/icon/IconSquareSymbol');

var _IconSquareSymbol2 = _interopRequireDefault(_IconSquareSymbol);

var _Button = require('../../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spacingStyle = { padding: '20px' };

var NeutralButton = function NeutralButton() {
  return _react2.default.createElement(
    'div',
    { id: 'neutral', style: spacingStyle },
    _react2.default.createElement(_Button2.default, { id: 'neutralActive', text: 'Neutral-Active', variant: 'neutral', className: 'is-active' }),
    _react2.default.createElement(
      'span',
      { id: 'neutralActiveFocusSpan', style: spacingStyle },
      _react2.default.createElement(_Button2.default, { id: 'neutralActiveFocus', text: 'Neutral-Active+Focus', variant: 'neutral', className: ['is-active', 'is-focused'] })
    )
  );
};

var EmphasisButton = function EmphasisButton() {
  return _react2.default.createElement(
    'div',
    { id: 'emphasis', style: spacingStyle },
    _react2.default.createElement(_Button2.default, { id: 'emphasisActive', text: 'Emphasis-Active', variant: 'emphasis', className: 'is-active' }),
    _react2.default.createElement(
      'span',
      { id: 'emphasisActiveFocusSpan', style: spacingStyle },
      _react2.default.createElement(_Button2.default, { id: 'emphasisActiveFocus', text: 'Emphasis-Active+Focus', variant: 'emphasis', className: ['is-active', 'is-focused'] })
    )
  );
};

var DeemphasisButton = function DeemphasisButton() {
  return _react2.default.createElement(
    'div',
    { id: 'deempshasis', style: spacingStyle },
    _react2.default.createElement(_Button2.default, { id: 'de-emphasisActive', text: 'De-emphasis-Active', variant: 'de-emphasis', className: 'is-active' }),
    _react2.default.createElement(
      'span',
      { id: 'de-emphasisActiveFocusSpan', style: spacingStyle },
      _react2.default.createElement(_Button2.default, { id: 'de-emphasisActiveFocus', text: 'De-emphasis-Active+Focus', variant: 'de-emphasis', className: ['is-active', 'is-focused'] })
    )
  );
};

var ActionButton = function ActionButton() {
  return _react2.default.createElement(
    'div',
    { id: 'action', style: spacingStyle },
    _react2.default.createElement(_Button2.default, { id: 'actionActive', text: 'Action-Active', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'action', className: 'is-active' }),
    _react2.default.createElement(
      'span',
      { id: 'actionActiveFocusSpan', style: spacingStyle },
      _react2.default.createElement(_Button2.default, { id: 'actionActiveFocus', text: 'Action-Active+Focus', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'action', className: ['is-active', 'is-focused'] })
    )
  );
};

var UtilityButton = function UtilityButton() {
  return _react2.default.createElement(
    'div',
    { id: 'utility', style: spacingStyle },
    _react2.default.createElement(_Button2.default, { id: 'utilityActive', text: 'Utility-Active', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'utility', className: 'is-active' }),
    _react2.default.createElement(
      'span',
      { id: 'utilityActiveFocusSpan', style: spacingStyle },
      _react2.default.createElement(_Button2.default, { id: 'utilityButtonActiveFocus', text: 'Utility-Active+Focus', icon: _react2.default.createElement(_IconSquareSymbol2.default, null), variant: 'utility', className: ['is-active', 'is-focused'] })
    )
  );
};

var activeButtons = function activeButtons() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(NeutralButton, null),
    _react2.default.createElement(EmphasisButton, null),
    _react2.default.createElement(DeemphasisButton, null),
    _react2.default.createElement(ActionButton, null),
    _react2.default.createElement(UtilityButton, null)
  );
};

exports.default = activeButtons;