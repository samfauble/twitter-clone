import {INITIAL_USERS} from "../actions/users"
import {SET_AUTHED_USER} from "../actions/authedUser"


export function users (state={}, action) {
    switch(action.type) {
        case INITIAL_USERS:
            return {
                ...state,
                ...action.users
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