import React from "react"; 
import { useState } from "react";
import "../SignInUp.css";
import { TextForm, Button } from "../../components";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const SignUpPage = ({app}) => {
    const [email, setEmail] = useState(""); 
    const [emailWarning, setEmailWarning] = useState(""); 

    const [password, setPassword] = useState("");
    const [passWarning, setPassWarning] = useState("");

    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [confirmWarning, setConfirmWarning] = useState("");

    const handleSignUp = () => {
        setEmailWarning(!email ? "default" : "");
        setPassWarning(!password ? "default" : "");
        setConfirmWarning(!confirmPassword ? "default" : "");
        if (password !== confirmPassword) {
            setPassWarning("Passwords do not match");
            setConfirmWarning("Passwords do not match");
        }
    }

    return (
        <div className="sign-in-up-panel panel-border box-shadow">
            <TextForm
                setValue={setEmail}
                label="EMAIL"
                type="text"
                warning={emailWarning}
            />
            <TextForm
                setValue={setPassword}
                label="PASSWORD"
                type="password"
                warning={passWarning}
            />
            <TextForm
                setValue={setConfirmPassword}
                label="CONFIRM PASSWORD"
                type="password"
                warning={confirmWarning}
            />
            <Button
                onClick={handleSignUp}
                text="Sign up"
            />
        </div>
    );
}