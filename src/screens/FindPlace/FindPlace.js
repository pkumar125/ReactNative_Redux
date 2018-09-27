import React, { Component } from "react";
import { View, ScrollView, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "../../store/actions/places";
import MainText from "../../components/UI/MainText";
import HeadingText from "../../components/UI/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

const mapDispatchToProps = {
  addPlace
};

class FindPlaceScreen extends Component {
  state = {
    pName: ""
  };

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
  };

  handlePlaceName = val => {
    this.setState({ pName: val });
  };

  render() {
    const { addPlace } = this.props;
    const { pName } = this.state;
    return <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Add Places</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput pName={pName} onChangeText={this.handlePlaceName} />
          <View style={styles.button}>
            <Button title="Share this place" onPress={addPlace} />
          </View>
        </View>
      </ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

export default connect(
  null,
  mapDispatchToProps
)(FindPlaceScreen);
