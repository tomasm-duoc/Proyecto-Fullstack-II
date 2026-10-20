import { useState } from 'react'
import Header from './components/organisms/Header.jsx'
import Footer from './components/organisms/Footer.jsx'
import Inicio from './components/pages/Inicio.jsx'
import Login from './components/pages/Login.jsx'
import Contacto from './components/pages/Contacto.jsx'

function App() {
  const [pagina, setPagina] = useState('inicio')

  return (
    <>
      <Header setPagina={setPagina} />
      <main>
        {pagina === 'inicio' && <Inicio />}
        {pagina === 'contacto' && <Contacto />}
        {pagina === 'login' && <Login />}
      </main>
      <Footer />
    </>
  )
}

export default App