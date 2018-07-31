'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infos = undefined;

var _templateObject = _taggedTemplateLiteral(['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"type",value:["home_info"],operator:EQUAL},\n      {field:"field_home_info_edition",value:["', '"]},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"created",direction:DESC}],\n  limit:1) {\n    entities {\n      ... on NodeHomeInfo{\n        title1:fieldHomeInfoTitle1\n        content1:fieldHomeInfoContent1{\n          value:processed\n        }\n        title2:fieldHomeInfoTitle2\n        content2:fieldHomeInfoContent2{\n          value:processed\n        }\n        title3:fieldHomeInfoTitle3\n        content3:fieldHomeInfoContent3{\n          value:processed\n        }\n      }\n    }\n  }\n}\n'], ['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"type",value:["home_info"],operator:EQUAL},\n      {field:"field_home_info_edition",value:["', '"]},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"created",direction:DESC}],\n  limit:1) {\n    entities {\n      ... on NodeHomeInfo{\n        title1:fieldHomeInfoTitle1\n        content1:fieldHomeInfoContent1{\n          value:processed\n        }\n        title2:fieldHomeInfoTitle2\n        content2:fieldHomeInfoContent2{\n          value:processed\n        }\n        title3:fieldHomeInfoTitle3\n        content3:fieldHomeInfoContent3{\n          value:processed\n        }\n      }\n    }\n  }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function HomeInfo(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      nodeQuery = _ref$data.nodeQuery;

  if (error) {
    return _react2.default.createElement(
      'div',
      { className: 'notification is-danger' },
      'Une erreur est survenue pendant le chargement des bloc d\'informations !!!'
    );
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    var node = nodeQuery.entities[0];
    return _react2.default.createElement(
      'div',
      { className: 'ga-home-info has-bg-grey-area' },
      _react2.default.createElement(
        'section',
        { className: 'section is-medium' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'columns is-variable is-8 is-centered is-multiline' },
            _react2.default.createElement(
              'div',
              { className: 'column is-12-tablet is-one-third-desktop has-text-centered' },
              _react2.default.createElement(
                'div',
                { className: 'box has-background-dark' },
                _react2.default.createElement(
                  'h3',
                  { className: 'title has-text-weight-bold has-text-white title-line' },
                  _react2.default.createElement(
                    'span',
                    null,
                    node.title1
                  )
                ),
                _react2.default.createElement('div', { className: 'content has-text-white', dangerouslySetInnerHTML: { __html: node.content1.value } })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column is-12-tablet  is-one-third-desktop has-text-centered' },
              _react2.default.createElement(
                'div',
                { className: 'box has-background-dark' },
                _react2.default.createElement(
                  'h3',
                  { className: 'title has-text-weight-bold has-text-white title-line' },
                  _react2.default.createElement(
                    'span',
                    null,
                    node.title2
                  )
                ),
                _react2.default.createElement('div', { className: 'content has-text-white', dangerouslySetInnerHTML: { __html: node.content2.value } })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column is-12-tablet  is-one-third-desktop has-text-centered' },
              _react2.default.createElement(
                'div',
                { className: 'box has-background-dark' },
                _react2.default.createElement(
                  'h3',
                  { className: 'title has-text-weight-bold has-text-white title-line ' },
                  _react2.default.createElement(
                    'span',
                    null,
                    node.title3
                  )
                ),
                _react2.default.createElement('div', { className: 'content has-text-white', dangerouslySetInnerHTML: { __html: node.content3.value } })
              )
            )
          )
        )
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'notification' },
    'Chargement des blocs d\'information en cours.'
  );
}

var infos = exports.infos = (0, _graphqlTag2.default)(_templateObject, process.env.EDITION_ID);

HomeInfo.propTypes = {
  data: _propTypes2.default.object
};

exports.default = (0, _reactApollo.graphql)(infos)(HomeInfo);

//# sourceMappingURL=index.js.map