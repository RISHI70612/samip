import {  Link} from 'react-router-dom'

import {useState}  from 'react';
import './styles.css'

function Dropdown() {

    const [isActive, setIsActive] =useState (false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>Choose One 
      <span className='hi'></span>
      </div>
    {isActive && (
      <div className="dropdown-content">
        <div className="dropdown-item"> <Link to="/about"> grammar </Link></div>
        <div className="dropdown-item"><Link to="/history"> history</Link></div>
        <div className="dropdown-item"><Link to="/english"> English</Link></div>
      </div>)}



    </div>
  )
}
export default Dropdown