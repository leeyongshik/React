import React from 'react';

const Output = ({name, fruit}) => {
    return (
        <div>
            이름 : {name} <br/>
            과일 : {fruit}<br/>
            {`이름 : ${name}, 과일 : ${fruit}`}
        </div>
    );
};

export default Output;