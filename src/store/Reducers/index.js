import { combineReducers } from 'redux';
import DisplayCard from './cardReducer';


const appReducer = combineReducers ({
    DisplayCard,
})

export default appReducer;