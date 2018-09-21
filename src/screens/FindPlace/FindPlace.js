import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "../../store/actions/places";

const mapDispatchToProps = {
  addPlace
};

class FindPlaceScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }

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
