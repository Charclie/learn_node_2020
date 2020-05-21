var crypto = require('crypto')

function aesEncrypt(data, key){
    var cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}

function aesDecrypt(data, key){
    var decipher = crypto.createDecipher('aes192', key)
    var decrypted = decipher.update(data, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}

var data = 'Hello, this is a secret message!'
var key = 'Password!'
var encrypted = aesEncrypt(data, key)
var decrypted = aesDecrypt(encrypted, key)

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);

