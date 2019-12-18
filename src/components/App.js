import React, { Component, Fragment } from 'react'
import Home from "./Home"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Reply from "./Reply"
import Nav from "./Nav"
import AddTweet from "./AddTweet"
import {connect} from "react-redux"
import {initData} from "../actions/initialData"

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(initData())
  }
  
  render() {
    console.log(this.props.loading)
    return (
      <Fragment>
        <Router>
          <Nav />
          {this.props.loading === true ? <h2>Loading</h2> :
          <div> 
            <Route exact path="/" component={Home} />
            <Route path="/new" component={AddTweet} />
            <Route path="/tweet/:tweetId" component={Reply} />
          </div>}
        </Router>
      </Fragment>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null,
  } 
}

export default connect(mapStateToProps)(App)