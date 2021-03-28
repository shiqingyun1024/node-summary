const logger = require('../../utils/log')
const http = require('http')

const server = http.createServer((request,response)=>{
    logger.debug(request)
})
server.listen(8080,()=>{
    console.log('localhost:8080');
})