# longitude-client

> Geolocation for browsers

## CDN
```
<script src="https://unpkg.com/longitude-client" charset="utf-8"></script>
```

## Install

```
$ npm install --save longitude-client
```

## Usage
### With any IP
```js
const longitude = require('longitude-client');

longitude('8.8.8.8').then(data => {
  console.log(data);
  // => {
  // =>   ip: '8.8.8.8',
  // =>   country_code: 'US',
  // =>   country_name: 'United States',
  // =>   latitude: 37.751,
  // =>   longitude: -97.822,
  // =>   ...
  // => }
});
```

### With device IP
```js
const longitude = require('longitude-client');

longitude().then(data => {
  console.log(data);
  // => {
  // =>   ip: Your IP,
  // =>   ...
  // => }
});
```

## API

### longitude(ip)
Returns a promise with the geoip data

#### ip

Type: `string`

The IP - Address you want to check

## Related
- [longitude](https://github.com/tobihrbr/longitude) - Geoip for node.js
- [longitude-cli](https://github.com/tobihrbr/longitude-cli) - Geoip for the commandline

## License

MIT © [Tobias Herber](https://tobihrbr.com)
