import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import Project from "@/views/Project";

// 路由配置： name -> 命名式路由
export default [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "CategoryBlog", path: "/blog/:categoryId", component: Blog },
  { name: "Message", path: "/message", component: Message },
  { name: "Project", path: "/project", component: Project },
];
