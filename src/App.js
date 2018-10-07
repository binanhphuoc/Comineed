import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <iframe
          align="left"
          frameborder={0} style={{width:"50vw", height: "100vh",borderLeft:0}}
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAmRGqEXBVcufLBcFGDw1T-Q5f7WxzUMj4&q=Space+Needle,Seattle+WA" allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default App;
