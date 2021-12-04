import axios from "axios";
import { GetAuthorizationHeader } from "./auth";

export const getData = async () => {
  // const url =
  //   "https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/616?$top=30&$format=JSON";

  // /v2/Bus/Station/NearBy 取得指定[位置,範圍]的全臺公車站位資料
  const stationsURL =
    "https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$top=30&$spatialFilter=nearby(25.103392,121.520988,150)&$format=JSON";

  const options = {
    headers: GetAuthorizationHeader(),
  };

  try {
    // const res = await axios.get(url, options);
    const res = await axios.get(stationsURL, options);
    const data = res.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getStationData = async (coordinates) => {
  // const url =
  //   "https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/616?$top=30&$format=JSON";

  // /v2/Bus/Station/NearBy 取得指定[位置,範圍]的全臺公車站位資料
  const stationsURL = `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$top=30&$spatialFilter=nearby(${coordinates.lat},${coordinates.lng},150)&$format=JSON`;

  const options = {
    headers: GetAuthorizationHeader(),
  };

  try {
    // const res = await axios.get(url, options);
    const res = await axios.get(stationsURL, options);
    const data = res.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
