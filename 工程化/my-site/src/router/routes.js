import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";
import BlogDetail from "@/views/Blog/Detail";

// 路由配置： name -> 命名式路由
export default [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Blog", path: "/article", component: Blog },
  { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog },
  { name: "BlogDetail", path: "/article/:id", component: BlogDetail },
  { name: "Message", path: "/message", component: Message },
  { name: "Project", path: "/project", component: Project },
];
