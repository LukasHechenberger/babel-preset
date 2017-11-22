import envPreset from 'babel-preset-env';

export default function envPresetWithTargets(targets) {
  return [
    envPreset,
    { targets },
  ];
}
