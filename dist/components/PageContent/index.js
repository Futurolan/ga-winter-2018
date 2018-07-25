'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\n  query page($nid:String!) {\n    node:nodeById(id: $nid) {\n      ... on NodePage {\n        title\n        entityOwner {\n          name\n        }\n        created,\n        content:fieldPageContent{\n          processed\n        }\n        description:fieldPageDescription\n      }\n    }\n  }\n'], ['\n\n  query page($nid:String!) {\n    node:nodeById(id: $nid) {\n      ... on NodePage {\n        title\n        entityOwner {\n          name\n        }\n        created,\n        content:fieldPageContent{\n          processed\n        }\n        description:fieldPageDescription\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Meta = require('../Meta');

var _Meta2 = _interopRequireDefault(_Meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PageContent(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      node = _ref$data.node;

  if (error) {
    return _react2.default.createElement(
      'div',
      { className: 'notification is-danger' },
      'Une erreur est survenue pendant le chargement de la page !!!'
    );
  }

  if (node) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-page-content' },
      _react2.default.createElement(_Meta2.default, { title: node.title, description: node.description }),
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
        'div',
        { className: 'content has-text-justified' },
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: node.content.processed } })
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'notification' },
    'Chargement de la page en cours'
  );
}

var page = exports.page = (0, _graphqlTag2.default)(_templateObject);

PageContent.propTypes = {
  data: _propTypes2.default.object
};

exports.default = (0, _reactApollo.graphql)(page, {
  options: function options(_ref2) {
    var nid = _ref2.nid;
    return { variables: { nid: nid } };
  }
})(PageContent);

//# sourceMappingURL=index.js.map