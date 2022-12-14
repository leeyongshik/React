//1. action 생성
const TIGER = 'animal/TIGER'
const DOG = 'animal/DOG'
const CAT = 'animal/CAT'
const CHICK = 'animal/CHICK'

//2. action 보내기
export const tiger = () => ({type:TIGER})
export const dog = () => ({type:DOG})
export const cat = () => ({type:CAT})
export const chick = () => ({type:CHICK})


//3. 초기값
const initialState = {name : '동물', crying : '울음'};

//4. reducer 함수 만들기
const reducer = (state = initialState, action) => {
    switch(action.type){
        case TIGER : return {name : '호랑이', crying : '삐약'};
        case DOG : return {name : '강아지', crying : '멍'};
        case CAT : return {name : '고양이', crying : '어흥'};
        case CHICK : return {name : '병아리', crying : '야옹'};
        default : return state
    }
}

export default reducer;