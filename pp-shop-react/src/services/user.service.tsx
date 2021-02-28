import { authHeader, handleResponse } from '../helpers';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`https://localhost:5001/user/GetAll`).then(handleResponse);
}