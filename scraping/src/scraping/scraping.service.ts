import axios from "axios";
import * as cheerio from "cheerio";
import { URL } from 'url'
import {ScrapingRepository} from "./scraping.repository";

export async function startScraping(url: string): Promise<void> {
    try {
        const startTime = Date.now();
        console.log('Scrapping START for: ',url);
        const urls: Set<string> = new Set();
        const domains: Set<string> = new Set();
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        $('a[href]').each((_, element) => {
            const href = $(element).attr('href');
            if (!href || href.startsWith('javascript:') || href.startsWith('#')){
                return;
            }
            try {
                    const foundUrl = new URL(href,url);
                    urls.add(foundUrl.href);
                    domains.add(foundUrl.hostname);
            } catch (err) {
                console.warn(`Invalid URL: ${href}`);
            }
        });
        await ScrapingRepository.createScrape({
            timestamp: startTime,
            originUrl: url,
            domains: [...domains],
            urls: [...urls],
        });
        console.log('Scrapping DONE for: ',url);
    } catch (error) {
        console.error('Error while scraping', error);
    }
}