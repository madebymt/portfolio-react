import React , {Component} from 'react'

class About extends Component {

  render() {
    return (
      <div className = "container">
        <div className="head">
          <h2>About Me:D </h2>
        </div>
        <div className="pic">
          <img className="pic" src="../img/ruby.jpg" alt=""></img>
          <p>Study at The Iron Yard, learn code and have fun!</p>
        </div>
        <div classname = 'text'>
          <h2> By Ruby Chen </h2>
        </div>

      </div>
    )
  }
}

export default About
