import TarjetaServicio from '../molecules/TarjetaServicio.jsx'

function Inicio() {
  const servicios = [
    { nombre: 'Cambio de Pantalla', precio: 35000, img: '/img/pantalla-rota.jpeg', alt: 'Pantalla' },
    { nombre: 'Mantenimiento Preventivo', precio: 20000, img: '/img/pc-sucio.jpeg', alt: 'Limpieza' },
  ]

  function agregar(servicio) {
    // aquí va la lógica de carrito.js
  }

  return (
    <>
      <section className="hero">
        <h2>Mantenimiento y Reparación de Electrónica</h2>
        <p>Servicio técnico para smartphones, laptops y consolas.</p>
      </section>

      <h3>Servicios Destacados</h3>
      <br />

      <section className="grid">
        {servicios.map((s) => (
          <TarjetaServicio
            key={s.nombre}
            nombre={s.nombre}
            precio={s.precio}
            img={s.img}
            alt={s.alt}
            onAgregar={() => agregar(s)}
          />
        ))}
      </section>
    </>
  )
}

export default Inicio