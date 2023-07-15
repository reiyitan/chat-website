import React from "react"; 
import { useState } from "react";
import "./SignInPage.css";
import "../SignInUp.css";
import { TextForm, Button, Warning } from "../../components";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * Component for the sign in page. 
 * 
 * @param app - A reference to the Firebase app. 
 */
export const SignInPage = ({app}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const handleLogin = () => {
        if (!email || !password) {
            setWarning("Please fill out all fields");
        } 
        else {
            setWarning("");
        }
        console.log(`login ${email} ${password}`);
    }

    return (
        <div 
            className="sign-in-up-panel panel-border box-shadow"
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
            <Warning 
                text={warning}
                position={{
                    bottom: "10%"
                }}
            />
        </div>
    );
}