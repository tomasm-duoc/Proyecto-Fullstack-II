import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario.jsx'
import Input from '../atoms/Input.jsx'
import Textarea from '../atoms/Textarea.jsx'
import Boton from '../atoms/Boton.jsx'

function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [comentario, setComentario] = useState('')
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  // Usa la misma lista que en FormularioLogin
  const dominiosPermitidos = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com']

  function enviar(e) {
    e.preventDefault()
    setError('')
    setExito('')

    if (nombre.trim().length < 2) {
      setError('El usuario debe tener al menos 2 caracteres')
      return
    }

    const partes = correo.trim().toLowerCase().split('@')
    const usuario = partes[0]
    const dominio = partes[1]

    if (partes.length !== 2 || usuario === '' || !dominiosPermitidos.includes(dominio)) {
      const lista = dominiosPermitidos.map((d) => '@' + d).join(', ')
      setError('El correo debe terminar en: ' + lista)
      return
    }

    if (comentario.trim().length < 2) {
      setError('El comentario debe tener al menos 2 caracteres')
      return
    }

    setExito('Mensaje enviado')
    // aquí va el resto de la lógica de mensaje.js
  }

  return (
    <div className="form-box">
      <h2>Formulario de Contacto</h2>
      <br />
      <form onSubmit={enviar} noValidate>
        <CampoFormulario etiqueta="Usuario" id="nombre">
          <Input id="nombre" valor={nombre} onChange={(e) => setNombre(e.target.value)} />
        </CampoFormulario>
        <CampoFormulario etiqueta="Correo Electrónico" id="correo">
          <Input tipo="email" id="correo" valor={correo} onChange={(e) => setCorreo(e.target.value)} />
        </CampoFormulario>
        <CampoFormulario etiqueta="Comentario" id="comentario">
          <Textarea id="comentario" valor={comentario} onChange={(e) => setComentario(e.target.value)} />
        </CampoFormulario>
        <Boton texto="Enviar Mensaje" tipo="submit" />
      </form>

      {error && <p className="error">{error}</p>}
      {exito && <p className="exito">{exito}</p>}
    </div>
  )
}

export default FormularioContacto