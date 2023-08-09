import TextInput from "../../input fields/Index";
import { Link } from "react-router-dom";
const Register = () => {
    return ( 
        <div className="flex column width-30 center gap-5 form-container">
            <TextInput 
                label={"Enter your name:"} 
                type={"text"} 
                placeholder={"Enter your name"}
            />
            <TextInput 
                label={"Enter your username:"} 
                type={"text"} 
                placeholder={"Enter your username"}
            />
            <TextInput 
                label={"Enter your email:"} 
                type={"email"} 
                placeholder={"Enter your email"}
            />
            <TextInput 
                label={"Enter your password:"} 
                type={"password"} 
                placeholder={"Enter your password"}
            />
            <TextInput 
                label={"Verify your password:"} 
                type={"password"} 
                placeholder={"Verify your password"}
            />
            <Link to={("/")} className="color-light-blue no-deco">Log in</Link>
            <button className="btn width-50 transition">Register</button>
        </div>
    );
}

export default Register;