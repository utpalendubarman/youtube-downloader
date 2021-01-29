import React from 'react';
import './style.css';

class About extends React.Component{
    render(){
        return(
           
          <section class="text-center about">
      <h1>About</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
            
            <h2>Function</h2>
            <p class="lead">Youtube Video Downloader is an online web application to convert and download youtube videos in mp4 and mp3 format</p>
          </div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
           
            <h2>Version </h2>
            <h2 class ="v">1.0</h2>
          </div>
          <div class="clearfix visible-md-block visible-sm-block"></div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
           
            <h2>Releasing year</h2>
            <h2 class="v">2021</h2>
          </div>
          
        </div>
        
      </div>
    </section>
        )
    }
}
export  default About