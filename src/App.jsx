import React from 'react'
import UserDetail from './page/UserDetail'
import Home from './page/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDetail />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App