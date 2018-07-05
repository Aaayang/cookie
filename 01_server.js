let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === "/write") {
        // 写入 Cookie
        res.setHeader('Set-Cookie', 'name=weixian');
        // 写入多条 Cookie
        // res.setHeader('Set-Cookie', ['name=weixian', 'age=18']);
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