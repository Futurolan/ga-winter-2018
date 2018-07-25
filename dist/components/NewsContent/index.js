'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.news = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\n  query news($nid:String!) {\n    node:nodeById(id: $nid) {\n      ... on NodeNews {\n        title\n        entityOwner {\n          name\n        }\n        created,\n        content:fieldNewsContent{\n          processed\n        }\n        description:fieldNewsDescription\n        image:fieldNewsImage{\n          mobile:derivative(style:CROP_5_1_705X141){\n            url\n          }\n          desktop:derivative(style:CROP_5_1_960X192){\n            url\n          }\n          widescreen:derivative(style:CROP_5_1_1155X231){\n            url\n          }\n          fullhd:derivative(style:CROP_5_1_1345X269){\n            url\n          }\n        }\n      }\n    }\n  }\n\n'], ['\n\n  query news($nid:String!) {\n    node:nodeById(id: $nid) {\n      ... on NodeNews {\n        title\n        entityOwner {\n          name\n        }\n        created,\n        content:fieldNewsContent{\n          processed\n        }\n        description:fieldNewsDescription\n        image:fieldNewsImage{\n          mobile:derivative(style:CROP_5_1_705X141){\n            url\n          }\n          desktop:derivative(style:CROP_5_1_960X192){\n            url\n          }\n          widescreen:derivative(style:CROP_5_1_1155X231){\n            url\n          }\n          fullhd:derivative(style:CROP_5_1_1345X269){\n            url\n          }\n        }\n      }\n    }\n  }\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.scss');

var _reactMoment = require('react-moment');

var _reactMoment2 = _interopRequireDefault(_reactMoment);

var _Meta = require('../Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _SocialNetworkLinks = require('../SocialNetworkLinks');

var _SocialNetworkLinks2 = _interopRequireDefault(_SocialNetworkLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function NewsContent(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      node = _ref$data.node;

  if (error) {
    return _react2.default.createElement(
      'div',
      { className: 'notification is-danger' },
      'Une erreur est survenue pendant le chargement de l\'actualit\xE9 !!!'
    );
  }

  if (node) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-news-content' },
      _react2.default.createElement(_Meta2.default, { title: node.title, image: node.image.fullhd.url, description: node.description }),
      _react2.default.createElement(
        'h1',
        { className: 'title title-line has-text-centered' },
        _react2.default.createElement(
          'span',
          null,
          node.title
        )
      ),
      _react2.default.createElement(
        'figure',
        { className: 'image is-5by1' },
        _react2.default.createElement('img', { srcSet: node.image.mobile.url + ' 705w, ' + node.image.desktop.url + ' 960w, ' + node.image.widescreen.url + ' 1155w, ' + node.image.fullhd.url + ' 1345w' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'level' },
        _react2.default.createElement(
          'div',
          { className: 'level-left' },
          _react2.default.createElement(
            'div',
            { className: 'level-item' },
            ' Cr\xE9\xE9 le ',
            _react2.default.createElement(
              _reactMoment2.default,
              { unix: true, format: 'DD/MM/YYYY \xE0 HH:SS' },
              node.created
            ),
            ', par ',
            node.entityOwner.name
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'level-right' },
          _react2.default.createElement(_SocialNetworkLinks2.default, { title: node.title })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content has-text-justified' },
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: node.content.processed } })
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'notification' },
    'Chargement de l\'actualit\xE9 en cours'
  );
}

var news = exports.news = (0, _graphqlTag2.default)(_templateObject);

NewsContent.propTypes = {
  data: _propTypes2.default.object
};

exports.default = (0, _reactApollo.graphql)(news, {
  options: function options(_ref2) {
    var nid = _ref2.nid;
    return { variables: { nid: nid } };
  }
})(NewsContent);

//# sourceMappingURL=index.js.map