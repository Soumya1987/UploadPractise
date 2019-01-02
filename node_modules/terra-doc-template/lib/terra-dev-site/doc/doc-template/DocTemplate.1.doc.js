'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DocTemplate = require('../../../../lib/DocTemplate');

var _DocTemplate2 = _interopRequireDefault(_DocTemplate);

var _README = require('../../../../docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('../../../../package.json');

var _DocTemplate3 = require('!raw-loader!../../../../src/DocTemplate');

var _DocTemplate4 = _interopRequireDefault(_DocTemplate3);

var _DocTemplate5 = require('!raw-loader!../../../../src/terra-dev-site/doc/doc-template/DocTemplate.1.doc');

var _DocTemplate6 = _interopRequireDefault(_DocTemplate5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocTemplateExamples = function DocTemplateExamples() {
  return _react2.default.createElement(_DocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template',
    examples: [{
      title: 'DocTemplate',
      source: _DocTemplate6.default,
      example: _react2.default.createElement(
        'p',
        null,
        'This very page was generated using the DocTemplate. The template supports more than one Props Table and example, even though those were not featured here.'
      )
    }],
    propsTables: [{
      componentName: 'DocTemplate',
      componentSrc: _DocTemplate4.default
    }]
  });
};
/* eslint-disable-next-line import/no-self-import */
exports.default = DocTemplateExamples;