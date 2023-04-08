import React,{useContext} from 'react'
import Nav from './Nav'
import ContextData from './ContextAPI';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'


function Student() {
    const dataContext = useContext(ContextData);
    console.log(dataContext);
    const navi = useNavigate();
  return (
    <>
        <Nav/>
        <div className="center">
    
        <button onClick={()=>{navi('/newStudent')}} className='rightside'>Add new Student</button>
                <table border='1px' className='table'>
                    <thead>
                     <tr>
                        {/* for SEO we use thead */}
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    </thead>
                    {dataContext.entries.map((item,index)=>{
            return(
                    <tbody key={index}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.batch}</td>
                            <td><Link to='/updateStudent' state={{data:index}}>Edit</Link></td>
                        </tr>
                    </tbody>

                            )
                        })}                      
                </table> 
            </div>      
        </>
  )
}

export default Student