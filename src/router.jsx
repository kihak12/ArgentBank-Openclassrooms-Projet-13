import {createBrowserRouter} from "react-router";
import {Home} from "./pages/Home/Home.jsx";
import {SignIn} from "./pages/SignIn/SignIn.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
])
