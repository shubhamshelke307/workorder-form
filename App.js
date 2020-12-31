import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Workorder from './CreateWorkorder/Workorder';
import Vendor from './CreateVendor/Vendor'
import document from './CreateWorkorder/documentPicker'
export default function App() {
  
  return (
    <View style={styles.container}>
     <Workorder/>
     <Vendor/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
