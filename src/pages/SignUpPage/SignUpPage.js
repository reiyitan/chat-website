import React from "react"; 
import { useState } from "react";
import "../SignInUp.css";
import { TextForm, Button } from "../../components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

/**
 * User sign up page.
 * 
 * @param auth - Reference to Firebase authentication service. 
 */
export const SignUpPage = ({auth}) => {
    const navigate = useNavigate();
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

        if ((email && password && confirmPassword) && password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const userInfo = userCredential.user;
                    navigate("/chat");
                })
                .catch((error) => {
                    const code = error.code; 
                    switch(code) {
                        case "auth/weak-password":
                            setPassWarning("Password must be at least 6 characters");
                            setConfirmWarning("Password must be at least 6 characters");
                            break;
                        case "auth/email-already-in-use":
                            setEmailWarning("Email already in use");
                            break;
                        case "auth/invalid-email":
                            setEmailWarning("Invalid email");
                            break;
                    }
                    console.log(error);
                })
        }
    }

    return (
        <div className="sign-in-up-panel panel-border box-shadow">
            <h1 className="sign-in-up-greeting">Welcome!</h1>
            <p>Create an account to get started.</p>
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
            <TextForm
                setValue={setConfirmPassword}
                label="Confirm password"
                type="password"
                warning={confirmWarning}
            />
            <Button
                onClick={handleSignUp}
                text="Sign up"
            />
            <p>Already have an account? <Link to="/signin" className="link">Sign in.</Link></p>
        </div>
    );
}