# king_server

king

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
app/router.js 用于配置 URL 路由规则，具体参见 Router。
app/controller/** 用于解析用户的输入，处理后返回相应的结果，具体参见 Controller。
app/service/** 用于编写业务逻辑层，可选，建议使用，具体参见 Service。
app/middleware/** 用于编写中间件，可选，具体参见 Middleware。
app/public/** 用于放置静态资源，可选，具体参见内置插件 egg-static。
app/extend/** 用于框架的扩展，可选，具体参见框架扩展。
config/config.{env}.js 用于编写配置文件，具体参见配置。
config/plugin.js 用于配置需要加载的插件，具体参见插件。
test/** 用于单元测试，具体参见单元测试。
app.js 和 agent.js 用于自定义启动时的初始化工作，可选，具体参见启动自定义。关于agent.js的作用参见Agent机制。