import React from 'react'
import {Link} from 'react-router-dom'
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import logo from './assets/youtube_downloader.png'

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">                
                <Link className="navbar-brand" to="/"><img src={logo} style={{maxWidth:'60px', paddingRight:'1px'}} className="img" alt=''/> Youtube Downloader</Link>
                <button className="navbar-toggler" style={{padding: '0.25rem 0.5rem'}} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <nav className="nav nav-pills flex-column flex-sm-row">
                            <Link className="flex-sm-fill text-sm-center nav-link active" to="/Downloader">Downloader</Link>
                            <Link className="flex-sm-fill text-sm-center nav-link" to="#">About</Link>
                            <Link className="flex-sm-fill text-sm-center nav-link" to="/Contribution">Contributors</Link>              
                        </nav>  
                    </div>
                </div>
            </nav>
        );
    }
}
export default Nav;
