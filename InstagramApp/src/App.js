import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Home from './components/homePage';
import SignUp from './components/signupPage';

import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">

        <Route path="/Home" exact component={Home} />


        <Route path="/SignUp" exact component={SignUp}/>


         
      </div>
      </Router>
    );
  }
}




export default  App;
