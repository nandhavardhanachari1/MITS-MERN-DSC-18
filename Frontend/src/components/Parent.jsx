import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
        <button onClick={()=>message("Message from Parent")}>send message</button>
        <Child name="Vikraam" age={24} 
        isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:987643210,
          email:"vikraam@gmail.com"
        }}
        sendMessage = {message}
        />
        <Child name="Vinothan" age={22} 
        isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:987643210,
          email:"vinothan@gmail.com"
        }}
        sendMessage = {message}
        />
    </div>
  )
}

export default Parent