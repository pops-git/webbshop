export const GetProducts = async () => {
    const url = `http://localhost:52382/api/Product`
    const response = await fetch(url)
    return await response.json()
}