import React from "react"; 
import { useState } from "react";
import "../SignInUp.css";
import { TextForm, Button } from "../../components";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * Component for the sign in page. 
 * 
 * @param auth - A reference to Firebase authentication service. 
 */
export const SignInPage = ({auth}) => {
    const [email, setEmail] = useState("");
    const [emailWarning, setEmailWarning]  = useState("");

    const [password, setPassword] = useState("");
    const [passWarning, setPassWarning] = useState(""); 

    const handleLogin = () => {
        setEmailWarning(!email ? "default" : "");
        setPassWarning(!password ? "default" : "");
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
                label="Email"
                type="text"
                warning={emailWarning}
            />
            <TextForm 
                setValue={setPassword}
                label="Password"
                type="password"
                warning={passWarning}
            />
            <Button 
                onClick={handleLogin}
                text="Sign In"
            />
        </div>
    );
}