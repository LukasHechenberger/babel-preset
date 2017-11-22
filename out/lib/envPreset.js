'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = envPresetWithTargets;

var _babelPresetEnv = require('babel-preset-env');

var _babelPresetEnv2 = _interopRequireDefault(_babelPresetEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function envPresetWithTargets(targets) {
  return [_babelPresetEnv2.default, { targets }];
}