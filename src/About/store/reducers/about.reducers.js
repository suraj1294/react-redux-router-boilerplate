import { GET_ABOUT_DETAILS } from '../actions/about.actions';
const initialState = {};
function aboutReducer(state=initialState, action){
    switch(action.type){
        case GET_ABOUT_DETAILS:
            return {
                ...state,
                details:action.payload
            }
        default:
            return state;    
    }

}

export default aboutReducer;