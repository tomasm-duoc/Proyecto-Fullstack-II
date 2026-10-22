import ListaServicios from '../organisms/ListaServicios.jsx'
import Boton from '../atoms/Boton.jsx'
import { servicios } from '../../scripts/servicios.js'

function Inicio({ agregar, setPagina }) {
  const destacados = servicios.filter((s) => s.destacado)

  return (
    <>
      <section className="hero">
        <h2>Mantenimiento y Reparación de Electrónica</h2>
        <p>Servicio técnico para smartphones, laptops y consolas.</p>
      </section>

      <h3>Servicios Destacados</h3>
      <br />

      <ListaServicios servicios={destacados} agregar={agregar} />

      <div className="centrado">
        <Boton texto="Ver catálogo completo" onClick={() => setPagina('catalogo')} />
      </div>
    </>
  )
}

export default Inicio