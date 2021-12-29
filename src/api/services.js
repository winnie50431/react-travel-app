import axios from "axios";
import { GetAuthorizationHeader } from "./auth";

export const getData = async (type, lat, lng) => {
  // console.log({ lat, lng });
  const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${type}?$top=30&$spatialFilter=nearby(${lat},${lng},800)&$format=JSON`;

  const options = {
    headers: GetAuthorizationHeader(),
  };

  try {
    const res = await axios.get(url, options);
    const data = res.data;
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
