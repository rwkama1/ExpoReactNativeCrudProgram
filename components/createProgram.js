import React,{ Component } from 'react';
import { StyleSheet,
     Text, 
     TextInput,
     ScrollView,
     View,
     Image,
     TouchableOpacity,
     Button,
      Alert } from 'react-native';
import ProgramAPI from "../API/program";

 class CreateProgram extends Component
 {
    constructor() {
        super();
        this.state = {
         name:"",
         producer:"",
         type:"",
         price:""
        };
      }
     onChangeText=(name,value)=>//El value es como el e.target.value en React web
     {
       this.setState(
           {
            ...this.state,[name]:value
           }
       )
     }
 
     addnewprogram=async()=>
     {       
       try{
        const pricenumber= parseFloat(this.state.price);
        const adding=await ProgramAPI.getInstance().addProgram(this.state.name,
            this.state.producer,
            this.state.type,
            pricenumber
             )
             if(adding==="Success")
             {
                 Alert.alert(adding,"Program Added");
                this.props.navigation.navigate('ListProgram');
             }
             else
             {
                Alert.alert("Error",adding);
                console.log(adding);    
             }
       }
       catch(error)
        {
          console.log(error);
        }
        
    } 
     render()
     {
     return(
       <ScrollView style={styles.container} >
           <View style={styles.inputGroup}>
               <TextInput placeholder="Name Program" 
               onChangeText={(value)=>this.onChangeText('name',value)} />
           </View>
           <View style={styles.inputGroup}>
               <TextInput placeholder="Producer Program" 
               onChangeText={(value)=>this.onChangeText('producer',value)}/>
           </View>
           <View style={styles.inputGroup}>
               <TextInput placeholder="Type Program" 
               onChangeText={(value)=>this.onChangeText('type',value)}/>
           </View>
           <View style={styles.inputGroup}>
               <TextInput placeholder="Price Program" 
               keyboardType='numeric'
               onChangeText={(value)=>this.onChangeText('price',value)}/>
           </View>
           <View>
               <Button title="Save Program"
               onPress={this.addnewprogram}>

               </Button>
           </View>
       </ScrollView>
     )
     }
 }
 const styles=StyleSheet.create
 (
    {
     container:
     {
        flex:1,
        padding:35
     },
    
         inputGroup:
         {
             flex:1,
             padding:0,
             marginBottom:15,
             borderBottomWidth:1,
             borderBottomColor:"#cccccc"
         }
     }
 )
 export default CreateProgram