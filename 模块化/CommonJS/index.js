const util = require("./util");
console.log(util);

/** 1. node JS 模块导入导出，可以理解为一个立即执行函数逻辑， 如下： */

(function (module) {
  module.exports = {};
  var exports = module.exports;
  // TODO: 模块中的代码
  return module.exports;
})();

/** 2. 为了避免反复加载同一个模块，nodeJS 默认开启了模块缓存，如果加载的模块已经被加载过了，则会自动使用之前的导出结果 */
