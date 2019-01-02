'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../../../Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseDefault = function BaseDefault() {
  return _react2.default.createElement(
    _Base2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Heading 1'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Heading 2'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Heading 3'
    ),
    _react2.default.createElement(
      'h4',
      null,
      'Heading 4'
    ),
    _react2.default.createElement(
      'h5',
      null,
      'Heading 5'
    ),
    _react2.default.createElement(
      'h6',
      null,
      'Heading 6'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ),
    _react2.default.createElement('img', { src: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=200%C3%97200&w=200&h=200', alt: 'Placeholder' }),
    _react2.default.createElement(
      'dl',
      null,
      _react2.default.createElement(
        'dt',
        null,
        'Description name'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Description value'
      ),
      _react2.default.createElement(
        'dt',
        null,
        'Description name'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Description value'
      )
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Ordered list item'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Ordered list item',
        _react2.default.createElement(
          'ol',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Nested ordered list item'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Nested ordered list item'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        'Ordered list item'
      )
    ),
    _react2.default.createElement(
      'ul',
      { id: 'bottom-section' },
      _react2.default.createElement(
        'li',
        null,
        'Unordered list item'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Unordered list item',
        _react2.default.createElement(
          'ol',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Nested unordered list item'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Nested unordered list item'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        ' Unordered list item'
      )
    ),
    _react2.default.createElement(
      'p',
      { id: 'bottom' },
      'Bottom sample paragraph'
    )
  );
};

exports.default = BaseDefault;