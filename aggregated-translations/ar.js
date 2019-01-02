'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _ar = require('react-intl/locale-data/ar');

var _ar2 = _interopRequireDefault(_ar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_ar2.default);

var messages = {
  "Terra.ajax.error": "This content failed to load."
};
var areTranslationsLoaded = true;
var locale = 'ar';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
