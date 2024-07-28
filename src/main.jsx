import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersonProvider } from './context/PersonContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonProvider>
    <Router>
      <App />
    </Router>
    </PersonProvider>
  </React.StrictMode>,
)
