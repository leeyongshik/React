import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const ProductDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    

    const item = data.find(item => item.id === id)

    const onHome = () => {
        navigate('/')
    }
    const onList = () => {
        navigate(-1)
    }


    return (
        <div className='item'>
            <h2>상세 페이지</h2>
            <h3>제품명 : {item.name} / 가격 : {item.price}</h3>
            <p><img src={item.photo} alt={item.name}/></p>
            <p>제품 설명 : {item.description}</p>

            <button onClick={ onHome }>Home</button>
            <button onClick={ onList }>List</button>
        </div>
    );
};

export default ProductDetail;