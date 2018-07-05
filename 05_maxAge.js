let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === "/write") {
        // 写入 Cookie
        // max-age 指定多久后失效，单位是秒
        res.setHeader('Set-Cookie', 'name=weixian; max-age=10');
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