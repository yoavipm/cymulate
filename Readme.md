Instructions:

using ports: 8080,8081,3000,27017
in current folder run: docker-compose up.
navigate to localhost:3000 on your browser.

Disclaimer:

since I don't know NestJS I used Express, since I wouldn't make it within the timeframe to learn and implement NestJS.

Approach:
Scrapper - only expose start endpoint to start a scrape, in "real life" I would have a scrapper consume from a Topic, that way I can deal with scale.
I would also consider starting a VM and shutting it down just for the scrape, 
depending on how long it takes to scrape , and if there are times where we don't need to scrape at all.
No need to have a VM up if it is idle for a long period.

Backend Server - triggers the scrapper, and fetch from DB.
I was considering encapsulating the scraping to only the Scraper service, meaning only the Scraper would access the scraping collection,
but assuming it to be busy, I wouldn't want to interrupt its scraping.
The downside of having both Scraper and Backend server accessing the table is the need to define the Schema in multiple places,
might need a common library for ease of use.

Frontend (react) - basic table with buttons and input.

