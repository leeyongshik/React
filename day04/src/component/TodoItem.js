import React from 'react';
import myStyle from '../css/TodoList.module.css';

const TodoItem = ({item, onDel}) => {
    const {seq, text} = item
    return (
        <li id={seq}>
            {text}
            <button onClick={() => onDel(seq)}>삭제</button>
        </li>
    );
};

export default TodoItem;