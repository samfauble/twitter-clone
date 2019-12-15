export const INITIAL_TWEETS = "INITIAL_TWEETS"

export function initialTweets (tweets) {
    return {
        type: INITIAL_TWEETS,
        tweets
    }
}