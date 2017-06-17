'use strict';

/**
 * Simple fetch polyfill for browsers
 * Mostly copied from developit/unfetch (Thanks!)
 * @param {string} url - url to be requested
 * @param {object} options - request options
 */

const browser = (url, options = {}) => (
	new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();

		request.open(options.method || 'get', url);

    request.onload = () => {
      resolve({
				ok: (request.status / 200 | 0) === 1,
				status: request.status,
				url: request.responseURL,
        json: () => JSON.parse(request.responseText),
				text: request.responseText
			});
    };

    request.onerror = reject;

    request.send(options.body);
	})
);

module.exports = browser;
