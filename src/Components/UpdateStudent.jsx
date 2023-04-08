import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContextData from './ContextAPI';
import '../App.css'
import Nav from './Nav';

function UpdateStudent() {
  const dataContext =useContext(ContextData);
  const index=useLocation().state.data;
  const navi =useNavigate()
  console.log(index);
  console.log(dataContext);

  const updateData={
    name: dataContext.entries[index].name,
    age: dataContext.entries[index].age,
    course:dataContext.entries[index].course,
    batch:dataContext.entries[index].batch
  }
  const handleChange = (e)=>{
    updateData[e.target.name] =e.target.value
  }

  const handleSubmit=(e)=>{
    dataContext.entries[index]=updateData
    // navi(-1)
    navi('/student')
    console.log(dataContext);
  }

  const handleCancel=()=>{
    navi('/student')
  }

  return (
  <>
  <Nav/>
    <div>
      <input type='text' placeholder={dataContext.entries[index].name} name='name' onChange={handleChange} className='top1'/>
      <input type='number' placeholder={dataContext.entries[index].age} name='age' onChange={handleChange}className='top2'/>
      <input  type='text' placeholder={dataContext.entries[index].course} name='course' onChange={handleChange} className='bottom1'/>
      <input type='text' placeholder={dataContext.entries[index].batch} name='batch' onChange={handleChange} className='bottom2'/>
      <button onClick={handleCancel} className='update' >Cancel </button>
      <button onClick={handleSubmit} className='cancel' >Update </button>
    </div>
  </>
  )
}

export default UpdateStudent