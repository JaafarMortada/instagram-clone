import TextInput from "../../input fields/Index";

const Register = () => {
    return ( 
        <div className="flex column width-50 center gap-5">
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
            <button className="btn width-50 transition">Register</button>
        </div>
    );
}

export default Register;