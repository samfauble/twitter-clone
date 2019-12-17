import {generateUID} from "../utils/_DATA"


export const INITIAL_TWEETS = "INITIAL_TWEETS"
export const ADD_TWEET = "ADD_TWEET"

export function initialTweets (tweets) {
    return {
        type: INITIAL_TWEETS,
        tweets
    }
}

export function addTweet ({text, author, replyingTo= null}) {
    const tweet = {
        id: generateUID(),
        text,
        author,
        timestamp: Date.now(),
        likes: [],
        replies: [],
        replyingTo

    }
    return {
        type: ADD_TWEET,
        tweet
    }
}