import React from "react"
import {connect} from "react-redux"
import {FaReply, FaRegHeart} from "react-icons/fa"
import {saveLikeToggle} from "../utils/api"
import {likeTweet} from "../actions/likeTweet"
import {Link} from "react-router-dom"

export function Tweet ({tweetId, hasLiked, authedUser, authorAvatar, author, authorName, localeTime, numLikes, localeDate, text, isReply, dispatch}) {


    function handleClick () {
        const arg = {
            id: tweetId,
            authedUser,
            hasLiked
        }

        const id = tweetId

        saveLikeToggle(arg)
        .then(()=> dispatch(likeTweet(id, authedUser, hasLiked)))
        
    }


    
    return(
        <li>
            <img src={authorAvatar} alt={`${author}'s avatar`} />
            <div className="tweet-container">
                <h4>{authorName}</h4>
                <p className="meta">{localeTime} | {localeDate} </p>
                {isReply === null ? null : <p className="meta">{`Replying to ${isReply}`}</p>}
                <p>{text}</p>
                <div className="flex-row">
                    <button>
                        <Link to={`/tweet/${tweetId}`}>
                            <FaReply size="22px" />
                        </Link>
                    </button>
                    <button onClick={()=> handleClick()}>
                        {hasLiked === false 
                        ? <FaRegHeart size="22px" /> 
                        : <FaRegHeart color="blue" size="22px" />}
                    </button>
                    <p>{numLikes}</p>
                </div>
            </div>               
        </li>
    )
}

function mapStateToProps ({tweets, users, authedUser}, {tweetId}) {
    const {author, likes, replyingTo, text, timestamp, replies} = tweets[tweetId]
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
        authedUser,
        localeTime,
        numLikes,
        localeDate, 
        text,
        isReply,
        replies: replies.length,
        hasLiked: likes.includes(authedUser),
    }
}

export default connect(mapStateToProps)(Tweet)