export const GetUserByLoginCredentials = async (email, password) => {
    const url = `http://localhost:52382/api/User/${email}/${password}`
    const response = await fetch(url)
    if(response.status === 200){
        return await response.json()
    }
    else{
        return undefined
    }
}