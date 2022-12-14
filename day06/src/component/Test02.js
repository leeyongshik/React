import React, { useReducer } from 'react';

const initialState = ''

const reducer = (state, action) => {
    switch(action.type){
        case 'red' : return 'red'
        case 'green' : return 'green'
        case 'blue' : return state = 'blue'
        case 'pink' : return state = 'pink'
        case 'reset' : return ''
        default : return state
    }
}

const Test02 = () => {
    const [color, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1 style={{color:color}}>color : {color}</h1>
            <p>
                <button onClick={()=>dispatch({type:'red'})}>red</button>
                <button onClick={()=>dispatch({type:'green'})}>green</button>
                <button onClick={()=>dispatch({type:'blue'})}>blue</button>
                <button onClick={()=>dispatch({type:'pink'})}>pink</button>
                <button onClick={()=>dispatch({type:'reset'})}>reset</button>
            </p>
        </div>
    );
};

export default Test02;