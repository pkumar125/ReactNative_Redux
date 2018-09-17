import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/places";

class App extends Component {
  render() {
    console.log('dddddddddd');
    const {
      addPlace,
      deletePlace,
      selectPlace,
      deselectPlace,
      selectedPlace,
      places
    } = this.props;
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={selectedPlace}
          onModalClosed={deselectPlace}
          onItemDeleted={deletePlace}
        />
        <PlaceInput onAddPlace={addPlace} />
        <PlaceList places={places} onSelectedPlace={selectPlace} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.placeR.places,
    selectedPlace: state.placeR.selectedPlace
  };
};

const mapDispatchToProps = {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
