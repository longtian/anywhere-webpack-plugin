require.ensure([], function (require) {
  require('./on-demand/say')('ok')
});
var articleUrl = require('file!./on-demand/article.txt');
require('style!css!./css/style.css');
