'use strict';

const util = require('./util');
const adapter = util.adapter;

let thisip = '';

adapter()('https://api.ipify.org').then((data) => {
  thisip = data.text;
});

/**
* Get geoip information
* @param {string} i - ip
*/

const geoip = (ip = thisip) => (
  new Promise((resolve, reject) => {
    adapter()('https://freegeoip.net/json/' + ip).then((data) => {
      if (data.ok === false) {
        reject(new Error('Request error: ' + data.status));
      }

      resolve(data.json());
    });
  })
);

module.exports = geoip;
