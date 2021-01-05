import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,Picker,Button,SafeAreaView} from 'react-native';

class CreateDeliveryChallan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

           

        <View style={styles.middle}>

        <TextInput style={styles.inputBox} placeholder='Site Name'></TextInput>

        <Picker  style={styles.dropdownpicker}
                 selectedValue={this.state.Pump}
                 onValueChange={(itemValue, itemIndex) => this.setState({Pump: itemValue})}
              >
                <Picker.Item key={-1} label={'Select Pump Type'} value="first" />
                <Picker.Item key={0} label={'Mud Pump'} value="02" />
                <Picker.Item key={1} label={'Water Pump'} value="03" />
                
              </Picker>
         
          <Picker  style={styles.dropdownpicker}
              selectedValue={this.state.Power}
              onValueChange={(itemValue, itemIndex) => this.setState({Power: itemValue})}
              >
                <Picker.Item key={-1} label={'Select Power'} value="first" />
                <Picker.Item key={0} label={'50W'} value="02" />
                <Picker.Item key={1} label={'100W'} value="03" />
                
              </Picker>
          
          <Picker  style={styles.dropdownpicker}
                selectedValue={this.state.cable}
                onValueChange={(itemValue, itemIndex) => this.setState({cable: itemValue})}
              >
                <Picker.Item key={-1} label={'Select cable'} value="first" />
                <Picker.Item key={0} label={'Twisted Pair '} value="02" />
                <Picker.Item key={1} label={'Single pair'} value="03" />
                
              </Picker>

              <TextInput style={styles.inputBox} placeholder='Pannel'></TextInput>


              <View style={{ flexDirection: 'row',paddingVertical:20,justifyContent:"center" }}>
  <View style={styles.buttonText1}>
  <TextInput style={styles.inputBox} placeholder='Start Date'></TextInput>

   </View>
   <View style={styles.buttonText2}>
   <TextInput style={styles.inputBox} placeholder='End Date'></TextInput>

   </View>
   </View>



              <TextInput style={styles.inputBox} placeholder='Refered by'></TextInput>

              <TextInput style={styles.inputBox} placeholder='Photo Url'></TextInput>

              <TextInput style={styles.inputBox} placeholder='Rate'></TextInput>

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
     
      </ScrollView>
      </SafeAreaView>
    );
  }
}
 
const styles=  StyleSheet.create({
container:{
    backgroundColor: '#ffffff',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position:"relative"
},
scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
  },
inputBox:{
    margin: 5,
    paddingLeft:5,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    
   },
middle:{
    position:'relative',
    width:'100%',
    top:'3%',
    alignSelf:"center",
 

},
bottom:{
    width:'100%',
    height:'100%',
    top:'5%'
},
top:{
    width:'100%',
    height:'100%',
    top:'5%'
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
 },
 dropdownpicker:{
     
    height: 56,
    width: 300,
    margin:5,
    borderRadius:10,
    borderColor: 'black',
    borderWidth: 1,
  }
});
export default CreateDeliveryChallan;
