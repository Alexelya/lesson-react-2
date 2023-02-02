import { useEffect } from "react";
import { useState } from "react";

function Example () {
    const[count,setCount] = useState(0);
    useEffect( () => {
        document.title = `Вы нажали ${count} раз`;
    })

    return(
        <div>
                <button onClick= {()=> {setCount(count+1)}}>Click Me</button>
        </div>
    )
}

export default Example;