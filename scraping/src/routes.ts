import {Express} from 'express';
import {scrapingRouter} from "./scraping/scraping.controller";

export function init(app: Express) {
    app.use('/scraping', scrapingRouter)
}
