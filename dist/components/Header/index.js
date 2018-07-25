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

var _ActiveLink = require('../ActiveLink');

var _ActiveLink2 = _interopRequireDefault(_ActiveLink);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = { isOpen: false };

    _this.toggleMenu = _this.toggleMenu.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'ga-header' },
        _react2.default.createElement(
          'nav',
          { className: 'navbar has-background-primary' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-brand' },
            _react2.default.createElement(
              _link2.default,
              { href: '/' },
              _react2.default.createElement(
                'a',
                null,
                _react2.default.createElement('img', { src: '/static/img/logo-orange-100x100.png' })
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'button navbar-burger is-dark', onClick: this.toggleMenu },
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('navbar-menu', 'has-background-primary', 'has-text-centered', { 'is-active': this.state.isOpen }) },
            _react2.default.createElement('div', { className: 'navbar-start' }),
            _react2.default.createElement(
              'div',
              { className: 'navbar-item' },
              _react2.default.createElement(_ActiveLink2.default, { label: 'Actualit\xE9s', className: 'has-text-white is-uppercase has-text-weight-bold', path: '/news' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-item is-uppercase has-text-weight-bold' },
              _react2.default.createElement(_ActiveLink2.default, { label: 'Tournois', className: 'has-text-white', path: '/tournois' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-item is-uppercase has-text-weight-bold' },
              _react2.default.createElement(_ActiveLink2.default, { label: 'Infos pratiques', className: 'has-text-white', path: '/infos' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-item is-uppercase has-text-weight-bold' },
              _react2.default.createElement(_ActiveLink2.default, { label: 'Partenaires', className: 'has-text-white', path: '/partenaires' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-end' },
              _react2.default.createElement(
                'div',
                { className: 'navbar-item' },
                _react2.default.createElement(
                  'div',
                  { className: 'field is-grouped' },
                  _react2.default.createElement(
                    'a',
                    { className: 'control has-text-white', target: '_blank', href: 'https://www.facebook.com/GamersAssembly' },
                    _react2.default.createElement('i', { className: 'fab fa-facebook' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'control has-text-white', target: '_blank', href: 'https://twitter.com/GamersAssembly' },
                    _react2.default.createElement('i', { className: 'fab fa-twitter' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'control has-text-white', target: '_blank', href: 'https://www.flickr.com/photos/futurolan' },
                    _react2.default.createElement('i', { className: 'fab fa-flickr' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'control has-text-white', target: '_blank', href: 'https://twitch.tv/gamers_assembly' },
                    _react2.default.createElement('i', { className: 'fab fa-twitch' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'control has-text-white', target: '_blank', href: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw' },
                    _react2.default.createElement('i', { className: 'fab fa-youtube' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

//# sourceMappingURL=index.js.map