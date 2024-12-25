import request from "./request";

/**
 * /api/blog 获取博客列表
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryId,
    },
  });
}

/**
 * /api/blogtype 获取博客分类列表
 */
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}
