# Node 基本模块

```
Node 基于CommonJS标准提供JavaScript模块化语法
所有Node中使用import export(es标准)需要通过babel解析
```

### Vscode调试Node

[参考链接]([https://juejin.im/post/5c1b8bf56fb9a049ea38eafe](https://juejin.im/post/5c1b8bf56fb9a049ea38eafe)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceRoot}/index.js"
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Port",
      "address": "localhost",
      "port": 5858
    }
  ]
}

request值对应的launch模式和attach模式
1. launch模式，程序是从vscode这里启动的，如果是在调试那将一直处于调试的模式
2. attach模式，外部项目启动，突然需要调试，不需要关掉已经启动的项目再去vscode中重新启动，只要以attach的模式启动，vscode可以连接到已经启动的服务。当调试结束了，断开连接就好。
```

#### npm启动

```json
{
  "name": "Launch via NPM",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "npm",
  "runtimeArgs": [
    "run-script", "dev"    //这里的dev就对应package.json中的scripts中的dev
  ],
    "port": 9229    //这个端口是调试的端口，不是项目启动的端口
}

仅仅使用npm启动，虽然在dev命令中使用了nodemon，程序也可以正常的重启，可重启了之后，调试就断开了。所以需要让vscode去使用nodemon启动项目。
```

#### nodemon启动

```json
{
  "type": "node",
  "request": "launch",
  "name": "nodemon",
  "runtimeExecutable": "nodemon",
  "args": ["${workspaceRoot}/bin/www"],
  "restart": true,
  "protocol": "inspector",    //相当于--inspect了
  "sourceMaps": true,
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen",
  "runtimeArgs": [    //对应nodemon --inspect之后除了启动文件之外的其他配置
    "--exec",
    "babel-node",
    "--presets",
    "env"
  ]
},

注意这里的runtimeArgs，如果这些配置是写在package.json中的话，就是这样的
// nodemon --inspect --exec babel-node --presets env ./bin/www
这样就很方便了，项目可以正常的重启，每次重启一样会开启调试功能。
```

> 可是，我们并不想时刻开启调试功能怎么办？这就需要使用上面说的attach模式了。 使用如下的命令正常的启动项目

```js
nodemon --inspect --exec babel-node --presets env ./bin/www
```

```json
{
  "type": "node",
  "request": "attach",
  "name": "Attach to node",
  "restart": true,
  "port": 9229
}

通过attach模式启动
```


