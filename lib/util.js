'use strict';

const b = require('./adapters/browser');

const adapter = () => {
  let adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    adapter = b;
  } else if (typeof process !== 'undefined') {
    throw new Error('Use tobihrbr/latitude instead');
  }

  return adapter;
};

module.exports = {
  adapter
};
