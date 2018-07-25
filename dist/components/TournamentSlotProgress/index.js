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

var TournamentSlotProgress = function (_React$Component) {
  _inherits(TournamentSlotProgress, _React$Component);

  function TournamentSlotProgress() {
    _classCallCheck(this, TournamentSlotProgress);

    return _possibleConstructorReturn(this, (TournamentSlotProgress.__proto__ || Object.getPrototypeOf(TournamentSlotProgress)).apply(this, arguments));
  }

  _createClass(TournamentSlotProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          current = _props.current,
          size = _props.size;

      var value = current / size;
      var color = 'is-success';
      if (value > 0.75) {
        color = 'is-danger';
      } else if (value > 0.5) {
        color = 'is-warning';
      }
      return _react2.default.createElement(
        'div',
        { className: 'ga-tournament-slot-progress' },
        _react2.default.createElement(
          'span',
          { className: 'has-text-weight-light' },
          'Slot restants : ',
          size - current,
          '/',
          size
        ),
        _react2.default.createElement('progress', { className: 'progress ' + color + ' is-small', value: current, max: size })
      );
    }
  }]);

  return TournamentSlotProgress;
}(_react2.default.Component);

TournamentSlotProgress.propTypes = {
  size: _propTypes2.default.number,
  current: _propTypes2.default.number
};

exports.default = TournamentSlotProgress;

//# sourceMappingURL=index.js.map