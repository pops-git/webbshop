/* export const PostOrder = async (jsonBody) => {
    const url = `http://localhost:52382/api/Order`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonBody),
    })
    console.log(response.status)
    console.log(response.headers)
    return response
} */

export const PostOrder = async (jsonBody) => {
    const url = `http://localhost:52382/api/Order`
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonBody),
    })
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        }) 
    });
}