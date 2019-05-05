import React, { Fragment } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View } from 'react-native'

import MyHeader from "../Header"
import MyStyle from "../styles"

class Login extends React.Component {
  state = {user: "", password: ""}

  sendToDB = () => {
    const data = {user: this.state.user, password: this.state.password};
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    fetch('http://pablorosas.pythonanywhere.com/logIn', options)
      .then(res => res.json())
      .then(res => alert(res.ID))
  }

  render () {

    const textProps = {
      mode: 'outlined',
      style: MyStyle.input,
      theme: { colors:{text:'black'}}
    }

    return (
      <Fragment>
        <MyHeader text="Derbild" subtitle="Log In" link="/" hasAnArrow />
        <View style={MyStyle.appContainer}> 
          <TextInput 
            {...textProps} 
            label = 'User' 
            value = {this.state.user} 
            onChange = {e => { this.setState({user: e.nativeEvent.text})}}
          />
          <TextInput 
            {...textProps} 
            label = 'Password' 
            value = {this.state.password} 
            onChange = {e => { this.setState({password: e.nativeEvent.text})}}
          />

          <Button mode="outlined" onPress={this.sendToDB} style={MyStyle.btn}>
            Log In
          </Button>
        </View>
      </Fragment>
    );
  }  
};

export default Login;