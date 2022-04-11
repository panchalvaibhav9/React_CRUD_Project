import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Layout/UserContext';


const Login = () => {

    const [state, setState] = useContext(UserContext);

    let navTo = useNavigate();

    const [userLogin, setUserLogin] = useState({
        username: '',
        password1: ''
    })

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setUserLogin({ ...userLogin, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const loginRecords = { ...userLogin };
        const users = JSON.parse(localStorage.getItem('userDetail'));
        // let object = users.filter((user) => user.email).map((user) => user.email) == loginRecords.username && users.filter((x) => x.password).map((x) => x.password) == loginRecords.password1;
        // console.log(users.map((val) => val.email) == loginRecords.username);

        if (users.map((val) => val.email) == loginRecords.username && users.map((val) => val.password) == loginRecords.password1) {
            alert("Welcome to the Dashboard");
            navTo('/Dashboard');
            localStorage.setItem('token', "APIAUTHORIZATIONSERVERPROVIDER");
            setState(true);
        }
        else {
            alert("Please Enter Valid Details");
        }
    }

    const redirect = () => {
        navTo('/Registration');
    }

    return (
        <div className="login-wapper">
            <div className="container">
                <div className="title">
                    <img src="logo192.png" alt="logo" className="img" />
                </div>
                <div className="img-container">
                    <h2>User Login</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="control-group">
                            <div className="input-prepend">
                                <input type='text' name="username" id='username' value={userLogin.username} onChange={handleChange} placeholder="Username(Email)" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="input-prepend">
                                <input type="password" name='password1' id='password1' value={userLogin.password1} onChange={handleChange} placeholder="Password" />
                            </div>
                        </div>
                        <div className="control-group">
                            <button type="submit">Login</button>
                        </div>
                        <div className="registration">
                            <button type="button" onClick={redirect}>User Registration</button>
                        </div>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default Login
