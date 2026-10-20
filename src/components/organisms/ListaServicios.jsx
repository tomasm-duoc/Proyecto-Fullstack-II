import TarjetaServicio from '../molecules/TarjetaServicio.jsx'

function ListaServicios() {
  const servicios = [
    { nombre: 'Cambio de Pantalla', precio: 35000, img: '/img/pantalla-rota.jpeg', alt: 'Pantalla' },
    { nombre: 'Mantenimiento Preventivo', precio: 20000, img: '/img/pc-sucio.jpeg', alt: 'Limpieza' },
  ]

  function agregar(servicio) {
    // aquí va la lógica de carrito.js
  }

  return (
    <section className="grid">
      {servicios.map((s) => (
        <TarjetaServicio key={s.nombre} {...s} onAgregar={() => agregar(s)} />
      ))}
    </section>
  )
}

export default ListaServicios