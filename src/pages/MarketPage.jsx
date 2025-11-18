import axios from "axios";
import NewsCard from "../components/NewsCard";
import TickerCard from "../components/TickerCard";
import React, { useState, useEffect } from 'react';

import './MarketPage.css';

export default function MarketPage() {
    const [newsData, setNewsData] = useState(null);


    useEffect(() => {
        const fetchNewsData = () => {
            const cookies = document.cookie
                .split("; ")
                .find((row) => row.startsWith(`token=`));

            const authToken = cookies ? cookies.split("=")[1] : null;

            if (!authToken) {
                console.log('auth token not found, skipping rest call');
                return;
            }
            console.log('Calling /news/latest/stock');
            axios.get('http://localhost:8081/news/latest/stock', {
                headers: {
                    "Authorization": `Bearer ${authToken}`
                }
            }).then((response) => {
                setNewsData(response.data.data);
            });
        }

        fetchNewsData();
    }, []);

    return (
        <>
            <div className="ticker-section">
                <TickerCard title="SPX" price="6204.88" priceDelta="42.42" />
                <TickerCard title="NDX" price="5324.52" priceDelta="32.64" />
                <TickerCard title="RUT" price="4804.22" priceDelta="-05.42" />
            </div>
            <div className="news-section">
                {
                    newsData &&
                    newsData.map(article =>
                        <NewsCard title={article.title} source={article.source} imageUrl={article.imageUrl} content={article.description} url={article.url} />
                    )
                }
            </div>
        </>
    )
}