import React from 'react'

const Child = ({name,age,isActive,food,contact,sendMessage}) => {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>Active Status : {isActive ? "Active" : "Not Active"}</h3>
        <br />
        <hr />
        <h1>Fav Food</h1>
        <ul>
          {food.map((value,index)=>(
            <li key={index}>{value}</li>
          ))}
        </ul>
        <br />
        <hr />
        <h1>Contact Details</h1>
        <p>Mobile No : {contact.mobile}</p>
        <p>Email : {contact.email}</p>
        <button onClick={()=>{sendMessage("Message from Child")}}>send messsage</button>
    </div>
  )
}

export default Child