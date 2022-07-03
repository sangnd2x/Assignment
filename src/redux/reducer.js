import { DEPARTMENTS } from '../staffs';
import { ROLE } from '../staffs';
import { STAFFS } from '../staffs';

export const initialState = {
    departments: DEPARTMENTS,
    roles: ROLE,
    staffs: STAFFS,
    numberOfColumn: 3
};

export const Reducer = (state = initialState, action) => {
    return state;
}