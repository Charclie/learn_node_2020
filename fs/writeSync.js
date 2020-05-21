var fs = require('fs')

var data = 'Hello Node.js'

// 同步步写文件
try {
    fs.writeFileSync('outputSync.txt', data)
    console.log('ok.')
} catch (error) {
    console.log(error)
}
