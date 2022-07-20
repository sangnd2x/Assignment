import * as ActionTypes from './types';
import { baseUrl } from '../baseURL';

// Staffs
export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)));
}

export const staffsLoading = () => ({
    type: ActionTypes.LOADING_STAFFS
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.FAILED_STAFFS,
    payload: errmess
});

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});

export const addNewStaff = (staff) => ({
    type: ActionTypes.ADD_NEW_STAFF,
    payload: staff
});

// Departments
export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));

    return fetch(baseUrl + 'departments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
        .catch(error => dispatch(departmentsFailed(error.message)));
}

export const departmentsLoading = () => ({
    type: ActionTypes.LOADING_DEPARTMENTS
});

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.FAILED_DEPARTMENTS,
    payload: errmess
});

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});

// Salaries
export const fetchSalaries = () => (dispatch) => {
    dispatch(salariesLoading(true));

    return fetch(baseUrl + 'staffsSalary')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(salaries => dispatch(addSalaries(salaries)))
        .catch(error => dispatch(salariesFailed(error.message)));
}

export const salariesLoading = () => ({
    type: ActionTypes.LOADING_SALARIES
});

export const salariesFailed = (errmess) => ({
    type: ActionTypes.FAILED_SALARIES,
    payload: errmess
});

export const addSalaries = (salaries) => ({
    type: ActionTypes.ADD_SALARIES,
    payload: salaries
});

