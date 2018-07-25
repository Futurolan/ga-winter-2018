'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMoment = require('react-moment');

var _reactMoment2 = _interopRequireDefault(_reactMoment);

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsCard = function NewsCard(props) {
  return _react2.default.createElement(
    'div',
    { className: 'ga-news-card card has-ribbon is-shadowless' },
    _react2.default.createElement(
      'div',
      { className: 'ribbon  is-size-7' },
      _react2.default.createElement(
        _reactMoment2.default,
        { unix: true, format: 'DD/MM/YYYY' },
        props.created
      )
    ),
    _react2.default.createElement(
      _link2.default,
      { as: '/news/' + props.nid, href: '/news-single?nid=' + props.nid },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-image' },
          _react2.default.createElement(
            'figure',
            { className: 'image is-2by1' },
            _react2.default.createElement('img', {
              srcSet: props.imgDesktopUrl + ' 288w, ' + props.imgWidescreenUrl + ' 352w, ' + props.imgFullhdUrl + ' 416w, ' + props.imgMobileUrl + ' 720w',
              sizes: '(min-width: 1408px) 416px,(min-width: 1216px) 352px, (min-width: 769px) 288px,  100vw',
              alt: props.placeHolder })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-content ' },
          _react2.default.createElement(
            'div',
            { className: 'content has-text-weight-semibold' },
            props.title
          )
        )
      )
    )
  );
};

NewsCard.propTypes = {
  nid: _propTypes2.default.number,
  title: _propTypes2.default.string,
  imgFullhdUrl: _propTypes2.default.string,
  imgWidescreenUrl: _propTypes2.default.string,
  imgDesktopUrl: _propTypes2.default.string,
  imgMobileUrl: _propTypes2.default.string,
  created: _propTypes2.default.number,
  placeHolder: _propTypes2.default.string
};

exports.default = NewsCard;

//# sourceMappingURL=index.js.map