import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    const [value,setValue] = useState(0);
    //Syntax
    // useEffect(callback Function,[dependence array]);
    //                              (Optional)
    // useEffect(()=>{
    //     //statement
    // },[dependence]);

    //without Dependence array
    // useEffect(()=>{
    //     console.log("useEffect Mounted")
    // }) 

    //with Empty Dependence Array
    // useEffect(()=>{
    //     console.log("useEffect Mounted")
    // },[])

    //with Dependence Array
    useEffect(()=>{
        console.log("useEffect Mounted")
    },[count])

    const handleIncrement = ()=>{
      setCount((count)=>count+1);
      setCount((count)=>count+1);
      setCount((count)=>count+1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <h1>Value : {value}</h1>
        <button onClick={()=>setValue(value+1)}>+</button>
    </div>
  )
}

export default Effect