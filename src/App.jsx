import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';

import { useState } from 'react'

import './App.css'
import Quiz from './pages/Quiz'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const[user,setUser]=useState("");
  const[score,setScore]=useState(0);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home"element={<Home user={user} setUser={setUser}/>}></Route>
        <Route path="/quiz"element={<Quiz setScore={setScore} user={user}/>}></Route>
        <Route path="/result"element={<Result user={user} score={score}/>}></Route>
        <Route path="*"element={<Navigate to="/home"/>}/>

        </Routes>
        </BrowserRouter>

)
}

export default App
