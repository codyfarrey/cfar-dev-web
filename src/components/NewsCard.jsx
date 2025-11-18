import './NewsCard.css';

export default function NewsCard(props) {
    return (
        <div className="news-card">
            <div className="title-image">
                <img src={props.imageUrl} />
            </div>
            <div className="news-content">
                <h1><a href={props.url}>{props.title}</a></h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
