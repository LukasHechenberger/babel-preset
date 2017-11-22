import test from 'ava';
import { transform } from 'babel-core';
import lsPreset from '../src';

const asyncFunction = `async function test() {
  return await another();
}`

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
  t.is(lsPreset(), lsPreset({}, 'node'));
});

test('options object should work', t => {
  t.is(lsPreset({}, 'node'), lsPreset({}, { target: 'node' }));
});
