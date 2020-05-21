var fs = require('fs')

var data = 'Hello Node.js'

// 异步写文件
fs.writeFile('output.txt', data, function(err) {
    // 传入的数据是String，默认按UTF-8编码写入文本文件
    if(err) {
        console.log(err)
    }
    else{
        console.log('ok.')
    }
})

// 读取二进制文件
fs.readFile('/Users/liuchang/Downloads/qcloud-logo.png', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        // Buffer对象
        fs.writeFile('qcloud.png', data, function(err) {
            // 传入的参数是Buffer，则写入的是二进制文件
            if(err) {
                console.log(err)
            }
            else{
                console.log('ok.')
            }
        })
    }
})