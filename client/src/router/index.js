import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    // if there is no url set, as in only localhost:800/
    // open the login page
    {
      path: '/',
      name: 'NoUrl',
      component: () => import('../views/Login.vue'),

      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/explore',
      name: 'Explore',
      component: () => import('../views/Explore.vue'),

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profileSettings',
      name: 'Settings',
      component: () => import('../views/ProfileSettings.vue'),

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createPost',
      name: 'Create Post',
      component: () => import('../views/CreatePost.vue'),

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createWhisper',
      name: 'Create Whisper',
      component: () => import('../views/CreateWhisper.vue'),

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('../views/Chat.vue'),

      meta: {
        requiresAuth: true
      }
    },
    // protect from authorised users
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),

      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),

      meta: {
        requiresGuest: true
      }
    },
  
    // protect from unauthorised users to not access
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),

      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // if the user is not logged in
    if(!store.getters.isLoggedIn) {
      // redirect to login page
      next('/login');
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    // if they are logged in and they use any meta that requires a guest...
    // then they are sent to this function that automatically directs them to their profile
    if(store.getters.isLoggedIn) {
      // redirect to profile page
      next('/profile');
    } else {
      next();
    }
  }
});

export default router
