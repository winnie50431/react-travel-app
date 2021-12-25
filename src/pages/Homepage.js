import React, { useState, useEffect } from "react";
import { getData } from "../api/services";
import Navbar from "../components/Navbar/Navbar";
import Map from "../components/Map/Map";
import List from "../components/List/List";
import { CssBaseline, Grid } from "@material-ui/core";

const Homepage = () => {
  // 預設為台北車站
  const [coordinates, setCoordinates] = useState({
    lat: 25.047675,
    lng: 121.517055,
  });
  const [type, setType] = useState("ScenicSpot");
  const [places, setPlaces] = useState(null); // api回傳的地點資訊
  const [childClicked, setChildClicked] = useState(null); // 點擊的物件

  // for refs; "Cannot read properties of undefined (reading 'length')"
  const [isLoading, setIsLoading] = useState(false); // loading animation

  /** get current position */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (e) => console.log(e)
    );
  }, []);

  /** whenever position was changed */
  useEffect(() => {
    setIsLoading(true);
    if (coordinates) {
      getData(type, coordinates.lat, coordinates.lng)
        .then((data) => {
          setPlaces(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [coordinates, type]);

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            type={type}
            setType={setType}
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
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
