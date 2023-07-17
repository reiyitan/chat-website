import { ChatPage, SignInPage, SignUpPage } from "../pages";
import "./App.css";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../env";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const App = () => {
    const [user, setUser] = useState(null);
    return (
        <SignUpPage auth={auth} user={user} setUser={setUser} />
    );
}
