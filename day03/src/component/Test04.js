import React, { useState, useSyncExternalStore } from 'react';
import Animal from './Animal';
import Display from './Display';

const Test04 = () => {
    const [name, setName] = useState('')

    //상태 값이 있는 곳에 함수도 같이 있어야 한다.
    const onInputName = (e) => {
        const {value} = e.target
        setName(value)
    }
    return (
        <div>
            <Animal name={name} onInputName = {onInputName}/>
            <hr/>
            <Display name={name}/>
        </div>
    );
};

export default Test04;