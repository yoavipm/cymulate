
import {Api} from "../api/api";
export async function fetchScrapes() {
    return Api.getScrapes();

}

export async function startScrape(url) {
    return Api.startScrape(url);
}


