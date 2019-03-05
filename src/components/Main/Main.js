import React, { Component } from 'react';
import About from './About';
import Nav from './Nav';
// import SideNav from './SideNav';
class Main extends Component {
    
    render() { 
        return ( 
            <div>
                {/* <Nav /> */}
                {/* <SideNav /> */}
                <About />
            </div>
         );
    }
}
 
export default Main;