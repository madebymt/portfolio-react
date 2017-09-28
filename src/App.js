import React, { Component } from 'react';
import {BrowserRouter, Route, link} from 'react-router-dom'
import './style/App.css';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import BaseLayout from './components/BaseLayout'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
             <BaseLayout>
                <div className = "route">
                   <Route path = '/' exact component = {Home}/>
                   <Route path = '/About' component= {About}/>
                   <Route path = '/Portfolio'  component = {Portfolio}/>
                   <Route path = '/contact'  component = {Contact}/>

                </div>
             </BaseLayout>
        </BrowserRouter>
    );
  }
}

export default App;
