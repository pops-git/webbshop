async function GetUserByLoginCredentials (email, password){
    const url = `http://localhost:52382/api/User/${email}/${password}`
    const response = await fetch(url)
    return await response.json()
}

const GetProducts = async () => {
    const url = `http://localhost:52382/api/Product`
    const response = await fetch(url)
    return await response.json()
}

async function PrintResponse () {
    /* const res = await GetUserByLoginCredentials("linus@linus.se", "Linus123!") */
    const res = await GetProducts()
    console.log(res)
}

PrintResponse()