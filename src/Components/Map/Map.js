import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: '55%',
  height: '70%',
  position: "absolute",
  borderRadious: "10px"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 23.777176,
            lng: 90.399452
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDWfvVKSuvJSfL_HnNebKJNT0HRHUWfTBY'
})(MapContainer);

// AIzaSyDWfvVKSuvJSfL_HnNebKJNT0HRHUWfTBY