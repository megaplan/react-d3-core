"use strict";

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import {scale} from '../utils/scale';

export default class Axis extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    range: null,
    rangeRoundBands: null,
    domain: null,
    tickFormat: null,
    tickOrient: null,
    wordWrap: false,
    rotateLabel: false
  }

  static PropTypes = {
    showAxis: PropTypes.bool,
    type: PropTypes.string,
    orient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tickOrient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  }

  _mkTickAxis() {
    const {
      type,
      tickOrient,
      tickFormat,
      tickPadding,
      innerTickSize,
      outerTickSize,
      ticks
      } = this.props;

    var func = d3.svg.axis();

    func.scale(this._mkScale(this.props));

    if(tickOrient)
      func.orient(tickOrient);

    if(tickFormat)
      func.tickFormat(tickFormat);

    if(tickPadding)
      func.tickPadding(tickPadding);

    if(outerTickSize)
      func.outerTickSize(outerTickSize);

    if(innerTickSize)
      func.innerTickSize(innerTickSize);

    if(ticks)
      func.ticks.apply(null, ticks);

    return func;

  }

  _mkScale() {

    const {
      type
      } = this.props;

    var func = scale(this.props);

    return func;
  }

  wrap(text, maxWidth, _class) {
    text.each(function() {
      var text = d3.select(this),
        word,
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        textLine = text.text(),
        words = textLine.split(/\s+/),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");
      ctx.font = "1em";
      const width = Math.round(ctx.measureText(textLine).width);
      var wordLines = [];
      var wordLine = "";
      if(maxWidth < width) {
        words.forEach((_word) => {
          const wordWidth = Math.round(ctx.measureText(_word + " ").width)
          if(maxWidth < wordWidth) {
            maxWidth = wordWidth
          }
        })
        for(let i = 0; i <= words.length; i++) {
          const word = words[i]
          if(word === undefined) {
            wordLines.push(wordLine)
            break
          }
          if(Math.round(ctx.measureText(`${wordLine} ${word}`).width) <= maxWidth) {
            wordLine += ` ${word}`
          } else {
            wordLines.push(wordLine)
            wordLine = word
          }
        }
      } else {
        wordLines.push(textLine)
      }
      wordLines.forEach((word) => {
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      })
    });
  }


  render() {

    const {
      showAxis,
      gridAxisClassName,
      axisClassName,
      type,
      style,
      wordWrap,
      gridAxisLineStyle,
      width,
      margins,
      rotateLabel
      } = this.props;

    var axisGroup = ReactFauxDOM.createElement('g');

    if(type === 'x')
      var axisClasses = `${axisClassName} axis x`
    else if(type === 'y')
      var axisClasses = `${axisClassName} axis y`
    else if(type === 'gridx' || type === 'gridy')
      var axisClasses = `${gridAxisClassName} grid-axis`

    axisGroup.setAttribute('class', axisClasses);

    var axisDom = d3.select(axisGroup);

    axisDom.call(this._mkTickAxis());

    if(!showAxis) {
      axisDom.selectAll(".grid-axis .tick text")
        .style("opacity", "0")

      if(type === 'gridx' || type === 'gridy') {
        // hide domain in grids
        axisDom.selectAll(".grid-axis .domain")
          .style("opacity", "0")
      }
    }

    var gridAxixFill = 'none',
      gridAxixStroke = '#000',
      gridAxixStrokeWidth = '1.5px',
      gridAxixOpacity = .2;

    if(gridAxisLineStyle) {
      if(gridAxisLineStyle.gridAxixFill) {
        gridAxixFill = gridAxisLineStyle.gridAxixFill
      }
      if(gridAxisLineStyle.gridAxixStroke) {
        gridAxixStroke = gridAxisLineStyle.gridAxixStroke
      }
      if(gridAxisLineStyle.gridAxixStrokeWidth) {
        gridAxixStrokeWidth = gridAxisLineStyle.gridAxixStrokeWidth
      }
      if(gridAxisLineStyle.gridAxixOpacity) {
        gridAxixOpacity = gridAxisLineStyle.gridAxixOpacity
      }
    }

    // basic styles
    axisDom.selectAll('.axis path')
      .style('fill', gridAxixFill)
      .style('stroke', gridAxixStroke)
      .style('shape-rendering', 'crispEdges');

    axisDom.selectAll('.axis line')
      .style('fill', gridAxixFill)
      .style('stroke', gridAxixStroke)
      .style('shape-rendering', 'crispEdges');

    axisDom.selectAll('.grid-axis line')
      .style('opacity', gridAxixOpacity)
      .style('fill', gridAxixFill)
      .style('stroke', gridAxixStroke)
      .style('stroke-width', gridAxixStrokeWidth);

    axisDom.selectAll('.axis path')
      .style('display', 'none')

    var axisText = axisDom.selectAll('.axis text');

    if(style) {
      for(var key in style) {
        axisText.style(key, style[key]);
      }
    }

    if(wordWrap) {
      var maxTextWith = (width - margins.left - margins.right) / axisDom.selectAll('.axis text')[0].length - 1;
      axisDom.selectAll('.axis text').call(this.wrap, maxTextWith, this);
      if(rotateLabel) {
        axisDom.selectAll('.axis text').attr("transform", function(d) {
          return "rotate(45)"
        }).style('text-anchor', 'left')
      }
    }

    return axisDom.node().toReact();
  }
}
