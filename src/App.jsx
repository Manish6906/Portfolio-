import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Bottom from './Component/Bottom'
import FirstSection from './Component/FirstSection'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import Resume from './Component/Resume';
import Work from './Component/Work'
import Contact from './Component/Contact'





function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar />
      <div className='sm:flex bg-gray-300 lg:pl-9 lg:pr-9'>
        <Sidebar />
        <div className='flex flex-col'>
          <div className='flex justify-end'>
            <FirstSection />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Bottom />
    </BrowserRouter>

    </>
  )
}

export default App
