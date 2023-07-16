import React from "react"; 
import { useState } from "react";
import "../SignInUp.css";
import { TextForm, Button } from "../../components";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * Component for the sign in page. 
 * 
 * @param app - A reference to the Firebase app. 
 */
export const SignInPage = ({app}) => {
    const [email, setEmail] = useState("");
    const [emailWarning, setEmailWarning]  = useState("");

    const [password, setPassword] = useState("");
    const [passWarning, setPassWarning] = useState(""); 

    const handleLogin = () => {
        if (!email) setEmailWarning("default"); 
        if (!password) setPassWarning("default");
        if (email && password) {
            console.log(`login ${email} ${password}`);
        }
    }

    return (
        <div 
            className="sign-in-up-panel panel-border box-shadow"
        >
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
            <Button 
                onClick={handleLogin}
                text="Sign in"
            />
        </div>
    );
}