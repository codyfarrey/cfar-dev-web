import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { setToken } from '../app/store/AuthenticationSlice';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = (event) => {
        if (email && password) {
            let authRequest = {
                email, password
            }

            const response = axios.post('http://localhost:8080/authenticate', authRequest);

            const authHeader = response.headers['Authorization'];

            console.log(response.data);
            history('/market');
        } else {
            setError('Email and password is required.');
        }
    };

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}