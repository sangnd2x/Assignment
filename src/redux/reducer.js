import { DEPARTMENTS } from '../staffs';
import { ROLE } from '../staffs';
import { STAFFS } from '../staffs';
import { ADD_STAFF } from '../Actions/types';

export const initialState = {
    departments: DEPARTMENTS,
    roles: ROLE,
    staffs: STAFFS,
    numberOfColumn: 3
};


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STAFF:
            return {
                ...state,
                staffs: [
                    ...state.staffs,
                    action.payload
                ]
            }
        default:
            return state;
    }
}