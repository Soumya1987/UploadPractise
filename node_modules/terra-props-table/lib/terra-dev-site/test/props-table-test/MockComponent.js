'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// These props are used to test react-doc-gen, but they only need to be mocked
/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  /**
   * An example of type string markup.
   * `This component contains a very long section of code in it's description column. This component contains a very long section of code in it's description column.`
   */
  string: _propTypes2.default.string.isRequired,
  /**
   * An example of type number markup.
   */
  number: _propTypes2.default.number,
  /**
   * An example of type boolean markup.
   * ```This component contains a very long preformatted section in it's description column. This component contains a very long preformatted section in it's description column.```
   */
  bool: _propTypes2.default.bool,
  /**
   * An example of type element markup.
   */
  element: _propTypes2.default.element,
  /**
   * An example of type node markup.
   */
  node: _propTypes2.default.node,
  /**
   * An example of type array markup.
   */
  // eslint-disable-next-line react/forbid-prop-types
  array: _propTypes2.default.array,
  /**
   * A default example of type arrayOf markup.
   */
  arrayOfDefault: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * An example of type arrayOf(shapes)  markup.
   */
  arrayOfShapes: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    stringProp: _propTypes2.default.string
  })),
  /**
   * An example of type oneOfType markup with the option of a string, number or shape type.
   */
  oneOfType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.shape({
    stringProp: _propTypes2.default.string
  })]),
  /**
   * An example of type shape markup.
   */
  shape: _propTypes2.default.shape({
    stringProp: _propTypes2.default.string,
    numberProp: _propTypes2.default.number
  })
};
/* eslint-enable react/no-unused-prop-types */

var MockComponent = function MockComponent(props) {
  return _react2.default.createElement('span', JSON.stringify({ props: props }));
};

MockComponent.propTypes = propTypes;

exports.default = MockComponent;