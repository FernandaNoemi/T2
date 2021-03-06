import React, {Fragment} from "react";

import { Button,Avatar, Card, Text, Paragraph } from "react-native-paper";
import { Link, withRouter } from "react-router-native";
import { View, ScrollView } from "react-native";
import MyHeader from "../Header"
import MyStyles from "../styles"

class Home extends React.Component {
  render() {
  return (
    <Fragment>
      <MyHeader text="Derbild" subtitle="Welcome" />
      <ScrollView>
      <Card style={MyStyles.margen}>
        <Card.Title title="!Bienvenido a Derbild¡" subtitle="(╯✧▽✧)╯" left={(props) => <Avatar.Icon {...props} icon={require('../../assets/icon.png')} />} />
        <Card.Content>
          <Paragraph> 
            Antes que nada te damos la bienvenida a Derbild, una App para Fotografos
            por favor diviertete, si tienes algun problema, perdon... Σ(°△°)
          </Paragraph>
        </Card.Content>
      </Card>
        <View style={MyStyles.appContainer}>
          <Text>Si ya tienes una cuenta vamos (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</Text>
            <Button icon="person-pin-circle" mode="outlined" style={MyStyles.btn} onPress={() => this.props.history.push("login")}>
              Log In
            </Button>
          <Text >¡¿Que aun no tienes una cuenta?!, ¿Que esperas? es !!!FACILISIMO¡¡¡</Text>
          <Button icon="person-add" mode="outlined" style={MyStyles.btn} onPress={() => this.props.history.push("signup")}>
            Sign Up
          </Button>
        </View>
      </ScrollView>  
    </Fragment>
  );
  }
}

export default withRouter(Home);

