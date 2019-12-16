import {showLoading, hideLoading} from "react-redux-loading"
import {setAuthedUser} from "./authedUser"
import {initialTweets} from "./tweets"
import {initialUsers} from "./users"
import {getInitialData} from "../utils/api"

let authedUser = "sarah_edo"

export function initData () {
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData()
        .then(({users, tweets})=> {
        dispatch(initialTweets(tweets))
         dispatch(initialUsers(users))
         dispatch(setAuthedUser(authedUser))
         dispatch(hideLoading())
        })
    }
}