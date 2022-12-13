import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './css/member.css';
import LoginForm from './member/LoginForm';
import Main from './member/Main';
import WriteForm from './member/WriteForm';
import WriteList from './member/WriteList';

const App_Member = () => {
    const [isNav, setIsNav] = useState(false)
    
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || [])

    
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    },[data])

    const onAdd = (info) => {
        setData([
            ...data,
            {
                name : info.name,
                id : info.id,
                pwd : info.pwd
            }
        ])
    }


    const onToggle = () => {
        setIsNav(!isNav)
    }

    return (
        <BrowserRouter>
            <>
                <div className='navbar'>
                    <p className='all-menu' onClick={ onToggle }>menu</p>
                    <nav className={ isNav ? 'on' : ''}>
                        <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/writeForm'>회원등록</Link></li>
                        <li><Link to='/loginForm'>로그인</Link></li>
                        <li><Link to='/writeList'>회원목록</Link></li>
                        <button onClick={ () => setIsNav(false) }>닫기</button>
                        </ul>
                    </nav>
                </div>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path='/writeForm' element={<WriteForm onAdd={onAdd}/>}></Route>
                    <Route path='/loginForm' element={<LoginForm/>}></Route>
                    <Route path='/writeList' element={<WriteList/>}></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App_Member;