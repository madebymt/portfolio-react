import React, { Component } from 'react';
import {BrowserRouter, Route, link} from 'react-router-dom'
import './style/App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import BaseLayout from './components/BaseLayout'

class App extends Component {
  render() {
    return (
        <BrowserRouter>

             <BaseLayout>
                
                <Home/>
                <div classname = "route">
                   <Route path = '/' component = {Home}/>
                   <Route path = '/About' component= {About}/>
                   <Route path = '/Portfolio' component = {Portfolio}/>
                   </div>
             </BaseLayout>
        </BrowserRouter>
    );
  }
}

export default App;
