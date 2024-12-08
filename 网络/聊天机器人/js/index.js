// 判断当前页面用户是否登录，如果登录，则显示用户信息，如果未登录，则弹窗告知用户去登录。

(async function () {
  const response = await API.profile();
  const userInfo = response.data;
  if (!userInfo) {
    alert("账号未登录或登录已过期");
    location.href = "./login.html";
    return;
  }
  // 这里一定是登录状态
  console.log("userInfo", userInfo);
  const doms = {
    aside: {
      nickname: $("#nickname"),
      loginId: $("#loginId"),
    },
    close: $(".close"),
    chatContainer: $(".chat-container"),
    txtMsg: $("#txtMsg"),
    msgContainer: $(".msg-container"),
  };
  // 设置用户信息
  setUserInfo();

  // 退出登录
  setUserLoginout();

  // 加载历史记录
  loadHistory();

  // 表单提交事件
  doms.msgContainer.onsubmit = function (e) {
    e.preventDefault()
    sendChatMessage();
  }

  // 滚动到聊天底部
  function scrollToBottom() {
    doms.chatContainer.scrollTop = doms.chatContainer.scrollHeight;
  }

  // 发送聊天消息
  async function sendChatMessage() {
    const content = doms.txtMsg.value.trim();
    if (!content) return;
    renderChats({
      from: userInfo.loginId,
      to: null,
      content,
      createdAt: Date.now(),
    });
    scrollToBottom();
    doms.txtMsg.value = "";
    const response = await API.chat(content);
    const data = response.data;
    renderChats({
      from: null,
      to: userInfo.loginId,
      ...data,
    });
    scrollToBottom();
    // console.log("response", response);
  }

  async function loadHistory() {
    const response = await API.chatHistory();
    const history = response.data;
    for (const item of history) {
      // 调用聊天函数渲染页面
      renderChats(item);
    }
    scrollToBottom();
  }

  // 封装一个聊天函数，给一个chatInfo对象，渲染页面
  function renderChats(chatInfo) {
    const chatDom = $$$("div");
    const chatItem = $$$("div");
    const chatAvatar = $$$("img");
    const chatContent = $$$("div");
    const chatDate = $$$("div");
    chatItem.classList.add("chat-item");
    // 如果from 有值，则是自己发的消息，否则是系统消息
    if (chatInfo.from) {
      chatItem.classList.add("me");
    }
    chatAvatar.className = "chat-avatar";
    chatAvatar.src = chatInfo.from
      ? "./asset/avatar.png"
      : "./asset/robot-avatar.jpg";
    chatContent.className = "chat-content";
    chatContent.innerText = chatInfo.content;
    chatDate.className = "chat-date";
    chatDate.innerText = formatDate(chatInfo.createdAt);
    chatItem.appendChild(chatAvatar);
    chatItem.appendChild(chatContent);
    chatItem.appendChild(chatDate);
    chatDom.appendChild(chatItem);
    doms.chatContainer.appendChild(chatDom);
  }
  // 格式化时间函数
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  function setUserLoginout() {
    doms.close.onclick = function () {
      API.loginOut();
      location.href = "./login.html";
    };
  }

  function setUserInfo() {
    doms.aside.nickname.innerText = userInfo.nickname;
    doms.aside.loginId.innerText = userInfo.loginId;
  }
  window.sendChatMessage = sendChatMessage;
})();
