import * as ActionTypes from '../actions/types';

export const Staffs = (state = {
    isLoading: true,
    errorMess: null,
    staffs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS:
            return { ...state, isLoading: false, errorMess: null, staffs: action.payload };
        
        case ActionTypes.LOADING_STAFFS:
            return { ...state, isLoading: true, errorMess: null, staffs: [] };
        
        case ActionTypes.FAILED_STAFFS:
            return { ...state, isLoading: false, errorMess: action.payload};
        
        default:
            return state;
    }
}