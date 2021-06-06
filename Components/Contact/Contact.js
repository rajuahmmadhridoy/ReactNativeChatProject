import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';

const Contact = () =>  {
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Welcome To Our ARN Travel Journey</Text>
      <Text style={styles.TextStyle}>Join With Us And Make Your Journey Enjoyable And Make Your Life Enjoyable</Text>

      <TextInput  style={styles.Input} placeholder='Your Name' type='text'/>
      <TextInput style={styles.Input}  placeholder='Your Email' type='email'/>
      <TextInput style={styles.Input}  placeholder='Your Number' type='number'/>
      <TextInput  style={styles.Message} placeholder='Write Your Message' type='text'/>
      <TouchableOpacity>
            <Text style = {styles.text}>
               Send Message
            </Text>
         </TouchableOpacity>
      
       
    </View>
  );
}
export default Contact;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption:{
 
      fontSize: '25px',
      fontWeight: '700',
      fontStyle:'italic',
      color: '#6374df',
      marginBottom:'20px'


  },
  TextStyle:{
 

      fontSize:' 16px',
      fontWeight: '500',
      color: '#2f2d2d',
      marginBottom:'50px',
      color: '#969393'
  

  },
  Input:{
    width:'70%',
    marginTop: '20px',
    backgroundColor:'#fafafa',
    padding:'12px',
    borderRadius: '7px',
    outline: 'none!',
    fontSize:'14px',
    fontStyle:'italic'
    
    
},
  Message:{
    width:'70%',
    marginTop: '20px',
    backgroundColor:'#fafafa',
    padding:'12px',
    borderRadius: '7px',
    outline: 'none!',
    fontSize:'14px',
    fontStyle:'italic',
    paddingBottom:' 119px'

    
},
text:{
  marginTop: '20px',
  backgroundColor: '#6274df',
  color: '#fafafa',
  paddingTop: '13px ',
  paddingBottom: '13px',
  paddingLeft: '74px',
  paddingRight: '74px',
  fontSize: '15px',
  fontWeight: '600',
  borderRadius: '10px'
}
});
