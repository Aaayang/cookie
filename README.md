# Cookie

## 什么是 Cookie

Cookie 是存在客户端的规律文本，客户端和服务器端都可以对其进行获取、增、删、改、查，下面所讲主要围绕客户端和服务端对 Cookie 的操作，以及各个参数的意义。查看 Cookie 的方式有很多，以 Windows Chrome 为例，查看 Cookie 的步骤为：

```
F12 -> Application -> Cookies -> 查看不同地址下对应的 Cookie
```

## Cookie 的工作方式

浏览器发起第一个请求时，服务端在响应头中设置 Cookie ，下次再发起请求时，浏览器会自动把和当前请求相匹配的 Cookie 信息带在请求头，这样服务端就可以通过请求头拿到 Cookie 信息。所以 Cookie 常常使用的场景是每次请求时都需要某一个信息，例如身份验证（常规每次请求都要进行身份验证），那这样就减少了我们前端每次都要手工携带这些信息的操作。

## Cookie 的相关属性

- name
- domain
- expires
- maxAge
- secure
- path
- httpOnly



