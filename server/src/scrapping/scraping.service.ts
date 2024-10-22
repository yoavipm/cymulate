import {IResponseScraping} from "./scraping.interfaces";
import {ScrappingApi} from "./scrapping.api";
import {ScrapingRepository} from "./scraping.repository";

export async function getScrapings(): Promise<IResponseScraping[]> {
    return (await ScrapingRepository.getScrapings())|| [];
}

export async function startScraping(url: string): Promise<void> {
    return ScrappingApi.startScrapping(url);
}