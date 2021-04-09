export const GetProductById = async (id) => {
    const url = `http://localhost:52382/api/Product/${id}`
    const response = await fetch(url)
    return await response.json()
}