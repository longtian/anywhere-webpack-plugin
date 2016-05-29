var url = require('url');
var scripts = document.getElementsByTagName('script');

// get current script
var currentScript = document.currentScript || scripts[scripts.length - 1];

// parse it so we can get parent url
var scriptUrl = url.parse(currentScript.src);
var staticPath = url.format({
  protocol: scriptUrl.protocol,
  host: scriptUrl.host,
  pathname: url.resolve(scriptUrl.pathname, '../')
});

// set webpack publicPath in runtime
__webpack_require__.p = staticPath;
