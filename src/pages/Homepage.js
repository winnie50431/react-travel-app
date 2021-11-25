import React, { useState, useEffect } from "react";
import { getPlacesData } from "../api";
import Navbar from "../components/Navbar/Navbar";
import Map from "../components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
import List from "../components/List/List";

const Homepage = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 25.103392,
    lng: 121.520988,
  });
  const [bounds, setBounds] = useState({ ne: 0, sw: 0 });

  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  // for refs; "Cannot read properties of undefined (reading 'length')"
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // (e) => console.log(e)
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    // console.log(coordinates, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      // console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            setChildClicked={setChildClicked}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
