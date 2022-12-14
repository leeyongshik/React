//1. action 생성
const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'

//2. action 보내기
export const increment = () => ({type:INCREMENT})
export const decrement = () => ({type:DECREMENT})
export const reset = () => ({type:RESET})

//3. 초기값
const initialState = {count : 0};

//4. reducer 함수 만들기
const reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT : return {count : state.count+1};
        case DECREMENT : return {count : state.count-1};
        case RESET : return {count: 0}
        default : return state
    }
}
export default reducer;
