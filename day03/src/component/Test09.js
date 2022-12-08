import React from 'react';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';

const Test09 = () => {
    return (
        <div>
            <img src={img1} width='200' height='200' />
            <img src={img2} width='200' height='200'/>
            <img src={img3} width='200' height='200'/>
        </div>
    );
};

export default Test09;
/*
src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
    improt 참조변수 from '이미지 경로';
*/