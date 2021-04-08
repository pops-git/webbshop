import React, { useEffect } from 'react';
import { useWebshop } from "../../../ContextProviders/WebshopContext";
import { User } from "./User";

export const LoginUser = () => {
    
    const {user, getUser} = useWebshop()

    useEffect(() => {
        getUser("linus@linus.se", "Linus123!")
    }, [])

    let currentUser

    if(user){
        currentUser = (
            <User user={user} />
        )
    }
    else{
        currentUser = (
            <p>no user found</p>
        )
    }
    return (
        <>
            {currentUser}
        </>
    )
}