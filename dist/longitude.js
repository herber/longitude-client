(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.longitude = factory());
}(this, (function () { 'use strict';

/**
 * Simple fetch polyfill for browsers
 * Mostly copied from developit/unfetch (Thanks!)
 * @param {string} url - url to be requested
 * @param {object} options - request options
 */

var browser = function browser(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();

    request.open(options.method || 'get', url);

    request.onload = function () {
      resolve({
        ok: (request.status / 200 | 0) === 1,
        status: request.status,
        url: request.responseURL,
        json: function json() {
          return JSON.parse(request.responseText);
        },
        text: request.responseText
      });
    };

    request.onerror = reject;

    request.send(options.body);
  });
};

var browser_1 = browser;

var adapter$1 = function adapter() {
  var adapter = void 0;

  if (typeof XMLHttpRequest !== 'undefined') {
    adapter = browser_1;
  } else if (typeof process !== 'undefined') {
    throw new Error('Use tobihrbr/latitude instead');
  }

  return adapter;
};

var util = {
  adapter: adapter$1
};

var adapter = util.adapter;

/**
* Get geoip information
* @param {string} i - ip
*/

var thisip = '';

adapter()('https://api.ipify.org').then(function (data) {
  thisip = data.text;
});

var geoip = function geoip() {
  var ip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : thisip;
  return new Promise(function (resolve, reject) {
    adapter()('https://freegeoip.net/json/' + ip).then(function (data) {
      if (data.ok === false) {
        reject(new Error('Request error: ' + data.status));
      }

      resolve(data.json());
    });
  });
};

var index$2 = geoip;

var index = index$2;

return index;

})));
