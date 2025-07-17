import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost.jsx';

import './BlogSection.css';

const fetchBlogs = (data) => {
    if (!data) {
        return <div>Loading...</div>
    }

    return data.posts.map((blog, index) => 
        <>
            <BlogPost title={blog.title} date={blog.date} content={blog.content} />
            {index < data.posts.length - 1 && <hr />}
        </>
    )
};

export default function BlogSection() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/blogs.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Error fetching data:', error))
    }, []);

    return(
    <div className='blog-section'>
        <div className='blog-card'>
            <h1>Blog</h1>
            { fetchBlogs(data) }
        </div>
      </div>
    );
}