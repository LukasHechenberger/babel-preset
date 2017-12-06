import envPreset from 'babel-preset-env';

export default function envPresetWithTargets(targets, options = {}) {
  return [
    envPreset,
    Object.assign({ targets }, options),
  ];
}
