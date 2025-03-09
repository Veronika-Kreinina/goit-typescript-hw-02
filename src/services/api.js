import axios from "axios";

const API_KEY = "W621so5AbFY_ZgjAfHYJPp_Mx0EpIMR7jPuCT3Myn2Y";
const BASE_URL = "https://api.unsplash.com";
export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });
  return data;
};

export default getPhotos;
