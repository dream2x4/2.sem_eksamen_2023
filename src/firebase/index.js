
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBq1tJloEUFoax0fKCusWs2LzyRJSwce8E',
  authDomain: 'kanten-7b459.firebaseapp.com',
  projectId: 'kanten-7b459',
  storageBucket: 'kanten-7b459.appspot.com',
  messagingSenderId: '1824677125',
  appId: '1:1824677125:web:d681479f3b464f611d6b6c'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}