var http = require("http");
var fs = require("fs");
var path = require("path");

// 创建服务器
http.createServer(function (request, response) {
  // 如果链接的路径是 /index 时，返回的页面的 index 页面
  if (request.url === '/index') {
    // 使用 path.join 拼接路径
    var filePath = path.join(__dirname, "templates", "index.html");
    fs.readFile(filePath, function (err, data) {
      // 如果出现错误就抛出 err，没出错就把 html 页面返回给浏览器
      if (err) {
        throw err;
      } else {
        response.end(data);
      }
    })
  } else {
    // 如果不调用 end 其他请求客户端将永远处于等待状态
    response.end()
  }
}).listen(3100, function () {
  console.log("OK,访问：localhost:3100");
});
