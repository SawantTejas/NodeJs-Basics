const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./folder/first.txt', 'utf-8')
console.log(first)

const second = readFileSync('./folder/second.txt').toString()
console.log(second)

writeFileSync('./folder/result.txt','This is a result..append', {flag: 'a'})
writeFileSync('./folder/result1.txt',`Here is the data: \n${first} \n${second}`)
console.log('end!!!')