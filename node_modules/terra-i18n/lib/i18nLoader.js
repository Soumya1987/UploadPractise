'use strict';

var _intlLoaders = require('./intlLoaders');

var _intlLoaders2 = _interopRequireDefault(_intlLoaders);

var _translationsLoaders = require('./translationsLoaders');

var _translationsLoaders2 = _interopRequireDefault(_translationsLoaders);

var _i18nSupportedLocales = require('./i18nSupportedLocales');

var _i18nSupportedLocales2 = _interopRequireDefault(_i18nSupportedLocales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasIntl = typeof Intl !== 'undefined'; /* eslint-disable */


var permitParams = function permitParams(locale, callback) {
  if (process.env.NODE_ENV !== 'production' && _i18nSupportedLocales2.default.indexOf(locale) < 0) {
    console.warn(locale + ' is not a supported locale, supported locales include: ' + _i18nSupportedLocales2.default.join(', ') + '.');
  }
  if (typeof callback !== 'function') {
    throw new Error('Second argument must be function');
  }
};

module.exports = function (locale, callback, scope) {
  permitParams(locale, callback);
  if (!hasIntl) {
    require.ensure([], function (require) {
      require('intl');
      (0, _intlLoaders2.default)(locale);
      (0, _translationsLoaders2.default)(locale, callback, scope);
    }, 'intl-polyfill');
  } else {
    (0, _translationsLoaders2.default)(locale, callback, scope);
  }
};