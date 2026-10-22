import { useState } from 'react'
import Header from './components/organisms/Header.jsx'
import Footer from './components/organisms/Footer.jsx'
import Inicio from './components/pages/Inicio.jsx'
import Login from './components/pages/Login.jsx'
import Contacto from './components/pages/Contacto.jsx'
import Carrito from './components/pages/Carrito.jsx'
import { agregarAlCarrito, quitarDelCarrito, contarProductos } from './scripts/carrito.js'

function App() {
  const [pagina, setPagina] = useState('inicio')
  const [carrito, setCarrito] = useState([])

  function agregar(servicio) {
    setCarrito(agregarAlCarrito(carrito, servicio))
  }

  function quitar(id) {
    setCarrito(quitarDelCarrito(carrito, id))
  }

  return (
    <>
      <Header setPagina={setPagina} cantidad={contarProductos(carrito)} />
      <main>
        {pagina === 'inicio' && <Inicio agregar={agregar} />}
        {pagina === 'contacto' && <Contacto />}
        {pagina === 'carrito' && <Carrito carrito={carrito} quitar={quitar} />}
        {pagina === 'login' && <Login />}
      </main>
      <Footer />
    </>
  )
}

export default App