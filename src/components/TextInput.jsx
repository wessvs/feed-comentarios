export default function TextInput({label, id}) {
    return (
        <div style={{display: 'grid'}}>
            <label htmlFor={id}>{label}</label>
            <input type="email" name={id} id={id} />
        </div>
    )
}