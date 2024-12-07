const API = (function(){
    const API_URL = 'https://study.duyiedu.com';
    const TOKEN_KEY = 'token';

    function get(url) {
        const headers = {}
        const token = localStorage.getItem(TOKEN_KEY)
        if (token) {
            headers.Authorization = `Bearer ${token}`
        }
        return fetch(`${API_URL}${url}`, { method: 'GET', headers })
    }

    function post(url, data) {
        const headers = {
            'Content-Type': 'application/json'
        }
        const token = localStorage.getItem(TOKEN_KEY)
        if (token) {
            headers.Authorization = `Bearer ${token}`
        }
        return fetch(`${API_URL}${url}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        })
    }

    // 注册
    async function register(userInfo) {
        const resp = await post('/api/user/reg', userInfo)
        return await resp.json();
    }

    // 登录
    async function login(userInfo) {
        const resp = await post('/api/user/login', userInfo)
        const body = await resp.json();
        if (body.code === 0) {
            localStorage.setItem(TOKEN_KEY, resp.headers.get('Authorization'))
        }
        return body
    }

    // 验证账号
    async function existUser(loginId) {
        const resp = await get(`/api/user/exists?loginId=${loginId}`)
        return await resp.json();
    }

    // 当前登录的用户信息
    async function profile() {
        const resp = await get('/api/user/profile')
        return await resp.json();
    }

    // 发送聊天信息
    async function chat(content) {
        const resp = await post('/api/chat', { content })
        return await resp.json();
    }

    // 获取聊天记录
    async function chatHistory() {
        const resp = await get('/api/chat/history')
        return await resp.json();
    }
    return {
        register,
        login,
        existUser,
        profile,
        chat,
        chatHistory
    }
})()