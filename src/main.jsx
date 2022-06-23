import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {PokeApp, PokeDetails} from './pages'
import './scss/index.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={ <PokeApp /> } />
        <Route path='/pokemon/:id' element={ <PokeDetails/> } />
      </Routes>
    </Router>
  </React.StrictMode>
)
