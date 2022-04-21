<template>
  <nav v-if="user">
    <div>
        <p>Hi {{user.displayName}}</p>
        <p class="email">Logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Log out</button>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../fierbase/config"
import getUser from "../compasables/getUser"
export default {
    setup(){
        let error = ref(null)
        
        let {user} = getUser();

        let logout=async()=>{
            try{
                await auth.signOut();  //main is here(sign out function)
                console.log("user log out")
            }catch(err){
                error.value = err.message
                console.log(error)
            }
        }

        return {logout,error,user}
    }
}
</script>

<style>
    nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>