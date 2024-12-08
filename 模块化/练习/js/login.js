import { login as ApiLogin } from './api/user.js';
import * as doms from './doms.js';

let isLogining = false
// 处理用户登录相关业务逻辑
export default async function() {
    // 获取用户名和密码
    const username = doms.userName.value
    const password = doms.userPassword.value

    console.log(username, password)
    if (!username) {
        alert('请输入用户名')
        return
    }
    if (!password) {
        alert('请输入密码')
        return 
    }
    if (isLogining) {
        return
    }
    isLogining = true
    doms.btnSubmit.value = '登录中...'
    // 调用登录接口
    const userInfo = await ApiLogin(username, password)
    if (userInfo) {
       alert(`登录成功， 欢迎：${userInfo.nickname}`)
        
    } else {
        alert('登录失败，请检查用户名和密码')
    }
    doms.btnSubmit.value = '登录'
    isLogining = false
}