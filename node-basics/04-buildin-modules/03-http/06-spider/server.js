// 蜘蛛 爬虫
const http = require('http')
const https = require('https')
const cheerio = require('cheerio')
const url = require('url')

function filterData(data) {
    const $ = cheerio.load(data);
    $('.section-title').each((index,el)=>{
        // console.log(index);
        console.log($(el).text());
    })
    // console.log(data);
}

const server = http.createServer((req, res) => {
    let data = ''
    https.get('https://www.meizu.com', (result) => {
        result.on('data', (chunk) => {
            data += chunk
        })
        result.on('end', () => {
            filterData(data)
        })
    })

})
server.listen(8080, () => {
    console.log('localhost:8080');
})


