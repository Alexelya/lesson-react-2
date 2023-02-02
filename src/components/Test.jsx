import { useEffect } from "react";
import { useState } from "react";

function Test () {
    const[count,setCount] = useState(0);
    function handleChange(){
        localStorage.setItem("count", count+1)
        setCount(count+1)
        console.log (count+1);
        }
    useEffect( () => {
        function setDefaultNum(){
            setCount(localStorage.getItem(count));
        };
        setDefaultNum();
    }, [])

    return(
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick= {()=> {handleChange()}}>Click Me</button>
        </div>
    )
}

export default Test;