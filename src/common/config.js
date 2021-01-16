export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://tobedefined.io/api"
    : "https://mysterious-anchorage-24698.herokuapp.com/";
export default API_URL;
