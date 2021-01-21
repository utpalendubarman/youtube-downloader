import React from 'react'
import {Link} from 'react-router-dom'
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Youtube Downloader</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Downloader <span class="sr-only">(current)</span></Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/contribution">Contribution <span class="sr-only">(current)</span></Link>
                </div>
            </div>
            </nav>
        );
    }
}
export default Nav;
