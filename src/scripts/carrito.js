// Agrega un servicio al carrito. Si ya está, aumenta la cantidad.
export function agregarAlCarrito(carrito, servicio) {
  const existe = carrito.find((item) => item.id === servicio.id)

  if (existe) {
    return carrito.map((item) =>
      item.id === servicio.id ? { ...item, cantidad: item.cantidad + 1 } : item
    )
  }

  return [...carrito, { ...servicio, cantidad: 1 }]
}

// Quita un servicio del carrito por completo
export function quitarDelCarrito(carrito, id) {
  return carrito.filter((item) => item.id !== id)
}

// Subtotal de una línea (precio x cantidad)
export function calcularSubtotal(item) {
  return item.precio * item.cantidad
}

// Total de todo el carrito
export function calcularTotal(carrito) {
  return carrito.reduce((suma, item) => suma + calcularSubtotal(item), 0)
}

// Cantidad total de productos (para mostrar en el menú)
export function contarProductos(carrito) {
  return carrito.reduce((suma, item) => suma + item.cantidad, 0)
}

// Formato en pesos chilenos: 35000 -> $35.000
export function formatearPrecio(valor) {
  return '$' + valor.toLocaleString('es-CL')
} 
