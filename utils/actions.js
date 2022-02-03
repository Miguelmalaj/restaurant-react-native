import  {firebaseApp}  from "./firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

/* import {firebaseApp} from './firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'; */

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () => {

    let isLogged = false
    firebase.auth().onAuthStateChanded((user) => {
        user !== null && (isLogged = true)
    })

}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}