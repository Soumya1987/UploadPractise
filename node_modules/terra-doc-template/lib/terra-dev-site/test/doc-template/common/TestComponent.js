'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * A string of text to be displayed first
   */
  text: _propTypes2.default.string,
  /**
   * A string of text to be displayed second
  */
  otherText: _propTypes2.default.string
};

var defaultProps = {
  text: 'Hi!',
  otherText: 'Bye.'
};

var TestComponent = function TestComponent(props) {
  return _react2.default.createElement(
    'p',
    null,
    props.text,
    ',',
    ' ',
    props.otherText
  );
};

TestComponent.propTypes = propTypes;
TestComponent.defaultProps = defaultProps;

exports.default = TestComponent;