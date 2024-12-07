/**
 * @class FieldValidator 字段验证器
 */

class FieldValidator {
    constructor(fieldId, validatorFn) {
        this.input = document.getElementById(fieldId);
        this.info = this.input.nextElementSibling
        this.validatorFn = validatorFn;
        this.input.onblur = () => {
            this.validate();
        }
    }
    /**
     * 验证成功返回true，失败返回false
     * @returns {boolean} 是否通过验证
     */
    async validate() {
        const errorMsg = await this.validatorFn(this.input.value);
        if (errorMsg) {
            this.info.innerHTML = errorMsg;
            return false
        } else {
            this.info.innerHTML = '';
            return true
        }
    }
    /**
     * 验证所有字段是否通过验证, 成功返回true，失败返回false
     * @returns {boolean} 是否通过验证
     */
    static async validate(...validators) {
        // 异步验证所有字段, 返回一个promise数组
        const promiseAll = validators.map(v => v.validate())
        const result = await Promise.all(promiseAll)
        return result.every(r => r)
    }
}