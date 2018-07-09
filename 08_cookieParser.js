let express = require('express');
let querystring = require('querystring');
let app = express();

// 中间件的使用
let cookieParser = require('cookie-parser');
// 'mark' 是随便起的，是一个标识
app.use(cookieParser('mark'));

// 写 cookie
app.get('/write', (req, res) => {
    // 设置一个带签名的 cookie
    res.cookie("name", "weixian", {
        signed: true, // 生成带签名的 cookie
        domain: "localhost", // 这个 domain 才会进行设置和获取（在请求头中会携带）
        path: '/', // 这个 path 才会进行设置和获取（在请求头中携带）
        expires: new Date(Date.now() + 100 * 1000), // 到了这个时间过期（过期的意思是会自动在浏览器数据库中删除，当然也不会在请求头中携带），绝对时间，毫秒
        maxAge: 100 * 1000, // 请求 100s 后
        httpOnly: true, // 前端通过 JS(document.cookie) 拿不到
        secure: false, // cookie 是否只在 https 中才有效
    });
    // 设置一个不带签名的 cookie
    res.cookie("age", "18");
    res.send('ok')
});

// 读 cookie
app.get('/read', (req, res) => {
    // 所有的 cookie
    let allJson = querystring.parse(req.headers.cookie, '; ', '=');
    // 没签名的 cookie
    let notSignedCookie = req.cookies;
    // 签名的 cookie
    let signedCookie = req.signedCookies;

    // 一旦客户端修改签过名的 cookie，这里返回的值就是 false
    res.send(signedCookie);
});

// 清除 cookie
app.get('/clear', (req, res) => {
    res.clearCookie("name");
    res.clearCookie("age");
    res.send('clear ok');
});

app.listen(5000);