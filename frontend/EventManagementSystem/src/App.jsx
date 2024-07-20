import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import EventList from './components/EventList'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import { AppBar } from '@mui/material'
import React from 'react';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<EventList/>}></Route>
      <Route path='/user' element={<UserProfile/>}></Route>
    </Routes>
    </>
  )
}

export default App
