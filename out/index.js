'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var envPreset = _interopDefault(require('babel-preset-env'));

var node = {
  node: 8,
};

var browser = {
  browsers: [
    '> 1%',
  ],
};

function envPresetWithTargets(targets, options = {}) {
  return [
    envPreset,
    Object.assign({ targets }, options),
  ];
}

var index = function(api, target = 'node') {
  const targets = [target, target.target].includes('browser') ? browser : node;
  let options;

  if (typeof target === 'object') {
    options = Object.assign({}, target);
    delete options.target;
  }

  return {
    presets: [
      envPresetWithTargets(targets, options),
    ],
  };
};

module.exports = index;
