## Entry
- 用来指定webpack的打包入口

## Entry的用法
  - 单入口，entry是一个字符串
  
    ```javascript
    module.exports = {
        entry: './src/index.js'
    }
    ```
  - 多入口，entry是一个对象
    ```javascript
    module.exports = {
        entry: {
            app: './src/index.js',
            admin: './src/admin.js'
        }
    }

    ```

## Output
   - 将webpack编译后的文件输出到磁盘
  
   - 单入口配置，entry对象配置多个参数
  
    ```javascript
    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
    }
    ```
   - 多入口配置，entry对象配置多个参数
  
    ```javascript
    module.exports = {
        entry: {
            app: './src/index.js',
            search: './src/search.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js' // 通过占位符确保名称的唯一
        },
    }
    ```