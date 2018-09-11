import React, { Component } from 'react'
import './Navigation.css';

class navigation extends Component {
    state = {  }
    render() { 
        const sections=['Home','Contacts','About','Services','Portfolio'];
        const navlink=sections.map(section=>
            {return(

                <li><a href={'#'+section}>{section}</a></li>
            )

            }

        );
        return (
            <nav>

             <h2 className="logo">{this.props.logotitle}</h2>
             <ul>
             <li><a href="#home">Home</a></li>
                 <li><a href="#contact">Contacts</a></li>
                 <li><a href="#about">About</a></li>
                 <li><a href="#service">Service</a></li>
                 <li><a href="#portfolio">Portfolio</a></li>
             </ul>

            </nav>
           
           
          );
    }
}
 
export default navigation;
