import React, { Component } from 'react';
//import logo from '.Images/bckimage.jpg';
import './Header.css';
class Header extends Component {
    state = {  }
    render() { 
        return (
            <header>
          <h1>React Portfolio</h1>
          <p>New Example of Portfolio</p>
          <a href="#" className="button">CLICK TO FIND MORE</a>
          

            </header>
          );
    }
}
 
export default Header;
