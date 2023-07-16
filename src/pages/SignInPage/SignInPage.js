import React from "react"; 
import { useState } from "react";
import "./SignInPage.css";
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
    const [password, setPassword] = useState("");
    const [emailWarning, setEmailWarning]  = useState(false); 
    const [passWarning, setPassWarning] = useState(false); 

    const handleLogin = () => {
        if (!email) setEmailWarning(true); 
        if (!password) setPassWarning(true);
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
                showWarning={emailWarning}
            />
            <TextForm 
                setValue={setPassword}
                label="PASSWORD"
                type="password"
                showWarning={passWarning}
            />
            <Button 
                onClick={handleLogin}
                text="Sign in"
            />
        </div>
    );
}