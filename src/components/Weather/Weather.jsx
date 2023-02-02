import React, { useState, useEffect } from 'react';
import WeatherCity from './WeatherCity';


const Temp = () => {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);


 useEffect(() => {
   function fetchData() {
     fetch('https://api.openweathermap.org/data/2.5/weather?q=mersin&appid=e4f1bc690e5b00b9d26041ccafc6fe71')
       .then(response => response.json())
       .then(json => {
         setData(json);
         console.log(json);
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

    <div>
    {(typeof data.main != 'undefined') ? (
      <WeatherCity weatherData={data}/>
    ): (
      <div></div>
    )}
    
  </div>
   /*<ul>
     {data.map(item => (
       <li key={item.id}>{item.name}</li>
     ))}
   </ul>*/
 );
};


export default Temp;