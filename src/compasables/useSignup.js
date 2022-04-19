import { ref } from "vue";
import {auth} from '../fierbase/config';

let error = ref(null)

let createAccount=async(email,password,displayName)=>{
    try{
        let res = await auth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("Could not create new user!")
        }
        res.user.updateProfile({displayName}) // displayName:displayName (key,value is same so only use one)
        return res;
    }catch(err){
        error.value = err.message
        console.log(err.message);
    }
}

let useSignup=()=>{

    return {error,createAccount}
}

export default useSignup;