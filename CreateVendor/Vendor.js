import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Picker,Button } from 'react-native';

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          
         
      <Picker style={styles.dropdownpicker}
           selectedValue={this.state.company}
           onValueChange={(itemValue, itemIndex) => this.setState({company: itemValue})}
            
          >
            <Picker.Item key={-1} label={'Select Company Name'} value="first" />
            <Picker.Item key={0} label={'SAMSUNG'} value="02" />
            <Picker.Item key={1} label={'OPPO'} value="03" />
            
          </Picker>
       
       <TextInput style={styles.TextInput} placeholder='Company Location'></TextInput>
       <TextInput  style={styles.TextInput} placeholder='Company Contact'></TextInput>
       <TextInput  style={styles.TextInput} placeholder='GST (%)'></TextInput>
       <TextInput  style={styles.TextInput} placeholder='Mail ID'></TextInput>
       <View style={{ flexDirection: 'row',paddingTop:20,justifyContent:"center" }}>
  <View style={styles.buttonText1}>
    <Button
      title="Submit"
     
   />
   </View>
   <View style={styles.buttonText2}>
     <Button
       title="Cancel"
      
     />
   </View>
 </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:"relative"
     },
     TextInput:{
        width:261,
        height:36,
        backgroundColor:'#fffff',
        borderRadius:25,
        marginVertical:10,
        paddingVertical:16,
        paddingHorizontal:16
       

     },
     dropdownpicker:{
     
        height: 36,
        width: 261,
        marginBottom:20
      },
      buttonText1:{
        textAlign:"center",
        width:150,
        height:50,
        paddingRight:10,
        borderRadius:25,
      
      },
      buttonText2:{
       textAlign:"center",
       width:150,
        height:50,
        borderRadius:25,
     }
    })

export default Vendor;
