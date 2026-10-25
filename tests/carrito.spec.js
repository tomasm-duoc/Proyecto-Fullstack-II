import {
  agregarAlCarrito,
  quitarDelCarrito,
  calcularTotal,
  contarProductos,
  formatearPrecio,
} from '../src/scripts/carrito.js'

describe('Pruebas del carrito', () => {
  const pantalla = { id: 1, nombre: 'Cambio de Pantalla', precio: 35000 }
  const mantenimiento = { id: 2, nombre: 'Mantenimiento Preventivo', precio: 20000 }

  it('debería agregar un servicio nuevo con cantidad 1', () => {
    const carrito = agregarAlCarrito([], pantalla)
    expect(carrito.length).toBe(1)
    expect(carrito[0].cantidad).toBe(1)
  })

  it('debería aumentar la cantidad si el servicio ya estaba', () => {
    let carrito = agregarAlCarrito([], pantalla)
    carrito = agregarAlCarrito(carrito, pantalla)
    expect(carrito.length).toBe(1)
    expect(carrito[0].cantidad).toBe(2)
  })

  it('debería calcular el total del carrito', () => {
    let carrito = agregarAlCarrito([], pantalla)
    carrito = agregarAlCarrito(carrito, pantalla)
    carrito = agregarAlCarrito(carrito, mantenimiento)
    expect(calcularTotal(carrito)).toBe(90000)
  })

  it('debería contar los productos', () => {
    let carrito = agregarAlCarrito([], pantalla)
    carrito = agregarAlCarrito(carrito, pantalla)
    expect(contarProductos(carrito)).toBe(2)
  })

  it('debería quitar un servicio del carrito', () => {
    const carrito = agregarAlCarrito([], pantalla)
    expect(quitarDelCarrito(carrito, 1).length).toBe(0)
  })

  it('debería dar formato de pesos chilenos', () => {
    expect(formatearPrecio(35000)).toBe('$35.000')
  })

  it('[falla a propósito] debería calcular un total incorrecto de 100000', () => {
    let carrito = agregarAlCarrito([], pantalla)
    carrito = agregarAlCarrito(carrito, pantalla)
    carrito = agregarAlCarrito(carrito, mantenimiento)
    expect(calcularTotal(carrito)).toBe(100000)
  })

  it('[falla a propósito] debería dar formato con coma en vez de punto', () => {
    expect(formatearPrecio(35000)).toBe('$35,000')
  })
})