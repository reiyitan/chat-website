import React from "react"; 
import { useState } from "react";
import "../SignInUp.css";
import { TextForm, Button } from "../../components";
import { createUserWithEmailAndPassword } from "firebase/auth";

/**
 * User sign up page.
 * 
 * @param auth - Reference to Firebase authentication service. 
 * @param user - State variable to hold user information.
 * @param setUser - Callback function passed from App.js to update the user state variable. 
 */
export const SignUpPage = ({auth, user, setUser}) => {
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
                    setUser(userInfo);
                    console.log(user);
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
                    console.log(error.code);
                })
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