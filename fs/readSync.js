var fs = require('fs')

// 同步读取文件
try {
    var data = fs.readFileSync('/Users/liuchang/Documents/charlie/learn_node/greet.js', 'utf-8');
    console.log(data)
} catch (error) {
    console.log(error)
}

