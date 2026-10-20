function CampoFormulario({ etiqueta, id, children }) {
  return (
    <div className="form-grupo">
      <label htmlFor={id}>{etiqueta}</label>
      {children}
    </div>
  )
}

export default CampoFormulario