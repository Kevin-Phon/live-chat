<template>
    <div class="chat-window">
        <div class="messages" v-for="message in messages" :key="message.id">
            <div class="single">
                <span class="created-at">{{message.created_up.toDate()}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/fierbase/config'
import { ref } from '@vue/reactivity'
export default {
  setup(){
    let messages = ref([])

    db.collection("messages").orderBy("created_up").onSnapshot((snap)=>{      // onSnapshot = realtime
      let results=[]
      snap.docs.forEach((doc)=>{
        // console.log(doc.data())
        let document = {...doc.data(),id:doc.id}
        // console.log(document)
        if(doc.data().created_up){     // doc.data().created_up && results.push(document) <= can write like that too in 'if' function
          results.push(document)       // run only when there is data in created_up,so there is no error on onSnapshot function
        }
      })
      messages.value=results
    })
    return {messages}
  }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>