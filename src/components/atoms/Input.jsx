function Input({ tipo = 'text', id, valor, onChange }) {
  return <input type={tipo} id={id} value={valor} onChange={onChange} />
}

export default Input