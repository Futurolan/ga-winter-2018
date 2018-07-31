'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tournament = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\n  query tournament($nid:String!) {\n    node:nodeById(id: $nid) {\n      type {\n        id:targetId\n      }\n      ... on NodeTournament {\n        title\n        tournamentType:fieldTournamentType\n        platform:fieldTournamentPlatform\n        format:fieldTournamentFormat\n        cashPrizeTitle:fieldTournamentCashprizeTitle\n        cashPrizeLines:fieldTournamentCashprizeLines\n        description:fieldTournamentDescription{\n          value:processed\n        }\n        planning:fieldTournamentPlanning{\n          value:processed\n        }\n        rules:fieldTournamentRules{\n          description\n          entity{\n            ... on File{\n              url\n            }\n          }\n        }\n        image:fieldTournamentImage{\n          mobile:derivative(style:CROP_5_1_705X141){\n            url\n          }\n          desktop:derivative(style:CROP_5_1_960X192){\n            url\n          }\n          widescreen:derivative(style:CROP_5_1_1155X231){\n            url\n          }\n          fullhd:derivative(style:CROP_5_1_1345X269){\n            url\n          }\n        }\n        game:fieldTournamentGame{\n          node:entity{\n            pegi:fieldGamePegi\n            editor:fieldGameEditor\n            type:fieldGameType\n            image:fieldGameImage{\n              mobile:derivative(style:CROP_5_1_705X141){\n                url\n              }\n              desktop:derivative(style:CROP_5_1_960X192){\n                url\n              }\n              widescreen:derivative(style:CROP_5_1_1155X231){\n                url\n              }\n              fullhd:derivative(style:CROP_5_1_1345X269){\n                url\n              }\n            }\n          }\n        }\n        edition:fieldTournamentEdition{\n          nid:targetId\n        }\n      }\n    }\n  }\n\n'], ['\n\n  query tournament($nid:String!) {\n    node:nodeById(id: $nid) {\n      type {\n        id:targetId\n      }\n      ... on NodeTournament {\n        title\n        tournamentType:fieldTournamentType\n        platform:fieldTournamentPlatform\n        format:fieldTournamentFormat\n        cashPrizeTitle:fieldTournamentCashprizeTitle\n        cashPrizeLines:fieldTournamentCashprizeLines\n        description:fieldTournamentDescription{\n          value:processed\n        }\n        planning:fieldTournamentPlanning{\n          value:processed\n        }\n        rules:fieldTournamentRules{\n          description\n          entity{\n            ... on File{\n              url\n            }\n          }\n        }\n        image:fieldTournamentImage{\n          mobile:derivative(style:CROP_5_1_705X141){\n            url\n          }\n          desktop:derivative(style:CROP_5_1_960X192){\n            url\n          }\n          widescreen:derivative(style:CROP_5_1_1155X231){\n            url\n          }\n          fullhd:derivative(style:CROP_5_1_1345X269){\n            url\n          }\n        }\n        game:fieldTournamentGame{\n          node:entity{\n            pegi:fieldGamePegi\n            editor:fieldGameEditor\n            type:fieldGameType\n            image:fieldGameImage{\n              mobile:derivative(style:CROP_5_1_705X141){\n                url\n              }\n              desktop:derivative(style:CROP_5_1_960X192){\n                url\n              }\n              widescreen:derivative(style:CROP_5_1_1155X231){\n                url\n              }\n              fullhd:derivative(style:CROP_5_1_1345X269){\n                url\n              }\n            }\n          }\n        }\n        edition:fieldTournamentEdition{\n          nid:targetId\n        }\n      }\n    }\n  }\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PegiLogo = require('../PegiLogo');

var _PegiLogo2 = _interopRequireDefault(_PegiLogo);

var _GameType = require('../GameType');

var _GameType2 = _interopRequireDefault(_GameType);

var _TournamentType = require('../TournamentType');

var _TournamentType2 = _interopRequireDefault(_TournamentType);

var _Platform = require('../Platform');

var _Platform2 = _interopRequireDefault(_Platform);

var _Meta = require('../Meta');

var _Meta2 = _interopRequireDefault(_Meta);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function TournamentContent(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      node = _ref$data.node;

  if (error || node && node.type.id !== 'tournament' || node && node.edition.nid !== parseInt(process.env.EDITION_ID)) {
    return _react2.default.createElement(
      'div',
      { className: 'notification is-danger' },
      'Une erreur est survenue pendant le chargement du tournoi !!!'
    );
  }

  if (node) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-tournament-content' },
      _react2.default.createElement(_Meta2.default, { title: node.title, image: node.image ? node.image.fullhd.url : node.game.node.image.fullhd.url, description: 'Toutes les informations relative au tournoi ' + node.title }),
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
        { className: 'ga-tournament-content-image' },
        _react2.default.createElement(
          'figure',
          { className: 'image is-5by1' },
          _react2.default.createElement('img', { srcSet: (node.image ? node.image.mobile.url : node.game.node.image.mobile.url) + ' 705w, ' + (node.image ? node.image.desktop.url : node.game.node.image.desktop.url) + ' 960w, ' + (node.image ? node.image.widescreen.url : node.game.node.image.widescreen.url) + ' 1155w, ' + (node.image ? node.image.fullhd.url : node.game.node.image.fullhd.url) + ' 1345w' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pegi' },
          _react2.default.createElement(_PegiLogo2.default, { pegi: node.game.node.pegi })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'tags' },
        _react2.default.createElement(
          'span',
          { className: 'tag is-dark' },
          node.game.node.editor
        ),
        _react2.default.createElement(
          'span',
          { className: 'tag is-dark' },
          _react2.default.createElement(_GameType2.default, { type: node.game.node.type })
        ),
        _react2.default.createElement(
          'span',
          { className: 'tag is-dark' },
          _react2.default.createElement(_TournamentType2.default, { type: node.tournamentType })
        ),
        _react2.default.createElement(
          'span',
          { className: 'tag is-dark' },
          _react2.default.createElement(_Platform2.default, { platform: node.platform })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'div',
          { className: 'column is-8' },
          _react2.default.createElement(
            'div',
            { className: 'content has-text-justified' },
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: node.description.value } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel' },
            _react2.default.createElement(
              'p',
              { className: 'panel-heading has-background-primary has-text-white' },
              _react2.default.createElement('i', { className: 'fas fa-calendar-alt' }),
              '\xA0\xA0Planning'
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-block has-background-white' },
              _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: node.planning.value } })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'column is-4' },
          _react2.default.createElement(
            'div',
            { className: 'panel' },
            _react2.default.createElement(
              'div',
              { className: 'button is-primary is-fullwidth is-large' },
              'Acc\xE9der \xE0 la billeterie'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel' },
            _react2.default.createElement(
              'p',
              { className: 'panel-heading has-background-primary has-text-white' },
              _react2.default.createElement('i', { className: 'fas fa-ruler' }),
              '\xA0\xA0Format'
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-block has-background-white' },
              _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: node.format } })
            )
          ),
          node.cashPrizeTitle && node.cashPrizeLines.length > 0 && _react2.default.createElement(
            'div',
            { className: 'panel' },
            _react2.default.createElement(
              'p',
              { className: 'panel-heading has-background-primary has-text-white' },
              _react2.default.createElement('i', { className: 'fas fa-money-check' }),
              '\xA0\xA0',
              node.cashPrizeTitle
            ),
            _react2.default.createElement(
              'table',
              { className: 'table is-fullwidth' },
              _react2.default.createElement(
                'tbody',
                null,
                node.cashPrizeLines.map(function (cashPrizeLine, index) {
                  return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                      'td',
                      null,
                      cashPrizeLine
                    )
                  );
                })
              )
            )
          ),
          node.rules.length > 0 && _react2.default.createElement(
            'div',
            { className: 'panel' },
            _react2.default.createElement(
              'p',
              { className: 'panel-heading has-background-primary has-text-white' },
              _react2.default.createElement('i', { className: 'fas fa-file-pdf' }),
              '\xA0\xA0R\xE8glement'
            ),
            _react2.default.createElement(
              'table',
              { className: 'table is-fullwidth' },
              _react2.default.createElement(
                'tbody',
                null,
                node.rules.map(function (rule, index) {
                  return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: rule.entity.url, target: '_blank' },
                        _react2.default.createElement('i', { className: 'fas fa-download' }),
                        '\xA0\xA0',
                        rule.description
                      )
                    )
                  );
                })
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
    'Chargement du tournoi en cours'
  );
}

var tournament = exports.tournament = (0, _graphqlTag2.default)(_templateObject);

TournamentContent.propTypes = {
  data: _propTypes2.default.object
};

exports.default = (0, _reactApollo.graphql)(tournament, {
  options: function options(_ref2) {
    var nid = _ref2.nid;
    return { variables: { nid: nid } };
  }
})(TournamentContent);

//# sourceMappingURL=index.js.map