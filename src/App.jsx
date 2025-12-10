import {HomePage} from './pages/HomePage'
import './App.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
)

export default App
