import React from 'react';
import Navbar from './components/navbar'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Footer from './components/footer'
import Singers from './components/singers'

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

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/singers">
            <Singers />
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
