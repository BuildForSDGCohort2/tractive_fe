import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar';
import Home from './components/Home';
import Owner from './components/Owner';
import Footer from "./components/Footer"

// import EditUser from './components/EditUser';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact strict component={Home}/>
          {/* <Rows /> */}
          <Route path="/owners/signup" exact strict component={Owner}/>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
