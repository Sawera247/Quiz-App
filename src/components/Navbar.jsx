import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const name = location.state?.name || 'Guest'

  const id = useMemo(() => Math.floor(1000 + Math.random() * 9000), [])

  return (
    <nav>
      <div className='navbar'>
        <img src="/default pfp.jpg" alt="pfp" className="pfp" />

        <div>
          <p className="name">{name}</p>
          <p className="id">ID-{id}</p>
        </div>

        <button><i className="fa-regular fa-gem"></i> 0</button>
      </div>
    </nav>
  )
}

export default Navbar
