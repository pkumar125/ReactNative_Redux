import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    firstName: ""
  };
  handlePlaceSubmit = () => {
    if (this.state.firstName.trim() === "") {
      return;
    }
    this.props.onAddPlace(this.state.firstName);   
  };

  handleKeyInput = val => {
    this.setState({
      firstName: val
    });
  };

  render() {
    return (
      <View style={styles.placeinput}>
        <TextInput         
          placeholder="First Name"
          onChangeText={this.handleKeyInput}
          value={this.state.firstName}
          style={styles.placeinput}
        />
        <Button
          title="Add"
          style={styles.placebutton}
          onPress={this.handlePlaceSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputcontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placebutton: {
    width: "30%"
  },
  placeinput: {
    width: "70%"
  }
});

export default PlaceInput;
