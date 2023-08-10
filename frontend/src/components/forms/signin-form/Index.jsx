import TextInput from "../../input fields/Index";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import InstagramLogo from "../../instagramLogo";

const SignInForm = () => {
    localStorage.clear()
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleDataChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async ()=>{
        if(data.email && data.password){
            try{
                const response = await axios.post("http://127.0.0.1:8000/api/login", data)
                const message = response.data.message
                if (message==='logged in successfully'){
                    localStorage.setItem("token", response.data.user.token)
                    navigate("/home")
                    }
                }catch(e){
                    const login_btn = document.getElementById("login-btn")
                    login_btn.innerHTML = 'Failed'
                    login_btn.style.backgroundColor = 'rgb(255, 109, 109)'
                    setTimeout(() => { 
                        login_btn.innerHTML = 'Log in' 
                        login_btn.style.backgroundColor = 'rgb(109, 160, 255)'
                    }, 3000)
                }
            }
        }
    
    return (
        <div className="flex column width-30 center gap-10 form-container ">
            <InstagramLogo/>
            <TextInput
                name = {"email"}
                label={"Enter Your E-mail:"}
                type={"email"}
                value={data.email}
                placeholder={"Enter Your E-mail"}
                onChange={handleDataChange}
            />
            <TextInput
                name = {"password"}
                label={"Enter Your Password:"}
                type={"password"}
                value={data.password}
                placeholder={"Enter Your Password"}
                onChange={handleDataChange}
            />
            
            <button className="btn transition" id="login-btn" onClick={handleSubmit}>Log in</button>
            <span>Don't have an account? </span>
            <Link to={("/register")} className="color-light-blue no-deco">Sign up</Link>
        </div>
    );
};

export default SignInForm;
