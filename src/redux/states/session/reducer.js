import {SET_SESSION} from "./actionType";

export const sessionReducer = (state=null, action) => {
    switch (action.type){
        case SET_SESSION:
            return action.payload
        default:
            return state
    }
}