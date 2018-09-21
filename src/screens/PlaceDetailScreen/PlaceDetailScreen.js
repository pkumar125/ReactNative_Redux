import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { deletePlace } from "../../store/actions/places";

const mapDispatchToProps = {
  deletePlace
};

class PlaceDetailScreen extends Component {
  render() {
    const { deletePlace, selectedPlace } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Image source={selectedPlace.imagename} style={styles.placeImage} />
          <Text style={styles.placeName}>{selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={deletePlace(selectedPlace.key)}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetailScreen);
