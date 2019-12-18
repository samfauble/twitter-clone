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
            return {
                ...state,
                [action.tweet.id]: action.tweet
            }
        case ADD_TWEET:
            return {
               ...state,
               [action.tweet.id]: {
                   ...state[action.tweet.id],
                   replies: state[action.tweet.id].replies.concat([action.tweet.replyingTo])
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