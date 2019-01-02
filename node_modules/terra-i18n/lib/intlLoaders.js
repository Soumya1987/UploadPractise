'use strict';

var _intlLoaders = require('intlLoaders');

var _intlLoaders2 = _interopRequireDefault(_intlLoaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadFallbackIntl = function loadFallbackIntl(localeContext) {
  try {
    _intlLoaders2.default['en']();
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Locale data was not supplied for the ' + localeContext + '. Using en data as the fallback locale data.');
    }
  } catch (e) {
    throw new Error('Locale data was not supplied for the ' + localeContext + ', or the en fallback locale.');
  }
}; /* eslint-disable */


var loadIntl = function loadIntl(locale) {
  var fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    _intlLoaders2.default[locale]();
  } catch (e) {
    if (fallbackLocale) {
      try {
        _intlLoaders2.default[fallbackLocale]();
        if (process.env.NODE_ENV !== 'production') {
          console.warn('Locale data was not supplied for the ' + locale + ' locale. Using ' + fallbackLocale + ' data as the fallback locale data.');
        }
      } catch (e) {
        var localeContext = locale + ' or ' + fallbackLocale + ' locales';
        loadFallbackIntl(localeContext);
      }
    } else {
      var _localeContext = locale + ' locale';
      loadFallbackIntl(_localeContext);
    }
  }
};

module.exports = loadIntl;