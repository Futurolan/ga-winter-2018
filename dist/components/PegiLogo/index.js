'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PegiLogo = function (_React$Component) {
  _inherits(PegiLogo, _React$Component);

  function PegiLogo() {
    _classCallCheck(this, PegiLogo);

    return _possibleConstructorReturn(this, (PegiLogo.__proto__ || Object.getPrototypeOf(PegiLogo)).apply(this, arguments));
  }

  _createClass(PegiLogo, [{
    key: 'render',
    value: function render() {
      var pegi = this.props.pegi;

      var map = {
        pegi_3: 'pegi_3.png',
        pegi_7: 'pegi_7.png',
        pegi_12: 'pegi_12.png',
        pegi_16: 'pegi_16.png',
        pegi_18: 'pegi_18.png'
      };

      if (map[pegi]) {
        return _react2.default.createElement('img', { className: 'ga-pegi-logo', src: '/static/img/pegi/' + map[pegi] });
      } else {
        return null;
      }
    }
  }]);

  return PegiLogo;
}(_react2.default.Component);

PegiLogo.propTypes = {
  pegi: _propTypes2.default.string
};

exports.default = PegiLogo;

//# sourceMappingURL=index.js.map