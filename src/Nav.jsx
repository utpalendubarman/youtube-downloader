import React from 'react'
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './style.css'

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Youtube Downloader</a>
      
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <nav class="nav nav-pills flex-column flex-sm-row">
                    <a class="flex-sm-fill text-sm-center nav-link active" href="#">Downloader</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#">About</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Contributors</a>
                    
            </nav>
                </div>
                
            </div>
            </nav>
        );
    }
}
export default Nav;
