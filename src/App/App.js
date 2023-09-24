import { ChatPage, SignInPage, SignUpPage } from "../pages";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { firebaseConfig } from "../env";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage auth={auth} />
    },
    {
        path: "/signin",
        element: <SignInPage auth={auth} />
    },
    {
        path: "/signup",
        element: <SignUpPage auth={auth} />
    },
    {
        path: "/chat",
        element: <ChatPage />
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
}
