// crypto模块的目的是为了提供通用的加密和哈希算法
var crypto = require('crypto');

var hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544