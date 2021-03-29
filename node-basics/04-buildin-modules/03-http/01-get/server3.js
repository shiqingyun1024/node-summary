// get请求

// 打印日志
const logger = require('../../utils/log')
const http = require('http');
const https = require('https');
const querystring = require('querystring');

const server = http.createServer((request, response) => {
    https.get('https://www.xiaomiyoupin.com/mtop/mf/cat/list',(result)=>{
        let data = "";
        result.on("data",(chunk)=>{
            data += chunk;
        })
        result.on("end",()=>{
            response.writeHead(200,{
                'content-type':'application/json;charset=utf-8'
            })
            response.write(data)
            response.end();
        })

    })

})
server.listen(8080, () => {
    console.log('localhost:8080');
})
