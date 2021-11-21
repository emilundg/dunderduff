import React, {FC, useState} from 'react'
import {Radio} from 'antd'

type Preference = {
    label: string,
    value: Tempo | Tees | Attitude
}

enum Tempo {
    Slow = 'slow',
    Fast = 'fast',
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

enum Attitude {
    Loose = 'attitude_loose',
    Medium = 'attitude_medium',
    Competitive = 'attitude_competitive'
}
const ATTITUDE_OPTIONS : Preference[] = [
    {
        label: 'Riktigt avslappnad',
        value: Attitude.Loose 
    }, {
        label: 'Sociala spelaren',
        value: Attitude.Medium 
    }, {
        label: 'Tävlingsinriktad',
        value: Attitude.Competitive 
    }
]

const Preferences : FC = () => {
    const [value,
        setValue] = useState < Preference | null > (null);

    const onChange = (e : any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div>
            <h1>Spelegenskaper</h1>
            <h3>Vänligen kryssa i vilka egenskaper du vill att din spelpartner skall ha</h3>
            <div>
                <h5>Tempo</h5>
                <Radio.Group onChange={onChange} value={value}>
                    {TEMPO_OPTIONS.map(option => <Radio value={option.value}>{option.label}</Radio>)}
                </Radio.Group>
            </div>
            <div>
                <h5>Tee</h5>
                <Radio.Group onChange={onChange} value={value}>
                    {TEE_OPTIONS.map(option => <Radio value={option.value}>{option.label}</Radio>)}
                </Radio.Group>
            </div>
            <div>
                <h5>Attityd</h5>
                <Radio.Group onChange={onChange} value={value}>
                    {ATTITUDE_OPTIONS.map(option => <Radio value={option.value}>{option.label}</Radio>)}
                </Radio.Group>
            </div>
        </div>
    )
}
export default Preferences