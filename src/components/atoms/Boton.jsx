function Boton({ texto, tipo = 'button', clase = 'btn', onClick }) {
  return (
    <button type={tipo} className={clase} onClick={onClick}>
      {texto}
    </button>
  )
}

export default Boton