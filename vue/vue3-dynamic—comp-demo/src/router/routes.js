import { getAsyncPage } from "../utils";

const Home = getAsyncPage("../view/Home.vue");
const About = getAsyncPage("../view/About.vue");

export default [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
];
