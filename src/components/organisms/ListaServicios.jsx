import TarjetaServicio from '../molecules/TarjetaServicio.jsx'

function ListaServicios({ servicios, agregar }) {
  return (
    <section className="grid">
      {servicios.map((s) => (
        <TarjetaServicio
          key={s.id}
          nombre={s.nombre}
          precio={s.precio}
          img={s.img}
          alt={s.alt}
          onAgregar={() => agregar(s)}
        />
      ))}
    </section>
  )
}

export default ListaServicios