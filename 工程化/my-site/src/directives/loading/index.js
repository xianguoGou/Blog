import loadingUrl from "@/assets/loading.svg";
import styles from "./index.module.less";
// bind 是指令的初始化函数，只会执行一次，可以用来做一些初始化操作
// update 是指令的更新函数，会在数据变化时执行，可以用来做一些更新操作
// el 是指令绑定的元素，是一个真实dom，可以用来操作dom，binding 是一个指令对象，包含相关属性和方法
export default function (el, binding) {
//   console.log("binding.value", binding.value);
  const hasImage = getImage(el);
  if (binding.value) {
    if (!hasImage) {
      const img = createImage();
      el.appendChild(img);
    //   console.log("创建图片元素");
    }
  } else {
    if (hasImage) {
      hasImage.remove();
    //   console.log("销毁图片元素");
    }
  }
}

// 获取el中是否存在图片元素
function getImage(el) {
  const img = el.querySelector("img[data-role='loading']");
//   console.log("el, img", el, img);
  return img;
}

// 创建图片元素
function createImage() {
  const img = document.createElement("img");
  img.src = loadingUrl;
  img.dataset.role = "loading";
  img.classList.add(styles.loading);
  return img;
}

// 也可以使用对象的方式导出指令
// export default {
//     bind(el, binding) {
//         console.log("bind", el, binding)
//     },
//     update(el, binding) {
//         console.log("update", el, binding)
//     }
// }
