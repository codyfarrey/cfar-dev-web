import HeroImage from '../assets/hero-image-home.png'

import './HeroSection.css'

export default function HeroSection() {
    return(
        <div className="hero-container">
            <img src={HeroImage} />
        </div>
    );
}