import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopUp = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (currentState === "Login") {
            await handleLogin();
        } else {
            await handleRegister();
        }
    };

    const handleLogin = async () => {
        const loginData = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:5001/api/user/login/', loginData);
            console.log('Login successful:', response.data);
            toast.success('Login successful!');
            setShowLogin(false);  
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Invalid email or password');
            toast.error('Login failed. Please try again.');
        }
    };

    const handleRegister = async () => {
        const userData = {
            username: name,
            email: email,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:5001/api/user/register/', userData);
            console.log('Registration successful:', response.data);
            toast.success('Registration successful!');
            setCurrentState("Login");
        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('Registration failed. Please try again.');
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <div className='login-popup'>
            <ToastContainer />
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title"> 
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input"> 
                    {currentState === "Login" ? null : 
                        <input 
                            type="text" 
                            placeholder='Your Name' 
                            required 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    }
                    <input 
                        type="email" 
                        placeholder='Your Email' 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder='Enter Password' 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms and conditions</p>
                </div>
                {currentState === "Login" ? 
                    <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p> :
                    <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopUp;
