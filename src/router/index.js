import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../../../tabbar_demo/src/views/home/Home";
import Category from "../../../tabbar_demo/src/views/category/Category";
import ShopCart from "../../../tabbar_demo/src/views/shopcart/ShopCart";
import Profile from "../../../tabbar_demo/src/views/profile/Profile";

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },{
      path: '/category',
      component: Category
    },{
      path: '/shopCart',
      component: ShopCart
    },{
      path: '/profile',
      component: Profile
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
