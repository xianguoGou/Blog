import { reactive, readonly } from "vue";

// const state = reactive({ a: 1, b: 2 });
// window.state = state;
// console.log("state", state);

// function useUser() {
//   const originUser = reactive({});
//   const user = readonly(originUser);

//   const setUserName = (name) => {
//     originUser.name = name;
//   };

//   const setUserAge = (age) => {
//     originUser.age = age;
//   };

//   return {
//     user,
//     setUserName,
//     setUserAge,
//   };
// }

function useDebounce(obj, duration) {
  // 在这里补全函数
  const originValue = reactive(obj);
  const value = readonly(originValue);
  let timer = null;
  const setValue = (newObj) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("值改变啦");
      Object.entries(newObj).forEach(([k, v]) => (originValue[k] = v));
    }, duration);
  };
  return {
    value, // 这里是一个只读对象，响应式数据，默认值为参数值
    setValue, // 这里是一个函数，传入一个新的对象，需要把新对象中的属性混合到原始对象中，混合操作需要在duration的时间中防抖
  };
}

const { value, setValue } = useDebounce({ a: 1, b: 2 }, 5000);
window.value = value;
window.setValue = setValue;
