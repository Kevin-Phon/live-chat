import { ref } from "vue"
import {auth} from "../fierbase/config"

let error = ref(null)

let signIn=async(email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("Can't Login Account")
        }
        return res;
    }catch(err){
        error.value = err.message
        console.log(error.value)
    }
}

let useLogin=()=>{

    return {error,signIn}
}

export default useLogin