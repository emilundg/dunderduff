import {AutoComplete} from 'antd'
import React, {FC, useState} from 'react'


type ValidClubhouses = 'Alingsås GK' | 'Partille GK' | 'Hills GK'
type ClubHouseOption = {
    value: ValidClubhouses
};

const clubHouseOptions : ClubHouseOption[] = [
    {
        value: 'Alingsås GK'
    }, {
        value: 'Partille GK'
    }, {
        value: 'Hills GK'
    }
]

const ClubHousePicker : FC = () => {
    const [value,
        setValue] = useState('');
    const [options,
        setOptions] = useState < ClubHouseOption[] > (clubHouseOptions);

    const onSearch = (searchText : string) => {
        if (searchText) {
            const arrayCopy : ClubHouseOption[] = clubHouseOptions;
            const filteredOptions : ClubHouseOption[] = arrayCopy.filter(option => option.value.toLowerCase().includes(searchText.toLowerCase()));
            setOptions(filteredOptions);
        } else {
            setOptions(clubHouseOptions);
        }
        setValue(searchText);
    };

    const onSelect = (data : string) => {
        setValue(data)
    };

    return (
        <div data-testid="clubhouse-picker">
            <>
                <AutoComplete
                options={options}
                style={{
                width: 200
            }}
                value={value}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="Sök efter klubbhus"/>
            <br/>
            <br/>
        </>
    </div>
    )
}
export default ClubHousePicker