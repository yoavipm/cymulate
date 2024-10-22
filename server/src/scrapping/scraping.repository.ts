import Scrapings from "./scraping.model";
import {IScraping} from "./scraping.interfaces";


async function getScrapings(): Promise<IScraping[]>{
    //TODO: deal with TypeScript here.
    const scrapings = await Scrapings.find({}).lean();
    return scrapings.map(scrape => (
        {
            timestamp: scrape.timestamp,
            originUrl: scrape.originUrl,
            urls: scrape.urls,
            domains: scrape.domains
        })) as any;
}

export const ScrapingRepository = {
    getScrapings: getScrapings,
}