import React from 'react'
import './index.css'

class Footer extends React.Component{
    render(){
        return(
        
          <div className="main-footer">
          <div className="container">
            <div className="row">
            
              <div className="col">
                <h2 className = "text">Youtube Downloader</h2>
                <h4 className="list-unstyled">
                  <li>Download youtube videos in mp4 and mp3 format.</li>
                </h4>
              </div>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()}  Copyright | All rights reserved |
                <a href ="/service">
                Terms Of Service </a> | Privacy
              </p>
            </div>
          </div>
        </div>
        );
      }
  }
export default Footer;