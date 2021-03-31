const http = require('http')

const server = http.createServer((req,res)=>{
   let url = req.url
   switch(url){
       case '/api/data':
           res.write('alert("hello")')
           break;
        default:
            res.write('page not found.')   
   }
   res.end();
})
server.listen(8080,()=>{
    console.log('localhost:8080');
})