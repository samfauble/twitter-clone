import React, { Component } from 'react'
import Home from "./Home"
import Reply from "./Reply"
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
      <div>
        {this.props.loading === true ? <h2>Loading</h2> :
        <div> <Reply tweetId="8xf0y6ziyjabvozdd253nd" /> </div>}
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null,
  } 
}

export default connect(mapStateToProps)(App)