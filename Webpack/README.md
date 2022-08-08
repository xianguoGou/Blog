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
```

```