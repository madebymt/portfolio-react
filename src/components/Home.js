import React , {Component} from 'react'
import {BrowserRouter, Route, link} from 'react-router-dom'


class Home extends Component {
    constructor(props){
        super(props)
    }

render(){
    return (
      <div>
          <h1> Welcome!</h1>
          <img src = "http://gph.is/1KE30FR"/>
          <h3>Ruby</h3>
          <p> I love design and code! </p>
      </div>

  )

}
}

export default Home;
