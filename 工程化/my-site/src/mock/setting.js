import Mock from "mockjs";

Mock.mock("/api/setting",  "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img0.baidu.com/it/u=3555674527,3811220504&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1734282000&t=daee528913638de8ff6d314753ea9fb7",
    siteTitle: "我的个人空间",
    github: "https://github.com/DuYi-Edu",
    qq: "3263023350",
    qqQrCode:
      "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "yh777bao",
    weixinQrCode:
      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "duyi@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "DuYi-Edu",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
