import {INITIAL_USERS} from "../actions/users"
import {SET_AUTHED_USER} from "../actions/authedUser"
import {ADD_TWEET} from "../actions/tweets"


export function users (state={}, action) {
    switch(action.type) {
        case INITIAL_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_TWEET:
            return {
                ...state,
                [action.tweet.author]: {
                    ...state[action.tweet.author],
                    tweets: state[action.tweet.author].tweets.concat(action.tweet.id)
                }
            }
        default :
            return state
    }
}

export function authedUser (state= null, action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.id
        default :
            return state
    }
}