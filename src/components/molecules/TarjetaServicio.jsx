function TarjetaServicio({ nombre, precio, img, alt, onAgregar }) {
  return (
    <article className="card">
      {img ? <img src={img} alt={alt} /> : <div className="sin-imagen">Sin imagen</div>}
      <h4>{nombre}</h4>
      <p>${precio.toLocaleString('es-CL')}</p>
      <Boton texto="Añadir al Carrito" clase="btn-agregar" onClick={onAgregar} />
    </article>
  )
}

export default TarjetaServicio