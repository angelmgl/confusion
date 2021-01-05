import * as ActionTypes from "./ActionTypes";

export const Leaders = (state = {
        isLoading: true,
        error: null,
        leaders: []
    }, action) => {
    switch(action.type) {

        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, error: null, leaders: action.payload}

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, error: null, leaders: []}

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, error: action.payload, leaders: []}
        
        default: 
            return state;
    }
}