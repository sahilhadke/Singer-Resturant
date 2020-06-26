import React from 'react';
import Navbar from './components/navbar'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Footer from './components/footer'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function App() {
  return (
        
    <Router>
      <div>
        
        <Navbar />

        <hr />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
     
        <Footer />

      </div>
    </Router>

  );
}

export default App;
