'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (api, target = 'node') {
  return [target, target.target].includes('browser') ? _browser2.default : _node2.default;
};

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

var _browser = require('./browser');

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }