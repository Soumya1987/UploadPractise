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

var _I18nProvider = require('!raw-loader!../../../../src/I18nProvider');

var _I18nProvider2 = _interopRequireDefault(_I18nProvider);

var _I18nDemo = require('../example/I18nDemo');

var _I18nDemo2 = _interopRequireDefault(_I18nDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'I18nProvider Example',
      description: _react2.default.createElement(
        'p',
        { style: { fontStyle: 'italic' } },
        _react2.default.createElement(
          'span',
          { style: { fontWeight: 'bold' } },
          'Note:'
        ),
        ' ',
        'This is an example of a nested I18nProvider. The site overall is an example of using an application-level I18nProvider implemented through the terra-base component.'
      ),
      example: _react2.default.createElement(_I18nDemo2.default, null)
    }],
    propsTables: [{
      componentName: 'I18n Provider',
      componentSrc: _I18nProvider2.default
    }]
  });
};

// Example Files
exports.default = DocPage;