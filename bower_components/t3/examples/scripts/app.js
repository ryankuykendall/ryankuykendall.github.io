requirejs.config({
  baseUrl: 'scripts',
  paths: {
    t3: '../dist/t3',
    three: '../lib/three'
  }
});

(function () {
  var params = {};
  var search = location.search.slice(1)
    .split('&')
    .forEach(function (v) {
      var kv = v.split('=');
      params[kv[0]] = kv[1];
    });
  requirejs([params.k], function () { });
})();