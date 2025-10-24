import React from 'react'
import './UserDetail.css'
import { Link, useNavigate } from 'react-router-dom'

const UserDetail = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/home");
    };

  return (
    <form className='form' onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder='Enter Your Name...'/>

        <label>Email:</label>
        <input type="text" placeholder='Enter Your Email...'/>

        <label>Password:</label>
        <input type="text" placeholder='Enter Your Password...'/>

        <button type="submit" className="submit">Submit</button>
    </form>
  )
}

export default UserDetail