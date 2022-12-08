import React, { useState } from 'react';
import Test03Modal from './Test03Modal';
import '../css/Test03.css';

const Test03 = () => {
    const [isOpen,setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <button onClick={ onOpen }>팝업창</button>
            {
                isOpen && <Test03Modal onClose={ onClose }/>
            }
        </div>
    );
};

export default Test03;