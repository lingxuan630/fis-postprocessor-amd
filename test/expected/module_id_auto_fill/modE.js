define('modE', ['require', 'exports', 'modA', 'modB'],function(require, exports) {
    var modA = require('modA');
    var modB = require('modB');

    exports.e = 5;
});