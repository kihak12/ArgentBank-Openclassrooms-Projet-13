import {createBrowserRouter} from "react-router";
import {Home} from "./pages/Home/Home.jsx";
import {SignIn} from "./pages/SignIn/SignIn.jsx";
import {User} from "./pages/User/User.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/user/:id",
        element: <User />
    },
])
