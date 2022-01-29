var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

  // 解析 url 参数
  var path = req.url.split('?')[0];
  if (path === '/js') {
    res.writeHead(200, { 'Content-Type': 'text/javascript;charset=utf-8' });
    var params = url.parse(req.url, true).query;
    // 设置返回的内容
    res.end(`${params.call}({
      code: 200,
      age: 20,
      friends: [
        {
          age: 18,
          name: 'tom'
        },
        {
          age: 19,
          name: 'bob'
        }
      ]
    })`);
  } else {
    res.end('ok');
  }

}).listen(3000, function () {
  console.log("OK,访问：localhost:3000");
});