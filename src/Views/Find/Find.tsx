import React, {FC, useState} from 'react'
import {Button, Steps} from 'antd';
import Preferences from './Preferences'

const {Step} = Steps;

const steps = [
    {
        title: 'Spelegenskaper',
        content: <Preferences/> 
    }, {
        title: 'Second',
        content: 'Second-content'
    }, {
        title: 'Last',
        content: 'Last-content'
    }
];

const Find : FC = () => {
    const [current,
        setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div>
            <h1>Find</h1>
            <Steps current={current}>
                {steps.map(item => (<Step key={item.title} title={item.title}/>))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current > 0 && (
                    <Button
                        style={{
                        margin: '0 8px'
                    }}
                        onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => alert('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
            </div>
            <Preferences/>
        </div>
    )
}
export default Find