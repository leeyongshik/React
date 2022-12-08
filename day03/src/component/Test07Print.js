import React from 'react';

// const Test07Print = ({form, onNext, onPrev}) => {
//     const {name, age, addr, phone} = form

const Test07Print = ({name, age, addr, phone, onNext, onPrev}) => {
    return (
        <>
            <ul>
                <li>이름 : <em>{name}</em></li>
                <li>나이 : <em>{age}</em></li>
                <li>주소 : <em>{addr}</em></li>
                <li>핸드폰 : <em>{phone}</em></li>
            </ul>
            <p>
                <button onClick={ onPrev} style={{cursor:'pointer'}}>이전</button>
                <button onClick={ onNext } style={{cursor:'pointer'}}>다음</button>
            </p>
        </>
    );
};

export default Test07Print;