const loginIdValidator = new FieldValidator('txtLoginId', async function(value) {
    if (!value) {
        return '请输入账号';
    }
    // 验证用户名是否存在
    const result = await API.existUser(value)
    if (result.data) {
        return '账号已存在, 请重新输入';
    }
})

const nicknameValidator = new FieldValidator('txtNickname', async function(value) {
    if (!value) {
        return '请输入昵称';
    }
})

const passwordValidator = new FieldValidator('txtLoginPwd', async function(value) {
    if (!value) {
        return '请输入密码';
    }
    if (value.length < 6) {
        return '密码长度不能少于6位';
    }
})

const confirmPasswordValidator = new FieldValidator('txtLoginPwdConfirm', async function(value) {
    if (!value) {
        return '请输入确认密码';
    }
    if (value !==  passwordValidator.input.value) {
        return '两次输入的密码不一致';
    }
})
const registorForm = $('.user-form')
registorForm.onsubmit = async (event) => {
    event.preventDefault()
    // 验证表单
    const formValidateResult = await FieldValidator.validate(loginIdValidator, nicknameValidator, passwordValidator, confirmPasswordValidator)
    if (!formValidateResult) return
    console.log('formValidateResult', formValidateResult)
    // 可传递一个form元素，来获取 form 对象
    const form = new FormData(registorForm)
    const formData = Object.fromEntries(form.entries())
    const result = await API.register(formData)
    if (result.code === 0) {
        alert('注册成功, 点击按钮跳转到登录页面')
        location.href = './login.html'
    } else {
        alert('注册失败：', result.msg)
    }
}