import React, { Component } from 'react'
import {connect} from "react-redux"
import {_saveTweet} from "../utils/_DATA"
import {addTweet, addReply} from "../actions/tweets"

export class AddTweet extends Component {
//optional attribute: tweet id
//output: addTweet, addReply
    constructor(props) {
        super(props)
    
        this.state = {
             textbox: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({
            textbox: e.target.value
        }, ()=> console.log(this.state.textbox))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //add as new tweet to DB
        const {textbox} = this.state
        const {authedUser, dispatch, replyTo} = this.props
        //If a function destructures in the args parens, args should be in an object
        const input = 
            {text: textbox, 
            author: authedUser, 
            replyingTo: replyTo}

            _saveTweet(input)
            .then(()=> dispatch(addTweet(input)))
            .then(()=> this.setState({
                textbox: ""
            }))
       

        //add to UI state
        //erase textarea
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Compose New Tweet</h3>
                <textarea
                    placeholder="New tweet here"
                    cols="70"
                    rows="10"
                    name="new-tweet"
                    value={this.state.textbox}
                    onChange={this.handleChange} />
                <button
                    className="submit"
                    type="submit">
                        SUBMIT
                </button> 
                  
            </form>
        )
    }
}

AddTweet.defaultProps = {
    replyTo: null
}

function mapPropsToState({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapPropsToState)(AddTweet)
