import React, { Component } from 'react'
import {connect} from "react-redux"

import Tweet from "./Tweet"

export class Home extends Component {
    render() {
        const {tweets} = this.props

        
        return (
            <div>
                <h3>Your Timeline</h3>
                <ul>
        {/*make prop "tweets" equal to author, text, numLikes, etc
        //Object.keys gives me an iterable array of tweets' keys, and when mapped over, I am given an id 
        //I destructure the tweet data slices by specifying the specific tweet @ tweets[id] */}
                    {Object.keys(tweets).map((tweetId)=> {
                        return(
                            <Tweet tweetId={tweetId}  />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({tweets}) {
    return{
    tweets
    }
}


export default connect(mapStateToProps)(Home)
