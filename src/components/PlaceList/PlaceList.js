import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listcontainer}
      data={props.places}
      renderItem={(place) => (
        <ListItem
          key={place.item.key}
          placeName={place.item.name}
          placeImage={place.item.imagename}
          handleItemPressed={() => props.onSelectedPlace(place.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listcontainer: { width: "100%" }
});

export default PlaceList;
