import ItemCarrito from '../molecules/ItemCarrito.jsx'
import { calcularTotal, formatearPrecio } from '../../scripts/carrito.js'

function ListaCarrito({ carrito, quitar }) {
  if (carrito.length === 0) {
    return (
      <div className="form-box">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
      </div>
    )
  }

  return (
    <div className="carrito-box">
      <h2>Carrito</h2>
      <br />

      {carrito.map((item) => (
        <ItemCarrito key={item.id} item={item} onQuitar={() => quitar(item.id)} />
      ))}

      <div className="carrito-total">
        <span>Total</span>
        <strong>{formatearPrecio(calcularTotal(carrito))}</strong>
      </div>
    </div>
  )
}

export default ListaCarrito
