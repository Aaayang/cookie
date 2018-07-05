let http = require('http');

// host 中先配置 a.zhihur.com 和 b.zhihur.com 指向 localhost
let server = http.createServer((req, res) => {
    if (req.url === "/write") {
        // 写入 Cookie
        res.setHeader('Set-Cookie', 'name=weixian;domain=zhihur.com');
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