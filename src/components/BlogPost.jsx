import './BlogPost.css';

export default function BlogPost({ title, date, content }) {
    return (
        <div className='blog-post'>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{content}</p>
        </div>
    );
}