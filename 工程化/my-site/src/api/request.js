import axios from "axios";
import showMessage from "@/utils/showMessage";

const instance = axios.create();
instance.interceptors.response.use(function (response) {
  if (response.data.code !== 0) {
    showMessage({
      content: response.data.err,
      type: "error",
    });
    return null;
  }
  return response.data.data;
});

export default instance;
