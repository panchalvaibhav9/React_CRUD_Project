import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

const Header = () => {

  const [state, setState] = useContext(UserContext);

  let navigate = useNavigate();
  const deleteToken = () => {
    localStorage.removeItem('token');
    setState(false);
    navigate('/');
  }
  return (
    <>
      <div className='header'>
      <span>React App</span><button type="button" onClick={deleteToken}>Log Out</button>
      </div>
    </>
  )
}

export default Header
