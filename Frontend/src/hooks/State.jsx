import { useState } from 'react'

const State = () => {
    // const [value,setValue]=useState(initialValue);
    const [count,setCount]=useState(0);
    const handleDecrement = ()=>{
        setCount(count-1);
    }
    const handleReset = ()=>{
        setCount(0);
    }
    const handleIncrement = ()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
        {/* <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button> */}
    </div>
  )
}

export default State