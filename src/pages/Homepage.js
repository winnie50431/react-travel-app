import React, { useState, useEffect } from "react";
import { getData, getStationData } from "../api/services";
import Navbar from "../components/Navbar/Navbar";
import Map from "../components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
import List from "../components/List/List";

const Homepage = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [stations, setStations] = useState([]);
  // console.log(
  //   process.env.REACT_APP_ID,
  //   process.env.REACT_APP_KEY,
  //   process.env.REACT_APP_MAPSTOKEN
  // );

  useEffect(() => {
    // 使用 navigator web api 獲取當下位置(經緯度)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const longitude = position.coords.longitude; // 經度
          const latitude = position.coords.latitude; // 緯度
          // console.log({ latitude, longitude });
          setCoordinates({ lat: latitude, lng: longitude });

          // 重新設定 view 的位置
          // mymap.setView([latitude, longitude], 13);
          // 將經緯度當作參數傳給 getData 執行
          // getStationData(longitude, latitude);
        },
        // 錯誤訊息
        function (e) {
          const msg = e.code;
          const dd = e.message;
          console.error(msg);
          console.error(dd);
        }
      );
    }
  }, []);

  useEffect(() => {
    getStationData(coordinates).then((data) => {
      console.log(data);
      setStations(data);
    });
  }, [coordinates]);

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map coordinates={coordinates} stations={stations} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
