'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partnerCategories = exports.partners = undefined;

var _templateObject = _taggedTemplateLiteral(['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"field_partner_edition",value:["', '"]},\n      {field:"type",value:["partner"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"field_weight",direction:ASC}]\n  ) {\n    entities{\n      ... on NodePartner{\n        nid\n        image:fieldPartnerImage{\n          derivative(style:PARTNER_150X150){\n            url\n          }\n        }\n        url:fieldPartnerUrl\n        category:fieldPartnerCategory{\n          entity{\n            ... on NodePartnerCategory{\n              nid\n            }\n          }\n        }\n      }\n    }\n  }\n}'], ['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"field_partner_edition",value:["', '"]},\n      {field:"type",value:["partner"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"field_weight",direction:ASC}]\n  ) {\n    entities{\n      ... on NodePartner{\n        nid\n        image:fieldPartnerImage{\n          derivative(style:PARTNER_150X150){\n            url\n          }\n        }\n        url:fieldPartnerUrl\n        category:fieldPartnerCategory{\n          entity{\n            ... on NodePartnerCategory{\n              nid\n            }\n          }\n        }\n      }\n    }\n  }\n}']),
    _templateObject2 = _taggedTemplateLiteral(['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"type",value:["partner_category"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"field_weight",direction:ASC}],\n  ) {\n    entities{\n      ... on NodePartnerCategory{\n        title\n        nid\n      }\n    }\n  }\n}'], ['\n{\n  nodeQuery(\n  filter:{\n    conditions:[\n      {field:"type",value:["partner_category"],operator:EQUAL},\n      {field:"status",value:["1"]}\n    ]},\n  sort:[{field:"field_weight",direction:ASC}],\n  ) {\n    entities{\n      ... on NodePartnerCategory{\n        title\n        nid\n      }\n    }\n  }\n}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PartnerCategories = require('../PartnerCategories');

var _PartnerCategories2 = _interopRequireDefault(_PartnerCategories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PartnerList(_ref) {
  var _ref$partnerCategorie = _ref.partnerCategories,
      loading = _ref$partnerCategorie.loading,
      error = _ref$partnerCategorie.error,
      partnerCategories = _ref$partnerCategorie.nodeQuery,
      _ref$partners = _ref.partners,
      loading2 = _ref$partners.loading2,
      error2 = _ref$partners.error2,
      partners = _ref$partners.nodeQuery;

  if (error || error2) {
    return _react2.default.createElement(
      'div',
      { className: 'notification is-danger' },
      'Une erreur est survenue pendant le chargement des partenaires !!!'
    );
  }

  if (partnerCategories && partnerCategories.entities && partnerCategories.entities.length > 0 && partners && partners.entities && partners.entities.length > 0) {
    return _react2.default.createElement(
      'div',
      { className: 'ga-partner-list' },
      _react2.default.createElement(_PartnerCategories2.default, { categories: partnerCategories.entities, partners: partners.entities })
    );
  }

  return _react2.default.createElement(
    'div',
    { className: 'notification' },
    'Chargement des partenaires en cours.'
  );
}

var partners = exports.partners = (0, _graphqlTag2.default)(_templateObject, process.env.EDITION_ID);

var partnerCategories = exports.partnerCategories = (0, _graphqlTag2.default)(_templateObject2);

PartnerList.propTypes = {
  partnerCategories: _propTypes2.default.object,
  partners: _propTypes2.default.object
};

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(partnerCategories, { name: 'partnerCategories' }), (0, _reactApollo.graphql)(partners, { name: 'partners' }))(PartnerList);

//# sourceMappingURL=index.js.map