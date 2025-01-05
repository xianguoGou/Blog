// 路由配置：动态导入路由
// 路由配置： name -> 命名式路由
export default [
  {
    name: "Home",
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
    meta: { title: "首页" },
  },
  {
    name: "About",
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
    meta: { title: "关于我" },
  },
  {
    name: "Blog",
    path: "/article",
    component: () => import(/* webpackChunkName: "blog" */ "@/views/Blog"),
    meta: { title: "文章" },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: () => import(/* webpackChunkName: "blog" */ "@/views/Blog"),
    meta: { title: "文章分类" },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: () =>
      import(/* webpackChunkName: "blogDetail" */ "@/views/Blog/Detail"),
    meta: { title: "文章详情" },
  },
  {
    name: "Message",
    path: "/message",
    component: () =>
      import(/* webpackChunkName: "message" */ "@/views/Message"),
    meta: { title: "留言板" },
  },
  {
    name: "Project",
    path: "/project",
    component: () =>
      import(/* webpackChunkName: "project" */ "@/views/Project"),
    meta: { title: "项目&效果" },
  },
];
