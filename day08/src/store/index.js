import { combineReducers } from "redux";
import animal from "./modules/animal.js";
import color from './modules/color.js';
import count from './modules/count.js';

export default combineReducers({
    //이름 : 리듀서 파일
    colorReducer : color,
    countReducer : count,
    animalReducer : animal
})