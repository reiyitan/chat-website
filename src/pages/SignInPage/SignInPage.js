import React from "react"; 
import { useState } from "react";
import "./SignInPage.css";
import "../SignInUp.css";
import { TextForm, Button } from "../../components";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignInPage = ({app}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        console.log(`login ${email} ${password}`);
    }

    return (
        <div 
            className="sign-in-up-panel panel-border"
        >
            <TextForm 
                setValue={setEmail}
                label="EMAIL"
            />
            <TextForm 
                setValue={setPassword}
                label="PASSWORD"
            />
            <Button 
                onClick={handleLogin}
                text="Sign in"
            />
        </div>
    );
}