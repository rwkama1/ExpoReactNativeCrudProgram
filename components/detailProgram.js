import React,{ Component } from 'react';
import { StyleSheet,
     Text, 
     TextInput,
     View,
     Image,
     TouchableOpacity,
     Button,
     ScrollView,
      Alert, 
      ActivityIndicator} from 'react-native';
 import ProgramAPI from "../API/program";


 class DetailProgram extends Component
 {
    state = {
        program:{},
        name:"",
        producer:"",
        type:"",
        price:0,
        loading:true
        };
        
    async componentDidMount()
    {
       
        const nameprop=this.props.route.params.name;
        const getprogram=await ProgramAPI.getInstance().getProgram(nameprop);
        this.setState({program:getprogram
            ,name:getprogram._name,
            producer:getprogram._producer,
            type:getprogram._type,
            price:getprogram._pricexseg,
            loading:false
        });
       
        // this.setState({programs:getprograms});
    }
    onChangeText=(name,value)=>//El value es como el e.target.value en React web
    {
      this.setState(
          {
           ...this.state,[name]:value
          }
      )
    }
    confirmationDeleteProgram=async()=>
    {
        Alert.alert("Remove the Program","Are you sure?",
        [
            {text:"Yes",onPress:this.deleteProgram},
            {text:"No",onPress:()=>{console.log(false);}}
        ])
    }
    confirmationUpdateProgram=async()=>
    {
        Alert.alert("Update the Program","Are you sure?",
        [
            {text:"Yes",onPress:this.updateProgram},
            {text:"No",onPress:()=>{console.log(false);}}
        ])
    }
    deleteProgram=async()=>
    {
        const nameprop=this.props.route.params.name;
        const getprogram=await ProgramAPI.getInstance().deleteProgram(nameprop);
        if(getprogram==="Success")
        {
            Alert.alert(getprogram,"Program deleted");
           this.props.navigation.navigate('ListProgram');
        }
        else
        {
           Alert.alert("Error",getprogram);
           console.log(getprogram);    
        }
    }
    updateProgram=async()=>
    {
    //   if(this.state.price===""||this.state.price==="0")
    //   {
    //       Alert.alert("Error","Please provide a price");
    //       return;
    //   }
   try{
    const pricenumber= Number(this.state.price);
    const updating=await ProgramAPI.getInstance().updateProgram(this.state.name,
        this.state.producer,
        this.state.type,
        pricenumber
         )
         if(updating==="Success")
         {
             Alert.alert(updating,"Program Updated");
            this.props.navigation.navigate('ListProgram');
         }
         else
         {
            Alert.alert("Error",updating);
               
         }
   }
   catch(error)
    {
      console.log(error);
    }
    } 
    
     render()
     {
    if(this.state.loading)
    {
        return(
        <View>
            <ActivityIndicator animating={true} size="large" color="#9e9e9e">

            </ActivityIndicator>
        </View>
        )
    }
     return(
        <ScrollView style={styles.container} >
        <View style={styles.inputGroup}>
            <TextInput placeholder="Name Program" 
            value={this.state.name}
            editable={false}
            //Sirve para poner el textinput en readonly
            onChangeText={(value)=>this.onChangeText('name',value)} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Producer Program" 
             value={this.state.producer}
            onChangeText={(value)=>this.onChangeText('producer',value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Type Program" 
             value={this.state.type}
            onChangeText={(value)=>this.onChangeText('type',value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Price Program" 
             value={this.state.price.toString()}
            keyboardType='numeric'
            onChangeText={(value)=>this.onChangeText('price',value)}/>
        </View>
        <View>
            <Button title="Update Program"
            color="green"
            onPress={this.confirmationUpdateProgram}>
            </Button>
            
        </View>
        <View>
        <Button title="Delete Program"
         color="red"
            onPress={this.confirmationDeleteProgram}>
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
 export default DetailProgram