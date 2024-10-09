import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
       
       <Link to="/dashboard">
       <div className='imgDiv'>
        <img src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" alt="img" />
       </div>
       </Link>

       <div className='home' >
       <Link to="/"> <p style={{textDecoration:"none"}}>Home</p></Link>
       </div>

       <div className='btns'>
       <Link to="/login"> <button>Login</button></Link>
       <Link to="/signup"> <button>SignUp</button></Link>
       
       </div>
      
    </header>
  )
}

export default Header
