import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import ViewProduct from "../views/ViewProduct.vue";
import RawMaterial from "../views/RawMaterial.vue";
import SignUp from "../views/Signup.vue";
import LogIn from "../views/LogIn.vue";
import AddWord from "../views/AddWord.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/viewproduct",
    name: "product",
    component: ViewProduct,
  },
  {
    path: "/rawmaterial",
    name: "rawMaterial",
    component: RawMaterial,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/sd",
    name: "login",
    component: LogIn,
  },
  {
    path: "/",
    name: "addword",
    component: AddWord,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
