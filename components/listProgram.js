 
import React,{ Component, useEffect } from 'react';
import ProgramAPI from "../API/program";
import {ListItem} from "react-native-elements";
import { StyleSheet,
     Text, 
     View,
     Image,
     TouchableOpacity,
     Button,
     ScrollView,
      Alert } from 'react-native';


 class ListProgram extends Component
 {
   
        state = {
        programs:[]
        };
        
      

      async componentDidMount()
      {
          
          const getprograms=await ProgramAPI.getInstance().getPrograms();
          this.setState({programs:getprograms});
      }
    //   async componentDidUpdate()
    //   {
    //     const programs=this.state.programs;
    //       const getprograms=await ProgramAPI.getInstance().getPrograms();
    //       console.log(getprograms);
    
    //       this.setState({programs:getprograms});
    //   }
      navigateCreateProgram=()=>
      {
        this.props.navigation.navigate("CreateProgram");
      }
     actualizarlista=async()=>
     {
        const getprograms=await ProgramAPI.getInstance().getPrograms();
       
        this.setState({programs:getprograms});
     }
     clickItem=(name)=>
     {
        this.props.navigation.navigate("DetailProgram",{name:name});
     }
     render()
     {
         
     return(
        <ScrollView>
             <Button title="Create Program" onPress={this.navigateCreateProgram}>
             
             </Button>
             <Button title="Update List" onPress={this.actualizarlista}>
             
             </Button>
           
             {
               
                this.state.programs.map(
                    p=>
                    {
                        return(
                            <ListItem key={p._name} bottomDivider onPress={()=>this.clickItem(p._name)}>
                                <ListItem.Chevron/>
                              <ListItem.Content>
                                  <ListItem.Title>
                                      {p._name}
                                  </ListItem.Title>
                                  <ListItem.Subtitle>
                                      {p._producer}
                                  </ListItem.Subtitle>
                                  <ListItem.Subtitle>
                                      {p._type}
                                  </ListItem.Subtitle>
                                  <ListItem.Subtitle>
                                      {p._pricexseg}
                                  </ListItem.Subtitle>
                              </ListItem.Content>
                                
                            </ListItem>
           
                        )
                    }
                    )
             }
         </ScrollView>
         )
     }
    
 }
 
 export default ListProgram