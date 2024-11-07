import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Register = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();

const handleRegister = async (e) => {
    e.preventDefault();
    // Podrías agregar lógica para registrar el usuario aquí
    const newUser = { username, password }; // Simulación

    // Simular inicio de sesión después del registro
    dispatch(login(newUser));
    // Redirigir a /home
};

return (
    <form onSubmit={handleRegister}>
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
    <button type="submit">Registrarse</button>
    </form>
);
};

export default Register;