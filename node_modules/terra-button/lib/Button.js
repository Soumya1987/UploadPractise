'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonVariants = exports.ButtonTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _ButtonModule = require('./Button.module.scss');

var _ButtonModule2 = _interopRequireDefault(_ButtonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ButtonModule2.default);

var KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9
};

var ButtonVariants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
  // TODO: this should be removed on the next major version bump
  'DE-EMPHSASIS': 'de-emphasis',
  'DE-EMPHASIS': 'de-emphasis',
  ACTION: 'action',
  UTILITY: 'utility'
};

var ButtonTypes = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset'
};

var propTypes = {
  /**
   * Sets the href. When set will render the component as an anchor tag.
   */
  href: _propTypes2.default.string,
  /**
   * An optional icon. Nested inline with the text when provided.
   */
  icon: _propTypes2.default.element,
  /**
   * Whether or not the button should only display as an icon.
   */
  isIconOnly: _propTypes2.default.bool,
  /**
   * Whether or not the button should display as a block.
   */
  isBlock: _propTypes2.default.bool,
  /**
   * Whether or not the button has reduced padding
   */
  isCompact: _propTypes2.default.bool,
  /**
   * Whether or not the button should be disabled.
   */
  isDisabled: _propTypes2.default.bool,
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: _propTypes2.default.bool,
  /**
   * Callback function triggered when clicked.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function triggered when button loses focus.
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function triggered when button gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: _propTypes2.default.func,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: _propTypes2.default.func,
  /**
   * Sets the button text. If the button `isIconOnly` or of variant `utility`, this text is set as the aria-label for accessibility.
   */
  text: _propTypes2.default.string.isRequired,
  /**
   * Sets the button type. One of `button`, `submit`, or `reset`.
   */
  type: _propTypes2.default.oneOf([ButtonTypes.BUTTON, ButtonTypes.SUBMIT, ButtonTypes.RESET]),
  /**
   * Sets the button variant. One of `neutral`,  `emphasis`, `de-emphasis`, `action` or `utility`.
   */
  variant: _propTypes2.default.oneOf([ButtonVariants.NEUTRAL, ButtonVariants.EMPHASIS, ButtonVariants['DE-EMPHASIS'], ButtonVariants.ACTION, ButtonVariants.UTILITY])
};

var defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isIconOnly: false,
  isReversed: false,
  refCallback: undefined,
  type: ButtonTypes.BUTTON,
  variant: ButtonVariants.NEUTRAL
};

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = { active: false, focused: false };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'handleOnBlur',
    value: function handleOnBlur(event) {
      this.setState({ focused: false });

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      // Add active state to FF browsers
      if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
        this.setState({ active: true });

        // Follow href on space keydown when rendered as an anchor tag
        if (this.props.href) {
          // Prevent window scrolling
          event.preventDefault();
          window.location.href = this.props.href;
        }
      }

      // Add focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
        this.setState({ focused: true });
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      // Remove active state from FF broswers
      if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
        this.setState({ active: false });
      }

      // Apply focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === KEYCODES.TAB) {
        this.setState({ focused: true });
      }

      if (this.props.onKeyUp) {
        this.props.onKeyUp(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          isBlock = _props.isBlock,
          isCompact = _props.isCompact,
          isDisabled = _props.isDisabled,
          isIconOnly = _props.isIconOnly,
          isReversed = _props.isReversed,
          text = _props.text,
          type = _props.type,
          variant = _props.variant,
          href = _props.href,
          onClick = _props.onClick,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          refCallback = _props.refCallback,
          customProps = _objectWithoutProperties(_props, ['icon', 'isBlock', 'isCompact', 'isDisabled', 'isIconOnly', 'isReversed', 'text', 'type', 'variant', 'href', 'onClick', 'onBlur', 'onFocus', 'onKeyDown', 'onKeyUp', 'refCallback']);

      var buttonClasses = cx(['button', variant, { 'is-disabled': isDisabled }, { block: isBlock }, { compact: isCompact }, { 'is-active': this.state.active }, { 'is-focused': this.state.focused }, customProps.className]);

      var buttonLabelClasses = cx(['button-label', { 'text-and-icon': icon && !isIconOnly }, { 'icon-only': isIconOnly || variant === 'utility' }, { 'text-only': !icon }]);

      var buttonTextClasses = cx([{ 'text-first': icon && isReversed }]);

      var iconClasses = cx(['icon', { 'icon-first': !isIconOnly && variant !== 'utility' && !isReversed }]);

      var buttonText = !isIconOnly && variant !== 'utility' ? _react2.default.createElement(
        'span',
        { className: buttonTextClasses },
        text
      ) : null;

      var buttonIcon = null;
      if (icon) {
        var iconSvgClasses = icon.props.className ? icon.props.className + ' ' + cx('icon-svg') : cx('icon-svg');
        var cloneIcon = _react2.default.cloneElement(icon, { className: iconSvgClasses });
        buttonIcon = _react2.default.createElement(
          'span',
          { className: iconClasses },
          cloneIcon
        );
      }

      var buttonLabel = _react2.default.createElement(
        'span',
        { className: buttonLabelClasses },
        isReversed ? buttonText : buttonIcon,
        isReversed ? buttonIcon : buttonText
      );
      var ComponentType = href ? 'a' : 'button';

      return _react2.default.createElement(
        ComponentType,
        _extends({}, customProps, {
          className: buttonClasses,
          type: type,
          disabled: isDisabled,
          tabIndex: isDisabled ? '-1' : undefined,
          'aria-disabled': isDisabled,
          'aria-label': isIconOnly || variant === 'utility' ? text : null,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onBlur: this.handleOnBlur,
          onClick: onClick,
          onFocus: onFocus,
          href: href,
          ref: refCallback
        }),
        buttonLabel
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

Button.Opts = {};
Button.Opts.Types = ButtonTypes;
Button.Opts.Variants = ButtonVariants;

exports.default = Button;
exports.ButtonTypes = ButtonTypes;
exports.ButtonVariants = ButtonVariants;