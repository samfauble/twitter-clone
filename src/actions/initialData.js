import {showLoading, hideLoading} from "react-redux-loading"
import {SET_AUTHED_USER, setAuthedUser} from "./authedUser"
import {initialTweets} from "./tweets"
import {initialUsers} from "./users"
import {getInitialData} from "../utils/api"


export function initData (tweets, users) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        getInitialData(users, tweets)
        .then(()=> dispatch(initialTweets(tweets)))
        .then(()=> dispatch(initialUsers(users)))
        .then(()=> dispatch(setAuthedUser(SET_AUTHED_USER)))
        .then(()=> dispatch(hideLoading()))
    }
}