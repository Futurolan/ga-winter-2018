'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = function Hero(props) {
  return _react2.default.createElement(
    'section',
    { className: 'ga-hero' },
    _react2.default.createElement(
      'div',
      { className: 'hero is-large has-text-centered', style: { background: 'url(\'' + props.imgUrl + '\') no-repeat center center' } },
      _react2.default.createElement(
        'div',
        { className: 'hero-body' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            { className: 'title is-size-1 has-text-white is-uppercase' },
            props.title
          ),
          props.subtitle && _react2.default.createElement(
            'h2',
            { className: 'subtitle is-size-2 has-text-white-bis' },
            props.subtitle
          )
        )
      )
    )
  );
};

Hero.propTypes = {
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  imgUrl: _propTypes2.default.string
};

exports.default = Hero;

//# sourceMappingURL=index.js.map