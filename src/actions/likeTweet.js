export const LIKE_TWEET = "LIKE_TWEET"

export function likeTweet (id, authedUser, hasLiked) {

    return {
        type: LIKE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}