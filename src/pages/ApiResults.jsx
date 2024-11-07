import React, { useEffect, useState } from 'react';

const ApiResults = () => {
const [results, setResults] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const data = await response.json();
    setResults(data);
    };
    fetchData();
}, []);

return (
    <div>
    <h1>Resultados de la API</h1>
    <ul>
        {results.map((item) => (
        <li key={item.id}>{item.title}</li>
        ))}
    </ul>
    </div>
);
};

export default ApiResults;