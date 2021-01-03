import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section className="About">
            <h1 className="About__Title">
                About Us
            </h1>
            <h3 className="About__Description">
                Youtube Downloader is an open-source web application
                build using react and bootstrap. Here you can download
                any youtube video in mp3 or mp4 just by adding their link.
                If you have any suggestion or issue or want to contribute
                check our  <a href="https://github.com/utpalendubarman/youtube-downloader"
                    target="_blank" rel="noopener noreferrer">Github Repo</a>
            </h3>
            <Link to="/" className="About__Button backButton" >Back to main</Link>
        </section>
    )
}

export default About
