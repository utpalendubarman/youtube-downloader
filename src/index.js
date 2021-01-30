import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './index.css';
import Downloader from './Downloader'
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import Contribution from './Contribution';
import Footer from './Footer';
import About from './About';
import service from './service';
import privacy from './privacy';

const App = () =>{
  return (
    <Router>
      <Nav/>
      <Route path='/' exact={true} component={Downloader} />
      <Switch>
        <Route path="/Contribution" component ={Contribution}/>
        <Route path="/Downloader" exact component={Downloader}/>
        <Route path="/About" exact component={About}/>
        <Route path="/service" exact component={service}/>
        <Route path="/privacy" exact component={privacy}/>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
reportWebVitals();
