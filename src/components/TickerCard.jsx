import './TickerCard.css'

export default function TickerCard(props) {
    return(
        <div className="ticker-card">
            <div className="ticker-card-top">
                <h1>{props.title}</h1>
                <h1>{props.price}</h1>
            </div>
            <p>{props.priceDelta}</p>
        </div>
    );
}