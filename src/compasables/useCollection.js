import { ref } from "vue";
import {db} from "../fierbase/config"

let useCollection=(collection)=>{     // dynamic parameter
    let error = ref(null)

    let addDoc=async(doc)=>{       // dynamic parameter
        try{
            await db.collection(collection).add(doc)  // add the selected doc(data) to our selected collection
        }catch(err){
            console.log(err.message)
            error.value = "Can't send the messages"
        }
    }

    return {error,addDoc}
}

export default useCollection;