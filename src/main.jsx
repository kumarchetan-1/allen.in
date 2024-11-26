
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { cors } from "cors"

createRoot(document.getElementById('root')).render(
    <App />
  ,
)
