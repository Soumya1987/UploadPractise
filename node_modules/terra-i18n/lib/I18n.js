'use strict';

var _reactIntl = require('react-intl');

var _I18nProvider = require('./I18nProvider');

var _I18nProvider2 = _interopRequireDefault(_I18nProvider);

var _i18nLoader = require('./i18nLoader');

var _i18nLoader2 = _interopRequireDefault(_i18nLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  I18nProvider: _I18nProvider2.default,
  i18nLoader: _i18nLoader2.default,
  injectIntl: _reactIntl.injectIntl,
  intlShape: _reactIntl.intlShape,
  IntlProvider: _reactIntl.IntlProvider,
  FormattedMessage: _reactIntl.FormattedMessage
};