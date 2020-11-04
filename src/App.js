import React, { Component } from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello, gulshan</h1>
        <Layout>
        <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
