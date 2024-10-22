import {Router} from "express";
import * as ScrapingService from "./scraping.service";
import {StatusCodes} from "http-status-codes";

export const scrapingRouter = Router();

scrapingRouter.post('/start', startScraping);
async function startScraping(req, res, next) {
    const { url } = req.body;
    await ScrapingService.startScraping(url);
    res.sendStatus(StatusCodes.OK);

}