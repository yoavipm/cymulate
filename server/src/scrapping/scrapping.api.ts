import {envVars} from "../env_variables";
import axios from "axios";

const scrapingModuleAddress: string = envVars.SCRAPING_MODULE_URL;

const http = axios.create({
    baseURL: `${scrapingModuleAddress}/scraping`,
    headers: {
        "Content-type": "application/json"
    }
});
async function startScrapping(url: string): Promise<void>{
    try{
        await http.post('/start',{url});
    }catch (err){
        console.error(err);
    }

}

export const ScrappingApi = {
    startScrapping,
}