'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../../../Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseNoTranslationsLoaded = function BaseNoTranslationsLoaded() {
  var noTranslations = _react2.default.createElement(
    _Base2.default,
    { locale: 'gabcdef', translationsLoadingPlaceholder: _react2.default.createElement(
        'div',
        null,
        'No Translations'
      ) },
    _react2.default.createElement(
      'div',
      null,
      'Translations'
    )
  );
  return noTranslations;
};

exports.default = BaseNoTranslationsLoaded;