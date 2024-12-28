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
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}

/**
 * 获取文章详情
 */
export async function getBlogDetail(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * 分页获取文章评论
 */
export async function getBlogComment(id, page = 1, limit = 10) {
  return await request.get(`/api/comment`, {
    params: {
      page,
      limit,
      blogid: id,
    },
  });
}

/**
 * 发表评论
 */
export async function postBlogComment(dataInfo) {
  return await request.post("/api/comment", dataInfo);
}


