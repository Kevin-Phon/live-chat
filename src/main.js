import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import {auth} from "./fierbase/config"

let app;
auth.onAuthStateChanged(()=>{    //want to link with auth library so use this function
    if(!app){        //when refresh(start),it links with auth library first just once
        app = createApp(App).use(router).mount('#app')   //and then run the project
    }
})


