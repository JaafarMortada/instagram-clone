import TextInput from "../../input fields/Index";
import { Link } from "react-router-dom";

const SignInForm = () => {
    return (
        <div className="flex column width-30 center gap-10 form-container">
            <TextInput
                label={"Enter Your E-mail:"}
                type={"email"}
                placeholder={"Enter Your E-mail"}
            />
            <TextInput
                label={"Enter Your Password:"}
                type={"password"}
                placeholder={"Enter Your Password"}
            />
            <Link to={("/register")} className="color-light-blue no-deco">Sign up</Link>
            <button className="btn width-50 transition">Log in</button>
        </div>
    );
};

export default SignInForm;
