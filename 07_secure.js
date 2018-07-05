let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === "/write") {
        // 写入 Cookie
        // 设置 secure 为 true, 此 cookie 在 https 中才生效
        res.setHeader('Set-Cookie', 'name=weixian; secure');
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