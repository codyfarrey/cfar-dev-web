import LoginForm from "../components/LoginForm";
import axios from "axios";
import React, { useState } from 'react';


export default function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        if (email && password) {
            let authRequest = {
                email, password
            }

            axios.post('http://localhost:8080/authenticate', authRequest)
                .then(response => {
                    console.log('Login success!');

                    let token = response.headers['authorization'];

                    onLogin(token)
                })
                .catch(err => {
                    setError(err);
                });
        } else {
            setError('Please enter both email and password.')
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