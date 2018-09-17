import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image  } from 'react-native'

const ListItem =  (props) => {
  return <TouchableOpacity onPress={props.handleItemPressed}>
      <View style={styles.listitem}>
        <Image resizeMode="cover" source={props.placeImage} style={styles.placeimage} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
  listitem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeimage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});



export default ListItem