import React, { useRef, useState } from 'react';

const Test10 = () => {
    const seq = useRef(1)
    const nameRef = useRef()

    const [data, setData] = useState([])
    
    const [form, setForm] = useState({
        name : '',
        age : ''
    })
    const {name, age} = form

    const onInput = (e) => {
        const {name, value} = e.target
        setForm({...form, 
            [name] : value
        })
    }
    const onAdd = (e) => {
        e.preventDefault()
        if(!name || !age) return

        setData([
            ...data,
            {
                seq : seq.current++,
                name : name, // Key와 Value가 똑같으면 1번만 써도된다.
                age : age
            }
        ])

        //초기화
        setForm({
            name : '',
            age : ''
        })
        nameRef.current.focus()
    }
    return (
        <div>
            <form onSubmit={ onAdd }>
                이름 : <input type="text" name="name" value={ name } onChange={onInput} ref={nameRef}/> <br/>
                나이 : <input type="text" name="age" value={ age } onChange={onInput} /> <br/>
                <button type='submit'>추가</button>
            </form>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.seq}>
                        {item.seq}/ {item.name} / {item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test10;