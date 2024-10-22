import React from "react";
import {Button} from "antd";
import './scrapeActions.css';
import Search from "antd/es/input/Search";

export default function ScrapeActions({onStart,onRefresh}) {
  return (
      <div className="scrapeActions">
        <Button onClick={onRefresh}>Refresh</Button>
          <Search
              placeholder="Enter URL to scrape"
              enterButton="Start"
              size="large"
              onSearch={onStart}
          />
      </div>
  )
}