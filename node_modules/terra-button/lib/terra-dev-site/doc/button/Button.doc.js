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

var _Button = require('!raw-loader!../../../../src/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonBlock = require('../example/ButtonBlock');

var _ButtonBlock2 = _interopRequireDefault(_ButtonBlock);

var _ButtonBlock3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonBlock');

var _ButtonBlock4 = _interopRequireDefault(_ButtonBlock3);

var _ButtonAnchor = require('../example/ButtonAnchor');

var _ButtonAnchor2 = _interopRequireDefault(_ButtonAnchor);

var _ButtonAnchor3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonAnchor');

var _ButtonAnchor4 = _interopRequireDefault(_ButtonAnchor3);

var _ButtonDisabled = require('../example/ButtonDisabled');

var _ButtonDisabled2 = _interopRequireDefault(_ButtonDisabled);

var _ButtonDisabled3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonDisabled');

var _ButtonDisabled4 = _interopRequireDefault(_ButtonDisabled3);

var _ButtonOnClick = require('../example/ButtonOnClick');

var _ButtonOnClick2 = _interopRequireDefault(_ButtonOnClick);

var _ButtonOnClick3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonOnClick');

var _ButtonOnClick4 = _interopRequireDefault(_ButtonOnClick3);

var _ButtonIcon = require('../example/ButtonIcon');

var _ButtonIcon2 = _interopRequireDefault(_ButtonIcon);

var _ButtonIcon3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonIcon');

var _ButtonIcon4 = _interopRequireDefault(_ButtonIcon3);

var _ButtonVariant = require('../example/ButtonVariant');

var _ButtonVariant2 = _interopRequireDefault(_ButtonVariant);

var _ButtonVariant3 = require('!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonVariant');

var _ButtonVariant4 = _interopRequireDefault(_ButtonVariant3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: _package.name,
    readme: _README2.default,
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/' + _package.name,
    examples: [{
      title: 'Variant',
      example: _react2.default.createElement(_ButtonVariant2.default, null),
      source: _ButtonVariant4.default
    }, {
      title: 'Block',
      example: _react2.default.createElement(_ButtonBlock2.default, null),
      source: _ButtonBlock4.default
    }, {
      title: 'Anchor',
      example: _react2.default.createElement(_ButtonAnchor2.default, null),
      source: _ButtonAnchor4.default
    }, {
      title: 'Disabled',
      example: _react2.default.createElement(_ButtonDisabled2.default, null),
      source: _ButtonDisabled4.default
    }, {
      title: 'OnClick',
      example: _react2.default.createElement(_ButtonOnClick2.default, null),
      source: _ButtonOnClick4.default
    }, {
      title: 'Icon',
      example: _react2.default.createElement(_ButtonIcon2.default, null),
      source: _ButtonIcon4.default
    }],
    propsTables: [{
      componentName: 'Button',
      componentSrc: _Button2.default
    }]
  });
};

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
exports.default = DocPage;