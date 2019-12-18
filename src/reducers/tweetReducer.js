import {INITIAL_TWEETS} from "../actions/tweets"
import {ADD_TWEET, ADD_REPLY} from "../actions/tweets"
import {LIKE_TWEET} from "../actions/likeTweet"


export function tweets (state={}, action) {
    switch(action.type) {
        case INITIAL_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case ADD_TWEET:
            //I had to change two parts of the tweet data with the same action 
            return {
                ...state,
                [action.tweet.id]: action.tweet,
                [action.tweet.replyingTo]: {
                    ...state[action.tweet.replyingTo],
                    replies: state[action.tweet.replyingTo].replies.concat(action.tweet.id)
                }      
            }
        case LIKE_TWEET:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    //shouldn't have been brackets around action.hasLiked
                    likes: action.hasLiked === true 
                    ? state[action.id].likes.filter((user)=> user !== action.authedUser)
                    : state[action.id].likes.concat([action.authedUser])
                } 
            } 
        default :
            return state
    }
}