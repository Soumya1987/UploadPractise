'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/forbid-prop-types */

var propTypes = {
  /**
   * The component that will be wrapped by i18n provider.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The locale name.
   */
  locale: _propTypes2.default.string.isRequired,
  /**
   * Translations messages object.
   */
  messages: _propTypes2.default.object.isRequired
};

var I18nProvider = function I18nProvider(_ref) {
  var children = _ref.children,
      locale = _ref.locale,
      messages = _ref.messages,
      customProps = _objectWithoutProperties(_ref, ['children', 'locale', 'messages']);

  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    { locale: locale, key: locale, messages: messages },
    _react2.default.createElement(
      'div',
      customProps,
      children
    )
  );
};

I18nProvider.propTypes = propTypes;

exports.default = I18nProvider;