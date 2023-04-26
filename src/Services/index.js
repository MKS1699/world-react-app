import axios from "axios";
const Country_API_ENDPOINT = "https://restcountries.com/v3.1";

export function getData() {
  // calling the api through the axios
  return axios.get(`${Country_API_ENDPOINT}/all`);
}
