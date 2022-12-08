import React, { useState } from 'react';
import Test07Input from './Test07Input';
import '../css/Test07.css'
import Test07Output from './Test07Output';
import Test07Print from './Test07Print';

const Test07Main = () => {
    const [count, setCount] = useState(1)

    const [ form, setForm ] = useState({
        name : '',
        age : '',
        addr : '',
        phone : ''
    })

    const onInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onNext = () => {
        setCount(count+1)
    }
    const onPrev = () => {
        setCount(count-1)
    }

    

    return (
        <div className='wrap'>
            {
                count === 1 && <Test07Input form={form} onInput={onInput} onNext={onNext}/>
            }
            {
                //count === 2 && <Test07Print form={form} onNext={onNext} onPrev={onPrev}/>
                count === 2 && <Test07Print {...form} onNext={onNext} onPrev={onPrev}/>
            }
            {
                count === 3 && <Test07Output name={form.name} onPrev={onPrev}/>
            }
        </div>
    );
};

export default Test07Main;