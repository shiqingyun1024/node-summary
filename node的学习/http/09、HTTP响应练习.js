// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {

    response.end(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>表格</title>
    <style>
        td {
            padding: 20px 40px;
        }

        table tr:nth-child(odd) {
            background: #aef;
        }

        table tr:nth-child(even) {
            background: #fcb;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <script>
            // 获取所有的td
            let tds = document.querySelectorAll('td');
            // 遍历
            tds.forEach(item => {
                item.onclick = function () {
                    this.style.background = '#2195de'
                }
            })
        </script>
    </table>
</body>

</html>
    `) // 有且只能有一个response.end
})

// 3、监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动.....')
})