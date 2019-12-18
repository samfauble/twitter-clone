import React from "react"
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

function mapStateToProps ({tweets, users}, {tweetId}) {
    const {author, likes, replyingTo, text, timestamp} = tweets[tweetId]
    const numLikes = likes.length
    
    const date = new Date (timestamp)
    const localeTime = date.toLocaleTimeString()
    const localeDate = date.toLocaleDateString()
                
    const isReply = replyingTo === null ? null : tweets[replyingTo].author
                
    const authorAvatar = users[author].avatarURL

    const authorName = users[author].name

    return{
        tweetId,
        authorAvatar, 
        author,
        authorName,
        localeTime,
        numLikes,
        localeDate, 
        text,
        isReply
    }
}

export default connect(mapStateToProps)(Tweet)