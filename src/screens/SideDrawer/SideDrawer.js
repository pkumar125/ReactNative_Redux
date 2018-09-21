import React, { Component } from 'react'

import { View, Text, Dimensions, StyleSheet } from "react-native";

export class SideDrawer extends Component {
  render() {
    return (
        <View
            style={[
                styles.container,
                { width: Dimensions.get("window").width * 0.5 }
            ]}
        >
        <Text>SideDrawer</Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1
    }
});

export default SideDrawer
