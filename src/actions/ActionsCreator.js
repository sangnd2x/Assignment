import * as ActionTypes from './types';
import { baseUrl } from '../baseURL';

// Fetch Staffs
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

// Fetch Departments
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

// Fetch Salaries
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


// Add new staff
export const addNewStaff = (staff) => ({
    type: ActionTypes.ADD_NEW_STAFF,
    payload: staff
});

export const postStaff = (newStaff) => (dispatch) => {

    return fetch(baseUrl + 'staffs', {
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
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
        .then(response => dispatch(addNewStaff(response)))
        .catch(error => {
            console.log('Add staff ', error.message);
            alert('Cannot add staff\nError: ' + error.message);
        });
}

// Delete Staff
export const delStaff = (staffId) => ({
    type: ActionTypes.DELETE_STAFF,
    payload: staffId
});

export const deleteStaff = (staffId) => (dispatch) => {

    return fetch(baseUrl + 'staffs/' + `${staffId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
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
        .then(response => dispatch(delStaff(response)))
        .catch(error => {
            console.log('Delete staff ', error.message);
            alert('Cannot delete staff\nError: ' + error.message);
        });
}

// Update Staff
export const editStaff = (staff) => ({
    type: ActionTypes.EDIT_STAFF,
    payload: staff
});

export const updateStaff = (newStaff, staffId) => (dispatch) => {

    return fetch(baseUrl + 'staffs', {
        method: 'PATCH',
        body: JSON.stringify(newStaff),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
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
        .then(response => dispatch(editStaff(response)))
        .catch(error => {
            console.log('Edit staff ', error.message);
            alert('Cannot edit staff\nError: ' + error.message);
        });
}