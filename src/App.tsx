import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navigations/Navbar'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
