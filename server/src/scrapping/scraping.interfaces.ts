
export interface IScraping{
    timestamp: number;
    originUrl: string;
    domains: string[];
    urls: string[];
}

export interface IResponseScraping extends IScraping{
}