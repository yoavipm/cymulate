import mongoose, { Document, Schema } from 'mongoose';

export interface IScrapingModel extends Document {
    timestamp: Schema.Types.Number;
    originUrl: Schema.Types.String;
    domains: Schema.Types.String[];
    urls: Schema.Types.String[];
}

const schema = new Schema(
    {
        timestamp: {
            type: Number,
            required: true,
        },
        originUrl: {
            type: String,
            required: true,
        },
        domains: [{
            type: String,
            required: true,
        }],
        urls: [{
            type: String,
            required: true,
        }],
    },
    {
        collection: 'scrapings',
    }
);

export default mongoose.model<IScrapingModel>('scrapings', schema);
