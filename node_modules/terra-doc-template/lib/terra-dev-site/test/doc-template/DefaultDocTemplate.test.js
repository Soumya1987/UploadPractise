'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DocTemplate = require('../../../DocTemplate');

var _DocTemplate2 = _interopRequireDefault(_DocTemplate);

var _TestReadme = require('./common/TestReadme.md');

var _TestReadme2 = _interopRequireDefault(_TestReadme);

var _TestComponentExample = require('./common/TestComponentExample');

var _TestComponentExample2 = _interopRequireDefault(_TestComponentExample);

var _CustomPropsTable = require('./common/CustomPropsTable');

var _CustomPropsTable2 = _interopRequireDefault(_CustomPropsTable);

var _TestComponentExample3 = require('!raw-loader!../../../../src/terra-dev-site/test/doc-template/common/TestComponentExample');

var _TestComponentExample4 = _interopRequireDefault(_TestComponentExample3);

var _TestComponent = require('!raw-loader!../../../../src/terra-dev-site/test/doc-template/common/TestComponent');

var _TestComponent2 = _interopRequireDefault(_TestComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enisable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions, import/no-duplicates */
var Index = function Index() {
  var propsTables = [{ componentSrc: _TestComponent2.default, componentName: 'Test Component' }, { componentSrc: _TestComponent2.default, componentName: 'Test Component (Again)' }];
  var exampleElement = _react2.default.createElement(_TestComponentExample2.default, null);
  var examples = [{
    title: 'Test Example 1', description: 'Describing the test', example: exampleElement, source: _TestComponentExample4.default
  }, {
    title: 'Test Example 2', description: 'Describing the test mk. 2', example: exampleElement, source: _TestComponentExample4.default
  }];

  return _react2.default.createElement(
    'div',
    { id: 'DocTemplateContainer' },
    _react2.default.createElement(
      _DocTemplate2.default,
      {
        packageName: 'test-package-name',
        readme: _TestReadme2.default,
        srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template',
        propsTables: propsTables,
        examples: examples
      },
      _react2.default.createElement(_CustomPropsTable2.default, null)
    )
  );
};

exports.default = Index;