import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import EventList from './components/EventList'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import { AppBar } from '@mui/material'
import React from 'react';
import AdminDashboard from './components/AdminDashboard'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import List from './components/List'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<EventList/>}></Route>
      <Route path='/user' element={<UserProfile/>}></Route>
      <Route path='/admin' element={<AdminDashboard/>}></Route>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/list/:eventID" element={<List />} />
    </Routes>
    </>
  )
}

export default App
