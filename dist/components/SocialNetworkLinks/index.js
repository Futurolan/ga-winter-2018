'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _router = require('next/router');

var _reactShare = require('react-share');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocialNetworkLinks = function (_React$Component) {
  _inherits(SocialNetworkLinks, _React$Component);

  function SocialNetworkLinks() {
    _classCallCheck(this, SocialNetworkLinks);

    return _possibleConstructorReturn(this, (SocialNetworkLinks.__proto__ || Object.getPrototypeOf(SocialNetworkLinks)).apply(this, arguments));
  }

  _createClass(SocialNetworkLinks, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          router = _props.router,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'v-social-network-links level' },
        _react2.default.createElement(
          'div',
          { className: 'level-item has-cursor-pointer' },
          _react2.default.createElement(
            _reactShare.FacebookShareButton,
            { quote: title, url: '' + process.env.BASE_URL + router.asPath },
            _react2.default.createElement(_reactShare.FacebookIcon, { size: 32 })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'level-item has-cursor-pointer' },
          _react2.default.createElement(
            _reactShare.TwitterShareButton,
            { via: 'GamersAssembly', title: title, url: '' + process.env.BASE_URL + router.asPath },
            _react2.default.createElement(_reactShare.TwitterIcon, { size: 32 })
          )
        )
      );
    }
  }]);

  return SocialNetworkLinks;
}(_react2.default.Component);

SocialNetworkLinks.propTypes = {
  router: _propTypes2.default.object,
  title: _propTypes2.default.string
};

exports.default = (0, _router.withRouter)(SocialNetworkLinks);

//# sourceMappingURL=index.js.map