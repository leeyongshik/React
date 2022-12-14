import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {red, yellow, green, blue, purple, cyan} from '../store/modules/color.js'

const Color = () => {
    const color = useSelector(state => state.colorReducer.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color : color }}> 컬러 : {color}</h1>
            <button onClick={() => dispatch(red())}>빨강</button>
            <button onClick={() => dispatch(yellow())}>노랑</button>
            <button onClick={() => dispatch(green())}>초록</button>
            <button onClick={() => dispatch(blue())}>파랑</button>
            <button onClick={() => dispatch(purple())}>보라</button>
            <button onClick={() => dispatch(cyan())}>하늘</button>
        </div>
    );
};

export default Color;

/*
리덕스를 사용하면 상태값을 컴포넌트에 종속시키지 않고, 컴포넌트 밖에서 따로 관리 할 수 있다.
*/