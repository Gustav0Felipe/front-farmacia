import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App