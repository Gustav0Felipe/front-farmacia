import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import CardCategoria from './components/cardcategoria/CardCategoria'
import FormTema from './components/formcategoria/FormCategoria'
import DeletarTema from './components/deletarcategoria/DeletarCategoria'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categoria/:id" element={<CardCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormTema />} />
          <Route path="/deletarcategoria/:id" element={<DeletarTema />} />
        </Routes>

      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App