import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import './Options.css'
import SearchBar from '../components/SearchBar'

const Options = () => {
  return (
    <div className="option">
      <Navbar />
      <Home />
      <SearchBar/>
    </div>
  )
}

export default Options
