import node from './node';
import browser from './browser';

export default function(api, target = 'node') {
  return [target, target.target].includes('browser') ?
    browser :
    node;
}
