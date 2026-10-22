import ListaServicios from '../organisms/ListaServicios.jsx'
import { servicios } from '../../scripts/servicios.js'

function Catalogo({ agregar }) {
  return (
    <>
      <h2>Catálogo de Servicios</h2>
      <br />
      <ListaServicios servicios={servicios} agregar={agregar} />
    </>
  )
}

export default Catalogo