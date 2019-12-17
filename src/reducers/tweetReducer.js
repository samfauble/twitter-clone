import {INITIAL_TWEETS} from "../actions/tweets"
import {ADD_TWEET} from "../actions/tweets"


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
        default :
            return state
    }
}