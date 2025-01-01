import { eventBus, debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";
let images = [];

// 处理单张图片
function setImage(img) {
  // 先默认设置显示占位图
  img.dom.src = defaultGif;
  const rect = img.dom.getBoundingClientRect();
  const clientHeight = document.documentElement.clientHeight;
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    // 图片在视口内，设置真实src属性
    const tempImage = new Image();
    tempImage.onload = () => {
      img.dom.src = img.src;
    };
    tempImage.src = img.src;

    // 直接设置src属性，不希望一开始就显示占位图，只有滚动到图片位置才显示
    // img.dom.src = img.src;

    console.log(img.dom, "在视口内，加载真实图片");
    // 在视口内，就移除掉，不需要再处理了
    images = images.filter((image) => image.dom !== img.dom);
  }
}

// 调用该函数，设置视口内的图片显示出来
function setImages() {
  for (const img of images) {
    setImage(img);
  }
  console.log("setImages", images);
}

function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 100));

export default {
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value,
    };
    images.push(img);
    // 首次加载，立即设置图片
    setImage(img);
  },
  unbind(el) {
    images = images.filter((img) => img.dom !== el);
  },
};
