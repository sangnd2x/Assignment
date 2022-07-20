import * as ActionTypes from '../actions/types';

export const Departments = (state = {
    isLoading: true,
    errorMess: null,
    departments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DEPARTMENTS:
            return { ...state, isLoading: false, errorMess: null, departments: action.payload };
        
        case ActionTypes.LOADING_DEPARTMENTS:
            return { ...state, isLoading: true, errorMess: null, departments: [] };
        
        case ActionTypes.FAILED_DEPARTMENTS:
            return { ...state, isLoading: false, errorMess: action.payload};
        
        default:
            return state;
    }
}