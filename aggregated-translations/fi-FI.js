'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fi = require('react-intl/locale-data/fi');

var _fi2 = _interopRequireDefault(_fi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fi2.default);

var messages = {
  "Terra.ajax.error": "This content failed to load.n9KZ Pi~"
};
var areTranslationsLoaded = true;
var locale = 'fi-FI';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
