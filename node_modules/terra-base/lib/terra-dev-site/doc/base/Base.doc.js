'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _Base = require('!raw-loader!../../../../src/Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseExample = function BaseExample() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Globale BaseStyles example'
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
      null,
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
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        'Unordered list item'
      )
    )
  );
};

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved


var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      example: _react2.default.createElement(BaseExample, null)
    }],
    propsTables: [{
      componentName: 'Base',
      componentSrc: _Base2.default
    }]
  });
};

exports.default = DocPage;