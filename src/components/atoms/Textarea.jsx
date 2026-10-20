function Textarea({ id, valor, onChange }) {
  return <textarea id={id} rows="4" value={valor} onChange={onChange} />
}

export default Textarea