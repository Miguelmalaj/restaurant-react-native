import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { getCurrentUser, isUserLogged } from '../../utils/actions';
import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
import 'firebase/compat/auth';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';
import Loading from '../../components/Loading';

export default function Account() {
  const [login, setLogin] = useState(null);

 /*  firebase.auth().onAuthStateChanged((user) => {
    user !== null ? (setLogin(true)) : setLogin(false)
  }) */

  useEffect(() => {
    const user = getCurrentUser()
    user ? setLogin(true) : setLogin(false)
    
  }, []);
  

  if(login == null){
    return <Loading isVisible={true} text="Cargando.."/>
  }
  

  return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({});
