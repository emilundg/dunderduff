import React, {FC} from 'react'
import ClubHousePicker from './ClubHousePicker'

const TeeTime : FC = () => {
    return (
        <div>
            <h1>Var och när</h1>
            <h3>Välj klubb</h3>
            <div>
                <ClubHousePicker/>
            </div>
            <h3>Lediga tider</h3>
            <div>
                Inga!
            </div>
        </div>
    )
}
export default TeeTime