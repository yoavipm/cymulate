import axios from "axios";
import {SERVER_URL} from "../config/config"
const http = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-type": "application/json"
  }
});

const startScrape = async (url) => {
  //TODO: handle response codes
  try{
    await http.post(
      "/scrape/start",
        {url}
      );
  }
  catch (err) {
    throw new Error(err.message);
  }
}
const getScrapes = async () => {
  try{
    const response = await http.get("/scrape");
    //TODO: handle response codes
    return response.data;
  }
  catch (err) {
    throw new Error(err.message);
  }
}
export const Api = {
  startScrape: startScrape,
  getScrapes: getScrapes
}