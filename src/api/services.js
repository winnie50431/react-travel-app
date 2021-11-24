import axios from "axios";
import jsSHA from "jssha";

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

function GetAuthorizationHeader() {
  var AppID = process.env.REACT_APP_ID;
  var AppKey = process.env.REACT_APP_KEY;

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';

  return {
    Authorization: Authorization,
    "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/,
  }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
