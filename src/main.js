import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1tJloEUFoax0fKCusWs2LzyRJSwce8E",
  authDomain: "kanten-7b459.firebaseapp.com",
  projectId: "kanten-7b459",
  storageBucket: "kanten-7b459.appspot.com",
  messagingSenderId: "1824677125",
  appId: "1:1824677125:web:d681479f3b464f611d6b6c"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
