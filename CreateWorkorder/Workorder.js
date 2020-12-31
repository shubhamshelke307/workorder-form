import React,{ useState,Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Picker,Button,SafeAreaView} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
//import CalendarPicker from 'react-native-calendar-picker';
// import DatePicker from 'react-datepicker';


class Workorder extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedValue:'',
      onValueChange:'',
      
      
      }
      
    

    // click=()=>{
    //   this.setState({
    //     date:'2016-05-15'
    //   })
    // }
    
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
     inputBox:{
        width:261,
        height:36,
        backgroundColor:'#ffffff',
        borderRadius:25,
        marginVertical:10,
        paddingVertical:16,
        paddingHorizontal:16,
        borderColor:'black',
        //  underlineColorAndroid:'rgba(0,0,0,0)'

     },
     button:{
        width:150,
        height:50,
        backgroundColor:'#1c313a',
        borderRadius:25,
        marginVertical:10,
        paddingVertical:16

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
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
    dropdownpicker:{
     
      height: 36,
      width: 261,
      marginBottom:20
    }
    });
export default Workorder;
