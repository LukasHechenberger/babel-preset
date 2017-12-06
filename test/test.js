import test from 'ava';
import { transform } from 'babel-core';
import lsPreset from '../src';

const asyncFunction = `async function test() {
  return await another();
}`;

function transpile(preset) {
  return transform(asyncFunction, { presets: [preset] }).code;
}

test('transforms async functions on node target', t => {
  const result = transpile([lsPreset, 'node']);

  t.regex(result, /async/);
});

test('doesn\'t transforms async functions on browser target', t => {
  const result = transpile([lsPreset, 'browser']);

  t.regex(result, /regeneratorRuntime/);
});

test('node is default target', t => {
  t.deepEqual(lsPreset(), lsPreset({}, 'node'));
});

test('options object should work', t => {
  t.deepEqual(lsPreset({}, 'node'), lsPreset({}, { target: 'node' }));
});

test('babel-preset-env options are bypassed', t => {
  const preset = lsPreset({}, { target: 'node', modules: false });

  t.is(preset.presets[0][1].modules, false);
});

test('targets can be overridden', t => {
  const preset = lsPreset({}, { targets: { node: 13 } });

  t.is(preset.presets[0][1].targets.node, 13);
});
