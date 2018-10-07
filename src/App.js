import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inforpanel from './components/Infopanel/inforpanel'
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div style={{position:'absolute', width:'100%'}}>
          <iframe
            align="left"
            frameborder={0} style={{width:"50%", height: 'calc(100vh - 64px)',borderLeft:0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmRGqEXBVcufLBcFGDw1T-Q5f7WxzUMj4&q=Space+Needle,Seattle+WA" allowfullscreen>
          </iframe>
          <Inforpanel title='Tuan Hung'/>
        </div>
      </div>
    );
  }
}

export default App;
