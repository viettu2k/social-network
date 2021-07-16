export const create = (userId, token, post) => {
    return fetch(
            `https://evening-earth-21357.herokuapp.com/post/new/${userId}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: post,
            }
        )
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const list = (page) => {
    return fetch(
            `https://evening-earth-21357.herokuapp.com/posts/?page=${page}`, {
                method: "GET",
            }
        )
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const singlePost = (postId) => {
    return fetch(`https://evening-earth-21357.herokuapp.com/post/${postId}`, {
            method: "GET",
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const listByUser = (userId, token) => {
    return fetch(
            `https://evening-earth-21357.herokuapp.com/posts/by/${userId}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const remove = (postId, token) => {
    return fetch(`https://evening-earth-21357.herokuapp.com/post/${postId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.error(err));
};

export const update = (postId, token, post) => {
    return fetch(`https://evening-earth-21357.herokuapp.com/post/${postId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: post,
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.error(err));
};

export const like = (userId, token, postId) => {
    return fetch(`https://evening-earth-21357.herokuapp.com/post/like`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, postId }),
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.error(err));
};

export const unlike = (userId, token, postId) => {
    return fetch(`https://evening-earth-21357.herokuapp.com/post/unlike`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, postId }),
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.error(err));
};

export const comment = (userId, token, postId, comment) => {
    return fetch(`https://evening-earth-21357.herokuapp.com/post/comment`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, postId, comment }),
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.error(err));
};

export const uncomment = (userId, token, postId, comment) => {
    return fetch(`https://evening-earth-21357.herokuapp.com/post/uncomment`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, postId, comment }),
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.error(err));
};