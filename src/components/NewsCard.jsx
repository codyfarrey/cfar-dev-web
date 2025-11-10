export default function NewsCard(props) {
    return(
        <div className="news-card">
            <div className="title-image">
                <p>{props.source}</p>
                <img src={props.imageUrl} />
            </div>
            <div className="news-content">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}