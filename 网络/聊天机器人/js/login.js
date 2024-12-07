const loginIdValidator = new FieldValidator('txtLoginId', async function(value) {
    if (!value) {
        return '请输入账号';
    }
})

const passwordValidator = new FieldValidator('txtLoginPwd', async function(value) {
    if (!value) {
        return '请输入密码';
    }
})

const loginForm = $('.user-form')
loginForm.onsubmit = async (event) => {
    event.preventDefault()
    // 验证表单
    const formValidateResult = await FieldValidator.validate(loginIdValidator, passwordValidator)
    if (!formValidateResult) return
    console.log('formValidateResult', formValidateResult)
    // 可传递一个form元素，来获取 form 对象
    const form = new FormData(loginForm)
    const formData = Object.fromEntries(form.entries())
    const result = await API.login(formData)
    if (result.code === 0) {
        alert('登录成功, 点击按钮跳转到首页')
        location.href = './index.html'
    } else {
        alert('登录失败：' + result.msg)
    }
}