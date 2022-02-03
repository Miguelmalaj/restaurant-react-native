import { StyleSheet,View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import Loading from '../../components/Loading';
import {Button} from 'react-native-elements'

export default function UserGuest() {
  return (
    <ScrollView
      centerContent
      style={StyleSheet.viewBody}
    >
      <Image
        source={require("../../assets/restaurant-logo.png")}
        resizeMode='contain'
        style={styles.image}
      />

      <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cuál te ha gustado más y comenta cómo ha sido tu experiencia.
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Ver tu perfil"
        onPress={() => console.log("pressed")}
        
      />
    </ScrollView>

    // <View>
    //   <Text>UserGuest...</Text>
    //   <Loading isVisible={true} text="Cargando..."/>
    // </View>
  );
}


const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal:30
  },
  image:{
    height:300,
    width: "100%",
    marginBottom:10,
    textAlign:"center"
  },
  title:{
    fontWeight: "bold",
    fontSize: 19,
    marginVertical:10,
    // marginBottom: 10,
    textAlign: "center"
  },

  description:{
    textAlign: "justify",
    marginBottom: 20,
    marginStart:15,
    marginEnd:15,
    color: "#a65273"
  },

  button:{
    backgroundColor: "#442484"
    
  }
})