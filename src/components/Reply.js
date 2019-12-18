import React, { Component } from 'react'
import {connect} from "react-redux"
import Tweet from "./Tweet"
import AddTweet from "./AddTweet"

export class Reply extends Component {
    render() {
        const {tweetId}= this.props
        console.log(tweetId)
        return (
            <div>
                <ul>
                    <Tweet tweetId={tweetId} />
                </ul>
                <AddTweet />
            </div>
        )
    }
}


export default connect()(Reply)
