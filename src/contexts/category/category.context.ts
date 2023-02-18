import React from "react"

type CategoryContextType = {
    id : number,
    setId : (id : number) => void
}

export const CategoryContext = React.createContext<CategoryContextType>({
    id : 0,
    setId : () => {}
})

 