const api = "http://localhost:3001";

// Generate a unique token for storing your data on the backend server.
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const fetchAllPosts = () =>
    fetch(`${api}/posts/`, { headers })
        .then(res => res.json());

export const fetchPost = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json());

export const changePostVoteScore = (id, option) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option })
    }).then(res => res.json());

export const changeCommentVoteScore = (id, option) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option })
    }).then(res => res.json());

export const fetchComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json());

export const addComment = (data) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());

export const editComment = (id, data) =>
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());

export const fetchCategories = () =>
    fetch(`${api}/categories/`, { headers })
        .then(res => res.json());

export const addPost = (data) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());

export const editPost = (id, data) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
