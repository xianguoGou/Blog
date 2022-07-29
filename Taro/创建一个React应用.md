## 创建并启动项目
在全局安装了Taro Cli 之后， 我们就可以用 Taro提供的cli 来创建一个项目：
![图片]("./images/install.png")
>**我这里用的是Taro v3.3.1版本，不同版本可能有一些语法不同**

然后进入到项目`cd Demo01`, 可以查看到当前目录结构。

打开`package.json`文件，可以看到build到不同终端的命令，这里我们生成一个h5项目，运行`yarn dev: h5`， 如图所示：

![start]("./images/start.png")

最后会默认在浏览器打开一个窗口，此时h5项目已经启动，接下来就可以开始写业务代码了。

### 修改生成的模版代码
打开 src/app.ts 文件， 可以看到是React类（Class Componets）组件代码，现在我们把它改写成Function Componets（函数式组件）。
- 改写前：
```jsx
import { Component } from 'react'
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
```

- 改写后
```jsx
import React from 'react'
import './app.scss'

function App({ children }) {
  return children
}
export default App
```

可以看到代码简洁了很多，不过看不到页面效果，接下来再改下入口页面

修改 `src/app.config.ts` 文件，增加几个页面，并在pages下创建对应的文件夹和文件，如下所示
```json
 pages: [
    'pages/home/index',
    'pages/forms/index',
    'pages/me/index',
    'pages/webview/index',
  ]
```
同时也把每个页面的底部导航在list里面加上，包括tabar Icon、文字，选中/未选中的图标（静态文件）
```json
  tabBar: {
    color: '#666',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: '#dfdfdf',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: './assets/images/tabbar/home.png',
        selectedIconPath: './assets/images/tabbar/home_on.png',
        text: '首页',
      },
      {
        pagePath: 'pages/forms/index',
        iconPath: './assets/images/tabbar/create.png',
        selectedIconPath: './assets/images/tabbar/create_on.png',
        text: '表单',
      },
      {
        pagePath: 'pages/me/index',
        iconPath: './assets/images/tabbar/forms.png',
        selectedIconPath: './assets/images/tabbar/forms_on.png',
        text: '我的',
      },
    ],
  }
```
修改 `pages/home/index.tsx` 文件如下：
```jsx
const Home = () => {
  return (
    <View className='home'>
      <Text>首页-Hello world!</Text>
    </View>
  )
}
export default Home
```
修改 `pages/home/index.scss` 文件, 添加`.home`类名,随便设置一个背景色。
修改 `pages/home/index.config.ts` 文件:
```json
export default {
  navigationBarTitleText: '首页'
}

```
最后刷新一下页面，就能看到效果了。

最后附上 Demo地址：https://github.com/xianguoGou/taro_app


