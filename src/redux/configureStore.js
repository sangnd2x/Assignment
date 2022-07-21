import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Departments } from "./departments";
import { Roles } from "./roles";
import { Staffs } from "./staffs";
import { Salaries } from "./salaries";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            departments: Departments,
            roles: Roles,
            staffs: Staffs,
            salaries: Salaries
        }),
        applyMiddleware(thunk));
        
    return store;
};