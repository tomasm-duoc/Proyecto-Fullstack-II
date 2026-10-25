import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario.jsx'
import Input from '../atoms/Input.jsx'
import Textarea from '../atoms/Textarea.jsx'
import Boton from '../atoms/Boton.jsx'
import { dominiosPermitidos, esCorreoValido, tieneLargo } from '../../scripts/validaciones.js'

function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [comentario, setComentario] = useState('')
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  function enviar(e) {
    e.preventDefault()
    setError('')
    setExito('')

    if (!tieneLargo(nombre, 2, 100)) {
      setError('El usuario debe tener entre 2 y 100 caracteres')
      return
    }

    if (!esCorreoValido(correo)) {
      const lista = dominiosPermitidos.map((d) => '@' + d).join(', ')
      setError('El correo debe terminar en: ' + lista)
      return
    }

    if (!tieneLargo(comentario, 2, 500)) {
      setError('El comentario debe tener entre 2 y 500 caracteres')
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