# webpack 环境搭建
## 安装 node.js 和 npm

> curl 安装： `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
> 
> wget安装 ： `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`


### 安装node 
`nvm install v12.22.0`
### 检查是否安装成功
`node -v` 或  `npm -v`

### 创建空⽬录和 package.json
  -  `mkdir my-project`
  -  `cd my-project`
  -  `npm init -y`

### 安装 `webpack` 和`webpack-cli`

```
npm install webpack webpack-cli --save-dev
或者
yarn add webpack webpack-cli --save-dev

```
### 检查是否安装成功：`./node_modules/.bin/webpack -v`

## webpack简单的例子
### 首先，进入到项目根目录，新建 `webpack.config.js`, 代码如下：
```javascript
const path = require('path')

module.exports = {
    entry: './src/index.js', // 指定项目入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 指定打包输出目录
        filename: 'bundle.js' // 指定打包文件名
    },
    mode: 'production' // 指定打包环境
}
```
### 然后在根目录下新建 `src/index.js` 和 `src/helloWorld.js` 文件
```javascript
// index.js
import helloWorld from './helloWorld'
document.write(helloWorld())


// helloWorld.js
export default function helloWorld() {
    return 'Hello Webpack!'
}
```
### 好了，一个简单的webpack示例完成，接下来开始打包，执行
```
./node_modules/.bin/webpack
```
可以看到，打包出来多了一个 `dist` 文件夹，里面包含了一个`bundle.js`文件,此时可以验证一下打包出来的，是否可以在页面正常显示。
在 `dist` 目录下新建`index.html`,代码:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello webpack</title>
</head>
<body>
    <script src="./bundle.js" type="text/javascript"></script>
</body>
</html>
```
在浏览器打开，页面上可以看到页面正常显示就完成了。