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

var _utilsScale = require('../utils/scale');

var Axis = (function (_Component) {
  _inherits(Axis, _Component);

  function Axis(props) {
    _classCallCheck(this, Axis);

    _get(Object.getPrototypeOf(Axis.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Axis, [{
    key: '_mkTickAxis',
    value: function _mkTickAxis() {
      var _props = this.props;
      var type = _props.type;
      var tickOrient = _props.tickOrient;
      var tickFormat = _props.tickFormat;
      var tickPadding = _props.tickPadding;
      var innerTickSize = _props.innerTickSize;
      var outerTickSize = _props.outerTickSize;
      var ticks = _props.ticks;

      var func = _d32['default'].svg.axis();

      func.scale(this._mkScale(this.props));

      if (tickOrient) func.orient(tickOrient);

      if (tickFormat) func.tickFormat(tickFormat);

      if (tickPadding) func.tickPadding(tickPadding);

      if (outerTickSize) func.outerTickSize(outerTickSize);

      if (innerTickSize) func.innerTickSize(innerTickSize);

      if (ticks) func.ticks.apply(null, ticks);

      return func;
    }
  }, {
    key: '_mkScale',
    value: function _mkScale() {
      var type = this.props.type;

      var func = (0, _utilsScale.scale)(this.props);

      return func;
    }
  }, {
    key: 'wrap',
    value: function wrap(text, maxWidth, _class) {
      text.each(function () {
        var text = _d32['default'].select(this),
            word,
            lineNumber = 0,
            lineHeight = 1.1,
            // ems
        y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            textLine = text.text(),
            words = textLine.split(/\s+/),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        var c = document.createElement("canvas");
        var ctx = c.getContext("2d");
        ctx.font = "1em";
        var width = Math.round(ctx.measureText(textLine).width);
        var wordLines = [];
        var wordLine = "";
        if (maxWidth < width) {
          words.forEach(function (_word) {
            var wordWidth = Math.round(ctx.measureText(_word + " ").width);
            if (maxWidth < wordWidth) {
              maxWidth = wordWidth;
            }
          });
          for (var i = 0; i <= words.length; i++) {
            var _word2 = words[i];
            if (_word2 === undefined) {
              wordLines.push(wordLine);
              break;
            }
            if (Math.round(ctx.measureText(wordLine + ' ' + _word2).width) <= maxWidth) {
              wordLine += ' ' + _word2;
            } else {
              wordLines.push(wordLine);
              wordLine = _word2;
            }
          }
        } else {
          wordLines.push(textLine);
        }
        wordLines.forEach(function (word) {
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var showAxis = _props2.showAxis;
      var gridAxisClassName = _props2.gridAxisClassName;
      var axisClassName = _props2.axisClassName;
      var type = _props2.type;
      var style = _props2.style;
      var wordWrap = _props2.wordWrap;
      var gridAxisLineStyle = _props2.gridAxisLineStyle;
      var width = _props2.width;
      var margins = _props2.margins;
      var rotateLabel = _props2.rotateLabel;

      var axisGroup = _reactFauxDom2['default'].createElement('g');

      if (type === 'x') var axisClasses = axisClassName + ' axis x';else if (type === 'y') var axisClasses = axisClassName + ' axis y';else if (type === 'gridx' || type === 'gridy') var axisClasses = gridAxisClassName + ' grid-axis';

      axisGroup.setAttribute('class', axisClasses);

      var axisDom = _d32['default'].select(axisGroup);

      axisDom.call(this._mkTickAxis());

      if (!showAxis) {
        axisDom.selectAll(".grid-axis .tick text").style("opacity", "0");

        if (type === 'gridx' || type === 'gridy') {
          // hide domain in grids
          axisDom.selectAll(".grid-axis .domain").style("opacity", "0");
        }
      }

      var gridAxixFill = 'none',
          gridAxixStroke = '#000',
          gridAxixStrokeWidth = '1.5px',
          gridAxixOpacity = .2;

      if (gridAxisLineStyle) {
        if (gridAxisLineStyle.gridAxixFill) {
          gridAxixFill = gridAxisLineStyle.gridAxixFill;
        }
        if (gridAxisLineStyle.gridAxixStroke) {
          gridAxixStroke = gridAxisLineStyle.gridAxixStroke;
        }
        if (gridAxisLineStyle.gridAxixStrokeWidth) {
          gridAxixStrokeWidth = gridAxisLineStyle.gridAxixStrokeWidth;
        }
        if (gridAxisLineStyle.gridAxixOpacity) {
          gridAxixOpacity = gridAxisLineStyle.gridAxixOpacity;
        }
      }

      // basic styles
      axisDom.selectAll('.axis path').style('fill', gridAxixFill).style('stroke', gridAxixStroke).style('shape-rendering', 'crispEdges');

      axisDom.selectAll('.axis line').style('fill', gridAxixFill).style('stroke', gridAxixStroke).style('shape-rendering', 'crispEdges');

      axisDom.selectAll('.grid-axis line').style('opacity', gridAxixOpacity).style('fill', gridAxixFill).style('stroke', gridAxixStroke).style('stroke-width', gridAxixStrokeWidth);

      axisDom.selectAll('.axis path').style('display', 'none');

      var axisText = axisDom.selectAll('.axis text');

      if (style) {
        for (var key in style) {
          axisText.style(key, style[key]);
        }
      }

      if (wordWrap) {
        var maxTextWith = (width - margins.left - margins.right) / axisDom.selectAll('.axis text')[0].length - 10;
        axisDom.selectAll('.axis text').call(this.wrap, maxTextWith, this);
        if (rotateLabel) {
          axisDom.selectAll('.axis text').attr("transform", function (d) {
            return "rotate(45)";
          }).style('text-anchor', 'left');
        }
      }

      return axisDom.node().toReact();
    }
  }], [{
    key: 'defaultProps',
    value: {
      range: null,
      rangeRoundBands: null,
      domain: null,
      tickFormat: null,
      tickOrient: null,
      wordWrap: false,
      rotateLabel: false
    },
    enumerable: true
  }, {
    key: 'PropTypes',
    value: {
      showAxis: PropTypes.bool,
      type: PropTypes.string,
      orient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
      tickOrient: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
    },
    enumerable: true
  }]);

  return Axis;
})(_react.Component);

exports['default'] = Axis;
module.exports = exports['default'];