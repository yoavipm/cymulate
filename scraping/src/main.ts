import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as http from 'http';
import {envVars} from "./env_variables";
import * as routes from "./routes";
import {onError, onListening} from "./server_utils";
import {db} from "./configs/repository.config";
import {startScraping} from "./scraping/scraping.service";
import {ScrapingRepository} from "./scraping/scraping.repository";

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = envVars.SERVER_PORT;

db.connect()
    .then(() => {
        routes.init(app);
        const server = http.createServer(app);
        server.on('error', (error) => onError(error,port));
        server.on('listening', () => onListening(server.address()));
        server.listen(port);
    })
    .catch(e => {
        console.error(e.message, e);
    });

