const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()
const readstream = fs.createReadStream('./logs.txt')
const writestream = fs.createWriteStream('./logs.gzip')

readstream
.pipe(gzip)
.pipe(writestream)




