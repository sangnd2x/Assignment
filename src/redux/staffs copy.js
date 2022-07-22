import * as ActionTypes from '../actions/types';

export const Salaries = (state = {
    isLoading: true,
    errorMess: null,
    salaries: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SALARIES:
            return { ...state, isLoading: false, errorMess: null, salaries: action.payload };
        
        case ActionTypes.LOADING_SALARIES:
            return { ...state, isLoading: true, errorMess: null, salaries: [] };
        
        case ActionTypes.FAILED_SALARIES:
            return { ...state, isLoading: false, errorMess: action.payload};
        
        default:
            return state;
    }
}