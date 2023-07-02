import { ChatPage, SignInPage, SignUpPage } from "../pages";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../env";

const app = initializeApp(firebaseConfig);

export const App = () => {
    return (
        <SignInPage />
    );
}
