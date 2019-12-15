import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore} from "redux"
import {reducers} from "./reducers/allReducers"
import {Provider} from "react-redux"

const store = createStore(reducers)


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'))