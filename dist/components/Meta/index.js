'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/head');

var _head2 = _interopRequireDefault(_head);

var _router = require('next/router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = require('../../lib/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function Meta(props) {
  var title = props.title ? props.title + ' | ' + _config2.default.title : _config2.default.title;
  var description = props.description ? props.description : _config2.default.description;
  var image = props.image ? props.image : _config2.default.image;
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement('meta', { name: 'description', content: description }),
    _react2.default.createElement('meta', { name: 'image', content: image }),
    _react2.default.createElement('meta', { itemProp: 'name', content: title }),
    _react2.default.createElement('meta', { itemProp: 'description', content: description }),
    _react2.default.createElement('meta', { itemProp: 'image', content: image }),
    _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary' }),
    _react2.default.createElement('meta', { name: 'twitter:title', content: title }),
    _react2.default.createElement('meta', { name: 'twitter:description', content: description }),
    _react2.default.createElement('meta', { name: 'og:title', content: title }),
    _react2.default.createElement('meta', { name: 'og:description', content: description }),
    _react2.default.createElement('meta', { name: 'og:image', content: image }),
    _react2.default.createElement('meta', { name: 'og:url', content: '' + process.env.BASE_URL + props.router.asPath }),
    _react2.default.createElement('meta', { name: 'og:site_name', content: title }),
    _react2.default.createElement('meta', { name: 'og:locale', content: 'fr_FR' }),
    _react2.default.createElement('meta', { name: 'og:type', content: 'website' })
  );
};

Meta.propTypes = {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string,
  router: _propTypes2.default.object
};

exports.default = (0, _router.withRouter)(Meta);

//# sourceMappingURL=index.js.map