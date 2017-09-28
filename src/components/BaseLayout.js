import React , {Component} from 'react'
import {Route, NavLink, Link} from 'react-router-dom'
import '../style/App.css'


class BaseLayout extends Component {
   render(){
    return (
   <div>
     <div className="container">
        <header>
                <div className = 'nav'>
                <Link to= '/'>
                     <i classame="fa fa-diamond fa-2x" aria-hidden="true"></i>
                </Link>

                    <NavLink  exact to = '/'> Home </NavLink >
                    <NavLink  activeClassName = 'link' to = '/About'> About </NavLink >
                    <NavLink  activeClassName = 'link' to = '/Portfolio'>Portfolio </NavLink >
                    <NavLink  activeClassName = 'link' to = '/Contact'> Contact </NavLink>
             </div>
        </header>
        {this.props.children}
    </div>
 </div>
   );
  }
 }



export default BaseLayout;
