import { ChatPage } from "../pages";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../env";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const App = () => {
    return (
        <ChatPage />
    );
}
