'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeInfo = function HomeInfo() {
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
                  'Nouvelle \xE9dition'
                )
              ),
              _react2.default.createElement(
                'p',
                { className: 'content has-text-white' },
                'La Gamers Assembly 2018 est de retour du 31 mars au 2 avril 2018 au Parc des Expositions de Poitiers !'
              )
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
                  'Inscriptions'
                )
              ),
              _react2.default.createElement(
                'p',
                { className: 'content has-text-white' },
                'Les inscriptions pour la Gamers Assembly 2018 ouvriront le ',
                _react2.default.createElement(
                  'b',
                  null,
                  '22 d\xE9cembre 2017 \xE0 20h'
                )
              )
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
                  'R\xE9seaux sociaux'
                )
              ),
              _react2.default.createElement(
                'p',
                { className: 'content has-text-white' },
                'Rejoignez-nous !',
                _react2.default.createElement('br', null),
                'Twitter : ',
                _react2.default.createElement(
                  'a',
                  { href: '' },
                  '@GamersAssembly'
                ),
                _react2.default.createElement('br', null),
                'Facebook : ',
                _react2.default.createElement(
                  'a',
                  { href: '' },
                  'Gamers Assembly'
                )
              )
            )
          )
        )
      )
    )
  );
};

exports.default = HomeInfo;

//# sourceMappingURL=index.js.map