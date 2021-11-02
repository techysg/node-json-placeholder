const fetch = require('cross-fetch');


const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

function get({ url }) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post({ url, body, headers = { 'Content-Type': 'application/json' } }) {
    const requestOptions = {
        method: 'POST',
        headers,
        body
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put({ url, body, headers = { 'Content-Type': 'application/json' } }) {
    const requestOptions = {
        method: 'PUT',
        headers,
        body
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete({ url }) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

async function handleResponse(response) {
    let data = await response.json();
    if (!response.ok) {
        //Handle error here
        return Promise.reject({ response, data })
    }
    return { response, data };
}


module.exports = fetchWrapper