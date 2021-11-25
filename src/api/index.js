import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
      limit: "10",
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "dc127127acmsh1aa2d4445f0733fp19df8ajsn88b45d7e39a2",
    },
  };
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (err) {
    console.log(err);
  }
};
