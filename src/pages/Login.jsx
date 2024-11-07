import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const users = await response.json();
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
    dispatch(login(user));
    
    } else {
    alert('Usuario o contraseña incorrectos.');
    }
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Iniciar Sesión</button>
    </form>
);
};

export default Login;