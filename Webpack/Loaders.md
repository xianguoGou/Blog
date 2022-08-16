## Loaders
 - webpack开箱只支持`js`和 `json` 两种文件类型
 - 通过loaders去支持其他文件类型，并转换成有效的模块
 - 本身是一个函数，接收源文件作为参数，返回转换的结果

### 常见的Loaders有哪些？
| 名称 | 描述 |
| - | - |
| babel-loader | 转换es6、es7等js新特性语法
| css-loader | 支持.css文件的加载和解析
| less-loader | 将less语法转换成css
| sass-loader | 将sass语法转换成css
| ts-loader | 将ts语法转换成js
| file-loader | 进行图片、字体的打包
| raw-loader | 将文件以字符串的形式导入
| thread-loader | 多进程打包css和js


### Loaders的用法
```javascript
 const path = require('path');
 module.exports = {
     output: {
         filename: 'bundle.js',
     },
     module: {
         rules: [
             // test指定匹配规则， use指定使用的loader名称
             { test: /\.txt$/, use: 'raw-loader' }, 
         ]
     }
 }
```