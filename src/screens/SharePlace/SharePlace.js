import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../../components/PlaceList/PlaceList";

const mapStateToProps = state => {
  return { places: state.placeR.places };
};

class SharePlaceScreen extends Component {

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

  handleSelectedPlace = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  }

  render() {
    const { places } = this.props;
    console.log(places);
    return <View>
        <Text>List Place</Text>
      <PlaceList places={places} onSelectedPlace={this.handleSelectedPlace} />
      </View>;
  }
}

export default connect(mapStateToProps)(SharePlaceScreen);
