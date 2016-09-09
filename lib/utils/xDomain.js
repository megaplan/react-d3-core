'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.xDomain = xDomain;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

function xDomain(props) {
  var data = props.data;
  var x = props.x;
  var xScale = props.xScale;
  var xDomain = props.xDomain;

  if (xDomain) return xDomain;

  if (xScale === 'ordinal') {
    return data.map(function (d) {
      return x(d);
    });
  } else {
    return _d32['default'].extent(data, function (d) {
      return x(d);
    });
  }
}