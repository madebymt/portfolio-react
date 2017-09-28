import React , {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import '../style/Portfolio.css'

class Portfolio extends Component {
  render () {
    return (
      <div className="container">
        <div ClassName = 'pic1'>
          <h2>My portfolio</h2>

            <img src="../img/1.jpg" alt=""/>
            <p> Work 1</p>
            <img src="../img/2.jpg" alt=""/>
            <p> Work 2 </p>
            <img src="../img/3.jpg" alt=""/>
            <p> Work 3 </p>
            <div>
              <h4>Please take a look at my <a href="rubycodes.com">My work Here</a> to see my portfolio</h4>
            </div>
            <div>
                <a href="mailto:hi@rubycodes.com"><button> Contact Me</button></a>
            </div>
        </div>
      {this.props.children}
      </div>
    )
  }
}
export default Portfolio;
