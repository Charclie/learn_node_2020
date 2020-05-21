var fs = require('fs')
// 请求URL处理
var url = require('url')
// 创建路径
var path = require('path')
var http = require('http')

var root = path.resolve(process.argv[2] || '.')

console.log('Static root dir: ' + root)

// 文件服务器
var server = http.createServer(function(request, respone){
    var pathname = url.parse(request.url).pathname

    var filepath = path.join(root, pathname)

    fs.stat(filepath, function(err,stat){
        if(!err && stat.isFile()){
            console.log('200 ' + request.url);
            respone.writeHead(200)
            fs.createReadStream(filepath).pipe(respone)
        }else {
            console.log('404 ' + request.url);
            respone.writeHead(404)
            respone.end('404 Not Found')
        }
    })
})

server.listen(8080)

console.log('Server is running at http://127.0.0.1:8080/');


