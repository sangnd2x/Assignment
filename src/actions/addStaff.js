import { ADD_STAFF } from "./types";

export const addStaff = staff => {
    return {
        type: ADD_STAFF,
        payload: staff
    }
}