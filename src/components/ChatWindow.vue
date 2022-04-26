<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{message.created_up}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/fierbase/config'
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import {formatDistanceToNow} from 'date-fns'
export default {
  setup(){
    let messages = ref([])

    let formattedMessages = computed(()=>{
      return messages.value.map((msg)=>{       // map function base on original array and give a new array
        let formatTime = formatDistanceToNow(msg.created_up.toDate())
        return {...msg,created_up:formatTime}
      })
    })

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
    return {messages,formattedMessages}
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