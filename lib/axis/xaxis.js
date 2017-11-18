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

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var Xaxis = (function (_Component) {
  _inherits(Xaxis, _Component);

  function Xaxis(props) {
    _classCallCheck(this, Xaxis);

    _get(Object.getPrototypeOf(Xaxis.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Xaxis, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;
      var margins = _props.margins;
      var showXAxis = _props.showXAxis;
      var x = _props.x;
      var xAxisClassName = _props.xAxisClassName;
      var xDomain = _props.xDomain;
      var xRange = _props.xRange;
      var xRangeRoundBands = _props.xRangeRoundBands;
      var xScale = _props.xScale;
      var xOrient = _props.xOrient;
      var xTickOrient = _props.xTickOrient;
      var xTickPadding = _props.xTickPadding;
      var xInnerTickSize = _props.xInnerTickSize;
      var xOuterTickSize = _props.xOuterTickSize;
      var xTickFormat = _props.xTickFormat;
      var xTicks = _props.xTicks;
      var xLabel = _props.xLabel;
      var xLabelPosition = _props.xLabelPosition;
      var labelOffset = _props.labelOffset;
      var style = _props.style;
      var xWordWrap = _props.xWordWrap;
      var xGridAxisLineStyle = _props.xGridAxisLineStyle;
      var xRotateLabel = _props.xRotateLabel;

      var t;
      var axisLabel;

      if (!xRange) {
        xRange = [0, width - margins.left - margins.right];
      }

      if (xOrient === 'bottom') {
        // x - bottom
        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
      } else if (xOrient === 'top') {
        // x - top
        t = 'translate(0, 0)';
      }

      if (xLabel) {
        axisLabel = _react2['default'].createElement(_label2['default'], {
          height: height,
          width: width,
          margins: margins,
          labelTitle: xLabel,
          labelPosition: xLabelPosition,
          labelOffset: labelOffset,
          rangeRoundBands: xRangeRoundBands
        });
      }

      return _react2['default'].createElement(
        'g',
        { transform: t },
        _react2['default'].createElement(_axis2['default'], {
          height: height,
          width: width,
          margins: margins,
          showAxis: showXAxis,
          axisClassName: xAxisClassName,
          rangeRoundBands: xRangeRoundBands,
          type: 'x',
          proxy: x,
          domain: xDomain,
          range: xRange,
          scale: xScale,
          orient: xOrient,
          tickOrient: xTickOrient,
          tickFormat: xTickFormat,
          tickPadding: xTickPadding,
          innerTickSize: xInnerTickSize,
          outerTickSize: xOuterTickSize,
          ticks: xTicks,
          style: style,
          wordWrap: xWordWrap,
          gridAxisLineStyle: xGridAxisLineStyle,
          rotateLabel: xRotateLabel
        }),
        axisLabel
      );
    }
  }], [{
    key: 'defaultProps',
    value: Object.assign(_commonProps2['default'], {
      showXAxis: true,
      xAxisClassName: 'react-d3-core__axis__xAxis',
      xScale: 'linear',
      xOrient: 'bottom',
      xTickOrient: 'bottom',
      xLabelPosition: 'bottom',
      xTickPadding: 3,
      xInnerTickSize: 6,
      xOuterTickSize: 6
    }),
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      margins: PropTypes.object.isRequired,
      showXAxis: PropTypes.bool,
      x: PropTypes.func,
      xDomain: PropTypes.array,
      xRange: PropTypes.array,
      xScale: PropTypes.string.isRequired,
      xOrient: PropTypes.oneOf(['top', 'bottom']),
      xTickOrient: PropTypes.oneOf(['top', 'bottom']),
      xAxisClassName: PropTypes.string,
      xInnerTickSize: PropTypes.number,
      xOuterTickSize: PropTypes.number,
      xTickPadding: PropTypes.number,
      xTickFormat: PropTypes.func,
      xTicks: PropTypes.array,
      style: PropTypes.object,
      xWordWrap: PropTypes.bool,
      xGridAxisLineStyle: PropTypes.object,
      xRotateLabel: PropTypes.bool
    },
    enumerable: true
  }]);

  return Xaxis;
})(_react.Component);

exports['default'] = Xaxis;
module.exports = exports['default'];