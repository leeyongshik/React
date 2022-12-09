import React, { useRef, useState } from 'react';
import myStyle from '../css/TodoForm.module.css';

const TodoForm = ({onAdd}) => {
    const [text, setText] = useState('')

    const textRef = useRef()

    const onInput = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) return
        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <form className={myStyle.TodoForm} onSubmit={onSubmit}>
            <input type='text' value={text} placeholder="해야 할 일을 입력하시오." onChange={ onInput } ref={textRef}/>
            <button type='submit'>추가</button>
            
        </form>
    );
};

export default TodoForm;