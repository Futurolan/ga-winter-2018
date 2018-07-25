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

var PartnerLogo = function PartnerLogo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'partner-logo box' },
    _react2.default.createElement(
      'a',
      { href: props.url, target: '_blank' },
      _react2.default.createElement(
        'figure',
        null,
        _react2.default.createElement('img', { src: props.imageUrl })
      )
    )
  );
};

PartnerLogo.propTypes = {
  imageUrl: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = PartnerLogo;

//# sourceMappingURL=index.js.map