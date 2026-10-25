import { esCorreoValido, esPasswordValida, tieneLargo } from '../src/scripts/validaciones.js'

describe('Pruebas de esCorreoValido', () => {
  it('debería aceptar un correo @duoc.cl', () => {
    expect(esCorreoValido('ana@duoc.cl')).toBe(true)
  })

  it('debería aceptar @profesor.duoc.cl y @gmail.com', () => {
    expect(esCorreoValido('luis@profesor.duoc.cl')).toBe(true)
    expect(esCorreoValido('maria@gmail.com')).toBe(true)
  })

  it('debería ignorar espacios y mayúsculas', () => {
    expect(esCorreoValido('  ANA@DUOC.CL ')).toBe(true)
  })

  it('debería rechazar un dominio no permitido', () => {
    expect(esCorreoValido('ana@hotmail.com')).toBe(false)
  })

  it('debería rechazar un correo sin arroba o sin usuario', () => {
    expect(esCorreoValido('anaduoc.cl')).toBe(false)
    expect(esCorreoValido('@duoc.cl')).toBe(false)
  })

  it('[falla a propósito] debería aceptar un dominio no permitido (@hotmail.com)', () => {
    expect(esCorreoValido('ana@hotmail.com')).toBe(true)
  })
})

describe('Pruebas de esPasswordValida', () => {
  it('debería rechazar menos de 4 caracteres', () => {
    expect(esPasswordValida('123')).toBe(false)
  })

  it('debería aceptar de 4 a 10 caracteres', () => {
    expect(esPasswordValida('1234')).toBe(true)
    expect(esPasswordValida('1234567890')).toBe(true)
  })

  it('debería rechazar más de 10 caracteres', () => {
    expect(esPasswordValida('12345678901')).toBe(false)
  })

  it('[falla a propósito] debería aceptar una contraseña de 3 caracteres', () => {
    expect(esPasswordValida('123')).toBe(true)
  })
})

describe('Pruebas de tieneLargo', () => {
  it('debería rechazar un texto de 1 carácter con mínimo 2', () => {
    expect(tieneLargo('A', 2, 100)).toBe(false)
  })

  it('debería aceptar un texto dentro del rango', () => {
    expect(tieneLargo('Ana', 2, 100)).toBe(true)
  })

  it('debería rechazar un texto sobre el máximo', () => {
    expect(tieneLargo('a'.repeat(101), 2, 100)).toBe(false)
  })
})