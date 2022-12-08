import React from 'react';

const Test07Output = ({name, onPrev}) => {
    return (
        <>
            <h3>{name}님</h3>
            <h3>설문조사 감사합니다.</h3>
            <p>
                <button onClick={ onPrev} style={{cursor:'pointer'}}>이전</button>
            </p>
        </>
    );
};

export default Test07Output;