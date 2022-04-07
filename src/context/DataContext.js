import React, { createContext } from "react";
import { usersData } from '../data/usersData'
import { postsData } from '../data/postsData'
import { useLocalStorage } from "react-use-storage";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [state, setState, removeState] = useLocalStorage('ContextData', {
        user: {},
        users: usersData,
        posts: postsData,
        logged: false
    })


    return (
        <DataContext.Provider
            value={{
                state, setState, removeState,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}