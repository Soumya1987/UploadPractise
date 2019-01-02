'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDocTemplate = require('terra-doc-template');

var _terraDocTemplate2 = _interopRequireDefault(_terraDocTemplate);

var _CHANGELOG = require('../../../../CHANGELOG.md');

var _CHANGELOG2 = _interopRequireDefault(_CHANGELOG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocPage = function DocPage() {
  return _react2.default.createElement(_terraDocTemplate2.default, {
    packageName: 'terra-base',
    srcPath: 'https://github.com/cerner/terra-core/tree/master/packages/terra-base',
    readme: _CHANGELOG2.default
  });
};

exports.default = DocPage;