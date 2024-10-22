import React from 'react';
import {Table} from "antd";
import './scrapesTable.css';

export default function ScrapesTable({scrapes}) {
  scrapes.forEach((scrape,i) => {
    scrape.key = i;
  })
  const columns = [
    {
      title: 'Time',
      dataIndex: 'timestamp',
      key: 'time',
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => a.timestamp - b.timestamp,
        multiple: 1
      },
      render: timestamp => <div>{new Date(timestamp).toLocaleString()}</div>,
      align: 'center'
    },
    {
      title: 'Given Url',
      dataIndex: 'originUrl',
      key: 'givenUrl',
      align: 'center'
    },
    {
      title: 'Urls',
      dataIndex: 'urls',
      key: 'urls',
      render: urls => urls.map((url,idx) => (<div className={"scraped-url"} key={idx}>{url}</div>)),
      align: 'left'
    },
    {
      title: 'Url Counts',
      dataIndex: 'urls',
      key: 'urlCounts',
      render: urls => <div>{urls.length}</div>,
      align: 'center'
    },
    {
      title: 'Domains',
      dataIndex: 'domains',
      key: 'domains',
      render: domains => domains.map((domain,idx) => (<div className={"scraped-url"} key={idx}>{domain}</div>)),
      align: 'left'
    },
    {
      title: 'Domains Counts',
      dataIndex: 'domains',
      key: 'domainCounts',
      render: domains => <div>{domains.length}</div>,
      align: 'center'
    },
  ];


  return (
      <Table bordered size="middle" dataSource={scrapes} columns={columns} scroll={{ x: 'max-content' }}/>
  );
}