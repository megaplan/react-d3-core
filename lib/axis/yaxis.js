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

var Yaxis = (function (_Component) {
  _inherits(Yaxis, _Component);

  function Yaxis(props) {
    _classCallCheck(this, Yaxis);

    _get(Object.getPrototypeOf(Yaxis.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Yaxis, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var width = _props.width;
      var height = _props.height;
      var margins = _props.margins;
      var y = _props.y;
      var yAxisClassName = _props.yAxisClassName;
      var yDomain = _props.yDomain;
      var yRange = _props.yRange;
      var yRangeRoundBands = _props.yRangeRoundBands;
      var yScale = _props.yScale;
      var yOrient = _props.yOrient;
      var yTickOrient = _props.yTickOrient;
      var yTickFormat = _props.yTickFormat;
      var yTickPadding = _props.yTickPadding;
      var yInnerTickSize = _props.yInnerTickSize;
      var yOuterTickSize = _props.yOuterTickSize;
      var yTicks = _props.yTicks;
      var yLabel = _props.yLabel;
      var yLabelPosition = _props.yLabelPosition;
      var labelOffset = _props.labelOffset;
      var showYAxis = _props.showYAxis;
      var style = _props.style;
      var yGridAxisLineStyle = _props.yGridAxisLineStyle;

      var t;
      var axisLabel;

      if (!yRange) {
        yRange = [height - margins.top - margins.bottom, 0];
      }

      if (yOrient === 'right') {
        // y - right
        t = 'translate(' + (width - margins.right - margins.left) + ', 0)';
      } else if (yOrient === 'left') {
        // y - left
        t = 'translate(0, 0)';
      }

      if (yLabel) {
        axisLabel = _react2['default'].createElement(_label2['default'], {
          height: height,
          width: width,
          margins: margins,
          labelTitle: yLabel,
          labelPosition: yLabelPosition,
          labelOffset: labelOffset
        });
      }

      return _react2['default'].createElement(
        'g',
        { transform: t },
        _react2['default'].createElement(_axis2['default'], {
          height: height,
          width: width,
          margins: margins,
          showAxis: showYAxis,
          axisClassName: yAxisClassName,
          rangeRoundBands: yRangeRoundBands,
          type: 'y',
          proxy: y,
          domain: yDomain,
          range: yRange,
          scale: yScale,
          orient: yOrient,
          tickOrient: yTickOrient,
          tickFormat: yTickFormat,
          tickPadding: yTickPadding,
          innerTickSize: yInnerTickSize,
          outerTickSize: yOuterTickSize,
          ticks: yTicks,
          style: style,
          gridAxisLineStyle: yGridAxisLineStyle
        }),
        axisLabel
      );
    }
  }], [{
    key: 'defaultProps',
    value: Object.assign(_commonProps2['default'], {
      showYAxis: true,
      yAxisClassName: 'react-d3-core__axis__yAxis',
      yScale: 'linear',
      yOrient: 'left',
      yTickOrient: 'left',
      yLabelPosition: 'left',
      yTickPadding: 3,
      yInnerTickSize: 6,
      yOuterTickSize: 6
    }),
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      margins: PropTypes.object.isRequired,
      showXAxis: PropTypes.bool,
      y: PropTypes.func,
      yDomain: PropTypes.array,
      yRange: PropTypes.array,
      yScale: PropTypes.string.isRequired,
      yOrient: PropTypes.oneOf(['left', 'right']),
      yTickOrient: PropTypes.oneOf(['left', 'right']),
      yAxisClassName: PropTypes.string,
      yInnerTickSize: PropTypes.number,
      yOuterTickSize: PropTypes.number,
      yTickPadding: PropTypes.number,
      yTickFormat: PropTypes.func,
      yTicks: PropTypes.array,
      style: PropTypes.object
    },
    enumerable: true
  }]);

  return Yaxis;
})(_react.Component);

exports['default'] = Yaxis;
module.exports = exports['default'];