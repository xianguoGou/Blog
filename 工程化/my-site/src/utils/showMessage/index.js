import getComponentRootDom from "../getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 *
 * @param {string} content 消息内容
 * @param {string} type 消息类型，可选值：info、success、warning、error
 * @param {Element} container 容器元素，默认值是document.body
 * @param {number} duration 显示时间，默认值是3000ms
 * @param {function} callback 关闭时的回调函数
 */
export default function showMessage({
  content = "",
  type = "info",
  container,
  duration = 3000,
  callback,
}) {
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  // console.log(iconDom);
  if (!container) {
    container = document.body;
  } else {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  div.className = `${styles.message} ${styles[`message-${type}`]}`;
  container.appendChild(div);
  // 强制触发浏览器重新渲染
  div.offsetHeight;
  div.style.opacity = 1;
  div.style.transform = "translate(-50%, -50%)";
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = "translate(-50%, -50%) translateY(-15px)";
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        callback && callback();
      },
      { once: true }
    );
  }, duration);
}
