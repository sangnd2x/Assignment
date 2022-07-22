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
            return { ...state, isLoading: false, errorMess: action.payload };
        
        case ActionTypes.ADD_NEW_STAFF:
            return { ...state, isLoading: false, errorMess: null, staffs: action.payload }
        
        case ActionTypes.DELETE_STAFF:
            return { ...state, isLoading: false, errorMess: null, staffs: action.payload }
        
        case ActionTypes.EDIT_STAFF:
            return { ...state, isLoading: false, errorMess: null, staffs: action.payload}
        
        default:
            return state;
    }
}