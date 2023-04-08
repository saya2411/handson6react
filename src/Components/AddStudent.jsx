import React, { useContext } from 'react'
import ContextData from './ContextAPI'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import Nav from './Nav'

function AddStudent() {
  const data = useContext(ContextData)
  const nav=useNavigate();
  const newStu = {
    name: '',
    age: '',
    course:'',
    batch:'',
  }
  const handleChange=(e)=>{
    newStu[e.target.name]=[e.target.value]
  }

  const handleSubmit=()=>{
    data.entries.push(newStu);
    nav('/student');
    console.log(data);
  }
  return (
    <>
    <Nav/>
    <div className='centeragain'>
     
      <input type='text' placeholder='enter name' name='name' onChange={handleChange} className='top1' />
   
      <input type='number' placeholder='enter age' name='age' onChange={handleChange} className='top2'/>
      
      <input  type='text' placeholder='enter course' name='course' onChange={handleChange} className='bottom1'/>
      
      <input type='text' placeholder='enter batch' name='batch' onChange={handleChange} className='bottom2'/>
      <button onClick={handleSubmit} className='update'>Add New </button>
    </div>
    </>
  )
}

export default AddStudent