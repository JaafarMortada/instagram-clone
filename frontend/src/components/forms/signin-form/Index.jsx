import TextInput from "../../input fields/Index";

const SignInForm = () => {
    return (
        <div className="flex column width-50 center gap-10">
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
            <button className="btn width-50 transition">Signin</button>
        </div>
    );
};

export default SignInForm;
