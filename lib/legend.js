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

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var Legend = (function (_Component) {
  _inherits(Legend, _Component);

  function Legend(props) {
    _classCallCheck(this, Legend);

    _get(Object.getPrototypeOf(Legend.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Legend, [{
    key: '_series',
    value: function _series(props) {
      var chartSeries = props.chartSeries;
      var categoricalColors = props.categoricalColors;

      categoricalColors = categoricalColors || _d32['default'].scale.category10();

      var series = chartSeries.map(function (f, i) {

        // set a color if not set
        f.color = f.color || categoricalColors(i);

        // set name if not set
        f.name = f.name || f.field;

        return {
          color: f.color,
          name: f.name,
          field: f.field
        };
      });

      return series;
    }
  }, {
    key: '_mkLegend',
    value: function _mkLegend(dom) {
      var _props = this.props;
      var width = _props.width;
      var margins = _props.margins;
      var chartSeries = _props.chartSeries;
      var legendClassName = _props.legendClassName;
      var legendPosition = _props.legendPosition;
      var legendOffset = _props.legendOffset;

      var legendArea = _d32['default'].select(dom);
      var series = this._series(this.props);

      // make legends
      var legend = legendArea.selectAll('div').data(series).enter().append("div").attr("class", legendClassName + ' legend')
      // .style("width", 120)
      .style("height", 20).style("padding", 5).style("background-color", '#EEE').style("display", "inline-block");

      var rect = legend.append("div").style("width", 18).style("height", 18).style("background-color", function (d) {
        return d.color;
      }).style("float", legendPosition);

      var text = legend.append("div")
      // .style("width", 92)
      .style("padding-left", 5).style("padding-right", 5).text(function (d) {
        return d.name;
      }).style("float", legendPosition);

      return legendArea;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var legendClassName = _props2.legendClassName;
      var width = _props2.width;
      var height = _props2.height;

      var legendGroup = _reactFauxDom2['default'].createElement('div');
      var legendClasses = legendClassName + ' legend';

      legendGroup.setAttribute('class', legendClasses);
      legendGroup.style.width = width;
      legendGroup.style.textAlign = 'center';

      var legendDom = this._mkLegend(legendGroup);

      return legendDom.node().toReact();
    }
  }], [{
    key: 'defaultProps',
    value: Object.assign(_commonProps2['default'], {
      legendHeight: 50,
      legendPosition: 'left',
      legendOffset: 90,
      legendClassName: 'react-d3-core__legend'
    }),
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      width: PropTypes.number.isRequired,
      margins: PropTypes.object.isRequired,
      chartSeries: PropTypes.array.isRequired,
      legendOffset: PropTypes.number.isRequired,
      legendClassName: PropTypes.string.isRequired,
      legendPosition: PropTypes.oneOf(['left', 'right']).isRequired
    },
    enumerable: true
  }]);

  return Legend;
})(_react.Component);

exports['default'] = Legend;
module.exports = exports['default'];