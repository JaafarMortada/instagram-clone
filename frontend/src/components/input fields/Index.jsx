const TextInput = ({ label, name, type, placeholder, onChange }) => {
    return (
        <div className="flex column label width-50">
            <label>{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="input transition">
            </input>
        </div>
    );
}

export default TextInput;