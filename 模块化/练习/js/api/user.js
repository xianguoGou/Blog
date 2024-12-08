// 处理用户相关的接口请求
export async function login(loginId, loginPwd) {
  const res = await fetch("https://study.duyiedu.com/api/user/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ loginId, loginPwd }),
  }).then((res) => res.json());
  return res.data;
}
