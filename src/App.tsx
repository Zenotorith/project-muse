import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navigations/Navbar'
import Contact from './components/Contact/Contact'
import Footer from './components/Navigations/Footer'

function App() {
  return (
    <div className='snap-y snap-mandatory h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
