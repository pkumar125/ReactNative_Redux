import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "../../store/actions/places";

const mapDispatchToProps = {
  addPlace
};

class FindPlaceScreen extends Component {
  render() {
    const { addPlace } = this.props;
    return (
      <View>
        <Text>Add Place</Text>
        <PlaceInput onAddPlace={addPlace} />
      </View>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FindPlaceScreen);
