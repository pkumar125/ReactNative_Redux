import React, { Component } from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";
import MapView from "react-native-maps";

class PickLocation extends Component {
  state = {
    focusLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0122
    },
    locationChoosen: false
  };

  handlePickLocation = event => {
    const coords = event.nativeEvent.coordinate;

    this.map.animateToRegion({
      ...this.state.focusLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });

    this.setState(prevState => {
      return {
        focusLocation: {
          ...prevState.focusLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChoosen: true
      };
    });

    this.props.onLocationPick({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        };
        this.handlePickLocation(coordsEvent);
      },
      err => {
        console.log(err);
        alert("Fetching position fail, Please pick one manually");
      }
    );
  };

  render() {
    let marker = null;
    if (this.state.locationChoosen) {
      marker = <MapView.Marker coordinate={this.state.focusLocation} />;
    }
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusLocation}
          style={styles.map}
          onPress={this.handlePickLocation}
          ref={ref => (this.map = ref)}
        >
          {marker}
        </MapView>

        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.handleLocation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  }
});
/*

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
*/

export default PickLocation;
