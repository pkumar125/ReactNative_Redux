import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { deletePlace } from "../../store/actions/places";
import MapView from "react-native-maps";

const mapDispatchToProps = {
  deletePlace
};

class PlaceDetailScreen extends Component {
  render() {
    const { deletePlace, selectedPlace } = this.props;
    return (
      <View style={styles.container}>
       
              <View style={styles.subContainer}>
                <Image source={selectedPlace.imagename} style={styles.placeImage} />
                <Text style={styles.placeName}>{selectedPlace.name}</Text>
              </View>
              <View style={styles.subContainer}>
                  <MapView
                    initialRegion={{
                      ...this.props.selectedPlace.location,
                      latitudeDelta: 0.0122,
                      longitudeDelta:
                        Dimensions.get("window").width /
                        Dimensions.get("window").height *
                        0.0122
                    }}
                    style={styles.map}
                  >
                  <MapView.Marker coordinate={this.props.selectedPlace.location} />
                </MapView>
            </View>
        <View>
          <TouchableOpacity onPress={() => deletePlace(selectedPlace.key)}>
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
    margin: 22,
    flex: 1
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  },
  placeDetailContainer: {
    flex: 2
  },
  placeImage: {
    width: "100%",
    height: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetailScreen);
