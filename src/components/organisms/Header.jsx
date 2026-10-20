function Header({ setPagina }) {
  return (
    <header>
      <h1>Restaurasiempre</h1>
      <nav>
        <ul>
          <li><a href="#" onClick={() => setPagina('inicio')}>Inicio</a></li>
          <li><a href="#" onClick={() => setPagina('contacto')}>Contacto</a></li>
          <li><a href="#" onClick={() => setPagina('login')}>Iniciar Sesión</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header