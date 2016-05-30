var path = require('path');
var scripts = document.getElementsByTagName('script');

// get current script
var currentScript = document.currentScript || scripts[scripts.length - 1];

// set webpack publicPath in runtime
__webpack_require__.p = path.dirname(currentScript.src) + '/';
