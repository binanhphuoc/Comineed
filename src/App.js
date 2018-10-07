import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inforpanel from './components/Infopanel/inforpanel'
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';

class App extends Component {


  render() {
    var text = '{ "articles" : [' +
    '{ "source":"source1" , "author":"author1", "title" : "title1", "description": "description1" },' +
    '{ "source":"source2" , "author":"author2", "title" : "title2", "description": "description2" },' +
    '{ "source":"source3" , "author":"author3", "title" : "title3", "description": "description3" }]}';
    var infoData = JSON.parse(text);
    const renderInfoPanel = (
      <div>
      {   
        Object.keys(infoData.articles).map(function(f){ 
          return (
            <Inforpanel title={infoData.articles[f].title} info = {infoData.articles[f]}/>
          )
        })
      }
    </div>
  );

    return (
      <div className="App">
        <Navbar/>
        <div style={{position:'absolute', width:'100%'}}>
          <iframe
            align="left"
            frameborder={0} style={{width:"50%", height: 'calc(100vh - 64px)',borderLeft:0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmRGqEXBVcufLBcFGDw1T-Q5f7WxzUMj4&q=Space+Needle,Seattle+WA" allowfullscreen>
          </iframe>
          {renderInfoPanel}
           

        </div>
      </div>
    );
  }
}

export default App;
