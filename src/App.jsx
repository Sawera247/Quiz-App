import React from 'react'
import Options from './page/Options'
import Quiz from './page/Quiz'
import UserDetail from './page/UserDetail'
import Home from './page/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetail" element={<UserDetail />} />
        <Route path="/options" element={<Options />} />
        <Route path="/quiz/:category" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App