import React, { Component } from "react";
import { View, ImageBackground, Button, StyleSheet } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../../components/UI/HeadingText";
import MainText from "../../components/UI/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground";
import BackGroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
        <ImageBackground source={BackGroundImage} style={styles.backgroundStyle}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Login</HeadingText>
          </MainText>
          <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Enter Your Email Address"
              style={styles.input}
            />
            <DefaultInput placeholder="Password" />
            <DefaultInput placeholder="Confirm Your Password" />
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
          <Button title="Login" onPress={this.loginHandler} />
        </View>
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderColor: "red"
  },
  backgroundStyle: {
    flex: 1,
    width: "100%"
  },
  inputContainer: {
    width: "80%"
  }
});

export default AuthScreen;
