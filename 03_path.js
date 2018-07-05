let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === "/write") {
        // 写入 Cookie
        // localhost:5000/read 是读取不到 Cookie 的，因为 path 不匹配
        res.setHeader('Set-Cookie', 'name=weixian; path=/write');
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