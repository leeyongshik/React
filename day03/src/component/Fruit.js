import React from 'react';

const Fruit = ({fruit, onFruit}) => {
    return (
        <div>
            <div>
            과일 입력 : <input type="text" value={fruit} onChange={onFruit}></input>
        </div>
        </div>
    );
};

export default Fruit;