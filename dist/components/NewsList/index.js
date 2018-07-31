'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allNewsQueryVars = exports.news = undefined;

var _templateObject = _taggedTemplateLiteral(['\nquery post($skip:Int!){\n  nodeQuery(\n  filter:{\n    groups: [{\n      conjunction: OR,\n      conditions: [\n        {field: "field_news_editions", operator: IS_NULL},\n        {field: "field_news_editions", value: ["', '"]}\n      ]\n    }],\n    conditions:[\n      {field:"type",value:["news"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"created",direction:DESC}],\n  offset: $skip,\n  limit:12) {\n    count,\n    entities {\n      ... on NodeNews{\n        nid,\n        created,\n        title,\n        image:fieldNewsImage{\n          mobile:derivative(style:CROP_2_1_720X360){\n            url\n          }\n          desktop:derivative(style:CROP_2_1_288X144){\n            url\n          }\n          widescreen:derivative(style:CROP_2_1_352X176){\n            url\n          }\n          fullhd:derivative(style:CROP_2_1_416X208){\n            url\n          }\n        }\n      }\n    }\n  }\n}\n'], ['\nquery post($skip:Int!){\n  nodeQuery(\n  filter:{\n    groups: [{\n      conjunction: OR,\n      conditions: [\n        {field: "field_news_editions", operator: IS_NULL},\n        {field: "field_news_editions", value: ["', '"]}\n      ]\n    }],\n    conditions:[\n      {field:"type",value:["news"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"created",direction:DESC}],\n  offset: $skip,\n  limit:12) {\n    count,\n    entities {\n      ... on NodeNews{\n        nid,\n        created,\n        title,\n        image:fieldNewsImage{\n          mobile:derivative(style:CROP_2_1_720X360){\n            url\n          }\n          desktop:derivative(style:CROP_2_1_288X144){\n            url\n          }\n          widescreen:derivative(style:CROP_2_1_352X176){\n            url\n          }\n          fullhd:derivative(style:CROP_2_1_416X208){\n            url\n          }\n        }\n      }\n    }\n  }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _NewsCard = require('../NewsCard');

var _NewsCard2 = _interopRequireDefault(_NewsCard);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function NewsList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      nodeQuery = _ref$data.nodeQuery,
      loadMoreNews = _ref.loadMoreNews;

  if (error) {
    return _react2.default.createElement(
      'div',
      { className: 'notification is-danger' },
      'Une erreur est survenue pendant le chargement des actualit\xE9s !!!'
    );
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-news-list' },
      _react2.default.createElement(
        'div',
        { className: 'columns is-multiline is-6  is-variable' },
        nodeQuery.entities.map(function (news, index) {
          return _react2.default.createElement(
            'div',
            { className: 'column is-one-third', key: news.nid },
            _react2.default.createElement(_NewsCard2.default, {
              nid: news.nid,
              created: news.created,
              title: news.title,
              imgMobileUrl: news.image.mobile.url,
              imgDesktopUrl: news.image.desktop.url,
              imgWidescreenUrl: news.image.widescreen.url,
              imgFullhdUrl: news.image.fullhd.url
            })
          );
        })
      ),
      nodeQuery.entities.length < nodeQuery.count && _react2.default.createElement(
        'div',
        { className: 'has-text-centered' },
        _react2.default.createElement(
          'button',
          { className: 'v-button button is-primary', onClick: function onClick() {
              return loadMoreNews();
            } },
          'Charger plus d\'actualit\xE9s'
        )
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'notification' },
    'Chargement des actualit\xE9s en cours.'
  );
}

var news = exports.news = (0, _graphqlTag2.default)(_templateObject, process.env.EDITION_ID);

NewsList.propTypes = {
  data: _propTypes2.default.object,
  loadMoreNews: _propTypes2.default.func
};

var allNewsQueryVars = exports.allNewsQueryVars = {
  skip: 0
};

exports.default = (0, _reactApollo.graphql)(news, {
  options: {
    variables: allNewsQueryVars
  },
  props: function props(_ref2) {
    var data = _ref2.data;

    return {
      data: data,
      loadMoreNews: function loadMoreNews() {
        return data.fetchMore({
          variables: {
            skip: data.nodeQuery.entities.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            return Object.assign({}, previousResult, { nodeQuery: { entities: [].concat(_toConsumableArray(previousResult.nodeQuery.entities), _toConsumableArray(fetchMoreResult.nodeQuery.entities)), __typename: 'EntityQueryResult' } });
          }
        });
      }
    };
  }
})(NewsList);

//# sourceMappingURL=index.js.map