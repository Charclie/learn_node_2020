var fs = require('fs')

// 打开一个流
var rs = fs.createReadStream('/Users/liuchang/Documents/charlie/learn_node/package-lock.json', 'utf-8')
var ws1 = fs.createWriteStream('outputStrem.txt', 'utf-8');

// 数据已经可以读取
rs.on('data', function (chunk) {
    // data事件可能会有多次，每次传递的chunk是流的一部分数据。
    console.log('DATA:')
    console.log(chunk);
    ws1.write(chunk);
});

// 流已经到末尾 没有数据可以读取
rs.on('end', function () {
    console.log('END');
    ws1.end();
});

// 出错 
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

// 写入流
// 不断调用write()方法，最后以end()结束
// var ws1 = fs.createWriteStream('outputStrem.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();
