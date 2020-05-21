var fs = require('fs');

// 同步获取文件信息
console.log(fs.statSync('/Users/liuchang/Downloads/qcloud-logo.png'))

// 获取文件信息
fs.stat('/Users/liuchang/Downloads/qcloud-logo.png', function(err, stat) {
    if(err){
        console.log(err)
    }else{
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
        console.log(stat)
    }
})

