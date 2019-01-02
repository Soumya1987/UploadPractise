'use strict';

var _translationsLoaders = require('translationsLoaders');

var _translationsLoaders2 = _interopRequireDefault(_translationsLoaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadFallbackLocale = function loadFallbackLocale(localeContext, callback, scope) {
  try {
    _translationsLoaders2.default['en'](callback, scope);
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Translations were not supplied for the ' + localeContext + '. Using en as the fallback locale.');
    }
  } catch (e) {
    throw new Error('Translations were not supplied for the ' + localeContext + ', or the en fallback locale.');
  }
}; /* eslint-disable */


var loadTranslations = function loadTranslations(locale, callback, scope) {
  var fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    _translationsLoaders2.default[locale](callback, scope);
  } catch (e) {
    if (fallbackLocale) {
      try {
        _translationsLoaders2.default[fallbackLocale](callback, scope);
        if (process.env.NODE_ENV !== 'production') {
          console.warn('Translations were not supplied for the ' + locale + ' locale. Using ' + fallbackLocale + ' as the fallback locale.');
        }
      } catch (e) {
        var localeContext = locale + ' or ' + fallbackLocale + ' locales';
        loadFallbackLocale(localeContext, callback, scope);
      }
    } else {
      var _localeContext = locale + ' locale';
      loadFallbackLocale(_localeContext, callback, scope);
    }
  }
};

module.exports = loadTranslations;