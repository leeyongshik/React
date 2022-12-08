import React, { useState } from 'react';

const Test02 = () => {
    const [chk, isCheck] = useState(false)

    const onChk = (e) => {
        const {checked} = e.target
        isCheck(checked)
    }
    return (
        <div style={{color: chk ? 'blue' : 'red', margin : 30, fontSize: 25}}>
            <input type="checkbox" checked={chk} onChange={ onChk }/>Have a nice Day!!
        </div>
    );
};

export default Test02;