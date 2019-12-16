import React, { Component } from 'react'
import Home from "./Home"
import {connect} from "react-redux"
import {initData} from "../actions/initialData"

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loading: true
    }
  }
  
  
  componentDidMount() {
    this.setState({loading: true})
    this.props.dispatch(initData())
    this.setState({loading: false})
  }
  
  render() {
    console.log(this.state.loading)
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default connect()(App)