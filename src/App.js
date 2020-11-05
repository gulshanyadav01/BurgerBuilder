import React, { Component } from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder"
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"


import './App.css';
import Checkout from './components/Checkout/Checkout';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h1>hello, gulshan</h1>
        <Layout>
        <Switch>
        <Route path = "/" exact component = {BurgerBuilder} />
        <Route path = "/checkout" exact component = {Checkout}/>
        </Switch>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
