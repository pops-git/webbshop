export const PostOrderDetail = async (jsonOrderDetailsBody) => {
    const url = `http://localhost:52382/api/OrderDetail`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonOrderDetailsBody),
    })
    console.log(response.status)
    return response.status
}