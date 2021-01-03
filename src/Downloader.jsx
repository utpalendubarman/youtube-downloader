import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import Contributors from './Components/Contributors/Contributors';
import Nav from './Nav'
import './style.css'

class Downloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '', type: '' };
    }
    urlUpdater = (event) => {
        this.setState({ url: event.target.value });
    }
    typeUpdater = (event) => {
        this.setState({ type: event.target.value });
    }
    submitForm = (event) => {
        event.preventDefault();
        //Fetch data here

    }
    render() {
        return (

            <Router>
                <div className="wrapper">
                    <Nav />
                    <Switch>
                        <Route path="/Contributors" component={Contributors} exact />
                        <Route path="/About" component={About} exact />

                        <Route path="/" exact >
                            <div id='data'></div>
                            <div className="container">
                                <div className="row">
                                    <form onSubmit={this.submitForm}>
                                        <div className="col-sm-8 col-xs-12 col-md-12">
                                            <div className="form-group">
                                                <label>URL</label>
                                                <input type='text' onChange={this.urlUpdater} className='form-control' />
                                            </div>
                                            <div className="form-group">
                                                <label>Type</label>
                                                <select onChange={this.typeUpdater} className='form-control'>
                                                    <option value="">--Select Download Type--</option>
                                                    <option value="mp3">MP3</option>
                                                    <option value="mp4">MP4</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <button className='btn btn-success'>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Route>
                    </Switch>


                </div>
            </Router>
        );
    }
}
export default Downloader;