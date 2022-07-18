import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Departments } from "./departments";
import { Roles } from "./roles";
import { Staffs } from "./staffs";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            departments: Departments,
            roles: Roles,
            staffs: Staffs
        }),
        applyMiddleware(thunk, logger));
        
    return store;
};