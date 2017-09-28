import React , {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import '../style/App.css'


class BaseLayout extends Component {
   render(){
  // I can style here
    return (
    <div className="container">
        <div>
            <Link ClassName = 'link' to = '/Home'>
                  <h3> Home </h3>
            </Link>
            <Link ClassName = 'link' to = '/About'>
                  <h3> About </h3>
            </Link>
            <Link ClassName = 'link' to = '/Portfolio'>
                  <h3> Portfolio </h3>
            </Link>
        </div>
        {this.props.children}
    </div>

   );
  }
 }



export default BaseLayout;
