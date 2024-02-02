import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react'
import Home from './pages/Home'
import { About } from './pages/about'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  )
}
