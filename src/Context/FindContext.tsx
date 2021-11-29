import React, {FC, createContext, useState} from 'react'
import {Preference} from '../Views/Find/Preferences'

const FindContext = createContext({});
export const FindProvider:FC = ({children}) => {
    const [tempo,
        setTempo] = useState <Preference | null > (null)

    return (
        <FindContext.Provider
            value={{
            tempo,
            setTempo
        }}>{children}</FindContext.Provider>
    )
}
export const FindConsumer = FindContext.Consumer
export default FindContext