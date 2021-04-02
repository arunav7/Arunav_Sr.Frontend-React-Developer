import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY || 'AIzaSyBP0kdpSmWAe24UdQdmnvPQR6zs-Gx7WDY',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || 'decathlon-cart.firebaseapp.com',
  projectId: process.env.REACT_APP_PROJECT_ID || 'decathlon-cart',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || 'decathlon-cart.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID || '991969243306',
  appId: process.env.REACT_APP_APP_ID || '1:991969243306:web:6f466ce4bfac59d60920d3'
})

export const auth = app.auth()
export default app
