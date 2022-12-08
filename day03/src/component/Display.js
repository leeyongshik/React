import React from 'react';

const Display = ({name}) => {
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            내가 좋아하는 동물은 {name} 입니다.
        </div>
    );
};

export default Display;