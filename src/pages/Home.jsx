import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
const user = useSelector((state) => state.auth.user);

return (
    <div>
<h1>Bienvenido, {user ? user.username : 'Invitado'}!</h1>
    </div>
);
};

export default Home;