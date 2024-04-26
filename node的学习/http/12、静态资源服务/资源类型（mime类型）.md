# 设置资源类型（mime类型）
媒体类型（通常称为Multipurpose Internet Mail Extensions 或MIME类型）是一种标准，用来表示文档、文件或字节流的性质和格式
```js
mime 类型结构：[type]/[subType]
例如：text/html text/css image/jpeg image/png application/json
```
HTTP服务可以设置响应头Content-Type来表明响应体的MIME类型，浏览器会根据该类型决定如何处理资源
下面是常见文件对应的mime类型

```js
html:'text/html',
css:'text/css',
js:'text/javascript',
png:'image/png',
jpg:'image/jpeg',
gif:'image/gif',
mp4:'video/mp4',
mp3:'audio/mpeg',
json:'application/json'
```
注意：对于未知的资源类型，可以选择application/octet-stream类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的下载效果。
