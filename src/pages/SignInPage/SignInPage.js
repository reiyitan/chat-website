import React from "react"; 
import { useState } from "react";
import "../SignInUp.css";
import { TextForm, Button } from "../../components";
import { Link, redirect } from "react-router-dom";
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
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return redirect("/chat");
            })
            .catch((error) => {
                const code = error.code;
                switch (code) {
                    case "auth/user-not-found":
                        setEmailWarning("No user found with that email");
                        break;
                    case "auth/invalid-email":
                        setEmailWarning("Enter a valid email");
                        break;
                    case "auth/wrong-password": 
                        setPassWarning("The password you entered is incorrect");
                        break;
                    default:
                        console.log(error);
                        break;
                }
            })
        }
    }

    return (
        <div 
            className="sign-in-up-panel panel-border box-shadow"
        >
            <h1 className="sign-in-up-greeting">Welcome back!</h1>
            <p>Sign in to continue.</p>
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
                text="Sign in"
            />
            <p>Don't have an account yet? <Link to="/signup" className="link">Create an account.</Link></p>
        </div>
    );
}