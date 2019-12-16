import {users, authedUser} from "./userReducer"
import {tweets} from "./tweetReducer"
import {combineReducers} from "redux"
import {loadingBarReducer} from "react-redux-loading"

export const reducers = combineReducers({
    users,
    tweets,
    authedUser,
    loadingBar: loadingBarReducer
})