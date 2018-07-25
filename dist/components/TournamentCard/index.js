'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/link');

var _link2 = _interopRequireDefault(_link);

var _TournamentSlotProgress = require('../TournamentSlotProgress');

var _TournamentSlotProgress2 = _interopRequireDefault(_TournamentSlotProgress);

var _Platform = require('../Platform');

var _Platform2 = _interopRequireDefault(_Platform);

var _PegiLogo = require('../PegiLogo');

var _PegiLogo2 = _interopRequireDefault(_PegiLogo);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TournamentCard = function TournamentCard(props) {
  return _react2.default.createElement(
    'div',
    { className: 'ga-tournament-card card has-ribbon is-shadowless' },
    _react2.default.createElement(
      'div',
      { className: 'ribbon  is-size-6 has-text-white' },
      _react2.default.createElement(_Platform2.default, { platform: props.platform }),
      ' '
    ),
    _react2.default.createElement(
      _link2.default,
      { as: '/tournament/' + props.nid, href: '/tournament-single?nid=' + props.nid },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'card-image' },
          _react2.default.createElement(
            'figure',
            { className: 'image is-2by1' },
            _react2.default.createElement('img', {
              srcSet: props.imgDesktopUrl + ' 288w, ' + props.imgWidescreenUrl + ' 352w, ' + props.imgFullhdUrl + ' 416w, ' + props.imgMobileUrl + ' 720w',
              sizes: '(min-width: 1408px) 416px,(min-width: 1216px) 352px, (min-width: 769px) 288px,  100vw',
              alt: props.placeHolder })
          ),
          _react2.default.createElement(
            'div',
            { className: 'pegi' },
            _react2.default.createElement(_PegiLogo2.default, { pegi: props.pegi })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-content ' },
          _react2.default.createElement(
            'div',
            { className: 'content has-text-weight-semibold' },
            _react2.default.createElement(
              'h2',
              { className: 'is-size-5' },
              props.title
            ),
            _react2.default.createElement(_TournamentSlotProgress2.default, { size: props.size, current: props.current })
          )
        )
      )
    )
  );
};

TournamentCard.propTypes = {
  nid: _propTypes2.default.number,
  title: _propTypes2.default.string,
  imgFullhdUrl: _propTypes2.default.string,
  imgWidescreenUrl: _propTypes2.default.string,
  imgDesktopUrl: _propTypes2.default.string,
  imgMobileUrl: _propTypes2.default.string,
  placeHolder: _propTypes2.default.string,
  size: _propTypes2.default.number,
  current: _propTypes2.default.number,
  platform: _propTypes2.default.string,
  pegi: _propTypes2.default.string
};

exports.default = TournamentCard;

//# sourceMappingURL=index.js.map