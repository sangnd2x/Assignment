import { ADD_STAFF } from "./types";

export const addNewStaff = staff => {
    return {
        type: ADD_STAFF,
        payload: staff
    }
}