var fs = require('fs')

// 异步读文件
fs.readFile('/Users/liuchang/Documents/charlie/learn_node/greet.js', 'utf-8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        
        console.log(data)
    }
})

// 读取二进制文件
fs.readFile('/Users/liuchang/Downloads/qcloud-logo.png', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        // Buffer对象
        console.log(data)
        console.log(data.length + 'bytes')
    }
})