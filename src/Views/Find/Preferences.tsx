import React, {FC, useContext} from 'react';
import {Radio} from 'antd';
import FindContext from 'src/Context/FindContext';

export type Preference = {
    label: string,
    value: Tempo | Tees | Attitude
}

enum Tempo {
    Slow = 'slow',
    Fast = 'fast'
}
const TEMPO_OPTIONS : Preference[] = [
    {
        label: 'Långsam',
        value: Tempo.Slow
    }, {
        label: 'Spelar snabbt',
        value: Tempo.Fast
    }
]

enum Tees {
    Tee47 = 'tee_47',
    Tee51 = 'tee_51',
    Tee57 = 'tee_57'
}
const TEE_OPTIONS : Preference[] = [
    {
        label: '47',
        value: Tees.Tee47
    }, {
        label: '51',
        value: Tees.Tee51
    }, {
        label: '57',
        value: Tees.Tee57
    }
]

enum AttitudeValues {
    Loose = 'attitude_loose',
    Medium = 'attitude_medium',
    Competitive = 'attitude_competitive'
}
type AttitudeLabels = 'Riktigt avslappnad' | 'Sociala spelaren' | 'Tävlingsinriktad'
export interface Attitude {
    label : AttitudeLabels,
    value : AttitudeValues
}

const ATTITUDE_OPTIONS : Attitude[] = [
    {
        label: 'Riktigt avslappnad',
        value: AttitudeValues.Loose
    }, {
        label: 'Sociala spelaren',
        value: AttitudeValues.Medium
    }, {
        label: 'Tävlingsinriktad',
        value: AttitudeValues.Competitive
    }
]

const Preferences : FC = () => {
    const find = useContext(FindContext)
    return (
        <div>
            <h1>Spelegenskaper</h1>
            <h3>Vänligen kryssa i vilka egenskaper du vill att din spelpartner skall ha</h3>
            <div>
                <h5>Tempo</h5>
                <Radio.Group
                    onChange={(e : any) => find.setTempo(e.target.value)}
                    value={find.tempo}>
                    {TEMPO_OPTIONS.map(option => <Radio value={option.value}>{option.label}</Radio>)}
                </Radio.Group>
            </div>
            <div>
                <h5>Tee</h5>
                <Radio.Group onChange={(e : any) => find.setTee(e.target.value)} value={find.tee}>
                    {TEE_OPTIONS.map(option => <Radio value={option.value}>{option.label}</Radio>)}
                </Radio.Group>
            </div>
            <div>
                <h5>Attityd</h5>
                <Radio.Group
                    onChange={(e : any) => find.setAttitude(e.target.value)}
                    value={find.attitude}>
                    {ATTITUDE_OPTIONS.map(option => <Radio value={option.value}>{option.label}</Radio>)}
                </Radio.Group>
            </div>
        </div>
    )
}
export default Preferences