import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

const Todo = () => {
    const [task,setTask] = useState('');
    const [todos,setTodos] = useState([])
    const [edit,setEdit] = useState(null);
    // const API = `http://localhost:3000`
    const API = `https://mits-mern-dsc.onrender.com`


    const fetchTodo = async()=>{
        // const res = await axios.get(`http://localhost:3000/api/todo/`);
        const res = await axios.get(`${API}/api/todo/`);
        setTodos(res.data);
    }
    useEffect(()=>{
        fetchTodo()
    },[]);

    const handleAddOrEdit =async () =>{
        if(edit){
            // await axios.put(`http://localhost:3000/api/todo/update/${edit}`,{task})
            await axios.put(`${API}/api/todo/update/${edit}`,{task})

            setEdit(null);
        }
        else{
            // await axios.post(`http://localhost:3000/api/todo/create`,{task})
            await axios.post(`${API}/api/todo/create`,{task})
        }
        setTask('');
        fetchTodo();
    };
    const handleDelete = async(id)=>{
        // await axios.delete(`http://localhost:3000/api/todo/delete/${id}`);
        await axios.delete(`${API}/api/todo/delete/${id}`);
        fetchTodo();
    };
    const handleToggleStatus = async(todo)=>{
        // await axios.put(`http://localhost:3000/api/todo/update/${todo._id}`,{
        //     completed:!todo.completed
        // })
        await axios.put(`${API}/api/todo/update/${todo._id}`,{
            completed:!todo.completed
        })
        fetchTodo();
    };
  return (
    <div>
        <h1>Todo</h1>
        <label>Task : </label>
        <input type="text" 
        placeholder='Enter the Task'
        value={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAddOrEdit}>{(edit)?"Update":"Add"}</button>
        <br /><br />
        <ul>
            {todos.map((todo)=>(
                <li key={todo._id}>
                    <span style={
                        {cursor:"pointer",
                        textDecoration:todo.completed?"line-through":"none"}
                    }
                    onClick={()=>handleToggleStatus(todo)}
                    >{todo.task}</span>

                    <button onClick={()=>{
                        setTask(todo.task);
                        setEdit(todo._id);
                    }}>✏️</button>
                    <button onClick={()=>handleDelete(todo._id)}>🗑️</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo





// import React, { useState } from 'react'

// const Todo = () => {
//     const [task,setTask] = useState('');
//     const [todos,setTodos] = useState([{
//         task:'Read',
//         status:false
//     }])
//     const [edit,setEdit] = useState(null);
//     const handleAddOrEdit = () =>{
//         if(edit || edit===0){
//             setTodos(todos.map((todo,index)=>(
//                 index===edit? {...todo,task:task} : todo
//             )))
//             setEdit(null);
//         }
//         else{
//             setTodos([...todos,{
//                 task:task,
//                 status:false
//             }]);
//         }
//         setTask('');
//     };
//     const handleDelete = (index)=>{
//         setTodos(todos.filter((_,i)=>index!=i))
//     };
//     const handleToggleStatus = (index)=>{
//         setTodos(todos.map((todo,i)=>(
//             index===i?{...todo,status:!todo.status} : todo
//         )))
//     };
//   return (
//     <div>
//         <h1>Todo</h1>
//         <label>Task : </label>
//         <input type="text" 
//         placeholder='Enter the Task'
//         value={task}
//         onChange={(e)=>setTask(e.target.value)}/>
//         <button onClick={handleAddOrEdit}>{(edit ||edit===0)?"Update":"Add"}</button>
//         <br /><br />
//         <ul>
//             {todos.map((todo,index)=>(
//                 <li key={index}>
//                     <span style={
//                         {cursor:"pointer",
//                         textDecoration:todo.status?"line-through":"none"}
//                     }
//                     onClick={()=>handleToggleStatus(index)}
//                     >{todo.task}</span>

//                     <button onClick={()=>{
//                         setTask(todo.task);
//                         setEdit(index);
//                         console.log(index)
//                     }}>✏️</button>
//                     <button onClick={()=>handleDelete(index)}>🗑️</button>
//                 </li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default Todo