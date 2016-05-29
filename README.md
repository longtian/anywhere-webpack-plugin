# anywhere-webpack-plugin
[![](https://img.shields.io/npm/v/anywhere-webpack-plugin.svg)](https://www.npmjs.com/package/anywhere-webpack-plugin)
[![](https://img.shields.io/npm/dm/anywhere-webpack-plugin.svg)](http://npm-stat.com/charts.html?package=anywhere-webpack-plugin)
[![](https://img.shields.io/npm/l/anywhere-webpack-plugin.svg)](https://github.com/wyvernnot/anywhere-webpack-plugin/blob/master/LICENSE)

> A webpack plugin which detects publicPath automatically ( using document.currentScript API ),
> so that you can switch your CDN provider without building again.
> In other words, you can put webpack ouput files anywhere :plane: you like.

## Usage

require it in your entry file as early as possible

```js
require('publicpath-webpack-plugin');
```

or, prepend it to your entry file definition

```js
{
  entry:[
    'publicpath-webpack-plugin',
    'entry.js'
  ]
}
```

## License

MIT