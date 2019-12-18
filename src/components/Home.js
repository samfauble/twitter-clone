import React, { Component } from 'react'
import {connect} from "react-redux"
import {FaReply, FaRegHeart} from "react-icons/fa"

export function Tweet ({tweetId, authorAvatar, author, authorName, localeTime, numLikes, localeDate, text, isReply}) {
    return(
        <li key={tweetId}>
            <img src={authorAvatar} alt={`${author}'s avatar`} />
            <div className="tweet-container">
                <h4>{authorName}</h4>
                <p className="meta">{localeTime} | {localeDate} </p>
                {isReply === null ? null : <p className="meta">{`Replying to ${isReply}`}</p>}
                <p>{text}</p>
                <div className="flex-row">
                    <button>
                        <FaReply size="22px" />
                    </button>
                    <button>
                        <FaRegHeart size="22px" />
                    </button>
                    <p>{numLikes}</p>
                </div>
            </div>               
        </li>
    )
}


export class Home extends Component {
    render() {
        const {tweets, users} = this.props

        
        return (
            <div>
                <h3>Your Timeline</h3>
                <ul>
        {/*make prop "tweets" equal to author, text, numLikes, etc
        //Object.keys gives me an iterable array of tweets' keys, and when mapped over, I am given an id 
        //I destructure the tweet data slices by specifying the specific tweet @ tweets[id] */}
                    {Object.keys(tweets).map((tweetId)=> {
                        const {author, likes, replyingTo, text, timestamp} = tweets[tweetId]
                        const numLikes = likes.length

                        const date = new Date (timestamp)
                        const localeTime = date.toLocaleTimeString()
                        const localeDate = date.toLocaleDateString()
                
                        const isReply = replyingTo === null ? null : tweets[replyingTo].author
                
                        const authorAvatar = users[author].avatarURL

                        const authorName = users[author].name
                    
                        return(
                            <Tweet
                            tweetId={tweetId} 
                            authorAvatar={authorAvatar} 
                            author={author} 
                            authorName={authorName} 
                            localeTime={localeTime} 
                            numLikes={numLikes} 
                            localeDate={localeDate} 
                            text={text} 
                            isReply={isReply} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({tweets, users}) {
    return{
       
    users,
    tweets
    }
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


export default connect(mapStateToProps)(Home)
