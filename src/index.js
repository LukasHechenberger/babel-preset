import node from './node';
import browser from './browser';

export default function(api, target) {
  return target === 'browser' ?
    browser :
    node;
}
