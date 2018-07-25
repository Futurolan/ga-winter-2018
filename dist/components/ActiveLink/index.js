'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _router = require('next/router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveLink = function (_React$Component) {
  _inherits(ActiveLink, _React$Component);

  function ActiveLink() {
    _classCallCheck(this, ActiveLink);

    return _possibleConstructorReturn(this, (ActiveLink.__proto__ || Object.getPrototypeOf(ActiveLink)).apply(this, arguments));
  }

  _createClass(ActiveLink, [{
    key: 'render',
    value: function render() {
      var pathname = this.props.router.pathname;
      var _props = this.props,
          label = _props.label,
          path = _props.path,
          className = _props.className;

      return _react2.default.createElement(
        _link2.default,
        { href: path },
        _react2.default.createElement(
          'a',
          { className: (0, _classnames2.default)(className, { 'is-active': pathname === path }) },
          label
        )
      );
    }
  }]);

  return ActiveLink;
}(_react2.default.Component);

ActiveLink.propTypes = {
  router: _propTypes2.default.object,
  label: _propTypes2.default.string,
  path: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = (0, _router.withRouter)(ActiveLink);

//# sourceMappingURL=index.js.map