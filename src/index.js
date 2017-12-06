import node from './node';
import browser from './browser';
import envPreset from './lib/envPreset';

export default function(api, target = 'node') {
  const targets = [target, target.target].includes('browser') ? browser : node;
  let options;

  if (typeof target === 'object') {
    options = Object.assign({}, target);
    delete options.target;
  }

  return {
    presets: [
      envPreset(targets, options),
    ],
  };
}
