'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraI18n = require('terra-i18n');

var _Base = require('../../../Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customMessages = {
  en: {
    'App.locale': 'en'
  },
  'en-US': {
    'App.locale': 'en-US'
  }
};

var SwitchLocaleBase = function (_React$Component) {
  _inherits(SwitchLocaleBase, _React$Component);

  function SwitchLocaleBase(props) {
    _classCallCheck(this, SwitchLocaleBase);

    var _this = _possibleConstructorReturn(this, (SwitchLocaleBase.__proto__ || Object.getPrototypeOf(SwitchLocaleBase)).call(this, props));

    _this.state = {
      locale: 'en'
    };
    _this.handleSwitchLocale = _this.handleSwitchLocale.bind(_this);
    return _this;
  }

  _createClass(SwitchLocaleBase, [{
    key: 'handleSwitchLocale',
    value: function handleSwitchLocale() {
      if (this.state.locale !== 'en') {
        this.setState({ locale: 'en' });
      } else {
        this.setState({ locale: 'en-US' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Base2.default,
        {
          locale: this.state.locale,
          customMessages: customMessages[this.state.locale]
        },
        _react2.default.createElement(
          'div',
          { id: 'message' },
          _react2.default.createElement(_terraI18n.FormattedMessage, { id: 'App.locale' })
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', id: 'switch', onClick: this.handleSwitchLocale },
          'Switch'
        )
      );
    }
  }]);

  return SwitchLocaleBase;
}(_react2.default.Component);

exports.default = SwitchLocaleBase;