import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import EventList from './components/EventList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Event List</h1>
    <Routes>
      <Route path='/' element={<EventList/>}></Route>
    </Routes>
    </>
  )
}

export default App
