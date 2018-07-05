let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === "/write") {
        // 写入 Cookie
        // new Date().toGMTString(), 可根据格林威治时间 (GMT) 把 Date 对象转换为字符串
        // new Date().toUTCString()
        res.setHeader('Set-Cookie', 'name=weixian; expires=' + new Date("Thu, 05 Jul 2018 02:50:00 GMT").toGMTString());
        res.end('write success ~');
    } else if (req.url === '/read') {
        // 读取 Cookie
        let cookies = req.headers['cookie'] || 'cookie is null';
        res.end(cookies);
    } else {
        // 404
        res.end('Not Found ~');
    }
});

server.listen(5000);