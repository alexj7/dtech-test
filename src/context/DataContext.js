import React, { createContext, useState } from "react";
import { usersData } from '../data/usersData'
import { postsData } from '../data/postsData'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [state, setState] = useState({
        user: {},
        users: usersData,
        posts: postsData,
        logged: false
    })

    return (
        <DataContext.Provider
            value={{
                state, setState,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}