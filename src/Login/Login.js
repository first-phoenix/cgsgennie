import React from 'react';
import './Login.css'; // Importing the CSS file for styling
import loginuser from '../Assets/login-user.png'
import loginButton from '../Assets/log-in.png'
import logoImage from '../Assets/logo.jpg'

const Login = () => {
    const handleLogin = () => {
        // Redirect to the second page
        window.location.href = '/page1';
    };

    return (
        <div className='login-wrapper'>
            <img src={logoImage} alt='logo' className='logo'></img>
            <div className="login-container">
                <img src={loginuser} className='loginuser' alt='UserImage'></img>
                <div className="form-group">
                    <label>Email ID</label>
                    <input type="text" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="form-group">
                    <label>Two factor authentication</label>
                    <input type="text" placeholder="Enter authentication code" />
                </div>
                <div className="form-group">
                    <label>Choose Role</label>
                    <select>
                        <option disabled selected>Select Role</option>
                        <option value="Manager">Manager</option>
                        <option value="Supervisor">Supervisor</option>
                    </select>
                </div>
                <img src={loginButton} alt='Log in' onClick={handleLogin} className='loginbutton'></img>
            </div>
        </div>
    );
};

export default Login;