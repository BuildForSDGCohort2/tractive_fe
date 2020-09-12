import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar';
import Home from './components/Home';
import Owner from './components/Owner';
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"

// import EditUser from './components/EditUser';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact strict component={Home}/>
          <Route path="/contact-us" exact component={ContactUs}/>
          <Route path="/about" exact component={AboutUs}/>
          {/* <Rows /> */}
          <Route path="/owners/signup" exact strict component={Owner}/>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
