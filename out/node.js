'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _envPreset = require('./lib/envPreset');

var _envPreset2 = _interopRequireDefault(_envPreset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  presets: [(0, _envPreset2.default)({ node: 8 })]
};