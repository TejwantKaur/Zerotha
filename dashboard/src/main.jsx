import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Home from "./components/Home"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* path="/*" mtlb changes that could happen within the component, 
            pure page nu reload nhi kerna */}
        <Route path="/*" element={<Home/>}></Route> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
