export const dominiosPermitidos = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com']

export function esCorreoValido(correo) {
  const limpio = correo.trim().toLowerCase()
  const partes = limpio.split('@')
  return (
    limpio.length <= 100 &&
    partes.length === 2 &&
    partes[0] !== '' &&
    dominiosPermitidos.includes(partes[1])
  )
}

export function esPasswordValida(pass) {
  return pass.length >= 4 && pass.length <= 10
}

export function tieneLargo(texto, minimo, maximo) {
  const largo = texto.trim().length
  return largo >= minimo && largo <= maximo
}