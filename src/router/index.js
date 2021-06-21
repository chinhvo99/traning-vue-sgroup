import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'unauth'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: ()=> import('../views/Blogs.vue')
  },

  { path: '/blog/:id', 
    component: () => import('../views/BlogDetail.vue'),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'detail',
        component: () => import('../components/uncommon/Blog/Blog.vue')
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts',
        component: () => import('../components/uncommon/Contact/Contact.vue')
      },
      {
        path: 'user/:name',
        component: () => import('../components/uncommon/Blog/UserBlog.vue')
      }
    ]
  },


  {
    // will match everything
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
