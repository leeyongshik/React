import React, { useMemo, useState } from 'react';

const getColor = (color) => {
    console.log('getColor')

    switch(color){
        case 'hotpink' : return '진분홍'
        case 'magenta' : return '보라'
        case 'skyblue' : return '하늘'
        case 'tomato' : return '토맛토'
    }
}
const getFood = (food) => {
    console.log('getFood')

    switch(food){
        case '햄버거' : return '인턴'
        case '삼겹살' : return '고기'
        case '치킨' : return '닭'
        case '짜장면' : return '면'
    }
}


const Test04Sub = ({color, food}) => {

    //색을 선택하건, 음식을 하건 log가 모두 찍힌다
    // const colorInfo = getColor(color)
    // const foodInfo = getFood(food)

    //색을 선택하면 getColor만 찍히고, 음식을 선택하면 getFood만 로그가 찍혀야 한다.
    const colorInfo = useMemo(()=>{
        return getColor(color)
    },[color])
    const foodInfo = useMemo(()=> getFood(food),[food])

    return (
        <div>
            <h3>선택한 색 : {color}</h3>
            <h4>당싱은 {colorInfo}을 좋아하시는 군요!</h4>

            <h3>선택한 음식 : {food}</h3>
            <h4>당싱은 {foodInfo}을 좋아하시는 군요!</h4>            
        </div>
    );
};

export default Test04Sub;