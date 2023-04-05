import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import ViewProduct from "../views/ViewProduct.vue";
import BuyItem from "../views/BuyItem.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/viewproduct/:id",
    name: "product",
    component: ViewProduct,
  },
  {
    path: "/buy",
    name: "buyproduct",
    component: BuyItem,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
