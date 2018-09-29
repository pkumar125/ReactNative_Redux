import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName,location,imageName) => {
  return {
    type: ADD_PLACE,
    pName: placeName,
    location:location,
    imageN:imageName
  };
};

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
