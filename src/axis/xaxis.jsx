"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import Axis from './axis';
import Label from './label';
import CommonProps from '../commonProps';

export default class Xaxis extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    showXAxis: true,
    xAxisClassName: 'react-d3-core__axis__xAxis',
    xScale: 'linear',
    xOrient: 'bottom',
    xTickOrient: 'bottom',
    xLabelPosition: 'bottom',
    xTickPadding: 3,
    xInnerTickSize: 6,
    xOuterTickSize: 6
  })

  static propTypes = {
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
  }

  render() {
    var {
      height,
      width,
      margins,
      showXAxis,
      x,
      xAxisClassName,
      xDomain,
      xRange,
      xRangeRoundBands,
      xScale,
      xOrient,
      xTickOrient,
      xTickPadding,
      xInnerTickSize,
      xOuterTickSize,
      xTickFormat,
      xTicks,
      xLabel,
      xLabelPosition,
      labelOffset,
      style,
      xWordWrap,
      xGridAxisLineStyle,
      xRotateLabel
      } = this.props;

    var t;
    var axisLabel;

    if(!xRange) {
      xRange = [0, width - margins.left - margins.right];
    }

    if(xOrient === 'bottom') {
      // x - bottom
      t = `translate(0, ${height - margins.bottom - margins.top})`;
    } else if(xOrient === 'top') {
      // x - top
      t = `translate(0, 0)`;
    }

    if(xLabel) {
      axisLabel = <Label
        height={height}
        width={width}
        margins={margins}
        labelTitle={xLabel}
        labelPosition={xLabelPosition}
        labelOffset={labelOffset}
        rangeRoundBands={xRangeRoundBands}
      />
    }

    return (
      <g transform={t}>
        <Axis
          height={height}
          width={width}
          margins={margins}
          showAxis={showXAxis}
          axisClassName={xAxisClassName}
          rangeRoundBands={xRangeRoundBands}
          type="x"
          proxy={x}
          domain={xDomain}
          range={xRange}
          scale={xScale}
          orient={xOrient}
          tickOrient={xTickOrient}
          tickFormat={xTickFormat}
          tickPadding={xTickPadding}
          innerTickSize={xInnerTickSize}
          outerTickSize={xOuterTickSize}
          ticks={xTicks}
          style={style}
          wordWrap={xWordWrap}
          gridAxisLineStyle={xGridAxisLineStyle}
          rotateLabel={xRotateLabel}
        />
        {axisLabel}
      </g>
    )
  }
}
