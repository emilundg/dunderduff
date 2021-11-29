import React, {FC, createContext, useState, Dispatch, SetStateAction} from 'react'
import {Attitude, Preference} from '../Views/Find/Preferences'
interface Find {
    tempo: Preference | null,
    tee: Preference | null,
    attitude: Attitude | null,
    setTempo: Dispatch<SetStateAction<Preference | null>>,
    setTee: Dispatch<SetStateAction<Preference | null>>,
    setAttitude: Dispatch<SetStateAction<Attitude | null>>
} 

const FindContext = createContext({} as Find);

export const FindProvider:FC = ({children}) => {
    const [tempo,
        setTempo] = useState <Preference | null > (null);
    const [tee,
        setTee] = useState < Preference | null > (null);
    const [attitude,
        setAttitude] = useState < Attitude | null > (null);


    return (
        <FindContext.Provider
            value={{
            tempo,
            tee,
            attitude,
            setTempo,
            setTee,
            setAttitude
        } as Find}>{children}</FindContext.Provider>
    )
}
export const FindConsumer = FindContext.Consumer
export default FindContext