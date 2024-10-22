import Scrapings from "./scraping.model";

async function createScrape(scraping): Promise<void> {
    await Scrapings.create(scraping);
}

export const ScrapingRepository = {
    createScrape: createScrape,
}