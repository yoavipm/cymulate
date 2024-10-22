import {Router} from "express";
import * as ScrapingService from "./scraping.service";
import {StatusCodes} from "http-status-codes";

export const scrapingRouter = Router();
//TODO: error handling middleware/wrapper
scrapingRouter.get('/', getScrapings);
async function getScrapings(req, res, next): Promise<void> {
    const scrapings = await ScrapingService.getScrapings();
    res.json(scrapings);
}

scrapingRouter.post('/start', scrapeUrl);
async function scrapeUrl(req, res, next): Promise<void> {
    //TODO: url validations
    const { url } = req.body;
    await ScrapingService.startScraping(url);
    res.sendStatus(StatusCodes.OK);
}