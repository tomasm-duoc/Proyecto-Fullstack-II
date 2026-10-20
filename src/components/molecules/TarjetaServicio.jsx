import Boton from '../atoms/Boton.jsx'

function TarjetaServicio({ nombre, precio, img, alt, onAgregar }) {
  return (
    <article className="card">
      <img src={img} alt={alt} />
      <h4>{nombre}</h4>
      <p>${precio.toLocaleString('es-CL')}</p>
      <Boton texto="Añadir al Carrito" clase="btn-agregar" onClick={onAgregar} />
    </article>
  )
}

export default TarjetaServicio