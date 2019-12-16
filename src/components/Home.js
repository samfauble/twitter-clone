import React, { Component } from 'react'
import {connect} from "react-redux"

export class Home extends Component {
    render() {
        const {author, numLikes, localeTime, localeDate, isReply, text, authorAvatar} = this.props.tweets

        return (
            <div>
                <h2>Your Timeline</h2>
                <pre>{JSON.stringify(this.props.tweets, null, 2)}</pre>
            </div>
        )
    }
}

function mapStateToProps ({tweets, users}) {
    return{
        //make prop "tweets" equal to author, text, numLikes, etc
        //Object.keys gives me an iterable array of tweets' keys, and when mapped over, I am given an id
        //I destructure the tweet data slices by specifying the specific tweet @ tweets[id]
    tweets: Object.keys(tweets).map((id)=>{
        const {author, likes, replyingTo, text, timestamp} = tweets[id]
        const numLikes = likes.length

        const date = new Date (timestamp)
        const localeTime = date.toLocaleTimeString()
        const localeDate = date.toLocaleDateString()

        const isReply = replyingTo === null ? null : tweets[replyingTo].author

        const authorAvatar = users[author].avatarURL

        return{
            author,
            text,
            numLikes,
            localeDate,
            localeTime,
            isReply,
            authorAvatar
        }
    })
    /*
    const numLikes = likes.length

    const date = new Date (timestamp * 1000)
    const localeTime = date.toLocaleTimeString()
    const localeDate = date.toLocaleDateString()

    const isReply = replyingTo === null ? null
        : tweets.reduce((acc, tweet)=> {
            if(tweet.id === replyingTo){
                const acc = tweet.id
            }
        })
        */
/*
    return {
        author, 
        numLikes,
        localeTime,
        localeDate,
        isReply,
        text
    }
*/
}
}

export default connect(mapStateToProps)(Home)
