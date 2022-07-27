# Taro
- Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。

## 多端转换支持
- 目前，Taro 3 可以支持转换到 H5、ReactNative 以及任意小程序平台。
  
## 框架支持
- 在 Taro 3 中可以使用完整的 React / Vue / Vue3 / Nerv 开发体验
> 由于公司项目主要使用React技术栈，所以后续内容是以React框架来实现的，包括h5、百度小程序应用。

`React`示例代码
  
```jsx
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'

const Index = () => {
    const [message, setMessage] = useState('Hello World！')
    return (
      <View className='index'>
        <Text>{message}</Text>
      </View>
    ) 
}
export default Index
```
## UI库
Taro团队提供了`TaroUI`，是一款基于 Taro 框架开发的多端 UI 组件库。
 - 特性
  1. 基于 Taro 开发 UI 组件
  2. 一套组件可以在多端适配运行（ReactNative 端暂不支持）
  3. 提供友好的 API，可灵活的使用组件
- 如何使用？
  ```
  npm i taro-ui@next
  ```
  >Taro 3 只能配合使用 taro-ui@next 版本