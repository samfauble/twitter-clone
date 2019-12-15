import {showLoading, hideLoading} from "react-redux-loading"
import {SET_AUTHED_USER, setAuthedUser} from "./authedUser"
import {initialTweets} from "./tweets"
import {initialUsers} from "./users"
import {getInitialData} from "../utils/api"


export function initData () {
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData()
        .then((users, tweets)=> {
        dispatch(initialTweets(tweets))
         dispatch(initialUsers(users))
         dispatch(setAuthedUser(SET_AUTHED_USER))
         dispatch(hideLoading())
        })
    }
}