 
import React from 'react';
//La carpeta Assests guarda imagenes o archivos de nuestra aplicacion

import { StyleSheet, Text, View,Image,TouchableOpacity,Button, Alert } from 'react-native';
//El View es como un DIV en HTML
//StyleSheet agrupa multiples estilos en un objeto
import { Component } from 'react';
import {  NavigationContainer} from "@react-navigation/native";
import {  createStackNavigator} from "@react-navigation/stack";
import CreateProgram from './components/createProgram';
import DetailProgram from './components/detailProgram';
import ListProgram from './components/listProgram';

const Stack=createStackNavigator();

class App extends Component
{
//
  MyStack()
  {
    return(
 <Stack.Navigator>
   {/* Creo una especie de pantallas una va detras de otra,
   en este ejemplo se ejecuta primero CreateUser */}
   <Stack.Screen name="ListProgram" component={ListProgram}/>
   <Stack.Screen name="CreateProgram" component={CreateProgram}/>
  <Stack.Screen name="DetailProgram" component={DetailProgram}/>
 </Stack.Navigator>
    )
  }
 render()
 {
   return( 
       <NavigationContainer>
        <this.MyStack/>
    </NavigationContainer>
    )

 }

}

const styles=StyleSheet.create({//El objeto style con su metodo create
  //nos permite crear estilos par nuestra app de React Native
container:{
  flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:"#292929"
},


title:{fontSize:30,color:"#fff"},
img:{width:200,height:200,borderRadius:90},
button:{
backgroundColor:"deepskyblue",
padding:7,
marginTop:10
},
buttontext:
{
  color:"white",
  fontSize:20
}
//En react Native siempre poner los atributos que requieran numeros como numbers
//NO PONER UN STRING DICIENDO POR EJEMPLO "400PX"

//BorderRadius:convierte el borde de la imagen en un redondel
})
export default App



