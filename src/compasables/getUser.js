import { ref } from "vue";
import {auth} from "../fierbase/config"

let user = ref(auth.currentUser)

let getUser=()=>{
    auth.onAuthStateChanged((_user)=>{
        // console.log("user stage change. current user is ",_user)
        user.value = _user
      })

    return {user}
}

export default getUser