import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHFUp3p3znNCHuJHgAEewFCccG2c4OiJE",
    authDomain: "vue-blog-system-b0eb6.firebaseapp.com",
    projectId: "vue-blog-system-b0eb6",
    storageBucket: "vue-blog-system-b0eb6.appspot.com",
    messagingSenderId: "680773899876",
    appId: "1:680773899876:web:2f3dae618142dd2caab171"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore;
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp};