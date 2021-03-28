// const logger = require('../utils/log')
const querystring = require('querystring')

const query = 'id=2&name=tongyi&from=北京'
const query2 = 'id:2/name:tongyi/from:北京'
// const queryEscape = 'id=2&name=tongyi&from=北京'
const queryObj = {id:'2',name:'tongyi',from:'北京'}
const newQuery = querystring.stringify(queryObj,null,null,{
    encodeURIComponent(string){
        return querystring.unescape(string )
    }
})
console.log(newQuery);