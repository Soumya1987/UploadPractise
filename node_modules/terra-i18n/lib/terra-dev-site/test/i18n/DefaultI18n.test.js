'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = require('react-intl');

var _I18nProvider = require('../../../I18nProvider');

var _I18nProvider2 = _interopRequireDefault(_I18nProvider);

var _i18nLoader = require('../../../i18nLoader');

var _i18nLoader2 = _interopRequireDefault(_i18nLoader);

var _i18nSupportedLocales = require('../../../i18nSupportedLocales');

var _i18nSupportedLocales2 = _interopRequireDefault(_i18nSupportedLocales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Add Portuguese-Guinea-Bissau, Zulu & Zulu-South African locales as test locales (supported by intl)
var testLocales = _i18nSupportedLocales2.default.concat(['pt-GW', 'zu', 'zu-ZA']);

var Base = function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base(props) {
    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

    _this.state = {
      selectedLocale: 'en',
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {}
    };
    _this.handleLocaleChange = _this.handleLocaleChange.bind(_this);
    return _this;
  }

  _createClass(Base, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _i18nLoader2.default)(this.props.locale, this.setState, this);
    }
  }, {
    key: 'handleLocaleChange',
    value: function handleLocaleChange(e) {
      this.setState({ selectedLocale: e.target.value });
      (0, _i18nLoader2.default)(e.target.value, this.setState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.areTranslationsLoaded) {
        return _react2.default.createElement('div', null);
      }
      return _react2.default.createElement(
        _I18nProvider2.default,
        {
          locale: this.state.locale,
          messages: this.state.messages
        },
        _react2.default.createElement(
          'label',
          { htmlFor: 'change-locale' },
          ' Current locale: '
        ),
        _react2.default.createElement(
          'select',
          { id: 'change-locale', onChange: this.handleLocaleChange, value: this.state.selectedLocale },
          testLocales.map(function (locale) {
            return _react2.default.createElement(
              'option',
              { key: locale, value: locale },
              locale
            );
          })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            { style: { fontWeight: 'bold' } },
            ' Loaded locale message: '
          ),
          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'Terra.ajax.error' })
        ),
        this.state.selectedLocale.includes('zu') && _react2.default.createElement(
          'p',
          { style: { color: 'red', fontWeight: 'bold' } },
          'Using the en locale as fallback.'
        ),
        this.state.selectedLocale === 'pt-GW' && _react2.default.createElement(
          'p',
          { style: { color: 'red', fontWeight: 'bold' } },
          'Using the pt locale as fallback.'
        )
      );
    }
  }]);

  return Base;
}(_react2.default.Component);

Base.propTypes = {
  locale: _propTypes2.default.string
};

Base.defaultProps = {
  locale: 'en'
};

exports.default = function () {
  return _react2.default.createElement(Base, null);
};