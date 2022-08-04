import { useState } from "react";



function Clics() {
    const [count, setCount] = useState(0)
    return (
   <button  onClick={() => setCount(count + 1)}>
         {count} Clicks!
          </button>
          )
}

export default Clics;