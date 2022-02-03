import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

/* import firebase from 'firebase/app'
import 'firebase/firestore' */

const firebaseConfig = {
    apiKey: "AIzaSyBH4rttG2qHsJ4dUd94ZLmEO7aTemtv7nM",
    authDomain: "restaurants-react-native-4353b.firebaseapp.com",
    projectId: "restaurants-react-native-4353b",
    storageBucket: "restaurants-react-native-4353b.appspot.com",
    messagingSenderId: "242400359980",
    appId: "1:242400359980:web:1da50a6f7261fbf9190389"
  };
  
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);