"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var Label = (function (_Component) {
  _inherits(Label, _Component);

  function Label(props) {
    _classCallCheck(this, Label);

    _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Label, [{
    key: '_mkLabel',
    value: function _mkLabel(dom) {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;
      var margins = _props.margins;
      var labelOffset = _props.labelOffset;
      var labelTitle = _props.labelTitle;
      var labelPosition = _props.labelPosition;
      var vTransform = _props.vTransform;
      var hTransform = _props.hTransform;
      var textAnchor = _props.textAnchor;

      var labelDom = _d32['default'].select(dom);
      var fixWidth = width - margins.left - margins.right;
      var fixHeight = height - margins.top - margins.bottom;

      if (labelPosition === 'top') {

        labelDom.attr('transform', hTransform).attr('y', -labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
      } else if (labelPosition === 'bottom') {

        labelDom.attr('transform', hTransform).attr('y', +labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
      } else if (labelPosition === 'left') {

        labelDom.attr('transform', vTransform).attr('y', -labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
      } else if (labelPosition === 'right') {

        labelDom.attr('transform', vTransform).attr('y', +labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
      }

      return labelDom;
    }
  }, {
    key: 'render',
    value: function render() {
      var labelClassName = this.props.labelClassName;

      var labelText = _reactFauxDom2['default'].createElement('text');
      var labelClasses = labelClassName + ' label';
      labelText.setAttribute('class', labelClasses);

      var labelDom = this._mkLabel(labelText);

      return labelDom.node().toReact();
    }
  }], [{
    key: 'defaultProps',
    value: Object.assign(_commonProps2['default'], {
      hTransform: 'rotate(0)',
      vTransform: 'rotate(270)',
      labelTitle: 'label title',
      labelPosition: 'bottom',
      labelOffset: 40,
      textAnchor: 'middle',
      labelClassName: 'react-d3-core__label'
    }),
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      margins: PropTypes.object.isRequired,
      hTransform: PropTypes.string,
      vTransform: PropTypes.string,
      labelTitle: PropTypes.string,
      labelPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
      labelOffset: PropTypes.number,
      textAnchor: PropTypes.string,
      labelClassName: PropTypes.string
    },
    enumerable: true
  }]);

  return Label;
})(_react.Component);

exports['default'] = Label;
module.exports = exports['default'];