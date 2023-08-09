const TextInput = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div className="flex column label width-100">
            <label>{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input transition">
            </input>
        </div>
    );
}

export default TextInput;