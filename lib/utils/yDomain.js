'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.yDomain = yDomain;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

function yDomain(props, stack) {
  var data = props.data;
  var chartSeries = props.chartSeries;
  var y = props.y;
  var yDomain = props.yDomain;

  if (yDomain) return yDomain;

  if (stack) {
    // stack
    var max = 0;
    var min = 0;

    data.forEach(function (d) {
      var totalTop = 0;
      var totalBottom = 0;

      chartSeries.forEach(function (sd) {
        var field = sd.field;

        if (d[field] > 0) {
          totalTop += y(d[field]);
        } else if (d[field] < 0) {
          totalBottom += y(d[field]);
        }
      });

      if (totalTop > max) max = totalTop;
      if (totalBottom < min) min = totalBottom;
    });

    return [min, max];
  } else {
    // not stack, single
    var domainArr = chartSeries.map(function (d) {
      var field = d.field;
      var extent = _d32['default'].extent(data, function (dt) {
        return y(dt[field]);
      });

      return extent;
    });

    return _d32['default'].extent([].concat.apply([], domainArr));
  }
}