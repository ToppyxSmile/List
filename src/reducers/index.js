import {combineReducers} from 'redux'
import Auth from './Auth'
import List from './List'
import Fetch from './Fetch'

export default combineReducers({
    auth : Auth,
    list : List,
    employee : Fetch
})