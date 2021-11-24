import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";

import useStyles from "./styles";

const Map = ({ coordinates, stations }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const AnyReactComponent = ({ text }) => (
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: process.env.REACT_APP_MAPSTOKEN }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}
      >
        {/* console.log(data[0].StationPosition.PositionLat, data[0].StationPosition.PositionLon); */}

        {stations
          ? stations.map((station, index) => (
              <div
                className={classes.markerContainer}
                lat={station.StationPosition.PositionLat}
                lng={station.StationPosition.PositionLon}
                key={index}
              >
                <LocationOnOutlined />
              </div>
            ))
          : ""}
        <AnyReactComponent
          lat={coordinates.lat}
          lng={coordinates.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
