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

var _axisAxis = require('../axis/axis');

var _axisAxis2 = _interopRequireDefault(_axisAxis);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var Grid = (function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;
      var margins = _props.margins;
      var type = _props.type;
      var gridAxisClassName = _props.gridAxisClassName;
      var xRangeRoundBands = _props.xRangeRoundBands;
      var x = _props.x;
      var xDomain = _props.xDomain;
      var xRange = _props.xRange;
      var xScale = _props.xScale;
      var yRangeRoundBands = _props.yRangeRoundBands;
      var y = _props.y;
      var yDomain = _props.yDomain;
      var yRange = _props.yRange;
      var yScale = _props.yScale;
      var gridAxisLineStyle = _props.gridAxisLineStyle;

      var gridAxis;
      var t;

      if (!yRange) {
        yRange = [height - margins.top - margins.bottom, 0];
      }

      if (!xRange) {
        xRange = [0, width - margins.left - margins.right];
      }

      if (type === 'x') {
        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
        var tickSize = height - margins.top - margins.bottom;

        // if grid axis don't pass customize ticks.
        gridAxis = _react2['default'].createElement(_axisAxis2['default'], {
          height: height,
          width: width,
          margins: margins,
          type: 'gridx',
          showAxis: false,
          gridAxisClassName: gridAxisClassName,
          rangeRoundBands: xRangeRoundBands,
          tickOrient: 'bottom',
          orient: 'bottom',
          outerTickSize: 0,
          tickPadding: 10,
          tickFormat: null,
          innerTickSize: -tickSize,
          proxy: x,
          domain: xDomain,
          range: xRange,
          scale: xScale,
          gridAxisLineStyle: gridAxisLineStyle
        });
      } else if (type === 'y') {
        t = 'translate(0, 0)';
        var tickSize = width - margins.left - margins.right;

        // if grid axis don't pass customize ticks.
        gridAxis = _react2['default'].createElement(_axisAxis2['default'], {
          height: height,
          width: width,
          margins: margins,
          type: 'gridy',
          showAxis: false,
          gridAxisClassName: gridAxisClassName,
          rangeRoundBands: yRangeRoundBands,
          tickOrient: 'left',
          orient: 'left',
          outerTickSize: 0,
          tickPadding: 10,
          innerTickSize: -tickSize,
          tickFormat: null,
          proxy: y,
          scale: yScale,
          domain: yDomain,
          range: yRange,
          gridAxisLineStyle: gridAxisLineStyle
        });
      }

      return _react2['default'].createElement(
        'g',
        { transform: t },
        gridAxis
      );
    }
  }], [{
    key: 'defaultProps',
    value: Object.assign(_commonProps2['default'], {
      type: 'x',
      gridAxisClassName: 'react-d3-core__grid_axis'
    }),
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      margins: PropTypes.object.isRequired,
      type: PropTypes.oneOf(['x', 'y']).isRequired,
      gridAxisClassName: PropTypes.string,
      x: PropTypes.func,
      xDomain: PropTypes.array,
      xRange: PropTypes.array,
      xScale: PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
      xRangeRoundBands: PropTypes.object,
      y: PropTypes.func,
      yDomain: PropTypes.array,
      yRange: PropTypes.array,
      yScale: PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
      yRangeRoundBands: PropTypes.object,
      gridAxisLineStyle: PropTypes.object
    },
    enumerable: true
  }]);

  return Grid;
})(_react.Component);

exports['default'] = Grid;
module.exports = exports['default'];