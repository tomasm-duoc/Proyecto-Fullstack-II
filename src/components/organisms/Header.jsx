function Header({ setPagina, cantidad }) {
  function ir(e, pagina) {
    e.preventDefault()
    setPagina(pagina)
  }

  return (
    <header>
      <h1>Restaurasiempre</h1>
      <nav>
        <ul>
          <li><a href="#" onClick={(e) => ir(e, 'inicio')}>Inicio</a></li>
          <li><a href="#" onClick={(e) => ir(e, 'catalogo')}>Catálogo</a></li>
          <li><a href="#" onClick={(e) => ir(e, 'contacto')}>Contacto</a></li>
          <li><a href="#" onClick={(e) => ir(e, 'carrito')}>Carrito ({cantidad})</a></li>
          <li><a href="#" onClick={(e) => ir(e, 'login')}>Iniciar Sesión</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header