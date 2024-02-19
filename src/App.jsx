import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Menu from './pages/Menu'
import MenuDetail from './pages/MenuDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/menu/:id" element={<MenuDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
