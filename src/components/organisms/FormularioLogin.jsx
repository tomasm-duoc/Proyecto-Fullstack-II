import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario.jsx'
import Input from '../atoms/Input.jsx'
import Boton from '../atoms/Boton.jsx'
import { dominiosPermitidos, esCorreoValido, esPasswordValida } from '../../scripts/validaciones.js'

function FormularioLogin() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  function ingresar(e) {
    e.preventDefault()
    setError('')
    setExito('')

    if (!esCorreoValido(email)) {
      const lista = dominiosPermitidos.map((d) => '@' + d).join(', ')
      setError('El correo debe terminar en: ' + lista)
      return
    }

    if (!esPasswordValida(pass)) {
      setError('La contraseña debe tener entre 4 y 10 caracteres')
      return
    }

    setExito('Ingreso correcto')
    // aquí va el resto de la lógica de login.js
  }

  return (
    <div className="form-box">
      <h2>Iniciar Sesión</h2>
      <br />
      <form onSubmit={ingresar} noValidate>
        <CampoFormulario etiqueta="Correo Electrónico:" id="email-login">
          <Input tipo="email" id="email-login" valor={email} onChange={(e) => setEmail(e.target.value)} />
        </CampoFormulario>
        <CampoFormulario etiqueta="Contraseña:" id="pass-login">
          <Input tipo="password" id="pass-login" valor={pass} onChange={(e) => setPass(e.target.value)} />
        </CampoFormulario>
        <Boton texto="Ingresar" tipo="submit" />
      </form>

      {error && <p className="error">{error}</p>}
      {exito && <p className="exito">{exito}</p>}
    </div>
  )
}

export default FormularioLogin