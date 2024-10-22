import './App.css';
import React, {useEffect, useState} from "react";
import Loader from "./loader/loader";
import ScrapesTable from "./scrapesTable/scrapesTable";
import ScrapeActions from "./scrapes/scrapeActions";
import 'antd/dist/antd.min.css';
import {fetchScrapes, startScrape} from "./scrapes/ScrapeApi";

function App() {
  const [isLoader, setLoader] = useState(true);
  const [scrapes,setScrapes] = useState([]);
  useEffect(() => {
    fetchAndLoad().then(() => setLoader(false));
  }, []);

  const fetchAndLoad = async () => {
    return fetchScrapes().then(fetchedScrapes => {
      setScrapes(fetchedScrapes);
    });
  }

  const startAndReload = (url) => {
    startScrape(url).then(fetchAndLoad);
  }

  const renderPage = () => {
    if (isLoader) {
      return <Loader/>;
    }
    return (
      <>
        <ScrapesTable scrapes={scrapes}/>
        <ScrapeActions onRefresh={fetchAndLoad} onStart={startAndReload}/>
      </>
    )
  }
  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
