export const GetUserByLoginCredentials = async (email, password) => {
    const url = `http://localhost:52382/api/User/${email}/${password}`
    const response = await fetch(url)
    return await response.json()
}