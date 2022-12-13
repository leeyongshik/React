import React, { useEffect, useState } from 'react';

const WriteForm = ({onAdd}) => {
    const [info, setInfo] = useState(
        { name : '', id : '', pwd : '' }
    )

    const onInput = (e) => {
        setInfo[e.target.name] = e.target.value
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!info) return
        onAdd(info)
        setInfo('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <table border='1px'>
                    <thead>
                        <tr>
                            <td colSpan='2'>회원등록</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td><input type='text' name='name' onChange={ onInput }/></td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td><input type='text' name='id' onChange={ onInput }/></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type='password' name='pwd' onChange={ onInput }/></td>
                        </tr>
                        <tr>
                            <td colSpan='2'><button type='submit'>등록 </button></td>
                            
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default WriteForm;