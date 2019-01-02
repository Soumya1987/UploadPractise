'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropsTable = require('../../../PropsTable');

var _PropsTable2 = _interopRequireDefault(_PropsTable);

var _MockComponent = require('!raw-loader!../../../../src/terra-dev-site/test/props-table-test/MockComponent');

var _MockComponent2 = _interopRequireDefault(_MockComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockPropsTableWithTitle = function MockPropsTableWithTitle() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_PropsTable2.default, { id: 'PropsTable', src: _MockComponent2.default, componentName: 'Mock Component' }),
    _react2.default.createElement(
      'p',
      { 'data-terra-bottom-scroll-marker': true },
      'Marker for scrolling during tests'
    )
  );
};

// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = MockPropsTableWithTitle;