<template>
  <div class="container">
    <NavbarView></NavbarView>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import { watch } from '@vue/runtime-core'
import NavbarView from '../components/NavbarView'
import getUser from '../compasables/getUser'
import {useRouter} from 'vue-router'

export default {
  components: {
    NewChatForm, NavbarView },

  setup(){
    let {user} = getUser();
    let router = useRouter();

    watch(user,()=>{      //first parameter(can be watch anything), second parameter change base upon first one
      if(!user.value){    // if there is no user send to another route
        router.push({name:"Welcome"})   // ('/')
      }
    })
  }

}
</script>

<style>

</style>