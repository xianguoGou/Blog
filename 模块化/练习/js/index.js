import login from "./login.js";
import * as doms from './doms.js';
doms.formContainer.onsubmit = function (e) {
    e.preventDefault();
    login()
}
