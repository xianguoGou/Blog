import Mock from "mockjs";

Mock.mock("/api/about", "get", {
  code: 0,
  err: "",
  data: "https://www.baidu.com",
});
