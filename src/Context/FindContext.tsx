import React, {FC, createContext, useState, Dispatch, SetStateAction} from 'react'
import {Preference} from '../Views/Find/Preferences'
interface Find {
    tempo: Preference | null,
    setTempo: Dispatch<SetStateAction<Preference | null>>
} 

const FindContext = createContext({} as Find);


export const FindProvider:FC = ({children}) => {
    const [tempo,
        setTempo] = useState <Preference | null > (null)

    return (
        <FindContext.Provider
            value={{
            tempo,
            setTempo
        } as Find}>{children}</FindContext.Provider>
    )
}
export const FindConsumer = FindContext.Consumer
export default FindContext