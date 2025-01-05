import request from "./request";

export async function postMessage(info) {
  return await request.post("/api/message", info);
}

export async function getMessages(page = 1, limit = 10) {
  return await request.get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}
