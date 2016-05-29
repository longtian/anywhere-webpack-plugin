var url = require('url');

// get current script url
var runningScriptUrl = document.currentScript.src;

// parse it so we can get parent url
var scriptUrl = url.parse(runningScriptUrl);
var staticPath = url.format({
  protocol: scriptUrl.protocol,
  host: scriptUrl.host,
  pathname: url.resolve(scriptUrl.pathname, '../')
});

// set webpack publicPath in runtime
__webpack_require__.p = staticPath;
