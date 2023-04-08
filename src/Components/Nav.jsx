import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className="App">
        <div className='navstyle'>
            <Link to= '/' style={{ textDecoration: 'none',color: 'white' }}>Home</Link>
            <Link to= '/student' style={{ textDecoration: 'none',color: 'white' }}>Student</Link>
            <Link to= '/contactus' style={{ textDecoration: 'none',color: 'white' }}>Contact Us</Link>
        </div>
    </div>
  )
}

export default Nav