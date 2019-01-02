'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomizedPropsTable = function CustomizedPropsTable() {
  return _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Prop Name'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Type'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Is Required'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Default Value'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Description'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'text'
        ),
        _react2.default.createElement(
          'td',
          null,
          'string'
        ),
        _react2.default.createElement(
          'td',
          null,
          'optional'
        ),
        _react2.default.createElement(
          'td',
          null,
          'null'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'p',
            null,
            'A text string to be rendered in the component.'
          )
        )
      )
    )
  );
};

exports.default = CustomizedPropsTable;