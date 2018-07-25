'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
  var name = _ref.name,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'wrapper ' + name },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'main',
      { className: 'main' },
      children
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

Layout.propTypes = {
  name: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = Layout;

//# sourceMappingURL=index.js.map