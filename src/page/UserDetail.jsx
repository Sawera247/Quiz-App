import React, { useState } from 'react'
import './UserDetail.css'
import { useNavigate } from 'react-router-dom'

const UserDetail = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/options', { state: { name } }) // pass name to next page
  }

  return (
    <div className='div1'>
      <form className='form' onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder='Enter Your Name...'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input type="text" placeholder='Enter Your Email...' required />

        <label>Password:</label>
        <input type="text" placeholder='Enter Your Password...' required />

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserDetail
