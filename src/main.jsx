import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {PokeApp, PokeDetails} from './pages'
import './scss/index.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/pokemon/:id' element={ <PokeDetails/> } />
        <Route path='/' element={ <PokeApp /> } />
      </Routes>
    </Router>
  </React.StrictMode>
)
