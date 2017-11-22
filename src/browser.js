import envPreset from './lib/envPreset';

export default {
  presets: [
    envPreset({
      browsers: [
        '> 1%',
      ]
    }),
  ]
}
