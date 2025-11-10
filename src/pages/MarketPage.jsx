import axios from "axios";
import NewsCard from "../components/NewsCard";
import TickerCard from "../components/TickerCard";

import './MarketPage.css';

function getNewsData() {

}

export default function MarketPage() {
    const [newsData, setNewsData] = useState();

    useEffect(() => {
       
    });

    return (
        <>
            <div className="ticker-section">
                <TickerCard title="SPX" price="6204.88" priceDelta="42.42" />
                <TickerCard title="NDX" price="5324.52" priceDelta="32.64" />
                <TickerCard title="RUT" price="4804.22" priceDelta="-05.42" />
            </div>
            <div className="news-section">
                <NewsCard />
            </div>
        </>
    )
}