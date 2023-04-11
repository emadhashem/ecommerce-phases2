import React from "react"

type UserContextType = {
    categoryId: string,
    setcategoryId: (str: string) => void,
    userName: string,
    setUsername: (str: string) => void,
    userToken: string,
    setUserToken: (str: string) => void
}

export const UserContext = React.createContext<UserContextType>({
    categoryId: '',
    setcategoryId: () => { },
    userName: '',
    setUsername: () => { },
    userToken: '',
    setUserToken: () => { }
})

