import React, { useState } from 'react'
import './style.css'
import { IoIosCheckmarkCircle } from "react-icons/io";
import {  FaRegCircle, FaPlus, FaRegTrashAlt } from "react-icons/fa";
const Todo = () => {
    var [list , setList] = useState(['eat','code','sleep'])
    const [todo , setTodo] = useState('')
    const [completedTasks, setCompletedTasks] = useState(['shit']);

    const handleadd = () =>{
        if(todo !== ''){
          const newlist = [...list,todo]
          setList(newlist)  
          setTodo('')
        }
        else{
          alert('Please enter task')
        }
      }
    const handleenter = (e) => {
        if(e.key === 'Enter'){
            handleadd();
        }
    }
    const handleDelete = (index) => {
      const newList = list.filter((_,i) => i !== index);
      const completed = completedTasks.filter((_,i) => i !== index);
      setCompletedTasks(completed)
      setList(newList);
    };
    const completed = (index) => {
      const newList = list.filter((_,i) => i !== index);
      const completed = [...completedTasks , list[index]]
      console.log(completed)
      setList(newList)
      setCompletedTasks(completed)
    }
   console.log(completedTasks)
    return (
    <>
       <header className='header_container'>
        <h2>to<span>do</span></h2>
        <div className='add_container'>
            <input
            placeholder='Add a task'
            value={todo}
            onKeyDown={handleenter}
            onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleadd} ><FaPlus className='icon' />Add</button>
        </div>
       </header>
      <div className='container'>
        <div className='status_container'>
          <p>Total tasks: <span> {list.length + completedTasks.length}</span> </p>
          <p>Completed <span> { completedTasks.length} of {  list.length }</span></p>
        </div>
      <div className='list_container'>
          <ul>
          {list.map((item, index) => (
            <>
            <div className='check'>
                <div className='checkmark' key={index}>
                <FaRegCircle className='icon' onClick={() => completed(index)} />
                  <p>{item}</p>
                  </div>
               <button onClick={() => handleDelete(index)} ><FaRegTrashAlt /></button>
               </div>

            </>
          ))}
        </ul>
        <h3 style={{color:'#808080',margin:'5px',padding:'5px'}}>Completed</h3>
        <ul>
        {completedTasks.map((item, index) => (
            <>
            <div className='check'>
            <div className='checkmark' key={index}>

                  <IoIosCheckmarkCircle className='icon_color' onClick={() => completed(index)} />
                  <s style={{color: '#808080'}} key={index}>{item}</s>
                  </div>
          
                  <button onClick={() => handleDelete(index)} ><FaRegTrashAlt /></button>
            </div>
            </>
          ))} 
        </ul>
       </div>
      </div>
    </>
  )
}

export default Todo