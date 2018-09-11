import React, { Component } from 'react';
import './App.css';
import Navigation from './Component/Navigation';
import Header from './Component/Header';
import Footer from './Component/Footer';

class App extends Component {


  render() {
    
    return (
      <div>
<Navigation logotitle="React Portfolio"/>
<Header/>
<Footer/>


      </div>


    );
  }
}

export default App;
