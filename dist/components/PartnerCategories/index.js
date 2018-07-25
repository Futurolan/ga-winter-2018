'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PartnerLogo = require('../PartnerLogo');

var _PartnerLogo2 = _interopRequireDefault(_PartnerLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PartnerCategories = function (_React$Component) {
  _inherits(PartnerCategories, _React$Component);

  function PartnerCategories() {
    _classCallCheck(this, PartnerCategories);

    return _possibleConstructorReturn(this, (PartnerCategories.__proto__ || Object.getPrototypeOf(PartnerCategories)).apply(this, arguments));
  }

  _createClass(PartnerCategories, [{
    key: 'createPartners',
    value: function createPartners(categoryId) {
      var buildPartners = [];

      for (var index in this.props.partners) {
        var partner = this.props.partners[index];
        if (partner.category.entity.nid === categoryId) {
          buildPartners.push(_react2.default.createElement(
            'div',
            { key: partner.nid, className: 'column is-2-desktop is-4-tablet' },
            _react2.default.createElement(_PartnerLogo2.default, {
              imageUrl: partner.image.derivative.url, url: partner.url })
          ));
        }
      }
      return buildPartners;
    }
  }, {
    key: 'createCategories',
    value: function createCategories() {
      var buildCategories = [];
      for (var index in this.props.categories) {
        var category = this.props.categories[index];
        var buildPartners = this.createPartners(category.nid);
        if (buildPartners.length > 0) {
          buildCategories.push(_react2.default.createElement(
            'div',
            { key: category.nid, className: 'section' },
            _react2.default.createElement(
              'h2',
              { className: 'category title is-size-5 has-text-weight-light is-italic' },
              _react2.default.createElement(
                'span',
                null,
                category.title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'columns is-multiline is-vcentered is-centered ' },
              buildPartners
            )
          ));
        }
      }
      return buildCategories;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'partner-categories has-text-centered' },
        this.createCategories()
      );
    }
  }]);

  return PartnerCategories;
}(_react2.default.Component);

PartnerCategories.propTypes = {
  categories: _propTypes2.default.array,
  partners: _propTypes2.default.array
};

exports.default = PartnerCategories;

//# sourceMappingURL=index.js.map