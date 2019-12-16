import React, { Component } from 'react'
import {connect} from "react-redux"

export class Home extends Component {
    render() {
        return (
            <div>
                <h2>Your Timeline</h2>
            </div>
        )
    }
}

function mapStateToProps ({tweets}) {
    const {author, likes, replyingTo, text, timestamp} = tweets
    numLikes = likes.length

    const date = new Date (timestamp * 1000)
    const localeTime = date.toLocaleTimeString()
    const localeDate = date.toLocaleDateString()

    isReply = replyingTo === null ? null
        : tweets.reduce((tweet)=> {
            if(tweet.id == replyingTo){
                return tweet.author
            }
        })

    return {
        author, 
        numLikes,
        localeTime,
        localeDate,
        isReply,
        text
    }

}

export default connect(mapStateToProps)(Home)
