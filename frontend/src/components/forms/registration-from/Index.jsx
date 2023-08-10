import TextInput from "../../input fields/Index";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import InstagramLogo from "../../instagramLogo";

const Register = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        verify_password: ""
    })

    const handleDataChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async ()=>{
        if(data.name && data.username && data.email && data.password && data.password===data.verify_password){
            try{
                const response = await axios.post("http://127.0.0.1:8000/api/register", data)
                const message = response.data.message
                if (message==='User created successfully'){
                    localStorage.setItem("token", response.data.user.token)
                    navigate("/home")
                } else {
                    const register_btn = document.getElementById("register-btn")
                    register_btn.innerHTML = 'Failed'
                    register_btn.style.backgroundColor = 'rgb(255, 109, 109)'
                    setTimeout(() => { 
                        register_btn.innerHTML = 'Register' 
                        register_btn.style.backgroundColor = 'rgb(109, 160, 255)'
                    }, 3000)
                }
            }catch(e){
                console.log(e)
        }
        }
    
    }
    return ( 
        <div className="flex column width-30 center gap-5 form-container">
            <InstagramLogo/>
            <TextInput 
                name = {"name"}
                label={"Enter your name:"} 
                type={"text"} 
                value={data.name}
                placeholder={"Enter your name"}
                onChange={handleDataChange}
            />
            <TextInput 
                name = {"username"}
                label={"Enter your username:"} 
                type={"text"} 
                value={data.username}
                placeholder={"Enter your username"}
                onChange={handleDataChange}
            />
            <TextInput 
                name = {"email"}
                label={"Enter your email:"} 
                type={"email"} 
                value={data.email}
                placeholder={"Enter your email"}
                onChange={handleDataChange}
            />
            <TextInput 
                name = {"password"}
                label={"Enter your password:"} 
                type={"password"} 
                value={data.password}
                placeholder={"Enter your password"}
                onChange={handleDataChange}
            />
            <TextInput 
                name = {"verify_password"}
                label={"Verify your password:"} 
                type={"password"} 
                value={data.verify_password}
                placeholder={"Verify your password"}
                onChange={handleDataChange}
            />
            <button className="btn width-50 transition" id="register-btn" onClick={handleSubmit}>Register</button>
            <span>Have an account?</span>
            <Link to={("/")} className="color-light-blue no-deco">Log in</Link>
        </div>
    );
}

export default Register;