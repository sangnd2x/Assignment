import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
    const localData = localStorage.getItem('Staffs');
    const store = createStore(
        Reducer,
        initialState,
    );

    return store;
};