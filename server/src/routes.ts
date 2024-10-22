import {Express} from 'express';
import {scrapingRouter} from "./scrapping/scraping.controller";

export function init(app: Express) {
    app.use('/scrape', scrapingRouter)
}
