import { combineReducers } from 'redux';
import aboutReducer from '../../../src/About/store/reducers/about.reducers.js'

const rootRuducer =  
combineReducers({
    aboutApp:aboutReducer,
})

export default rootRuducer;