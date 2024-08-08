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
import Cursor from './components/Cursor'
import AdminUsers from './components/AdminUsers'
import AddEvent from './components/AddEvent'
import EditEvent from './components/EditEvent'
import Home from './components/Home'
import EditUser from './components/EditUser'

function App() {
  return (
    <>
    <Cursor/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/EventList' element={<EventList/>}></Route>
      <Route path='/user' element={<UserProfile/>}></Route>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/user" element={<AdminUsers />} />
      <Route path="/addevent" element={<AddEvent />} />
      <Route path="/editevent/:eventID" element={<EditEvent />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/list/:eventID" element={<List />} />
      <Route path="/events/:eventID" element={<AdminDashboard />} />
      <Route path="/edit-event/:eventID" element={<EditEvent />} />
      <Route path="/edituser/:id" element={<EditUser />} />
    </Routes>
    </>
  )
}

export default App
