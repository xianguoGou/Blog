## Plugins
- 用于bundle文件的优化，资源管理和环境变量的注入
- 作用于整个构建过程

### 常见的Plugins有哪些？
| 名称 | 描述 |
| - | - |
| CommonsChunkPlugin | 将chunks相同的模块代码提取成公共js
| CleanWebpackPlugin | 清理构建目录
| ExtractTextWebpackPlugin | 将css从bundle文件里提取成一个独立的css文件
| CopyWebpackPlugin | 将文件或者文件夹拷贝到构建好的目录
| HtmlWebpackPlugin | 创建html文件去承载输出的bundle
| UglifyjsWebpackPlugin | 压缩js

### Plugins的用法
```javascript
 const path = require('path');
 module.exports = {
     output: {
         filename: 'bundle.js',
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ]
 }
```
