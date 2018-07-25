'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tournaments = undefined;

var _templateObject = _taggedTemplateLiteral(['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"type",value:["tournament"],operator:EQUAL},\n      {field:"field_tournament_edition",value:["', '"]},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"field_weight",direction:DESC}],\n  limit:9999) {\n    count,\n    entities {\n      ... on NodeTournament{\n        nid\n        title\n        reservedSlot:fieldTournamentReservedSlot\n        size:fieldTournamentSize\n        platform:fieldTournamentPlatform\n        image:fieldTournamentImage{\n          mobile:derivative(style:CROP_2_1_720X360){\n            url\n          }\n          desktop:derivative(style:CROP_2_1_288X144){\n            url\n          }\n          widescreen:derivative(style:CROP_2_1_352X176){\n            url\n          }\n          fullhd:derivative(style:CROP_2_1_416X208){\n            url\n          }\n        }\n        game:fieldTournamentGame{\n          node:entity{\n            pegi:fieldGamePegi\n            image:fieldGameImage{\n              mobile:derivative(style:CROP_2_1_720X360){\n                url\n              }\n              desktop:derivative(style:CROP_2_1_288X144){\n                url\n              }\n              widescreen:derivative(style:CROP_2_1_352X176){\n                url\n              }\n              fullhd:derivative(style:CROP_2_1_416X208){\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'], ['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"type",value:["tournament"],operator:EQUAL},\n      {field:"field_tournament_edition",value:["', '"]},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"field_weight",direction:DESC}],\n  limit:9999) {\n    count,\n    entities {\n      ... on NodeTournament{\n        nid\n        title\n        reservedSlot:fieldTournamentReservedSlot\n        size:fieldTournamentSize\n        platform:fieldTournamentPlatform\n        image:fieldTournamentImage{\n          mobile:derivative(style:CROP_2_1_720X360){\n            url\n          }\n          desktop:derivative(style:CROP_2_1_288X144){\n            url\n          }\n          widescreen:derivative(style:CROP_2_1_352X176){\n            url\n          }\n          fullhd:derivative(style:CROP_2_1_416X208){\n            url\n          }\n        }\n        game:fieldTournamentGame{\n          node:entity{\n            pegi:fieldGamePegi\n            image:fieldGameImage{\n              mobile:derivative(style:CROP_2_1_720X360){\n                url\n              }\n              desktop:derivative(style:CROP_2_1_288X144){\n                url\n              }\n              widescreen:derivative(style:CROP_2_1_352X176){\n                url\n              }\n              fullhd:derivative(style:CROP_2_1_416X208){\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TournamentCard = require('../TournamentCard');

var _TournamentCard2 = _interopRequireDefault(_TournamentCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function TournamentList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      nodeQuery = _ref$data.nodeQuery;

  if (error) {
    return _react2.default.createElement(
      'div',
      { className: 'notification is-danger' },
      'Une erreur est survenue pendant le chargement des tournois !!!'
    );
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-tournament-list' },
      _react2.default.createElement(
        'div',
        { className: 'columns is-multiline is-6  is-variable' },
        nodeQuery.entities.map(function (tournament, index) {
          return _react2.default.createElement(
            'div',
            { className: 'column is-one-third', key: tournament.nid },
            _react2.default.createElement(_TournamentCard2.default, {
              nid: tournament.nid,
              title: tournament.title,
              imgMobileUrl: tournament.image ? tournament.image.mobile.url : tournament.game.node.image.mobile.url,
              imgDesktopUrl: tournament.image ? tournament.image.desktop.url : tournament.game.node.image.desktop.url,
              imgWidescreenUrl: tournament.image ? tournament.image.widescreen.url : tournament.game.node.image.widescreen.url,
              imgFullhdUrl: tournament.image ? tournament.image.fullhd.url : tournament.game.node.image.fullhd.url,
              current: tournament.reservedSlot,
              size: tournament.size,
              platform: tournament.platform,
              pegi: tournament.game.node.pegi })
          );
        })
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'notification' },
    'Chargement des tournois en cours.'
  );
}

var tournaments = exports.tournaments = (0, _graphqlTag2.default)(_templateObject, process.env.EDITION_ID);

TournamentList.propTypes = {
  data: _propTypes2.default.object
};

exports.default = (0, _reactApollo.graphql)(tournaments)(TournamentList);

//# sourceMappingURL=index.js.map