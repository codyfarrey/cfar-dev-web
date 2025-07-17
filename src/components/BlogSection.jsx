import BlogPost from './BlogPost.jsx';

import './BlogSection.css';

export default function BlogSection() {
    return(
    <div className='blog-section'>
        <div className='blog-card'>
            <h1>Blog</h1>
            <BlogPost 
                title="Welcome!" 
                date="July 16th, 2025" 
                content="Welcome to <cfar.dev/>! The page you are visiting right now is just my journal/blog. I post things here when I feel like it is something that is worth permanently documenting on the internet. No politics, no religion, only software, hardware, and finance related topics with a few life hacks here and there. I’ve also configured the web server so that if you do a raw curl (no arguments) to cfar.dev, you should get your IP address as a response. I use this regularly to check if I am actually connected to the internet through my VPN. I am also in the process of developing a few additional pages that could be useful if you are the type of person who likes to buy and sell stocks on the U.S. Stock Market or track your personal finances. I will post an update here and add a proper navigation bar when additional pages go live. Stay tuned!"
            />
        </div>
      </div>
    );
}