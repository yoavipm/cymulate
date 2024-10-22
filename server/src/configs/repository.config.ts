import mongoose = require('mongoose');
import {envVars} from "../env_variables";

async function connect(): Promise<void> {
    try {
        await mongoose.connect(envVars.DB_URL);
        console.info('Connected to db');
    } catch (err) {
        console.error('Failed to connect to db', err);
        throw err;
    }
    mongoose.connection.on('disconnected', e => {
        console.error('Mongoose default connection disconnected', e);
    });
}

export const db ={connect};
