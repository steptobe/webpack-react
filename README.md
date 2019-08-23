### 配置webpack

自动快速生成HTML

```
npm install html-webpack-plugin --save-dev
```

```
webpack
```
生成

### 配置webpack-dev-server

新建一个开发服务器，可以serve我们pack以后的代码，并且当代码更新的时候自动刷新浏览器。

安装webpack-dev-server

``` 
npm install webpack-dev-server --save-dev 
```

配置sass时出错

webpack打包报错Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead

原因： 
extract-text-webpack-plugin还不能支持webpack4.0.0以上的版本。 
解决办法： 
npm install –save-dev extract-text-webpack-plugin@next 
会下载到+ extract-text-webpack-plugin@4.0.0-beta.0 
 ———————————————— 
版权声明：本文为CSDN博主「小bearBear」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_35585701/article/details/81041584