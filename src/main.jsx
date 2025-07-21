import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myapp from './Myapp.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import welcome from './welcome.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <Routes>
    <Route path="app" element={<app/>}></Route>
    <Route path='Myapp' element={<Myapp/>}></Route>
    <Route path='/' element={<welcome/>}></Route>
    
  </Routes>
  </BrowserRouter>
)
