import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ logout }) => {

  let navigate = useNavigate();
  const deleteToken = () => {
    localStorage.removeItem('token');
    logout();
    navigate('/');
  }
  return (
    <>
      <div className='header'>
      <span><img src="logo192.png" alt="react logo" />
        React App</span><button type="button" onClick={deleteToken}>Log Out</button>
      </div>
    </>
  )
}

export default Header
