'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.news = undefined;

var _templateObject = _taggedTemplateLiteral(['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"field_news_editions",value:["', '"]},\n      {field:"type",value:["news"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"created",direction:DESC}],\n  limit:4) {\n    entities {\n      ... on NodeNews{\n        nid,\n        created,\n        title,\n        image:fieldNewsImage{\n          mobile:derivative(style:CROP_2_1_720X360){\n            url\n          }\n          desktop:derivative(style:CROP_2_1_288X144){\n            url\n          }\n          widescreen:derivative(style:CROP_2_1_352X176){\n            url\n          }\n          fullhd:derivative(style:CROP_2_1_416X208){\n            url\n          }\n        }\n      }\n    }\n  }\n}\n'], ['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"field_news_editions",value:["', '"]},\n      {field:"type",value:["news"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"created",direction:DESC}],\n  limit:4) {\n    entities {\n      ... on NodeNews{\n        nid,\n        created,\n        title,\n        image:fieldNewsImage{\n          mobile:derivative(style:CROP_2_1_720X360){\n            url\n          }\n          desktop:derivative(style:CROP_2_1_288X144){\n            url\n          }\n          widescreen:derivative(style:CROP_2_1_352X176){\n            url\n          }\n          fullhd:derivative(style:CROP_2_1_416X208){\n            url\n          }\n        }\n      }\n    }\n  }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _NewsCard = require('..//NewsCard');

var _NewsCard2 = _interopRequireDefault(_NewsCard);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTwitterWidgets = require('react-twitter-widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function HomeNewsList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      nodeQuery = _ref$data.nodeQuery;

  if (error) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-home-news-list has-bg-star' },
      _react2.default.createElement(
        'section',
        { className: 'section' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'notification is-danger' },
            'Une erreur est survenue pendant le chargement des actualit\xE9s !!!'
          )
        )
      )
    );
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-home-news-list has-bg-star' },
      _react2.default.createElement(
        'section',
        { className: 'section' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'columns is-multiline is-8 is-variable' },
            _react2.default.createElement(
              'div',
              { className: 'column is-7-desktop is-12-tablet' },
              _react2.default.createElement(
                'h2',
                { className: 'title title-line has-text-centered is-size-5 is-uppercase' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Actualit\xE9s'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'is-multiline columns is-6 is-variable news-list' },
                nodeQuery.entities.map(function (news) {
                  return _react2.default.createElement(
                    'div',
                    { className: 'column is-6-desktop is-12', key: news.nid },
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
              _react2.default.createElement(
                _link2.default,
                { href: '/news' },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-primary is-medium' },
                  'Voir plus d\'actualit\xE9s'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column is-5-desktop is-12-tablet' },
              _react2.default.createElement(
                'h2',
                { className: 'title title-line has-text-centered is-size-5 is-uppercase' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Twitter'
                )
              ),
              _react2.default.createElement(_reactTwitterWidgets.Timeline, {
                dataSource: {
                  sourceType: 'profile',
                  screenName: 'GamersAssembly',
                  noHeader: true
                },
                options: {
                  height: '600',
                  chrome: 'noheader nofooter noborders '
                } })
            )
          )
        )
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'ga-home-news-list has-bg-star' },
    _react2.default.createElement(
      'section',
      { className: 'section' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'notification' },
          'Chargement des actualit\xE9s en cours'
        )
      )
    )
  );
}

var news = exports.news = (0, _graphqlTag2.default)(_templateObject, process.env.EDITION_ID);
HomeNewsList.propTypes = {
  data: _propTypes2.default.object
};

exports.default = (0, _reactApollo.graphql)(news)(HomeNewsList);

//# sourceMappingURL=index.js.map