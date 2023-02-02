import React, { useState, useEffect } from 'react';


const ExampleComponent = () => {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);


 useEffect(() => {
   function fetchData() {
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(json => {
         setData(json);
         setLoading(false);
       })
       .catch(err => {
         setError(err);
         setLoading(false);
       });
   }
   fetchData();
 }, []);


 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>;
 if (!data) return null;


 return (
   <ul>
     {data.map(item => (
       <li key={item.id}>{item.name}</li>
     ))}
   </ul>
 );
};


export default ExampleComponent;