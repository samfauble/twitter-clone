import {users, authedUser} from "./userReducer"
import {tweets} from "./tweetReducer"
import {combineReducers} from "redux"

export const reducers = combineReducers({
    users,
    tweets,
    authedUser
})