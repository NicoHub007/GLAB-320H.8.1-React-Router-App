import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from 'react-router';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
)
