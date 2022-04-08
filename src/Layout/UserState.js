import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

const UserState = (props) => {

    let navigate = useNavigate();

    const [isLogin] = useState(localStorage.getItem('token'));

    const [state, setState] = useState(null);

    useEffect(() => {
        if(!isLogin){
            navigate('/');
        }

    }, [isLogin]);


    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
