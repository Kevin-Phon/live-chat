import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import ChatroomView from '../views/ChatroomView.vue'
import { auth } from '@/fierbase/config'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomView,
    
          // Route Guard
    beforeEnter(to,from,next){
      let user = auth.currentUser;
      if(user){
        next();
      }else{
        next({name:"Welcome"})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
