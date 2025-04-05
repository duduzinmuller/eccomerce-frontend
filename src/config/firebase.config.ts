import { initializeApp } from 'firebase/app'
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA07TxaZtg-DPSooO47dmw5dX_9szR7CVI',
  authDomain: 'club-eccomerce-c68e2.firebaseapp.com',
  projectId: 'club-eccomerce-c68e2',
  storageBucket: 'club-eccomerce-c68e2.firebasestorage.app',
  messagingSenderId: '1079361172779',
  appId: '1:1079361172779:web:23a1363c83c4c5b762c16e'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
