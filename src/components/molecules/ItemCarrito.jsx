import Boton from '../atoms/Boton.jsx'
import { calcularSubtotal, formatearPrecio } from '../../scripts/carrito.js'

function ItemCarrito({ item, onQuitar }) {
  return (
    <div className="item-carrito">
      <div className="item-info">
        <h4>{item.nombre}</h4>
        <p>
          {formatearPrecio(item.precio)} x {item.cantidad}
        </p>
      </div>
      <div className="item-derecha">
        <strong>{formatearPrecio(calcularSubtotal(item))}</strong>
        <Boton texto="Quitar" clase="btn-quitar" onClick={onQuitar} />
      </div>
    </div>
  )
}

export default ItemCarrito
