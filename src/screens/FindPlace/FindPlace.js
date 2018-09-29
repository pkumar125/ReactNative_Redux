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
    controls: {
      pName: {
        value: null,
        valid: false
      },
      location: {
        value: null,
        valid: false
      }
    }
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

  locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

  handlePlaceName = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          pName: {
            ...prevState.controls.pName,
            value: val,
            valid: true,
            touched: true
          }
        }
      };
    });
  };

  handleImagePicked = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      };
    });
  };

  render() {
    const { addPlace } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Add Places</HeadingText>
          </MainText>
          <PickImage onImagePicked={this.handleImagePicked} />
          <PickLocation onLocationPick={this.locationPickedHandler} />
          <PlaceInput
            placeData={this.state.controls.pName}
            onChangeText={this.handlePlaceName}
          />
          <View style={styles.button}>
            <Button
              title="Share this place"
              onPress={() =>
                addPlace(
                  this.state.controls.pName.value,
                  this.state.controls.location.value,
                  this.state.controls.image.value
                )
              }
              disabled={
                !this.state.controls.pName.valid ||
                !this.state.controls.location.valid ||
                !this.state.controls.image.value
              }
            />
          </View>
        </View>
      </ScrollView>
    );
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
