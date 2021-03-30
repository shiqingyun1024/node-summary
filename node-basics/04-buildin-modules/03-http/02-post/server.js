const http = require('http')
const querystring = require('querystring')
const postData = querystring.stringify({
    province:'上海',
    city:'上海',
    district:'宝山区',
    address:'同济支路199号',
    latitude:43.0,
    longitude:160.0,
    message:'求购一条小鱼',
    contact:'136666666',
    type:'sell',
    time:1571217561
})
const options = {
    protocol:'http:',
    hostname:'localhost',
    method:'post',
    port:3000,
    path:'/data',
    headers:{
        'content-type':'application/x-www-form-urlencoded',
        'content-length':Buffer.byteLength(postData)
    }
}

const server = http.createServer((req,res)=>{
    // 第一个参数是options，第二个参数是回调函数
    const request = http.request(options,(result)=>{

    })
    request.write(postData);
    request.end();
    res.end()
})
server.listen(8080,()=>{
    console.log('localhost:8080');
})
