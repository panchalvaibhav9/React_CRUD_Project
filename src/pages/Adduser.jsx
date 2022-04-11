import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {

  let navTo = useNavigate();
  
  const [userRegistration, setuserRegistration] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: ''
  })
  const [Records] = useState([]);
  const [ formErrors, setFormErrors] = useState({});
  const [ isSubmit, setIsSubmit] = useState(false);


  const handleInput = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setuserRegistration({ ...userRegistration, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const newRecord = { ...userRegistration };
    Records.push(newRecord);
    const users = JSON.parse(localStorage.getItem('userDetail')) || [];
    users.push(newRecord);
    localStorage.setItem('userDetail', JSON.stringify(users));

    setuserRegistration({fname:"", lname:"", email:"", phone:"", password:""});
    setFormErrors(validate(userRegistration));
    setIsSubmit(true);

    if (!localStorage.getItem('token')){
      // window.location.replace("/Login");
      navTo('/');
    }
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(userRegistration)
    }
  },[formErrors])

  const validate = (value) => {
    const errors = {};
    if(!value.fname){
      errors.fname = "Username is Required";
    }
    return formErrors
  }

  return (
    <div className='user-container'>
      <h3 id='title'>User Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type='text' name="fname" autoComplete='off' id='fname' value={userRegistration.fname} onChange={handleInput} placeholder="First Name" />
        </div>
        <div className='form-group'>
          <input type='text' name="lname" autoComplete='off' id='lname' value={userRegistration.lname} onChange={handleInput} placeholder="Last Name" />
        </div>
        <div className='form-group'>
          <input type='email' name="email" id='email' value={userRegistration.email} onChange={handleInput} placeholder="Email ID" />
        </div>
        <div className='form-group'>
          <input type='text' name="phone" autoComplete='off' id='phone' value={userRegistration.phone} onChange={handleInput} placeholder="Phone Number" />
        </div>
        <div className='form-group'>
          <input type='password' name="password" autoComplete='off' id='password' value={userRegistration.password} onChange={handleInput} placeholder="Password" />
        </div>
        <div className='form-group'>
        <button type='submit' className='btn-submit'>Submit</button>
        </div>
      </form>
    </div>

  )
}

export default Adduser